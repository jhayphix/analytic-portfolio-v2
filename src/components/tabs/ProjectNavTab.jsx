// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components
import NavTab from "@components/tabs/NavTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectNavTab = () => {
  const {
    active_project_tab_index,
    projectTabs,
    setProjectTabIndex,
    setActiveProjectTabName,
  } = useContext(ProjectContext);

  const handleProjectTabClick = (index, category) => {
    setProjectTabIndex(index);
    setActiveProjectTabName(category);
  };

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <NavTab
      activeTabIndex={active_project_tab_index}
      tab_names={projectTabs}
      handleTabClick={handleProjectTabClick}
    />
  );
};

export default ProjectNavTab;
