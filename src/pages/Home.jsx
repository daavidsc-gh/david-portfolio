export function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <section>
        <h2 className="text-blue">Hola, soy David 👋</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Desarrollador Full Stack con un perfil híbrido único: <strong>Sistemas (ASIR) + Desarrollo (DAM)</strong>.
          <br /><br />
          Especializado en construir soluciones escalables con Next.js y NestJS. Gracias a mi background, me encargo tanto de escribir un código limpio y eficiente
          como de asegurar la infraestructura donde se ejecuta (AWS/Linux). Actualmente busco mi primera oportunidad profesional para seguir creciendo.
        </p>
      </section>

      <section className="card">
        <h2>🛠️ Stack Tecnológico</h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 className="text-muted">Frontend</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
            <img className="skill-badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
            <img className="skill-badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className="skill-badge" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
            <img className="skill-badge" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img className="skill-badge" src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 className="text-muted">Backend & APIs</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
            <img className="skill-badge" src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
            <img className="skill-badge" src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
            <img className="skill-badge" src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL" />
            <img className="skill-badge" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 className="text-muted">Bases de Datos & ORMs</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
            <img className="skill-badge" src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img className="skill-badge" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
          </div>
        </div>

        <div>
          <h4 className="text-muted">Sistemas, Cloud & DevOps</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon&logoColor=white" alt="AWS" />
            <img className="skill-badge" src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
            <img className="skill-badge" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            <img className="skill-badge" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img className="skill-badge" src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" />
            <img className="skill-badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            <img className="skill-badge" src="https://img.shields.io/badge/Windows_Server-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Win Server" />
            <img className="skill-badge" src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash" />
            <img className="skill-badge" src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell" />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '1rem' }}>Mis Proyectos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

          <a
            href="https://www.biteq.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ textDecoration: 'none', color: 'inherit', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', border: '1px solid var(--border)' }}
          >
            <div style={{ height: '180px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
              <img
                src="BiteQ.png"
                alt="Vista previa de BiteQ"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>BiteQ</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', flexGrow: 1 }}>
                Plataforma integral de nutrición y planificación de comidas. Permite a los usuarios crear rutinas personalizadas, explorar recetas, calcular macros automáticamente y gestionar perfiles de salud. Desarrollada con Next.js, Spring Boot y Supabase (SQL).
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-hover)', borderRadius: '4px', border: '1px solid var(--border)' }}>Next.js</span>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-hover)', borderRadius: '4px', border: '1px solid var(--border)' }}>Spring Boot</span>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-hover)', borderRadius: '4px', border: '1px solid var(--border)' }}>Supabase</span>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-hover)', borderRadius: '4px', border: '1px solid var(--border)' }}>SQL</span>
              </div>
            </div>
          </a>

          <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px dashed var(--accent)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '180px', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=3B82F6&center=true&vCenter=true&width=300&lines=Cocinando+código...;Próximamente+más...;Trabajando+en+ello...;🚀+En+proceso"
                alt="Typing SVG"
              />
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
              <h3 className="text-blue" style={{ marginBottom: '0.5rem' }}>En Construcción...</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Aunque mi foco principal es la infraestructura de BiteQ, siempre estoy trabajando en nuevos desarrollos. ¡Pronto los verás por aquí!
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}