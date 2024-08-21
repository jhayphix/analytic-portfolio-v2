// ... React modules
import { createContext, useState } from "react";

// ... Context
// import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components

// ... Assets

export const ProjectContentContext = createContext({
  project_params: "",
  setProjectParams: () => {},

  project_cat: "", project_id: "",
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectContentContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Extract context
  |----------------------------------------
  */
  // const { filteredProjects } = useContext(ProjectContext);

  const [project_params, setProjectParams] = useState("")
  const project_cat = project_params?.cat;
  const project_id = project_params?.id;

  // const filtered_project = filteredProjects?.find(
  //   (project) => project?._id === project_id
  // );

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    project_params, setProjectParams, project_cat, project_id
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProjectContentContext.Provider value={context}>
      {children}
    </ProjectContentContext.Provider>
  );
};

export default ProjectContentContextProvider;
