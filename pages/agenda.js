import Head from 'next/head';

export default function AgendaHarianPage() {
  const agendas = [
    {
      date: '10 Juli 2025',
      title: 'Rapat Koordinasi Internal',
      desc: 'Membahas evaluasi kinerja dan rencana kegiatan bulan depan.',
      image: '/agenda1.jpg',
    },
    {
      date: '12 Juli 2025',
      title: 'Kunjungan Sekolah Binaan',
      desc: 'Kegiatan kunjungan ke mitra sekolah binaan untuk monitoring.',
      image: '/agenda2.jpg',
    },
    {
      date: '15 Juli 2025',
      title: 'Pelatihan Desain Presentasi',
      desc: 'Pelatihan membuat presentasi menarik untuk kegiatan akademik.',
      image: '/agenda3.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Agenda Harian | Departemen Pendidikan HIMA F.KOM</title>
      </Head>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading1}>Agenda Harian</h1>
          <h2 style={styles.heading2}>Departemen Pendidikan</h2>
          <p style={styles.text}>
            Jadwal kegiatan harian Departemen Pendidikan yang mendukung koordinasi dan pelaksanaan program.
          </p>
        </div>
      </section>

      {/* Daftar Agenda */}
      <section style={styles.agendaSection}>
        <h3 style={styles.sectionTitle}>Agenda Terbaru</h3>
        <div style={styles.agendaGrid}>
          {agendas.map((item, index) => (
            <div key={index} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.cardImage} />
              <div style={styles.cardDate}>{item.date}</div>
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
  agendaSection: {
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
  agendaGrid: {
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
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  cardDate: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#888',
    marginBottom: '0.5rem',
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
