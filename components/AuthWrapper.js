// components/AuthWrapper.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../lib/auth';

export default function AuthWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Memeriksa login...</p>;
  }

  return <>{children}</>;
}
