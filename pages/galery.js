import Head from 'next/head';
import { useState } from 'react';

export default function GaleriDepartemenPage() {
  const [modalImage, setModalImage] = useState(null);

  const galleryImages = [
    { src: '/galeri1.jpg', alt: 'Seminar Pendidikan' },
    { src: '/galeri2.jpg', alt: 'Mentoring Mahasiswa Baru' },
    { src: '/galeri3.jpg', alt: 'Pelatihan Public Speaking' },
    { src: '/galeri4.jpg', alt: 'Kunjungan Sekolah Binaan' },
    { src: '/galeri5.jpg', alt: 'Rapat Koordinasi Departemen' },
    { src: '/galeri6.jpg', alt: 'Launching Buletin Pendidikan' },
  ];

  return (
    <>
      <Head>
        <title>Galeri | Departemen Pendidikan HIMA F.KOM</title>
      </Head>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading1}>Galeri Kegiatan</h1>
          <h2 style={styles.heading2}>Departemen Pendidikan</h2>
          <p style={styles.text}>
            Dokumentasi berbagai kegiatan, program, dan momen penting yang dilaksanakan oleh Departemen Pendidikan.
          </p>
        </div>
      </section>

      {/* Galeri Section */}
      <section style={styles.gallerySection}>
        <h3 style={styles.sectionTitle}>Dokumentasi Kegiatan</h3>
        <div style={styles.galleryGrid}>
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              style={styles.galleryImage}
              onClick={() => setModalImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div style={styles.modalOverlay} onClick={() => setModalImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.src} alt={modalImage.alt} style={styles.modalImage} />
            <p>{modalImage.alt}</p>
            <button onClick={() => setModalImage(null)} style={styles.closeButton}>Tutup</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  heroSection: {
    minHeight: '100vh',
    backgroundImage: 'url("../hima4.JPG")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
    color: '#fff',
  },
  heroContent: {
    maxWidth: '800px',
backgroundColor: 'rgba(228, 223, 248, 0.13)',
    padding: '2rem',
    borderRadius: '12px',
  },
  heading1: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  heading2: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
  gallerySection: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#05388f',
    paddingBottom: '0.5rem',
    marginBottom: '2rem',
    display: 'inline-block',
    borderBottom: '3px solid #05388f',
  },
  galleryGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  galleryImage: {
    width: '250px',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '600px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  closeButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#05388f',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
