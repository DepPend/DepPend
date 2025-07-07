import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Kontak | HIMA F.KOM</title>
      </Head>
      <section style={styles.contactSection}>
        <h3 style={styles.sectionTitle}>Kontak</h3>

        <div style={styles.contactContent}>
          {/* Info Kontak */}
          <div style={styles.contactInfo}>
            <h4 style={styles.contactTitle}>Hubungi Kami</h4>
            <p style={styles.contactItem}>📍 Jl. Raya Cipacing No. 22 Jatinangor 45363 Jawa Barat</p>
            <p style={styles.contactItem}>📞 +62 -</p>
            <p style={styles.contactItem}>✉️ departemenpendidikanhimafkom@gmail.com</p>
          </div>

          {/* Form Kirim Pesan */}
          <form style={styles.contactForm}>
            <h4 style={styles.contactTitle}>Kirim Pesan</h4>
            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} placeholder="email@example.com" required />

            <label style={styles.label}>No HP</label>
            <input type="tel" style={styles.input} placeholder="08xxxxxxxxxx" required />

            <label style={styles.label}>Pesan</label>
            <textarea rows="4" style={styles.textarea} placeholder="Tulis pesan Anda..." required />

            <button type="submit" style={styles.button}>📤 Kirim Pesan</button>
          </form>
        </div>
      </section>
    </>
  );
}


const styles = {
  contactSection: {
    minHeight: '100vh',
    padding: '4rem 2rem',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
    color: '#05388f',
    position: 'relative',
  },
  contactContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '3rem',
    width: '100%',
    maxWidth: '1080px',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  },
  contactInfo: {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    fontSize: '1.1rem',
    color: '#05388f',
  },
  contactTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  contactItem: {
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  contactForm: {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'all 0.3s ease',
  },
  button: {
    marginTop: '1rem',
    padding: '0.9rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#05388f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    alignSelf: 'flex-start',
  },
};
