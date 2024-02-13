import React from "react";
import HeroBanner from "./components/HeroBanner";
import GameCardGrid from "./components/GameCardGrid";
import "../App.scss";
import EventBox from "./components/EventBox";
import CategoriesButton from "./components/CategoriesButtons";
import { Link } from "react-router-dom";

function Home() {

  

  return (
    <div className="App">
      <HeroBanner />
      {/* Première boîte pour les auberges */}
      <div className="pt-5 firstBox">
        <h2>Pour les aventuriers qui se reposent</h2>
        <p>Découvrez les auberges de Baldurs</p>
        <GameCardGrid
          apiUrl="interestpoints/category/1"
          cardColors={{
            bgColor: "rgba(17,17,27,0.3)",
            btnColor: "rgba(252, 207, 49, 1)",
          }}
        />
        <button className="button-5">
          <Link to="/categories/1" style={{ textDecoration: "none", color: "inherit" }}>
            Voir toutes les auberges
          </Link>
        </button>
      </div>
      {/* Deuxième boîte pour les marchands */}
      <div className="secondBox">
        <h2>Pour les aventuriers chineurs</h2>
        <p>Découvrez les marchands de Baldurs</p>
        <GameCardGrid
          apiUrl="interestpoints/category/2"
          cardColors={{
            bgColor: "rgba(17,17,27,0.3)",
            textColor: "#FFFFFF",
            btnColor: "rgba(252, 207, 49, 1)",
          }}
        />
        <button className="button-5">
          <Link to="/categories/2" style={{ textDecoration: "none", color: "inherit" }}>
            Voir toutes les boutiques
          </Link>
        </button>
      </div>
      <EventBox />
      <CategoriesButton />
    </div>
  );
}

export default Home;
