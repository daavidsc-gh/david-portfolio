export function Projects() {
  return (
    <section className="projects">
      <h2>Mis Proyectos Destacados</h2>
      <div className="grid">
        <div className="card">
          <h3>🛒 Gestor de Inventario</h3>
          <p>App completa con Login y Base de Datos.</p>
          <div className="tags">
            <span>React</span><span>Spring Boot</span><span>AWS</span>
          </div>
        </div>
        <div className="card">
          <h3>🐳 Laboratorios ASIR</h3>
          <p>Despliegue de servicios y scripts.</p>
          <div className="tags">
            <span>Linux</span><span>Docker</span><span>Bash</span>
          </div>
        </div>
      </div>
    </section>
  );
}