// ... React modules
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import PortfolioBreadCrumb from "@components/breadcrumb/PortfolioBreadCrumb";
import DashboardStoryTab from "@components/tabs/DashboardStoryTab";
import PageBannerSection from "@components/banners/PageBannerSection";
// import ProjectBanner from "@components/banners/ProjectBanner";

import ProjectDashboardSection from "@pages/project_details_page/sections/ProjectDashboardSection";
import StorySection from "@pages/project_details_page/sections/StorySection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ProjectDetailsPage = () => {
  // Context
  const {
    active_dashboard_story_tab, active_project, getProjectDetailsPramas
  } = useContext(ProjectContext);



  // Set page params
  const params = useParams()
  useEffect(() => {
    getProjectDetailsPramas(params)
  },[params, getProjectDetailsPramas])

  
  const project_category = active_project?.categories?.[0]?.title || "Category";
  const project_title = active_project?.title || "Title";

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="container-lg" style={{ paddingBottom: "60px" }}>

      <PageBannerSection pageName={project_title} />

      <PortfolioBreadCrumb
        project_category={project_category}
        project_name={project_title}
      />

      <DashboardStoryTab />

      {active_dashboard_story_tab === "story" ? 
        <StorySection />
       : (
        <ProjectDashboardSection/>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
