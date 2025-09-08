import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-900/95 text-white shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/hima5.png" alt="Logo" className="h-12 w-12 object-contain" />
          <span className="text-lg font-semibold md:text-xl">Departemen Pendidikan</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
            <li><a href="/about" className="hover:text-gray-200">About</a></li>
            <li><a href="/proker" className="hover:text-gray-200">Program Kerja</a></li>
            <li><a href="/agenda" className="hover:text-gray-200">Agenda Harian</a></li>
            <li><a href="/galery" className="hover:text-gray-200">Galery</a></li>
            <li><a href="/bulletin" className="hover:text-gray-200">Bulletin</a></li>
            <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
          <a href="/login">
            <button className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900 hover:bg-gray-100">
              Login
            </button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="block text-3xl md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900/95 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 text-lg">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/proker" onClick={() => setIsOpen(false)}>Program Kerja</a>
          <a href="/agenda" onClick={() => setIsOpen(false)}>Agenda Harian</a>
          <a href="/galery" onClick={() => setIsOpen(false)}>Galery</a>
          <a href="/bulletin" onClick={() => setIsOpen(false)}>Bulletin</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="/login">
            <button className="mt-4 w-full rounded-lg bg-white px-4 py-2 font-bold text-blue-900 hover:bg-gray-100">
              Login
            </button>
          </a>
        </nav>
      </div>
    </header>
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
    fontSize: '1.3rem',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
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
    maxWidth: '250px',
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
    fontSize: '1.1rem',
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
