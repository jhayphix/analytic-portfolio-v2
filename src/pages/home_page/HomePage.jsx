// ... React modules

// ... Context

// ... Components
import HeroSection from "@pages/home_page/sections/HeroSection";
import AboutSection from "@pages/home_page/sections/AboutSection";
import PortfolioSection from "@pages/home_page/sections/PortfolioSection";
import ServiceSection from "@pages/home_page/sections/ServiceSection";
import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
import ContactSection from "@pages/home_page/sections/ContactSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const HomePage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServiceSection />
      <ProjectStatSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
