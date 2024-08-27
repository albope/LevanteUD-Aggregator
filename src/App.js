import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Noticias from './components/Noticias';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Noticias />
    </div>
  );
}

export default App;