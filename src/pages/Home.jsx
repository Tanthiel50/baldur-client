import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import GameCardGrid from "./components/GameCardGrid";
import "../App.scss";
import EventBox from "./components/EventBox";
import CategoriesButton from "./components/CategoriesButtons";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <div>
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
            <Link
              to="/dormir"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Voir tous les hotels
            </Link>
          </button>
        </div>
        <div className="secondBox">
          <h2>Pour les aventuriers chineurs</h2>
          <p>Découvrez les marchands de Baldurs</p>
          <GameCardGrid
            apiUrl="interestpoints/category/1"
            cardColors={{
              bgColor: "rgba(17,17,27,0.3)",
              textColor: "#FFFFFF",
              btnColor: "rgba(252, 207, 49, 1)",
            }}
          />
          <button className="button-5">
          <Link
              to="/boutiques"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Voir toutes les boutiques
            </Link>
          </button>
        </div>
      </div>
      <EventBox />
      <CategoriesButton />
      <Footer />
    </div>
  );
}

export default Home;
