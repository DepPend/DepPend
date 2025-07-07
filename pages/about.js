import Head from 'next/head';
import { useState } from 'react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Departemen Pendidikan HIMA F.KOM</title>
      </Head>

      {/* Section: Home / Hero */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading1}>Selamat Datang</h1>
          <h2 style={styles.heading2}>di Departemen Pendidikan</h2>
          <p style={styles.text}>
            Departemen Pendidikan HIMA F.KOM merupakan garda terdepan dalam pengembangan intelektual mahasiswa, 
            membangun budaya akademik, dan memperkuat kualitas pendidikan di lingkungan Fakultas.
          </p>
        </div>
      </section>

      {/* Section: Tentang Departemen */}
      <section style={styles.aboutSection}>
        <h3 style={styles.sectionTitle}>Tentang Departemen Pendidikan</h3>
        <div style={styles.aboutContent}>
          <p style={styles.aboutText}>
            Departemen Pendidikan bertugas menyelenggarakan program-program yang mendukung peningkatan kualitas akademik 
            mahasiswa F.KOM. Kami berfokus pada kegiatan ilmiah, seperti seminar, pelatihan, lomba akademik, dan pengembangan literasi.
          </p>
          <div style={styles.aboutText}>
        <strong>Jobdesk Utama Departemen Pendidikan:</strong>
        <ul style={styles.jobdeskList}>
          <li>Mengkoordinasikan kegiatan akademik berbasis kebutuhan mahasiswa.</li>
          <li>Menyelenggarakan program kerja seperti pelatihan, workshop, dan mentoring akademik.</li>
          <li>Menjalin kerja sama dengan instansi pendidikan dan organisasi mahasiswa lainnya.</li>
          <li>Mengelola informasi beasiswa dan pengembangan prestasi akademik.</li>
          <li>Menyusun dan menerbitkan buletin pendidikan sebagai sarana edukasi.</li>
        </ul>
      </div>
        </div>
      </section>
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
  aboutSection: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#05388f',
    borderBottom: '3px solid #05388f',
    paddingBottom: '0.5rem',
    marginBottom: '2rem',
  },
  aboutContent: {
    maxWidth: '800px',
    textAlign: 'left',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#333',
  },
  aboutText: {
    marginBottom: '1.5rem',
  },
  jobdeskList: {
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
  },
};
