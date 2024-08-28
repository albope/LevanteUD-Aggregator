import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Importa el icono de corazón
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Hecho con <span className="grana">Pasión</span> <span className="azul">Granota</span> <FaHeart className="heart-icon" />
      </p>
      <p>
        <a href="https://x.com/albertobort23" target="_blank" rel="noopener noreferrer">
          Alberto Bort © 2024
        </a>
      </p>
    </footer>
  );
}

export default Footer;