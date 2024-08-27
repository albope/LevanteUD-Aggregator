import React from 'react';
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
            <li><a href="#noticias">Noticias</a></li>
            <li><a href="#tw-levante">TW Levante</a></li>
            <li><a href="#partidos">Partidos</a></li>
            <li><a href="#comunidad">Comunidad</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;