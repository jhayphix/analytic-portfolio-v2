// ... React modules
import { useState } from "react";

// ... Context

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
  

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, category) => {
    setActiveTab(index);
    setCategory(category);
  };

  
  
  const tabs = story_tab;
  

  

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="mb-3" key={activeTab}>
      <NavTab
        activeTab={activeTab}
        tabs={tabs}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default ProjectStoryTab;
