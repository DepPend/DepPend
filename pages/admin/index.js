// pages/admin/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LayoutAdmin from '../../components/layoutadmin';
import { getCurrentUser } from '../../lib/auth'; // ✅ import auth

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || user.role !== 'admin') {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Memeriksa sesi admin...</p>;
  }

  return (
    <>
      <Head>
        <title>Dashboard Admin | HIMA F.KOM</title>
      </Head>
      <div>
        <h2>Selamat Datang, Admin!</h2>
        <p>Ini adalah halaman dashboard administrator.</p>
      </div>
    </>
  );
}

// ✅ Pasang layout admin
AdminDashboard.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
