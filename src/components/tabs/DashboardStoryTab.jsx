// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import NavTab from "@components/tabs/NavTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DashboardStoryTab = () => {
  const { dashboard_story_tabs, setActiveDashboardStoryTab, active_dashboard_story_index, setActiveDashboardStoryIndex } = useContext(ProjectContext);

  const handleTabClick = (tab_index, tab_name) => {
    setActiveDashboardStoryIndex(tab_index);
    setActiveDashboardStoryTab(tab_name);
  };
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="mb-lg-4 my-3">
      <NavTab
        activeTab={active_dashboard_story_index}
        tabs={dashboard_story_tabs}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default DashboardStoryTab;
