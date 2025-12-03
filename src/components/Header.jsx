import { Link } from 'react-router-dom';
import '../index.css';

export function Header() {
  return (
    <header>
      <h2>David.Dev</h2>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
      </nav>
    </header>
  );
}