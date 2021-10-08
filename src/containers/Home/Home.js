import React from "react";
import AboutMeSection from "../../components/Sections/AboutMeSection/AboutMeSection";
import ContactMeSection from "../../components/Sections/ContactMeSection/ContactMeSection";

import HomeSection from "../../components/Sections/HomeSection/HomeSection";
import Services from "../../components/Sections/ServicesSection/Services";
import TechnologiesSection from "../../components/Sections/TechnologiesSection/TechnologiesSection";
import WorksSection from "../../components/Sections/WorksSection/WorksSection";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <AboutMeSection />
      <Services />
      <TechnologiesSection />
      <WorksSection/>
      <ContactMeSection/>
    </div>
  );
};

export default Home;
