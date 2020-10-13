import React from 'react';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import Slider from './components/Slider';
import HowTo from './components/HowTo';
import Examples from './components/Examples';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <InfoCards />
      <Slider />
      <HowTo />
      <Examples />
    </>
  );
}

export default App;
