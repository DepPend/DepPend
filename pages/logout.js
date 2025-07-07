// pages/logout.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../lib/auth';

export default function LogoutPage() {
  const router = useRouter();
  const [message, setMessage] = useState('Mengakhiri sesi...');

  useEffect(() => {
    logout();
    setMessage('Terima kasih telah menggunakan sistem Departemen Pendidikan.');
    const timeout = setTimeout(() => {
      router.replace('/login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={styles.container}>
      <p style={styles.text}>{message}</p>
    </div>
  );
}

// ⛔️ Lewati layout global (_app.js)
LogoutPage.getLayout = (page) => page;

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8',
  },
  text: {
    fontSize: '1.2rem',
    color: '#1e3c72',
    textAlign: 'center',
    padding: '1rem',
  },
};
