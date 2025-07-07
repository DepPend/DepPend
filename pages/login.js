'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { login, getCurrentUser } from '../lib/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    console.log("📦 Current user dari getCurrentUser():", user);

    if (user && user.role === 'admin') {
      router.replace('/admin');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const trimmedUsername = username.trim();
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', trimmedUsername));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const data = userDoc.data();

        if (data.password === password) {
          if (data.role !== 'admin') {
            setErrorMsg('❌ Akses hanya untuk admin.');
            return;
          }

          // Simpan session
          login({
            uid: userDoc.id,
            username: data.username || '',
            role: data.role || '',
            nama: data.nama || '',
            photoURL: data.photoURL || '',
          });

          router.replace('/admin');
        } else {
          setErrorMsg('🔒 Password salah.');
        }
      } else {
        setErrorMsg('❌ Username tidak ditemukan.');
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      setErrorMsg('Terjadi kesalahan saat login: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login Admin</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {errorMsg && <p style={styles.error}>{errorMsg}</p>}

        <p style={styles.linkText}>
          Belum punya akun?{' '}
          <a href="/register" style={styles.link}>
            Register di sini
          </a><br />
          <a href="/" style={styles.link}>
            Kembali
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: 'url("../hima4.JPG")',
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
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#1e3c72',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#1e3c72',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  error: {
    marginTop: '1rem',
    color: '#d93025',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    marginTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.95rem',
    color: '#333',
  },
  link: {
    color: '#1e3c72',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
