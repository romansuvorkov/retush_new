import React from 'react';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import HowTo from './components/HowTo';
import Examples from './components/Examples';
import PriceList from './components/PriceList';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <InfoCards />
      <Examples />
      <PriceList />
      <HowTo />
    </>
  );
}

export default App;
