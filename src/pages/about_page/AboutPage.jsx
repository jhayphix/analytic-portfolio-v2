// ... React modules

// ... Context

// ... Components
import AboutSection from "@pages/home_page/sections/AboutSection";
import ServiceSection from "@pages/home_page/sections/ServiceSection";
import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
import PageBannerSection from "@components/banners/PageBannerSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const AboutPage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageBannerSection pageName="About Me" />
      <AboutSection />
      <ProjectStatSection />
      <ServiceSection showHeader={true} />
    </>
  );
};

export default AboutPage;
