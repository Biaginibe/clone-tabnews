function Home() {
  return (
     <main style={styles.container}>
      <div style={styles.card}>
        <span style={styles.emoji}>🚧</span>

        <h1 style={styles.title}>
          Site em construção
        </h1>

        <p style={styles.subtitle}>
          Ao acompanhar o curso.dev vou construir um clone do <a style={styles.link} href="https://tabnews.com.br" target="_blank" rel="noopener noreferrer"><b>TabNews</b></a> junto do Filipe Deschamps.
        </p>

        <p style={styles.description}>
          Obrigada pela visita 💙
        </p>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} — biginibe
        </footer>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: '88vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(135deg, #0f172a, #020617)',
    padding: 24,
    color: '#e5e7eb',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
  },
  card: {
    maxWidth: 480,
    textAlign: 'center',
    padding: '48px 32px',
    borderRadius: 16,
    backgroundColor: '#020617',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    border: '1px solid #1e293b',
  },
  emoji: {
    fontSize: 48,
    display: 'block',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: '#cbd5f5',
  },
  link:{
    textDecoration: 'none',
    color: '#3b82f6',
  },
  description: {
    fontSize: 16,
    lineHeight: 1.6,
    color: '#94a3b8',
    marginBottom: 32,
  },
  footer: {
    fontSize: 12,
    color: '#64748b',
  },
};

export default Home;
