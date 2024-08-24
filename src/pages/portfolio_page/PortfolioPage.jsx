// ... React modules

// ... Context

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
import PortfolioSection from "@pages/home_page/sections/PortfolioSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const PortfolioPage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <section>
      <PageBannerSection pageName="Portfolio" />
      <PortfolioSection showHeader={false} />
      <ProjectStatSection />
    </section>
  );
};

export default PortfolioPage;
