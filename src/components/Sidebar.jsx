import React from 'react';
import { useTheme } from '../context/ThemeContext';

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="card sidebar" style={{ height: 'fit-content', position: 'relative' }}>
      

      <button 
        onClick={toggleTheme} 
        style={{ 
          position: 'absolute', top: '1rem', right: '1rem', 
          background: 'var(--bg-card)', border: '1px solid var(--border)', 
          color: 'var(--text-primary)', 
          borderRadius: '50%', width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10, transition: 'all 0.3s'
        }}
        title="Cambiar tema"
        >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </button>

      <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
        <img src="/perfil.jpg" alt="David Serradilla" className="profile-img" />
        
        <h1 style={{ fontSize: '1.8rem', marginTop: '1rem', lineHeight: '1.2' }}>
          David <br/><span className="text-blue">Serradilla</span>
        </h1>
        <p className="text-muted">Desarrollador Full Stack Junior<br/>(ASIR + DAM)</p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <a 
            href="/CV_David_Serradilla_FullStack_Developer.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline" 
            style={{ fontSize: '0.9rem' }}
          >
            📥 Descargar PDF
          </a>
        </div>
      </div>
      
      <hr style={{ borderColor: 'var(--border)', margin: '1.5rem 0' }} />

      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Datos de interés</h4>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }} className="text-muted">
          <li>🚗 Carné de conducir B</li>
        </ul>
      </div>

      <div>
        <h4>Contacto</h4>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }} className="text-muted">
          <li>📧 dscandil3@gmail.com</li>
          <li>💼 <a href="https://linkedin.com/in/dscandil" target="_blank" className="text-blue">LinkedIn</a></li>
          <li>🐙 <a href="https://github.com/daavidsc-gh" target="_blank" className="text-blue">GitHub</a></li>
        </ul>
      </div>

    </aside>
  );
}