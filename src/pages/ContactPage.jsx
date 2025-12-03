import React, { useState } from 'react';

export function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "dscandil3@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card">
      <h2>📬 Contacto</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        ¿Tienes alguna propuesta o quieres hablar sobre desarrollo? 
        Estoy disponible para incorporarme a prácticas FCT.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        
        <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>📧 Correo Electrónico</h3>
          <p className="text-blue" style={{ fontSize: '1.2rem', margin: 0, wordBreak: 'break-all' }}>
            {email}
          </p>
          
          <button 
            onClick={handleCopy} 
            className="btn btn-outline" 
            style={{ marginTop: '1rem', display: 'inline-flex', width: 'auto', cursor: 'pointer' }}
          >
            {copied ? '✅ ¡Email Copiado!' : '📋 Copiar Email'}
          </button>
        </div>

        <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>💼 LinkedIn</h3>
          <p className="text-muted" style={{ margin: 0 }}>Conecta conmigo profesionalmente.</p>
          <a href="https://linkedin.com/in/dscandil" target="_blank" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', width: 'auto' }}>
            Ver Perfil
          </a>
        </div>

      </div>
    </div>
  );
}