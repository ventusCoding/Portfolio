import React from "react";
import AboutMeSection from "../../components/Sections/AboutMeSection/AboutMeSection";

import HomeSection from "../../components/Sections/HomeSection/HomeSection";
import Services from "../../components/Sections/ServicesSection/Services";
import TechnologiesSection from "../../components/Sections/TechnologiesSection/TechnologiesSection";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <AboutMeSection />
      <Services />
      <TechnologiesSection />
    </div>
  );
};

export default Home;
