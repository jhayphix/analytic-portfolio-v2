// ... React modules

// ... Context

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import ServiceSection from "@pages/home_page/sections/ServiceSection";
// import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
// import ContactSection from "@pages/home_page/sections/ContactSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ServicePage = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageBannerSection pageName="Services" />
      <ServiceSection showHeader={false} />
      {/* <ProjectStatSection /> */}
      {/* <ContactSection /> */}
    </>
  );
};

export default ServicePage;
