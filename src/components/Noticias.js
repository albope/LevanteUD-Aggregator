import React, { useState, useEffect } from 'react';
import './Noticias.css';

function Noticias() {
  const [filtro, setFiltro] = useState('Todos los medios');
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  const noticiasPorPagina = 12;

  const medios = [
    'Todos los medios',
    'Marca',
    'AS',
    'Levante-EMV',
    'Las Provincias',
    'Superdeporte',
    'Sport' // Añadido Sport
  ];

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const marcaResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://e00-marca.uecdn.es/rss/futbol/levante.xml&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');
        const asResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.as.com/mrss-s/pages/as/site/as.com/section/futbol/subsection/segunda/&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');
        const levanteEmvResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.levante-emv.com/rss/section/4551&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');
        const lasProvinciasResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.lasprovincias.es/rss/2.0/?section=levanteud&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');
        const superdeporteResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.superdeporte.es/rss/section/43013&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');
        const sportResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.sport.es/es/rss/segunda-division/rss.xml&api_key=speh0bxtygrsc03srteqfp1ticqxutrrmsuquc12');

        if (!marcaResponse.ok || !asResponse.ok || !levanteEmvResponse.ok || !lasProvinciasResponse.ok || !superdeporteResponse.ok || !sportResponse.ok) {
          throw new Error('Error al obtener las noticias');
        }

        const marcaData = await marcaResponse.json();
        const asData = await asResponse.json();
        const levanteEmvData = await levanteEmvResponse.json();
        const lasProvinciasData = await lasProvinciasResponse.json();
        const superdeporteData = await superdeporteResponse.json();
        const sportData = await sportResponse.json();

        // Filtrar noticias del Levante UD en AS y Sport (incluyendo términos adicionales relacionados)
        const keywords = ['Levante', 'granota', 'Orriols'];

        const levanteNoticiasAs = asData.items.filter(noticia =>
          keywords.some(keyword => noticia.title.includes(keyword) || noticia.description.includes(keyword))
        );

        const levanteNoticiasSport = sportData.items.filter(noticia =>
          keywords.some(keyword => noticia.title.includes(keyword) || noticia.description.includes(keyword))
        );

        // Añadir fuente a cada noticia
        const marcaNoticias = marcaData.items.map(noticia => ({ ...noticia, source: 'Marca' }));
        const asNoticias = levanteNoticiasAs.map(noticia => ({ ...noticia, source: 'AS' }));
        const levanteEmvNoticias = levanteEmvData.items.map(noticia => ({ ...noticia, source: 'Levante-EMV' }));
        const lasProvinciasNoticias = lasProvinciasData.items.map(noticia => ({ ...noticia, source: 'Las Provincias' }));
        const superdeporteNoticias = superdeporteData.items.map(noticia => ({ ...noticia, source: 'Superdeporte' }));
        const sportNoticias = levanteNoticiasSport.map(noticia => ({ ...noticia, source: 'Sport' }));

        // Eliminar duplicados en las noticias
        const noticiasUnicas = Array.from(new Set([...marcaNoticias, ...asNoticias, ...levanteEmvNoticias, ...lasProvinciasNoticias, ...superdeporteNoticias, ...sportNoticias].map(noticia => noticia.title)))
          .map(title => [...marcaNoticias, ...asNoticias, ...levanteEmvNoticias, ...lasProvinciasNoticias, ...superdeporteNoticias, ...sportNoticias].find(noticia => noticia.title === title));

        setNoticias(noticiasUnicas);
      } catch (error) {
        console.error('Error al obtener las noticias:', error);
        setError(error.message);
      }
    };

    fetchNoticias();
  }, []);

  useEffect(() => {
    // Resetea la página actual al cambiar el filtro o la búsqueda
    setPaginaActual(1);
  }, [filtro, busqueda]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filtrar noticias según el medio seleccionado y la búsqueda
  const noticiasFiltradas = noticias.filter(noticia => {
    const filtroMedio = filtro === 'Todos los medios' || noticia.source === filtro;
    const filtroBusqueda = busqueda === '' || noticia.title.toLowerCase().includes(busqueda.toLowerCase());
    return filtroMedio && filtroBusqueda;
  });

  // Paginación
  const indexOfLastNoticia = paginaActual * noticiasPorPagina;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPorPagina;
  const noticiasPaginadas = noticiasFiltradas.slice(indexOfFirstNoticia, indexOfLastNoticia);

  const paginate = pageNumber => setPaginaActual(pageNumber);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <section className="noticias">
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
            placeholder="Buscar noticias..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
      <div className="grid">
        {noticiasPaginadas.length > 0 ? (
          noticiasPaginadas.map(noticia => (
            <div className="noticia" key={noticia.title}>
              <img src={noticia.thumbnail && noticia.thumbnail.includes('http') ? noticia.thumbnail : '/logo-levante.png'} alt={noticia.title} />
              <h3>{noticia.title}</h3>
              <p>{truncateText(noticia.description.replace(/<\/?[^>]+(>|$)/g, ""), 20)}</p>
              <div className="noticia-footer">
                <span className="noticia-source">{noticia.source}</span>
                <span className="noticia-date">{new Date(noticia.pubDate).toLocaleDateString()}</span>
              </div>
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          ))
        ) : (
          <p>No se encontraron noticias del Levante UD en "{filtro}".</p>
        )}
      </div>
      {/* Paginación */}
      <div className="paginacion">
        {Array.from({ length: Math.ceil(noticiasFiltradas.length / noticiasPorPagina) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={paginaActual === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Noticias;