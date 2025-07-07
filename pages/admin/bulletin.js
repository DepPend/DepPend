// import tetap sama seperti sebelumnya
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { getCurrentUser } from '../../lib/auth';
import LayoutAdmin from '../../components/layoutadmin';

export default function BulletinPage() {
  const router = useRouter();
  const [bulletins, setBulletins] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const fetchBulletins = async () => {
    const snapshot = await getDocs(collection(db, 'bulletin'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setBulletins(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Yakin ingin menghapus buletin ini?');
    if (confirmDelete) {
      await deleteDoc(doc(db, 'bulletin', id));
      fetchBulletins();
    }
  };

  const checkMobile = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    const unsubscribe = getCurrentUser((user) => {
      if (!user) router.push('/login');
    });

    fetchBulletins();
    checkMobile();
    window.addEventListener('resize', checkMobile);
return () => {
  window.removeEventListener('resize', checkMobile);
  // Jika tidak ada listener lain, hapus atau komentar baris ini
  // unsubscribe();
};

  }, []);

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
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '0.875rem',
      minWidth: '900px',
    },
    th: {
      backgroundColor: '#f2f2f2',
      fontWeight: 'bold',
      textAlign: 'left',
      padding: '0.5rem',
      border: '1px solid #ddd',
      whiteSpace: 'nowrap',
    },
    td: {
      padding: '0.5rem',
      border: '1px solid #ddd',
      verticalAlign: 'top',
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
      fontSize: '0.75rem',
    },
    deleteBtn: {
      backgroundColor: '#dc3545',
      border: 'none',
      color: '#fff',
      padding: '0.3rem 0.6rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.75rem',
    },
    mobileCard: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#f9f9f9',
    },
    mobileImage: {
      width: '100%',
      maxHeight: '150px',
      objectFit: 'cover',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    
  };

  return (
    <LayoutAdmin>
      <Head>
        <title>Data Bulletin</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>📋 Data Buletin</h1>
          <button style={styles.addButton} onClick={() => router.push('/admin/tambahbuletin')}>
            + Tambah Buletin
          </button>
        </div>
        <div style={styles.card}>
          {isMobile ? (
            bulletins.map((item) => (
              <div key={item.id} style={styles.mobileCard}>
                <img src={item.thumbnail || item.imageURLs?.[0]} alt={item.title} style={styles.mobileImage} />
                <div><strong>Judul:</strong> {item.title}</div>
                <div><strong>Penulis:</strong> {item.author}</div>
                <div><strong>Kategori:</strong> {item.category}</div>
                <div><strong>Konten:</strong> {item.content}</div>
                <div><strong>Referensi:</strong> {item.reference}</div>
                <div><strong>Tag:</strong> {Array.isArray(item.tags) ? item.tags.join(', ') : item.tags}</div>
                <div><strong>Dibuat:</strong> {item.createdAt?.toDate?.().toLocaleString() || ''}</div>
                <div>
                  <button
                    style={styles.editBtn}
                    onClick={() => router.push(`/admin/editbuletin?id=${item.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>No</th>
                  <th style={styles.th}>Thumbnail</th>
                  <th style={styles.th}>Judul</th>
                  <th style={styles.th}>Penulis</th>
                  <th style={styles.th}>Kategori</th>
                  <th style={styles.th}>Konten</th>
                  <th style={styles.th}>Referensi</th>
                  <th style={styles.th}>Tag</th>
                  <th style={styles.th}>Dibuat</th>
                  <th style={styles.th}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {bulletins.map((item, index) => (
                  <tr key={item.id}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>
                      <img
                        src={item.thumbnail || item.imageURLs?.[0]}
                        alt={item.title}
                        style={{ width: '70px', borderRadius: '4px', objectFit: 'cover' }}
                      />
                    </td>
                    <td style={styles.td}>{item.title}</td>
                    <td style={styles.td}>{item.author}</td>
                    <td style={styles.td}>{item.category}</td>
                    <td style={styles.td}>{item.content}</td>
                    <td style={styles.td}>{item.reference}</td>
                    <td style={styles.td}>
                      {Array.isArray(item.tags) ? item.tags.join(', ') : item.tags}
                    </td>
                    <td style={styles.td}>
                      {item.createdAt?.toDate?.().toLocaleString() || ''}
                    </td>
                    <td style={styles.td}>
                      <button
                        style={styles.editBtn}
                        onClick={() => router.push(`/admin/editbuletin?id=${item.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        style={styles.deleteBtn}
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </LayoutAdmin>
    
  );
}
// Gunakan layout custom di dalam komponen, bukan dari _app.js
BulletinPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
