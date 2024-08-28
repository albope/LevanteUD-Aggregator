import React, { useState, useEffect } from 'react';
import './Noticias.css';

function Noticias() {
  const [filtro, setFiltro] = useState('Todos los medios');
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  const medios = [
    'Todos los medios',
    'Marca',
    'AS',
    'Mundo Deportivo',
    'Levante-EMV',
    'Las Provincias'
  ];

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://e00-marca.uecdn.es/rss/futbol/levante.xml&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');
        if (!response.ok) {
          throw new Error('Error al obtener las noticias');
        }
        const data = await response.json();

        // Establecer la fuente de cada noticia a "Marca"
        const noticiasConFuente = data.items.map(noticia => ({
          ...noticia,
          source: 'Marca'
        }));

        setNoticias(noticiasConFuente);
      } catch (error) {
        console.error('Error al obtener las noticias:', error);
        setError(error.message);
      }
    };

    fetchNoticias();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filtrar noticias por medio seleccionado
  const noticiasFiltradas = noticias.filter(noticia =>
    filtro === 'Todos los medios' || noticia.source === filtro
  );

  return (
    <section className="noticias" id="noticias">
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
      <div className="grid">
        {noticiasFiltradas.map((noticia, index) => (
          <div className="noticia" key={index}>
            <img src={noticia.enclosure?.link || 'ruta-imagen-por-defecto.jpg'} alt={noticia.title} />
            <h3>{noticia.title}</h3>
            <p>{noticia.description.replace(/<\/?[^>]+(>|$)/g, "")}</p> {/* Remover HTML */}
            <a href={noticia.link} target="_blank" rel="noopener noreferrer">Leer más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;