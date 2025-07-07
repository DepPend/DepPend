// pages/admin/profile.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { getCurrentUser } from '../../lib/auth';
import LayoutAdmin from '../../components/layoutadmin';

export default function AdminProfile() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [file, setFile] = useState(null);
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = getCurrentUser();
      if (!user || user.role !== 'admin') return router.replace('/login');

      try {
        const q = query(collection(db, 'users'), where('username', '==', user.username));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const docSnap = snap.docs[0];
          setDocId(docSnap.id);
          const data = docSnap.data();
          setUserData(data);
          setForm({
            ...data,
            photoURL: data.photoURL || '',
          });
        } else {
          console.error('❌ Dokumen user tidak ditemukan');
        }
      } catch (err) {
        console.error('❌ Error saat fetch data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!docId) return alert('❌ Dokumen ID tidak tersedia');

    setSaving(true);
    try {
      let photoURL = form.photoURL;

      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Gagal upload foto: ${errText}`);
        }

        const result = await res.json();
        photoURL = result.url;
      }

      const updated = { ...form, photoURL };
      await updateDoc(doc(db, 'users', docId), updated);
      setUserData(updated);
      setForm(updated);
      alert('✅ Data berhasil diperbarui');
    } catch (err) {
      console.error('❌ Gagal memperbarui:', err);
      alert('❌ Gagal memperbarui data');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p style={{ padding: '2rem' }}>Memuat data...</p>;
  if (!userData) return <p style={{ padding: '2rem', color: 'red' }}>Data tidak ditemukan</p>;

  return (
    <>
      <Head><title>Profil Admin | HIMA F.KOM</title></Head>

      <div style={styles.container}>
        <div style={styles.leftIntro}>
          <h2 style={{ marginBottom: '0.5rem' }}>Halaman Profile</h2>
          <p>Ini adalah halaman Profiel Administrator.</p>
        <br/>
            <div style={styles.card}>
          <h2 style={styles.heading}>Profil Admin</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.left}>
              <img
                src={form.photoURL || '/default-user.png'}
                alt="Foto"
                style={styles.avatar}
              />
              <input type="file" accept="image/*" onChange={handleFile} />
            </div>

            <div style={styles.right}>
              {['nama', 'nim', 'prodi' , 'fakultas', 'departemen','jabatan', 'username', 'password', 'email', 'nohp', 'alamat', 'role'].map((field) => (
                <div key={field} style={styles.inputGroup}>
                  <label style={styles.label}>{field.toUpperCase()}</label>
                  <input
                    type="text"
                    name={field}
                    value={form[field] || ''}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
              ))}
              <button type="submit" style={styles.button} disabled={saving}>
                {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </form>
        </div>
      </div>
              </div>
    </>
  );
}

AdminProfile.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

const styles = {
  container: {
    padding: '1rem 1.5rem',
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    boxSizing: 'border-box',
  },
  leftIntro: {
    flex: '1 1 250px',
    minWidth: '200px',
  },
  card: {
    flex: '3 1 600px',
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '1.6rem',
    marginBottom: '1rem',
    color: '#1e3c72',
    borderBottom: '1px solid #ccc',
    paddingBottom: '0.5rem',
  },
  form: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  left: {
    flex: '1 1 200px',
    textAlign: 'center',
  },
  avatar: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
    marginBottom: '0.5rem',
  },
  right: {
    flex: '2 1 400px',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1e3c72',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
};
