import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="sticky-nav">
      
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Inicio
      </NavLink>

      <NavLink 
        to="/cv" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        CV Online
      </NavLink>

      <NavLink 
        to="/contacto" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Contacto
      </NavLink>

    </nav>
  );
}