import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head'; // ✅ import Head

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => (
    <>
      <Head>
        <title>HIMA F.KOM</title>
        <link rel="icon" href="../hima5.png" /> {/* ✅ pasang favicon */}
      </Head>
      <Header />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <main style={{ flex: 1 }}>{page}</main>
        <Footer />
      </div>
    </>
  ));

  return getLayout(<Component {...pageProps} />);
}
