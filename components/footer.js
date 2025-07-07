export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Departemen Pendidikan. Semua Hak Dilindungi.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'rgba(5, 56, 143)', // hitam transparan
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto', // dorong ke bawah jika pakai flex wrapper
    backdropFilter: 'blur(2px)', // optional efek blur
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
};
