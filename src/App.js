import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Noticias from './components/Noticias';
import ResultadoPartido from './components/ResultadoPartido';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className="main-content">
        <Noticias />
        <ResultadoPartido />
      </div>
    </div>
  );
}

export default App;