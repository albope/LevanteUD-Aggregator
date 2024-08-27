import React from 'react';
import './ResultadoPartido.css';

function ResultadoPartido() {
  return (
    <div className="partidos-clasificacion">
      <div className="resultado-partido widget-container">
        <h2>Resultados en Vivo</h2>
        <iframe
          id="iframe_220_1724760382"
          name="iframe_220_1724760382"
          src="https://widgets.elpais.com/liga/2023_2024/widget_liga.html?c=azul&w=220&h=555&d=primera"
          width="220"
          height="555"
          frameBorder="0"
          scrolling="auto"
          style={{ marginBottom: '10px' }}
          title="Resultados en Vivo"
        ></iframe>
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