import React, { useState } from 'react';
import './Noticias.css';

function Noticias() {
  const [filtro, setFiltro] = useState('Todos los medios');
  const [busqueda, setBusqueda] = useState('');

  const medios = [
    'Todos los medios', 
    'Marca', 
    'AS', 
    'Mundo Deportivo', 
    'Levante-EMV', 
    'Las Provincias'
  ];

  // Datos simulados para noticias
  const todasLasNoticias = [
    { id: 1, title: 'Victoria del Levante UD en el último partido', summary: 'El Levante UD ha ganado su último partido...', img: 'noticia1.jpg', source: 'Marca' },
    { id: 2, title: 'Próximos enfrentamientos del Levante UD', summary: 'Conoce los próximos partidos...', img: 'noticia2.jpg', source: 'AS' },
    { id: 3, title: 'Nueva incorporación al equipo', summary: 'El Levante UD ha fichado a un nuevo jugador...', img: 'noticia3.jpg', source: 'Mundo Deportivo' },
    // Añadir más noticias con diferentes medios
  ];

  // Filtrar noticias por medio seleccionado
  const noticiasFiltradas = todasLasNoticias.filter(noticia => 
    (filtro === 'Todos los medios' || noticia.source.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <section className="noticias" id="noticias">
      <div className="filtro">
        <div className="filtro-medios">
          {medios.map(medio => (
            <button 
              key={medio} 
              className={medio === filtro ? 'active' : ''}
              onClick={() => setFiltro(medio)}
            >
              {medio}
            </button>
          ))}
        </div>
        <div className="busqueda">
          <input 
            type="text" 
            placeholder="Filtrar por medios..." 
            value={busqueda} 
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
      <div className="grid">
        {noticiasFiltradas.map(noticia => (
          <div className="noticia" key={noticia.id}>
            <img src={noticia.img} alt={noticia.title} />
            <h3>{noticia.title}</h3>
            <p>{noticia.summary}</p>
            <a href="#">Leer más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;