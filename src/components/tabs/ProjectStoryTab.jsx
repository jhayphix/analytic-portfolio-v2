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

  const handleProjectStoryTabClick = (index, category) => {
    setActiveProjectStoryIndex(index);
    setCategory(category);
  };

  const project_story_tab_names = story_tab;

  const first_project_story_tab_name =
    project_story_tab_names?.[0]?.toLowerCase();

  useEffect(() => {
    setActiveProjectStoryTab(first_project_story_tab_name);
  }, [setActiveProjectStoryTab, first_project_story_tab_name]);

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="mb-3" key={active_project_story_index}>
      <NavTab
        activeTabIndex={active_project_story_index}
        tab_names={project_story_tab_names}
        handleTabClick={handleProjectStoryTabClick}
      />
    </div>
  );
};

export default ProjectStoryTab;
