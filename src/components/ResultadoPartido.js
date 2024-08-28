import React from 'react';
import './ResultadoPartido.css';

function ResultadoPartido() {
  return (
    <div className="resultado-partido">
      <h2>LIGA HYPERMOTION</h2>
      <iframe 
        src="https://www.lavanguardia.com/deportes/resultados/laliga-segunda-division" 
        width="100%" 
        height="600px" 
        style={{ border: 'none' }}
        title="Resultados La Liga Segunda División"
      ></iframe>
    </div>
  );
}

export default ResultadoPartido;