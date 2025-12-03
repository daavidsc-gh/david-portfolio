export function CVPage() {
  return (
    <div className="card">
      <h2>📄 Currículum Vitae Online</h2>
      
      <section style={{ marginBottom: '2rem' }}>
        <h3 className="text-blue">Resumen Profesional</h3>
        <p>
          Técnico en Sistemas (ASIR) finalizando Desarrollo (DAM). Combino la lógica de Java Spring Boot y React 
          con conocimientos sólidos de infraestructura AWS y sistemas Linux.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 className="text-blue">Experiencia Laboral</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.2rem' }}>Asistente de Sistemas en Prácticas FCT</h4>
          <p className="text-muted" style={{ margin: '0 0 0.5rem 0' }}>Serviform | Abril 2024 – Junio 2024</p>
          <ul>
            <li>Colaboración en la gestión de incidencias críticas.</li>
            <li>Apoyo en tareas de mantenimiento de sistemas y redes.</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '0.2rem' }}>Técnico de Soporte en Prácticas FCT</h4>
          <p className="text-muted" style={{ margin: '0 0 0.5rem 0' }}>Colegio Divina Pastora Informático | Abril 2022 – Junio 2022</p>
          <ul>
            <li>Soporte técnico de primer nivel a usuarios.</li>
            <li>Mantenimiento preventivo de equipos y software.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-blue">Formación Académica</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>T.S. Desarrollo de Aplicaciones Multiplataforma (DAM)</strong><br/>
            <span className="text-muted">2024 – Actualidad</span>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>T.S. Administración de Sistemas Informáticos (ASIR)</strong><br/>
            <span className="text-muted">2022 – 2024</span>
          </li>
          <li>
            <strong>T. Sistemas Microinformáticos y Redes (SMR)</strong><br/>
            <span className="text-muted">2020 – 2022</span>
          </li>
        </ul>
      </section>
    </div>
  );
}