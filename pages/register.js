import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.push('/login');
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <>
      <Head>
        <title>Register | HIMA F.KOM</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>404</h1>
          <p style={styles.message}>Halaman ini masih dalam tahap pengembangan.</p>
          <p style={styles.subMessage}>
            Anda akan diarahkan ke halaman login dalam <strong>{countdown}</strong> detik...
          </p>
          <br/>
            <a href="/login" style={styles.link}>
            Kembali
          </a>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: 'url("/hima4.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(6px)',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '4rem',
    color: '#dc3545',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '0.5rem',
  },
  subMessage: {
    fontSize: '0.95rem',
    color: '#444',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#1e3c72',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
