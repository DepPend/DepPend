// lib/auth.js

export const login = (user) => {
  const safeUser = {
    uid: user.uid || null,
    username: user.username || '',
    role: user.role || '',
    nama: user.nama || '',
    photoURL: user.photoURL || '',
  };
  localStorage.setItem('users', JSON.stringify(safeUser));
};

export const logout = () => {
  localStorage.removeItem('users');
};

export const getCurrentUser = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('users');
    return user ? JSON.parse(user) : null;
  }
  return null;
};
