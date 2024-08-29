import React from 'react';
import { useLocation } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const location = useLocation();

  let title = "El Decano en los medios";
  let subtitle = "Consulta todas las noticias de nuestro equipo en un solo lugar";

  if (location.pathname === '/tw-levante') {
    title = "TW Levante";
    subtitle = "Mira los últimos tweets sobre el Levante UD";
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSection;