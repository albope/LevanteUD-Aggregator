import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="top-bar">
        <span className="site-name">Levante UD News</span>
      </div>
      <nav className="nav-bar">
        <div className="nav-left">
          <img src="/logo-levante.png" alt="Levante UD" className="logo" />
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/noticias" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Noticias
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tw-levante" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                TW Levante
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/partidos" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Partidos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/comunidad" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Comunidad
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;