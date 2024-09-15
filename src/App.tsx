import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Products from './components/Products';
import BestOffer from './components/BestOffer';
import Services from './components/Services';

function App() {
  return (
    <div>
      <LandingPage />
      <Products />
      <BestOffer />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
