export function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <section>
        <h2 className="text-blue">Hola, soy David 👋</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Desarrollador Full Stack Junior con un perfil híbrido único: <strong>Sistemas (ASIR) + Desarrollo (DAM)</strong>.
          <br/><br/>
          Me especializo en construir aplicaciones completas, encargándome tanto del código (Java/React) como del servidor donde viven (AWS/Linux).
        </p>
      </section>

      <section className="card">
        <h2>🛠️ Stack Tecnológico</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 className="text-muted">Backend & Lenguajes</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
            <img className="skill-badge" src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
            <img className="skill-badge" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
            <img className="skill-badge" src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
            <img className="skill-badge" src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 className="text-muted">Frontend</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
            <img className="skill-badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className="skill-badge" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
            <img className="skill-badge" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img className="skill-badge" src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
          </div>
        </div>

        <div>
          <h4 className="text-muted">Sistemas, Cloud & DevOps</h4>
          <div className="skills-grid">
            <img className="skill-badge" src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon&logoColor=white" alt="AWS" />
            <img className="skill-badge" src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
            <img className="skill-badge" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            <img className="skill-badge" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img className="skill-badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            <img className="skill-badge" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" />
            <img className="skill-badge" src="https://img.shields.io/badge/Windows_Server-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Win Server" />
            <img className="skill-badge" src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell" />
            <img className="skill-badge" src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash" />
            <img className="skill-badge" src="https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white" alt="VirtualBox" />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Mis Proyectos</h2>
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
                Actualmente estoy desarrollando nuevos proyectos para ampliar mi portafolio. ¡Pronto verás novedades por aquí!
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}