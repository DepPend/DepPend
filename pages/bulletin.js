import Head from 'next/head';

export default function BulletinPage() {
  const bulletins = [
    {
      title: 'Tips Sukses Menghadapi Ujian Tengah Semester',
      summary: 'Strategi belajar efektif, manajemen waktu, dan menjaga kesehatan mental selama UTS.',
      image: '/bulletin1.jpg',
      date: '07 Juli 2025',
    },
    {
      title: 'Pentingnya Literasi Digital bagi Mahasiswa',
      summary: 'Di era teknologi, mahasiswa dituntut cakap digital untuk menunjang akademik dan karier.',
      image: '/bulletin2.jpg',
      date: '03 Juli 2025',
    },
    {
      title: 'Beasiswa Unggulan 2025 Telah Dibuka',
      summary: 'Info lengkap mengenai persyaratan dan cara mendaftar beasiswa dari Kemendikbud.',
      image: '/bulletin3.jpg',
      date: '01 Juli 2025',
    },
  ];

  return (
    <>
      <Head>
        <title>Bulletin | Departemen Pendidikan HIMA F.KOM</title>
      </Head>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading1}>Buletin Pendidikan</h1>
          <h2 style={styles.heading2}>Berita & Informasi Terkini</h2>
          <p style={styles.text}>
            Dapatkan informasi terbaru seputar dunia pendidikan, beasiswa, tips belajar, dan kegiatan akademik lainnya.
          </p>
        </div>
      </section>

      {/* Konten Artikel */}
      <section style={styles.bulletinSection}>
        <h3 style={styles.sectionTitle}>Berita Terbaru</h3>
        <div style={styles.articleList}>
          {bulletins.map((item, index) => (
            <div key={index} style={styles.articleCard}>
              <img src={item.image} alt={item.title} style={styles.articleImage} />
              <div style={styles.articleBody}>
                <span style={styles.articleDate}>{item.date}</span>
                <h4 style={styles.articleTitle}>{item.title}</h4>
                <p style={styles.articleSummary}>{item.summary}</p>
              </div>
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
  bulletinSection: {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#05388f',
    marginBottom: '2rem',
    borderBottom: '3px solid #05388f',
    display: 'inline-block',
    paddingBottom: '0.5rem',
  },
  articleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  articleCard: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #ccc',
    paddingBottom: '1.5rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  articleImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  articleBody: {
    padding: '0 0.5rem',
  },
  articleDate: {
    fontSize: '0.85rem',
    color: '#999',
    marginBottom: '0.4rem',
    display: 'block',
  },
  articleTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#05388f',
    marginBottom: '0.5rem',
  },
  articleSummary: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.5',
  },
};
