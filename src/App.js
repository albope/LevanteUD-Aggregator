import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Noticias from './components/Noticias';
import ResultadoPartido from './components/ResultadoPartido';
import Footer from './components/Footer'; // Importamos el nuevo componente Footer
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
      <Footer /> {/* Añadimos el Footer aquí */}
    </div>
  );
}

export default App;