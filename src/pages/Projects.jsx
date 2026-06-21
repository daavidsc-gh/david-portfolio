export function Projects() {
  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="grid">
        
        <a 
          href="https://www.biteq.es/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card-link"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="card">
            
            {/* Aquí pones la ruta de la captura de pantalla de tu app */}
            <img 
              src="/ruta-a-tu-foto-de-biteq.jpg" 
              alt="Vista previa de la App BiteQ" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '12px', objectFit: 'cover' }} 
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

      </div>
    </section>
  );
}