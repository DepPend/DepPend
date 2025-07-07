'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaBars, FaSearch, FaUser, FaTachometerAlt, FaUsers,
  FaCalendarAlt, FaProjectDiagram, FaClock, FaNewspaper, FaSignOutAlt
} from 'react-icons/fa';
import { getCurrentUser } from '../lib/auth';

export default function LayoutAdmin({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUser] = useState(null);
  const router = useRouter();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      router.replace('/login');
    } else {
      setUser(currentUser);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p style={{ padding: '2rem' }}>Memeriksa otorisasi admin...</p>;
  }

  const menuItems = [
    { icon: <FaTachometerAlt />, label: 'Dashboard', href: '/admin' },
    { icon: <FaUsers />, label: 'Anggota Departemen', href: '/admin/users' },
    { icon: <FaProjectDiagram />, label: 'Program Kerja', href: '/admin/proker' },
    { icon: <FaCalendarAlt />, label: 'Agenda', href: '/admin/agenda' },
    { icon: <FaClock />, label: 'Time Line', href: '/admin/timeline' },
    { icon: <FaNewspaper />, label: 'Bulletin', href: '/admin/bulletin' },
    { icon: <FaSignOutAlt />, label: 'Logout', href: '/logout' },
  ];

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <aside style={{ ...styles.sidebar, width: collapsed ? '60px' : '250px' }}>
        <div style={styles.profileSection}>
          {users?.photoURL ? (
            <img
              src={users.photoURL}
              alt="Profile"
              style={{
                width: collapsed ? '30px' : '60px',
                height: collapsed ? '30px' : '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto'
              }}
            />
          ) : (
            <FaUser size={collapsed ? 30 : 60} color="white" />
          )}
          {!collapsed && (
            <>
              <p style={styles.profileName}>{users?.nama || 'Admin'}</p>
              <p style={styles.profileRole}>{users?.role || 'Administrator'}</p>
            </>
          )}
        </div>

        <nav style={styles.navMenu}>
          {menuItems.map(({ icon, label, href }, idx) =>
            label === 'Logout' ? (
              <button
                key={idx}
                onClick={() => {
                  if (confirm('Apakah Anda yakin ingin logout?')) {
                    router.push(href);
                  }
                }}
                style={{
                  ...styles.navItem,
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                {icon}
                {!collapsed && <span>{label}</span>}
              </button>
            ) : (
              <Link key={idx} href={href} style={styles.navItem}>
                {icon}
                {!collapsed && <span>{label}</span>}
              </Link>
            )
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ ...styles.contentWrapper, marginLeft: collapsed ? '60px' : '250px' }}>
        <header style={styles.navbar}>
          <button onClick={toggleSidebar} style={styles.hamburger}><FaBars /></button>
          <div style={styles.searchBox}>
            <FaSearch style={{ marginRight: '0.5rem' }} />
            <input type="text" placeholder="Cari data..." style={styles.searchInput} />
          </div>
          <div style={styles.userDropdown} onClick={toggleDropdown}>
            <FaUser size={24} />
            {showDropdown && (
              <div style={styles.dropdownContent}>
                <button
                  style={styles.dropdownItem}
                  onClick={() => router.push('/admin/profile')}
                >
                  Profile
                </button>
                <button
                  style={styles.dropdownItem}
                  onClick={() => {
                    if (confirm('Apakah Anda yakin ingin logout?')) {
                      router.push('/logout');
                    }
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main style={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  },
  sidebar: {
    backgroundColor: '#1e1e2f',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0.5rem',
    transition: 'width 0.3s ease',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  profileName: {
    margin: '0.5rem 0 0',
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: '0.8rem',
    color: '#ccc',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem 1rem',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    borderRadius: '6px',
    transition: 'background 0.2s',
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: 'margin-left 0.3s ease',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '1rem',
    borderBottom: '1px solid #ccc',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  hamburger: {
    fontSize: '1.2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.25rem 0.5rem',
    flex: 1,
    maxWidth: '400px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
  },
  userDropdown: {
    position: 'relative',
    cursor: 'pointer',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '0.5rem',
  },
  dropdownItem: {
    padding: '0.5rem 1rem',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  mainContent: {
    padding: '2rem',
  },
};
