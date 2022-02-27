import React from "react";
import "./Home.css";
import HomeImg from "./img/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
