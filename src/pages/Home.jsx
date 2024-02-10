import React from 'react'
import NavBar from './components/NavBar'
import HeroBanner from './components/HeroBanner';
import GameCardGrid from './components/GameCardGrid';
import GameCard from './components/GameCard';


function Home() {
  return (
    <div className="App">
      <NavBar/>
      <HeroBanner/>
      <GameCardGrid/>
    </div>
  );
}

export default Home