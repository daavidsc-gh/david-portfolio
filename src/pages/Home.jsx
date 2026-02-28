export function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <section>
        <h2 className="text-blue">Hola, soy David 👋</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Desarrollador Full Stack con un perfil híbrido único: <strong>Sistemas (ASIR) + Desarrollo (DAM)</strong>.
          <br /><br />
          Actualmente construyendo soluciones escalables con <strong>Next.js y NestJS</strong>. Gracias a mi background,
          me encargo tanto de escribir un código limpio y eficiente como de asegurar la infraestructura donde se ejecuta (AWS/Linux).
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

          <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px dashed var(--accent)' }}>
            <div style={{ height: '140px', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=3B82F6&center=true&vCenter=true&width=300&lines=Cocinando+código...;Próximamente+más...;Trabajando+en+ello...;🚀+En+proceso"
                alt="Typing SVG"
              />
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 className="text-blue">En Construcción...</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Actualmente trabajando en nuevos desarrollos personales utilizando Next.js y GraphQL. ¡Pronto los verás por aquí!
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}