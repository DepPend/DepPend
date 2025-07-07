import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { getCurrentUser } from '../../lib/auth';
import LayoutAdmin from '../../components/layoutadmin';

export default function PendidikanPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getCurrentUser();
      if (!user || user.role !== 'admin') return router.replace('/login');

      try {
        const snapshot = await getDocs(collection(db, 'users'));
        const list = snapshot.docs.map((doc, index) => ({
          id: doc.id,
          no: index + 1,
          ...doc.data(),
        }));
        setData(list);
      } catch (err) {
        console.error('❌ Gagal memuat data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Yakin ingin menghapus data ini?');
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, 'users', id));
      setData((prev) => prev.filter((item) => item.id !== id));
      alert('✅ Data berhasil dihapus');
    } catch (err) {
      console.error('❌ Gagal menghapus data:', err);
      alert('❌ Gagal menghapus data');
    }
  };

  return (
    <>
      <Head>
        <title>Data Semua Pengguna | HIMA F.KOM</title>
      </Head>

      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h2>Data Seluruh Pengguna</h2>
            <p>Menampilkan semua data pengguna yang terdaftar di sistem.</p>
          </div>
        <button style={styles.addButton} onClick={() => router.push('/admin/tambah-user')}>
        + Tambah Data
        </button>
        </div>

        <div style={styles.card}>
          {loading ? (
            <p>Memuat data...</p>
          ) : isMobile ? (
            <div>
              {data.map((item, index) => (
                <div key={item.id} style={styles.mobileCard}>
                    <div style={styles.mobileImageWrapper}>
                    <img
                        src={item.photoURL || '/default-profile.png'}
                        alt="Foto"
                        style={styles.mobileImage}
                    />
                    </div>
                  <div style={styles.mobileInfo}>
                    <p><strong>Nama:</strong> {item.nama}</p>
                    <p><strong>NIM:</strong> {item.nim}</p>
                    <p><strong>Prodi:</strong> {item.prodi}</p>
                    <p><strong>Fakultas:</strong> {item.fakultas}</p>
                    <p><strong>Departemen:</strong> {item.departemen}</p>
                    <p><strong>Jabatan:</strong> {item.jabatan}</p>
                    <p><strong>No HP:</strong> {item.nohp}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Alamat:</strong> {item.alamat}</p>
                    <p><strong>Role:</strong> {item.role}</p>
                    <div style={{ marginTop: '0.5rem' }}>
                      <button
                        onClick={() => router.push(`/admin/tambah-user?id=${item.id}`)}
                        style={styles.editBtn}
                        >
                        Edit
                        </button>
                      <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn}>Hapus</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    {['No', 'Poto', 'Nama', 'NIM', 'Program Studi', 'Fakultas', 'Departemen', 'Jabatan', 'No HP', 'Email', 'Alamat', 'Role', 'Aksi'].map((title, idx) => (
                      <th key={idx} style={styles.th}>{title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan="13" style={{ textAlign: 'center', padding: '1rem' }}>Tidak ada data</td>
                    </tr>
                  ) : (
                    data.map((item, index) => (
                      <tr key={item.id}>
                        <td style={styles.td}>{index + 1}</td>
                        <td style={styles.td}>
                        <img
                            src={item.photoURL || '/default-profile.png'}
                            alt="Foto"
                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        </td>
                        <td style={styles.td}>{item.nama}</td>
                        <td style={styles.td}>{item.nim}</td>
                        <td style={styles.td}>{item.prodi}</td>
                        <td style={styles.td}>{item.fakultas}</td>
                        <td style={styles.td}>{item.departemen}</td>
                        <td style={styles.td}>{item.jabatan}</td>
                        <td style={styles.td}>{item.nohp}</td>
                        <td style={styles.td}>{item.email}</td>
                        <td style={styles.td}>{item.alamat}</td>
                        <td style={styles.td}>{item.role}</td>
                        <td style={styles.td}>
                          <button onClick={() => router.push(`/admin/tambah-user?id=${item.id}`)} style={styles.editBtn}>Edit</button>
                          <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn}>Hapus</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

PendidikanPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

const styles = {
  container: { padding: '1.5rem' },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  addButton: {
    backgroundColor: '#1e3c72',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    padding: '1rem',
  },
  tableWrapper: { width: '100%' },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
    tableLayout: 'fixed',
  },
  th: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '0.75rem',
    border: '1px solid #ddd',
    wordBreak: 'break-word',
  },
  td: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    wordBreak: 'break-word',
  },
  editBtn: {
    backgroundColor: '#ffc107',
    border: 'none',
    color: '#000',
    padding: '0.3rem 0.6rem',
    marginRight: '0.3rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    border: 'none',
    color: '#fff',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  mobileCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
  mobileImageWrapper: {
    flexShrink: 0,
  },
  mobileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '6px',
    objectFit: 'cover',
    border: '1px solid #ccc',
  },
  mobileInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
};
