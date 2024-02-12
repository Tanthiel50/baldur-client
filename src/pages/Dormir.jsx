import React from "react";
import backgroundImageUrl from "./images/GBteXLaKTMW6z8G5Y7sMs6.jpg";
import PageHeader from "./components/PageHeader";
import ArticlesGrid from "./components/AticleGrid";

const Dormir = () => {
  return (
    <div style={{backgroundColor:'#0D1B2A', textAlign:'center'}}>
      <PageHeader
        title="Les Auberges"
        breadcrumbPath="Auberges"
        backgroundImageUrl={backgroundImageUrl}
      />
      <h2 color="black" style={{paddingTop:'3rem'}}>Découvrez les auberges de Baldur</h2>
      <ArticlesGrid apiUrl={'http://127.0.0.1:8000/api/interestpoints/category/2'} />
    </div>
  );
};

export default Dormir;
