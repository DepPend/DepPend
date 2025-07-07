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

      {/* Tentang Singkat */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Apa Itu Departemen Pendidikan?</h2>
        <p style={styles.sectionText}>
          Departemen Pendidikan HIMA F.KOM adalah lembaga di bawah naungan Himpunan Mahasiswa 
          yang fokus pada peningkatan kualitas akademik, pengembangan literasi, dan penyelenggaraan 
          kegiatan ilmiah. Kami hadir untuk mendukung mahasiswa dalam tumbuh secara intelektual dan profesional.
        </p>
      </section>

      {/* Program Unggulan */}
      <section style={styles.programSection}>
        <h2 style={styles.sectionTitle}>Program Unggulan</h2>
        <div style={styles.programGrid}>
          {programData.map((program, index) => (
            <div key={index} style={styles.card}>
              <img src={program.image} alt={program.title} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{program.title}</h3>
              <p style={styles.cardText}>{program.desc}</p>
            </div>
          ))}
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
    backgroundImage: 'url("/hima4.jpg")',
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
