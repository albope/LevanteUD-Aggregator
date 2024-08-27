import React from 'react';
import './ResultadoPartido.css';

function ResultadoPartido() {
  return (
    <div className="partidos-clasificacion">
      <div className="resultado-partido">
        <h2>Último Partido</h2>
        <p>LALIGA HYPERMOTION · J2</p>
        <p>Ciutat de Valencia</p>
        <div className="score-container">
          <div className="team">
            <img src="logo-levante.png" alt="Levante UD" />
            <p>Levante UD</p>
          </div>
          <div className="score">
            <span>1</span>
            <span>1</span>
          </div>
          <div className="team">
            <img src="logo-cadiz.png" alt="Cádiz CF" />
            <p>Cádiz CF</p>
          </div>
        </div>
        <p className="match-date">24 ago 2024</p>
        <button className="status-button">Partido completado</button>
      </div>

      <div className="resultado-partido">
        <h2>Próximo Partido</h2>
        <p>LALIGA HYPERMOTION · J3</p>
        <p>Estadio Nuevo Mirandilla</p>
        <div className="score-container">
          <div className="team">
            <img src="logo-levante.png" alt="Levante UD" />
            <p>Levante UD</p>
          </div>
          <div className="vs">
            <span>VS</span>
          </div>
          <div className="team">
            <img src="logo-mirandes.png" alt="Mirandés" />
            <p>Mirandés</p>
          </div>
        </div>
        <p className="match-date">31 ago 2024 · 18:30</p>
        <button className="status-button">Próximo partido</button>
      </div>

      <div className="resultado-partido clasificacion">
        <h2>Clasificación</h2>
        <ul className="liga-table">
          <li>1. Equipo A</li>
          <li>2. Equipo B</li>
          <li>3. Equipo C</li>
          <li>4. Levante UD</li>
          <li>5. Equipo D</li>
        </ul>
      </div>
    </div>
  );
}

export default ResultadoPartido;