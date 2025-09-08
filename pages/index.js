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

      {/* Himpunan Mahasiswa Fakultas Komputer */}
      <section style={styles.aboutSection}>
        <br></br>
        <br></br>
        <h2 style={styles.sectionTitle}>ARUNIKA BHAKTI</h2>
      </section>

      {/* Himpunan Mahasiswa Fakultas Komputer */}
      <section style={styles.aboutSection}>
        <br></br>
        <h2 style={styles.sectionTitle}>Himpunan Mahasiswa Fakultas Komputer</h2>
        <p style={styles.sectionText}>
          Himpunan Mahasiswa Fakultas Komputer (HIMA F.KOM) adalah organisasi mahasiswa
          yang menjadi wadah pengembangan diri, penyaluran aspirasi, serta ruang kolaborasi
          untuk seluruh mahasiswa F.KOM. HIMA berperan penting dalam membangun budaya akademik
          yang produktif, kreatif, dan inovatif.
        </p>
      </section>

      {/* Departemen Pendidikan */}
      <section style={styles.aboutSection}>
        <br></br>
        <h2 style={styles.sectionTitle}>Departemen Pendidikan</h2>
        <p style={styles.sectionText}>
          Departemen Pendidikan merupakan salah satu divisi penting di bawah naungan HIMA F.KOM.
          Departemen ini menjadi <strong>motor penggerak akademik</strong> dengan fokus pada
          <strong> peningkatan kualitas belajar</strong>, 
          <strong> pengembangan literasi</strong>, serta 
          <strong> penyelenggaraan kegiatan ilmiah</strong>. 
          Visi kami adalah menciptakan ruang inspirasi dan kolaborasi yang mendorong mahasiswa
          untuk tumbuh sebagai generasi berprestasi dan berdaya saing.
        </p>
      </section>

      {/* Struktur Organisasi */}
      <section style={styles.aboutSection}>
        <br></br>
        <h2 style={styles.sectionTitle}>Struktur Organisasi Departemen Pendidikan</h2>
        <table style={styles.orgTable}>
          <thead>
            <tr>
              <th style={styles.orgTableThTd}>Nama</th>
              <th style={styles.orgTableThTd}>NIM</th>
              <th style={styles.orgTableThTd}>Program Studi</th>
              <th style={styles.orgTableThTd}>Jabatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.orgTableThTd}>Moh. Abdul Aziz</td>
              <td style={styles.orgTableThTd}>232505059</td>
              <td style={styles.orgTableThTd}>Sistem Informasi</td>
              <td style={styles.orgTableThTd}>Kepala Departemen</td>
            </tr>
            <tr>
              <td style={styles.orgTableThTd}>Putri</td>
              <td style={styles.orgTableThTd}>23010101</td>
              <td style={styles.orgTableThTd}>Bisnis Digital</td>
              <td style={styles.orgTableThTd}>Sekretaris Departemen</td>
            </tr>
            <tr>
              <td style={styles.orgTableThTd}>Neysya</td>
              <td style={styles.orgTableThTd}>23010101</td>
              <td style={styles.orgTableThTd}>Komputerisasi Akuntansi</td>
              <td style={styles.orgTableThTd}>Staff Departemen</td>
            </tr>
            <tr>
              <td style={styles.orgTableThTd}>Astri </td>
              <td style={styles.orgTableThTd}>23010101</td>
              <td style={styles.orgTableThTd}>Bisnis Digital</td>
              <td style={styles.orgTableThTd}>Staff  Departemen</td>
            </tr>
            <tr>
              <td style={styles.orgTableThTd}>Dewi</td>
              <td style={styles.orgTableThTd}>23010101</td>
              <td style={styles.orgTableThTd}>Bisnis Digital</td>
              <td style={styles.orgTableThTd}>Staff  Departemen</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Jobdesk Departemen Pendidikan */}
      <section style={styles.aboutSection}>
        <br></br>
        <h2 style={styles.sectionTitle}>Jobdesk Utama Departemen Pendidikan</h2>
        <ul style={styles.jobdeskList}>
          <li>Mengkoordinasikan kegiatan akademik berbasis kebutuhan mahasiswa.</li>
          <li>Menyelenggarakan program kerja seperti <em>pelatihan, workshop</em>, dan mentoring akademik.</li>
          <li>Menjalin kerja sama dengan instansi pendidikan dan organisasi mahasiswa lainnya.</li>
          <li>Mengelola informasi beasiswa dan pengembangan prestasi akademik mahasiswa.</li>
          <li>Menyusun dan menerbitkan buletin pendidikan sebagai sarana literasi kampus.</li>
        </ul>
        <br></br> 
        <br></br>
      </section>
    </>
  );
}

const styles = {
    orgTable: {
    width: '100%',
    maxWidth: '900px',
    margin: '1.5rem auto',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '1rem',
  },
  // bisa kasih style tambahan untuk th & td
  orgTableThTd: {
    padding: '12px 16px',
    borderBottom: '1px solid #ccc', // hanya garis bawah
  },


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
    padding: '1rem 2rem',
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
  jobdeskList: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
    textAlign: 'left',
    maxWidth: '700px',
    margin: '0 auto',
    padding: 0,
    lineHeight: '1.8',
    color: '#333',
    fontSize: '1.05rem',
  },
};
