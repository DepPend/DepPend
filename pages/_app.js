import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => (
    <>
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
