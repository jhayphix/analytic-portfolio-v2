// ... React modules
import { useContext, useEffect } from "react";

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
const ProjectStoryTab = ({ story_tab, setCategory }) => {
  // Context
  const {
    active_project_story_index,
    setActiveProjectStoryIndex,
    setActiveProjectStoryTab,
  } = useContext(ProjectContext);

  const handleTabClick = (index, category) => {
    setActiveProjectStoryIndex(index);
    setCategory(category);
  };

  const tabs = story_tab;

  const first_project_story_tab_name = tabs?.[0]?.toLowerCase();

  useEffect(() => {
    setActiveProjectStoryTab(first_project_story_tab_name)
  }, [setActiveProjectStoryTab, first_project_story_tab_name])

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="mb-3" key={active_project_story_index}>
      <NavTab
        activeTab={active_project_story_index}
        tabs={tabs}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default ProjectStoryTab;
