import React from "react";
import backgroundImageUrl from "./images/GBteXLaKTMW6z8G5Y7sMs6.jpg";
import PageHeader from "./components/PageHeader";
import MyNavbar from "./components/NavBar";
import Footer from "./components/Footer";
import ArticlesGrid from "./components/AticleGrid";

const Dormir = () => {
  return (
    <div style={{backgroundColor:'#0D1B2A', textAlign:'center'}}>
      <MyNavbar />
      <PageHeader
        title="Les Hotels"
        breadcrumbPath="Hotels"
        backgroundImageUrl={backgroundImageUrl}
      />
      <h2 color="black" style={{paddingTop:'3rem'}}>Découvrez les hotels de Baldur</h2>
      <ArticlesGrid apiUrl={'http://127.0.0.1:8000/api/articles/category/5'} />
      <Footer />
    </div>
  );
};

export default Dormir;
