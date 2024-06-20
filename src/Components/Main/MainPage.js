import React from 'react';
import MainSection from "./MainSection";
import BuyNowSection from "./BuyNowSection";
import Services from "./Services";
import './MainStyles.css'

function MainPage() {
  return (
    <>
      <MainSection/>

      <BuyNowSection/>

      <Services/>
    </>
  );
}

export default MainPage;