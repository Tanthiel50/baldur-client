import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import GameCardGrid from "./components/GameCardGrid";
import "../App.scss";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <div>
        <div className="pt-5 firstBox">
          <h2>Pour les aventuriers qui se reposent</h2>
          <p>Découvrez les hotels de Baldurs</p>
        <GameCardGrid
          apiUrl="articles/category/5"
          cardColors={{
            bgColor: "rgba(17,17,27,0.3)",
            btnColor: "rgba(252, 207, 49, 1)",
          }}
        />
        <button className="button-5">Voir tous les hotels</button>
        </div>
        <div className="secondBox">
        <h2>Pour les aventuriers chineurs</h2>
        <p>Découvrez les boutiques de Baldurs</p>
        <GameCardGrid
          apiUrl="articles/category/8"
          cardColors={{
            bgColor: "rgba(17,17,27,0.3)",
            textColor: "#FFFFFF",
            btnColor: "rgba(252, 207, 49, 1)",
          }}
        />
        <button className="button-5">Voir toutes les boutiques</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
