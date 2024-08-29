import React, { useState } from 'react';
import './TwitterFeed.css';

function TwitterFeed() {
  const [activeList, setActiveList] = useState('Oficiales del Club');

  const handleButtonClick = (list) => {
    setActiveList(list);
    let url = '';
    switch (list) {
      case 'Oficiales del Club':
        url = 'https://twitter.com/albertobort23/lists/1829129403038601252';
        break;
      case 'Jugadores':
        url = 'https://twitter.com/albertobort23/lists/1829130195367789043';
        break;
      case 'Periodistas':
        url = 'https://twitter.com/albertobort23/lists/1829130882556653572';
        break;
      case 'TW Levante':
        url = 'https://twitter.com/albertobort23/lists/1829131552869533698';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <section className="twitter-feed">
      <h2>Tweets sobre el Levante UD</h2>
      <div className="filtro">
        <button
          className={activeList === 'Oficiales del Club' ? 'active' : ''}
          onClick={() => handleButtonClick('Oficiales del Club')}
        >
          Oficiales del Club
        </button>
        <button
          className={activeList === 'Jugadores' ? 'active' : ''}
          onClick={() => handleButtonClick('Jugadores')}
        >
          Jugadores
        </button>
        <button
          className={activeList === 'Periodistas' ? 'active' : ''}
          onClick={() => handleButtonClick('Periodistas')}
        >
          Periodistas
        </button>
        <button
          className={activeList === 'TW Levante' ? 'active' : ''}
          onClick={() => handleButtonClick('TW Levante')}
        >
          TW Levante
        </button>
      </div>
    </section>
  );
}

export default TwitterFeed;