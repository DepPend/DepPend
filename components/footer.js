export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Departemen Pendidikan.</p>
      <p>Himpunan Mahasiswa Fakultas Komputer</p>
      <p>Semua Hak Dilindungi.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'rgba(5, 56, 143)',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
    backdropFilter: 'blur(2px)',
    position: 'relative',
    bottom: 0,
    width: '100%',
    lineHeight: '1.6',
  },
};
