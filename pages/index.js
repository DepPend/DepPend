import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Beranda | Departemen Pendidikan HIMA F.KOM</title>
      </Head>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Selamat Datang di Portal Pendidikan</h1>
          <p style={styles.heroSubtitle}>
            Bersama membangun budaya akademik dan menciptakan prestasi.
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

// Dummy data program
const programData = [
  {
    title: 'Mentoring Akademik',
    desc: 'Bimbingan belajar untuk mahasiswa baru dan tingkat lanjut.',
    image: '/proker1.jpg',
  },
  {
    title: 'Pelatihan & Workshop',
    desc: 'Meningkatkan skill akademik dan profesional mahasiswa.',
    image: '/proker2.jpg',
  },
  {
    title: 'Buletin Pendidikan',
    desc: 'Publikasi berkala tentang isu pendidikan dan prestasi kampus.',
    image: '/proker3.jpg',
  },
];

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
    textAlign: 'center',
    padding: '2rem',
    color: '#fff',
  },
  heroContent: {
    backgroundColor: 'rgba(228, 223, 248, 0.13)',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.4rem',
    lineHeight: '1.6',
  },
  aboutSection: {
    padding: '4rem 2rem',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#05388f',
  },
  sectionText: {
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#333',
  },
  programSection: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  programGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#fdfdfd',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    padding: '1.5rem',
    textAlign: 'left',
    transition: 'transform 0.2s ease',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#05388f',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.5',
  },
};
