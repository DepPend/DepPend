// pages/admin/index.js
import Head from 'next/head';
import LayoutAdmin from '../../components/layoutadmin';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Dashboard Admin | HIMA F.KOM</title>
      </Head>
      <div>
        <h2>Sel</h2>
        <p>Ini adalah halaman dashboard administrator.</p>
      </div>
    </>
  );
}

// Override layout
AdminDashboard.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
