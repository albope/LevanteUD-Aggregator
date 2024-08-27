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
            <li><NavLink to="/noticias" activeClassName="active">Noticias</NavLink></li>
            <li><NavLink to="/tw-levante" activeClassName="active">TW Levante</NavLink></li>
            <li><NavLink to="/partidos" activeClassName="active">Partidos</NavLink></li>
            <li><NavLink to="/comunidad" activeClassName="active">Comunidad</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;