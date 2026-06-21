export function Projects() {
  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      
      <div className="grid">
        
        {/* Tarjeta 1: Tu proyecto principal (BiteQ) */}
        <a 
          href="https://www.biteq.es/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card-link"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="card">
            <img 
              src="/ruta-a-tu-foto-de-biteq.jpg" 
              alt="Vista previa de la App BiteQ" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '12px', objectFit: 'cover', aspectRatio: '16/9' }} 
            />
            <h3>🚀 BiteQ</h3>
            <p>
              Desarrollo integral de aplicación web desde cero. Interfaces escalables y dinámicas, respaldadas por un backend robusto consumiendo APIs.
            </p>
            <div className="tags">
              <span>Next.js</span>
              <span>React</span>
              <span>GraphQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </a>

        {/* Tarjeta 2: La que tenías de "Cocinando código..." */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
          <h3 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.2rem' }}>
            👨‍💻 Cocinando código...
          </h3>
          <p style={{ fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>
            En Construcción...
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
            Aunque mi foco principal ahora es hacer crecer la infraestructura y funcionalidades de BiteQ, siempre estoy experimentando con nuevos desarrollos personales. ¡Pronto verás más cosas por aquí!
          </p>
        </div>

      </div>
    </section>
  );
}