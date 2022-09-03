import './App.css';
import { Nav, Footer, Featured, Hero,  CaringCup, ShopAndSwirl } from './components'
import OurStory from './components/ourstory/ourStory';
import React from 'react';
import {render} from 'react-dom'
// import {showSlides} from './components/hero/hero.js'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>

      <OurStory/>
      <CaringCup/>
      <ShopAndSwirl/>
      <Footer/>
    </div>
      
  );
}

export default App;
