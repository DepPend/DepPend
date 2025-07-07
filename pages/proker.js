import Head from 'next/head';

export default function ProgramKerjaPage() {
  const programs = [
    {
      title: 'Mentoring Akademik',
      desc: 'Bimbingan belajar untuk mahasiswa baru dan lanjutan dengan tutor berpengalaman.',
      image: '/proker1.jpg',
    },
    {
      title: 'Pelatihan Public Speaking',
      desc: 'Meningkatkan kemampuan berbicara di depan umum secara percaya diri.',
      image: '/proker2.jpg',
    },
    {
      title: 'Seminar Nasional Pendidikan',
      desc: 'Kegiatan seminar dengan pembicara nasional untuk menambah wawasan mahasiswa.',
      image: '/proker3.jpg',
    },
    {
      title: 'Workshop Penulisan Ilmiah',
      desc: 'Pelatihan penulisan karya ilmiah dan jurnal tingkat nasional.',
      image: '/proker4.jpg',
    },
    {
      title: 'Buletin Pendidikan',
      desc: 'Publikasi berkala seputar edukasi, beasiswa, dan perkembangan dunia akademik.',
      image: '/proker5.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Program Kerja | Departemen Pendidikan HIMA F.KOM</title>
      </Head>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading1}>Program Kerja</h1>
          <h2 style={styles.heading2}>Departemen Pendidikan</h2>
          <p style={styles.text}>
            Berikut adalah berbagai program kerja yang dijalankan untuk mendukung kemajuan akademik dan pengembangan diri mahasiswa F.KOM.
          </p>
        </div>
      </section>

      {/* Daftar Program */}
      <section style={styles.programSection}>
        <h3 style={styles.sectionTitle}>Daftar Program Unggulan</h3>
        <div style={styles.programGrid}>
          {programs.map((item, index) => (
            <div key={index} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.cardImage} />
              <h4 style={styles.cardTitle}>{item.title}</h4>
              <p style={styles.cardText}>{item.desc}</p>
            </div>
          ))}
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
  programSection: {
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
  display: 'inline-block', // ✅ penting
  borderBottom: '3px solid #05388f', // ✅ hanya sepanjang teks
},
  programGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    padding: '1.5rem',
    textAlign: 'left',
    transition: 'transform 0.3s ease',
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
    color: '#333',
    lineHeight: '1.5',
  },
};
