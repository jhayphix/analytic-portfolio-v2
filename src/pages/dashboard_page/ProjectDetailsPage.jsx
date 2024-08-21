// ... React modules
import { useContext } from "react";

// ... Context
//import { ProjectContentContext } from "@contexts/ProjectContentContextProvider";
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import PortfolioBreadCrumb from "@components/breadcrumb/PortfolioBreadCrumb";
import DashboardStoryTab from "@components/tabs/DashboardStoryTab";
import PageBannerSection from "@components/banners/PageBannerSection";
// import ProjectBanner from "@components/banners/ProjectBanner";

import ProjectDetailsSection from "@pages/dashboard_page/sections/ProjectDetailsSection";
import StorySection from "@pages/dashboard_page/sections/StorySection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ProjectDetailsPage = () => {
  // Context
  const {
    active_dashboard_story_tab, active_project,

    // To delete
    project_story, project_story_nav, project_name, project_category, project_cat
  } = useContext(ProjectContext);

  console.log("Active project => ", active_project)

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="container-lg" style={{ paddingBottom: "60px" }}>

      <PageBannerSection pageName={project_name} />
      {/* <ProjectBanner
        projectImg={project_img ? project_img : def_dashboard_img_1}
        projectName={project_name ? project_name : project_category}
      /> */}

      <PortfolioBreadCrumb
        project_category={project_category}
        project_cat={project_cat}
        project_name={project_name}
      />

      {/* Work on category == */}
      <DashboardStoryTab />

      {active_dashboard_story_tab === "story" ? 
        <StorySection
          project_story={project_story}
          story_tab={project_story_nav}
        />
       : (
        <ProjectDetailsSection />
      )}
    </div>
  );
};

export default ProjectDetailsPage;
