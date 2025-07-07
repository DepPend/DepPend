import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { addDoc, getDoc, updateDoc, doc, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import LayoutAdmin from '../../components/layoutadmin';

export default function FormAnggotaPage() {
  const router = useRouter();
  const { id } = router.query;
  const isEditMode = Boolean(id);

  const [form, setForm] = useState({
    photoURL: '',
    nama: '',
    nim: '',
    prodi: '',
    fakultas: '',
    departemen: '',
    jabatan: '',
    email: '',
    nohp: '',
    alamat: '',
    role: 'admin', // default
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!isEditMode) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const docRef = doc(collection(db, 'users'), id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setForm({
            ...data,
            role: 'admin', // tetap admin
          });
        } else {
          alert('❌ Data tidak ditemukan');
          router.push('/admin/users');
        }
      } catch (err) {
        console.error(err);
        alert('❌ Gagal mengambil data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    setUploading(true);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || 'Upload gagal');

      setForm((prev) => ({ ...prev, photoURL: result.url }));
      alert('✅ Foto berhasil diunggah');
    } catch (err) {
      console.error('❌ Upload gagal:', err);
      alert('❌ Gagal mengunggah file');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateDoc(doc(db, 'users', id), form);
        alert('✅ Data berhasil diperbarui');
      } else {
        await addDoc(collection(db, 'users'), form);
        alert('✅ Data berhasil ditambahkan');
      }
      router.push('/admin/users');
    } catch (err) {
      console.error(err);
      alert('❌ Gagal menyimpan data');
    }
  };

  if (loading) return <p style={{ padding: '2rem' }}>Memuat data...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{isEditMode ? 'Edit' : 'Tambah'} Data Anggota</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Upload Foto */}
        <div style={styles.left}>
          <img
            src={form.photoURL || '/default-user.png'}
            alt="Foto"
            style={styles.avatar}
          />
          <input type="file" accept="image/*" onChange={handleFile} />
          {uploading && <p>⏳ Mengunggah foto...</p>}
        </div>

        {/* Inputan Lainnya */}
        <input name="nama" placeholder="Nama" value={form.nama} onChange={handleChange} required style={styles.input} />
        <input name="nim" placeholder="NIM" value={form.nim} onChange={handleChange} required style={styles.input} />
        <input name="prodi" placeholder="Program Studi" value={form.prodi} onChange={handleChange} style={styles.input} />
        <input name="fakultas" placeholder="Fakultas" value={form.fakultas} onChange={handleChange} style={styles.input} />
        <input name="departemen" placeholder="Departemen" value={form.departemen} onChange={handleChange} style={styles.input} />

        {/* Jabatan Dropdown */}
        <select name="jabatan" value={form.jabatan} onChange={handleChange} style={styles.input}>
          <option value="">Pilih Jabatan</option>
          <option value="Koordinator Departemen">Koordinator Departemen</option>
          <option value="Sekretaris Departemen">Sekretaris Departemen</option>
          <option value="Staff Departemen">Staff Departemen</option>
        </select>

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={styles.input} />
        <input name="nohp" placeholder="Nomor HP" value={form.nohp} onChange={handleChange} style={styles.input} />
        <input name="alamat" placeholder="Alamat" value={form.alamat} onChange={handleChange} style={styles.input} />

        {/* Role Read-only */}
        <input name="role" placeholder="Role" value={form.role} readOnly style={{ ...styles.input, backgroundColor: '#f9f9f9', color: '#555' }} />

        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} style={styles.input} />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} style={styles.input} />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="button" onClick={() => router.back()} style={buttonStyle('#6c757d')}>
            Batal
          </button>
          <button type="submit" style={buttonStyle('#007bff')} disabled={uploading}>
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  avatar: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
};

const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});

FormAnggotaPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
