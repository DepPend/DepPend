// pages/_app.js
import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => (
    <>
      <Head>
        <title>HIMA F.KOM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../hima5.PNG" />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          {page}
        </main>
        <Footer />
      </div>
    </>
  ));

  return getLayout(<Component {...pageProps} />);
}
