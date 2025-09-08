import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024); // tablet & hp jadi mobile
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <header style={styles.header}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src="/hima5.png" alt="Logo" style={styles.logo} />
          <span style={styles.siteTitle}>Departemen Pendidikan</span>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div style={styles.desktopMenu}>
            <nav>
              <ul style={styles.navList}>
                <li><a href="/" style={styles.navLink}>Home</a></li>
                <li><a href="/about" style={styles.navLink}>About</a></li>
                <li><a href="/proker" style={styles.navLink}>Program Kerja</a></li>
                <li><a href="/agenda" style={styles.navLink}>Agenda Harian</a></li>
                <li><a href="/galery" style={styles.navLink}>Galery</a></li>
                <li><a href="/bulletin" style={styles.navLink}>Bulletin</a></li>
                <li><a href="/contact" style={styles.navLink}>Contact</a></li>
              </ul>
            </nav>
            <a href="/login">
              <button style={styles.loginButton}>Login</button>
            </a>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            style={styles.hamburgerButton}
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        )}
      </header>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <div
          style={{
            ...styles.sidebar,
            right: isOpen ? 0 : '-100%',
          }}
        >
          <button onClick={() => setIsOpen(false)} style={styles.closeButton}>×</button>
          <nav style={{ marginTop: '2rem', width: '100%' }}>
            <ul style={styles.sidebarNavList}>
              <li><a href="/" style={styles.sidebarNavLink}>Home</a></li>
              <li><a href="/about" style={styles.sidebarNavLink}>About</a></li>
              <li><a href="/proker" style={styles.sidebarNavLink}>Program Kerja</a></li>
              <li><a href="/agenda" style={styles.sidebarNavLink}>Agenda Harian</a></li>
              <li><a href="/galery" style={styles.sidebarNavLink}>Galery</a></li>
              <li><a href="/bulletin" style={styles.sidebarNavLink}>Bulletin</a></li>
              <li><a href="/contact" style={styles.sidebarNavLink}>Contact</a></li>
              <li>
                <a href="/login">
                  <button style={styles.sidebarLoginButton}>Login</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'rgba(5, 56, 143, 0.95)',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
    width: '100%',
    maxWidth: '1400px', // biar di laptop/monitor besar tetap rapi
    margin: '0 auto',   // center header di layar besar
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0,
  },
  logo: {
    height: '40px',
    width: '40px',
    objectFit: 'contain',
  },
  siteTitle: {
    fontWeight: 600,
    fontSize: '1.2rem',
    flexShrink: 0,
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap', // biar gak overflow kalau layar kecil
  },
  navList: {
    display: 'flex',
    flexWrap: 'wrap', // responsif
    listStyle: 'none',
    gap: '1.2rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    whiteSpace: 'nowrap',
  },
  loginButton: {
    backgroundColor: 'white',
    color: 'rgb(5, 56, 143)',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.9rem',
    flexShrink: 0,
  },
  hamburgerButton: {
    background: 'none',
    color: 'white',
    fontSize: '2rem',
    border: 'none',
    cursor: 'pointer',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    right: '-100%',
    width: '80%',
    maxWidth: '280px',
    height: '100vh',
    backgroundColor: 'rgba(5, 56, 143, 0.95)',
    color: 'white',
    padding: '2rem 1.5rem',
    transition: 'right 0.3s ease-in-out',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
  },
  closeButton: {
    background: 'none',
    color: 'white',
    fontSize: '2rem',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
  sidebarNavList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
  },
  sidebarNavLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.05rem',
  },
  sidebarLoginButton: {
    marginTop: '2rem',
    backgroundColor: 'white',
    color: 'rgb(5, 56, 143)',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    width: '100%',
  },
};
