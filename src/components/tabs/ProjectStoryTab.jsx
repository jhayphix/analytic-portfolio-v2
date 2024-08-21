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
const ProjectStoryTab = ({ story_tab, setCategory }) => {
  // Context
  const { active_project_story_index, setActiveProjectStoryIndex } =
    useContext(ProjectContext);

  const handleTabClick = (index, category) => {
    setActiveProjectStoryIndex(index);
    setCategory(category);
  };

  const tabs = story_tab;

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
