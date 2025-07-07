import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <header style={styles.header}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src="../hima5.png" alt="Logo" style={styles.logo} />
          <span style={styles.siteTitle}>Departemen Pendidikan</span>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div style={styles.desktopMenu}>
            <nav>
              <ul style={styles.navList}>
                <li><a href="/" style={styles.navLink}>Home</a></li>
                <li><a href="/about" style={styles.navLink}>About</a></li>
                <li><a href="/proker" style={styles.NavLink}>Program Kerja</a></li>
                <li><a href="/agenda" style={styles.NavLink}>Agenda Harian</a></li>
                <li><a href="/galery" style={styles.NavLink}>Galery</a></li>
                <li><a href="/bulletin" style={styles.navLink}>Bulletin</a></li>
                <li><a href="/contact" style={styles.navLink}>Contact</a></li>
              </ul>
            </nav>
            <a href="/login"><button href="/login" style={styles.loginButton}>Login</button></a>
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

      {/* Sidebar (Mobile Only) */}
      {isMobile && (
        <div
          style={{
            ...styles.sidebar,
            right: isOpen ? 0 : '-250px',
          }}
        >
          <button onClick={() => setIsOpen(false)} style={styles.closeButton}>×</button>
          <nav style={{ marginTop: '3rem' }}>
            <ul style={styles.sidebarNavList}>
              <li><a href="/" style={styles.sidebarNavLink}>Home</a></li>
              <li><a href="/about" style={styles.sidebarNavLink}>About</a></li>
              <li><a href="/proker" style={styles.sidebarNavLink}>Program Kerja</a></li>
              <li><a href="/agenda" style={styles.sidebarNavLink}>Agenda Harian</a></li>
              <li><a href="/galery" style={styles.sidebarNavLink}>Galery</a></li>
              <li><a href="/bulletin" style={styles.sidebarNavLink}>Bulletin</a></li>
              <li><a href="/contact" style={styles.sidebarNavLink}>Contact</a></li>
              <li><a href="/login" ><button style={styles.sidebarLoginButton}>Login</button></a></li>
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
    transition: 'all 0.3s ease',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    height: '45px',
    width: '45px',
    objectFit: 'contain',
  },
  siteTitle: {
    fontWeight: 600,
    fontSize: '1.4rem',
    letterSpacing: '0.5px',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.8rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  loginButton: {
    backgroundColor: 'white',
    color: 'rgb(5, 56, 143)',
    border: 'none',
    padding: '0.5rem 1.2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'background 0.3s ease',
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
  right: '-250px',
  width: '250px',
  height: '100vh',
  backgroundColor: 'rgba(5, 56, 143, 0.76)',
  color: 'white',
  padding: '2rem',
  transition: 'right 0.3s ease-in-out',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  // tambahkan baris di bawah ini:
  justifyContent: 'flex-start',
  alignItems: 'flex-start',  
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
    marginTop: '2rem',
  },
  sidebarNavLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
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
  },
};
