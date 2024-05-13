// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectInfoContext } from "@contexts/ProjectInfoContextProvider";

// ... Components
import ExcelDashboardSection from "@pages/dashboard_page/sections/ExcelDashboardSection.jsx";
import DefaultDashboardSection from "@pages/dashboard_page/sections/DefaultDashboardSection.jsx";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DashboardSection = () => {
  const { project_cat } = useContext(ProjectInfoContext);
  const project_category = project_cat;
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  if (project_category === "excel") {
    return <ExcelDashboardSection />;
  } else {
    return <DefaultDashboardSection />;
  }
};

export default DashboardSection;
