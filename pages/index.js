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

      {/* Section: Tentang Departemen Pendidikan */}
<section style={styles.aboutSection}>
  {/* S - Situation */}
  <h3 style={styles.sectionTitle}>Tentang Departemen Pendidikan</h3>
  <p style={styles.sectionText}>
    Departemen Pendidikan HIMA F.KOM hadir sebagai bagian dari Himpunan Mahasiswa
    yang berfokus pada peningkatan mutu akademik, literasi, serta pengembangan budaya ilmiah.
    Kami menjadi wadah untuk mahasiswa dalam berkembang secara intelektual dan profesional.
  </p>
</section>

{/* T - Task */}
<section style={styles.aboutSection}>
  <h3 style={styles.sectionTitle}>Jobdesk Utama</h3>
  <ul style={styles.jobdeskList}>
    <li>Mengkoordinasikan kegiatan akademik sesuai kebutuhan mahasiswa.</li>
    <li>Menyelenggarakan pelatihan, workshop, dan mentoring akademik.</li>
    <li>Menjalin kerja sama dengan instansi pendidikan serta organisasi mahasiswa.</li>
    <li>Mengelola informasi beasiswa dan mendukung prestasi akademik mahasiswa.</li>
    <li>Menerbitkan buletin pendidikan sebagai sarana literasi dan edukasi.</li>
  </ul>
</section>

{/* A - Action */}
<section style={styles.aboutSection}>
  <h3 style={styles.sectionTitle}>Langkah dan Aksi</h3>
  <p style={styles.sectionText}>
    Untuk mencapai tujuan tersebut, Departemen Pendidikan aktif menyusun program kerja
    seperti seminar, pelatihan keterampilan, lomba akademik, serta mentoring mahasiswa baru.
    Setiap program dirancang agar relevan dengan perkembangan dunia pendidikan dan kebutuhan mahasiswa.
  </p>
</section>

{/* R - Result */}
<section style={styles.aboutSection}>
  <h3 style={styles.sectionTitle}>Dampak dan Hasil</h3>
  <p style={styles.sectionText}>
    Melalui berbagai program dan kolaborasi, Departemen Pendidikan telah berkontribusi dalam menciptakan
    lingkungan akademik yang produktif. Mahasiswa memperoleh kesempatan untuk meningkatkan pengetahuan,
    mengasah keterampilan, serta meraih prestasi yang membanggakan di tingkat kampus maupun luar kampus.
  </p>
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

  aboutContent: {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'left',
},
aboutText: {
  fontSize: '1.1rem',
  lineHeight: '1.7',
  color: '#333',
},
jobdeskList: {
  marginTop: '1rem',
  paddingLeft: '1.5rem',
  fontSize: '1.05rem',
  lineHeight: '1.6',
  color: '#444',
},

};
