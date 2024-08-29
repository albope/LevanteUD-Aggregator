import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Noticias from './components/Noticias';
import ResultadoPartido from './components/ResultadoPartido';
import TwitterFeed from './components/TwitterFeed';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className="main-content">
        <Routes>
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/tw-levante" element={<TwitterFeed />} />
          <Route path="/" element={<Noticias />} /> {/* Ruta por defecto */}
        </Routes>
        {/* Aseguramos que estas secciones siempre se muestren */}
        <ResultadoPartido />
        {/* Aquí puedes agregar la sección de Clasificación si existe */}
        {/* <Clasificacion /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;