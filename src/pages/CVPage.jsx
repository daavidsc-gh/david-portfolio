export function CVPage() {
  return (
    <div className="card">
      <h2>📄 Currículum Vitae Online</h2>

      <section style={{ marginBottom: '2rem' }}>
        <h3 className="text-blue">Resumen Profesional</h3>
        <p>
          Desarrollador Full Stack con sólida base en administración de sistemas (ASIR) y desarrollo de aplicaciones (DAM).
          Especializado en la creación de soluciones escalables combinando la lógica del backend (Java, Spring Boot, NestJS)
          con interfaces dinámicas en el frontend (React, Next.js). Aporto una visión integral del ciclo de vida del software,
          desde la infraestructura (AWS, Docker, Linux) hasta el despliegue.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 className="text-blue">Experiencia Profesional</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.2rem' }}>Desarrollador Full Stack</h4>
          <p className="text-muted" style={{ margin: '0 0 0.5rem 0' }}>Desarrollador Full Stack en Prácticas FCT | Febrero 2026 – Mayo 2026</p>
          <ul>
            <li>Desarrollo integral (Frontend y API) de una nueva plataforma web desde cero.</li>
            <li><strong>Backend:</strong> Construcción de la lógica de negocio y API con NestJS y GraphQL, gestionando datos en PostgreSQL mediante Prisma.</li>
            <li><strong>Frontend:</strong> Creación de interfaces escalables utilizando Next.js, React y Material UI (MUI).</li>
            <li><strong>Flujo de trabajo:</strong> Control de versiones, revisión de código y despliegue colaborativo utilizando GitLab.</li>
          </ul>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.2rem' }}>Asistente de Sistemas en Prácticas FCT</h4>
          <p className="text-muted" style={{ margin: '0 0 0.5rem 0' }}>Asistente de Sistemas en Prácticas FCT | Marzo 2024 – Junio 2024</p>
          <ul>
            <li>Colaboración en la gestión de incidencias críticas.</li>
            <li>Apoyo en tareas de mantenimiento de sistemas y redes.</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '0.2rem' }}>Técnico de Soporte en Prácticas FCT</h4>
          <p className="text-muted" style={{ margin: '0 0 0.5rem 0' }}>Técnico de Soporte en Prácticas FCT en Colegio Divina Pastora Informático | Marzo 2022 – Junio 2022</p>
          <ul>
            <li>Soporte técnico de primer nivel a usuarios, resolviendo incidentes.</li>
            <li>Mantenimiento preventivo de equipos y software.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-blue">Formación Académica</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>T.S. Desarrollo de Aplicaciones Multiplataforma (DAM)</strong><br />
            <span className="text-muted">2024 – 2026</span>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>T.S. Administración de Sistemas Informáticos en Red (ASIR)</strong><br />
            <span className="text-muted">2022 – 2024</span>
          </li>
          <li>
            <strong>T. Sistemas Microinformáticos y Redes (SMR)</strong><br />
            <span className="text-muted">2020 – 2022</span>
          </li>
        </ul>
      </section>
    </div>
  );
}