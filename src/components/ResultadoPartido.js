import React from 'react';
import './ResultadoPartido.css';

function ResultadoPartido() {
  return (
    <div>
      <div className="resultado-partido">
        <h2>ESTADÍSTICAS LUD</h2>
        <iframe 
          src="https://footystats.org/es/api/club?id=292" 
          height="100%" 
          width="100%" 
          style={{ height: '420px', width: '103%' }} 
          frameBorder="0" 
          title="Resultados Levante UD"
        ></iframe>
      </div>
      <div className="clasificacion-liga">
        <h2>CLASIFICACIÓN LIGA HYPERMOTION</h2>
        <iframe
          src="https://www.fctables.com/spain/liga-adelante/iframe/?type=table&lang_id=4&country=201&template=76&team=188925&timezone=Europe/Paris&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=1&ga=1&gd=1&pts=1&ng=0&form=1&width=520&height=700&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=32f2f&hfc=FFFFFF"
          height="700px" 
          width="100%" 
          style={{ border: 'none' }} 
          frameBorder="0"
          title="Clasificación LaLiga Hypermotion"
        ></iframe>
      </div>
    </div>
  );
}

export default ResultadoPartido;