// ... React modules
import { createContext, useState, useEffect} from "react";

// ... Context

// ... Components

// ... Assets
import {fetchPosts, fetchProjectCategories} from "@src/config.js"
import { dashboard_story_tabs } from "@data/tab_db";

export const ProjectContext = createContext({
  activeTab: "",
  setActiveTab: () => {},
  category: "",
  setCategory: () => {},
  changeProjectCategory: () => {},

  active_dashboard_story_tab: "", setActiveDashboardStoryTab: () => {},
  active_dashboard_story_index: "", setActiveDashboardStoryIndex: () => {},
  active_project_story_tab: "", setActiveProjectStoryTab: () => {},

  projectTabs: [],
  dashboard_story_tabs: [],
  handleTabClick: () => {},
  projects: [],
  filteredProjects: [],

  posts: [],
  setPosts: () => {},
  loadPosts: () => {},

  active_project: "",
  setActiveProject: () => {}, 
  getProjectDetailsPramas: () => {},
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project config
  |----------------------------------------
  */
  // Set states
  const [active_project, setActiveProject] = useState({})
  const [activeTab, setActiveTab] = useState(0);
  const [active_dashboard_story_index, setActiveDashboardStoryIndex] = useState(1);
  const [active_dashboard_story_tab, setActiveDashboardStoryTab] = useState("story")
  const [active_project_story_tab, setActiveProjectStoryTab] = useState("introduction");
  const [category, setCategory] = useState("all");
  const [posts, setPosts] = useState([]);
  const [projectTabs, setProjectTabs] = useState(["All"]);

  /*
  |----------------------------------------
  | Fetch Data
  |----------------------------------------
  */
  // Fetch all posts (Projects)
  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
  };
  // Fetch project's categories eg. Excel, Python, Timeseries
  const loadProjectCategories = async () => {
    const fetchedCategories = await fetchProjectCategories();
    const titlesArray = ["All", ...fetchedCategories?.map((item) => item.title)]
    setProjectTabs(titlesArray);
  };
  // Lood the posts (Projects)
  useEffect(() => {
    loadPosts()
    loadProjectCategories()
  }, [])


  /*
  |----------------------------------------
  | Filter projects
  |----------------------------------------
  */
  // Filter projects base on selected category or tab clicked
  const projects = posts;
  const filteredProjects = category === "all"
  ? projects
  : projects?.filter((project) =>
      project?.categories?.some((cat) =>
        cat?.title?.toLowerCase() === category?.toLowerCase()
      )
    );

  // Get active project
  const getProjectDetailsPramas = (params) => {
    const active_project_id = params?.id
    if(active_project_id){
      const filtered_active_project = projects?.find(
         (project) => project?._id === active_project_id
        );
      setActiveProject(filtered_active_project)
    }
  }

  /*
  |----------------------------------------
  | Tabs and Categories
  |----------------------------------------
  */
  // Get the tab which is clicked's index and category
  const handleTabClick = (index, category) => {
    setActiveTab(index);
    setCategory(category);
  };
  
  // Change selected project category (eg. Excel) when different tab is clicked
  const changeProjectCategory = (category) => {
    const project_category = category?.toLowerCase();
    setCategory(project_category);

    projectTabs?.forEach((tab) => {
      if (tab?.toLowerCase() === project_category) {
        const index = projectTabs?.indexOf(tab);
        setActiveTab(index);
      }
    });
  };


  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    activeTab, setActiveTab,
    active_dashboard_story_tab, setActiveDashboardStoryTab,
    active_dashboard_story_index, setActiveDashboardStoryIndex,
    active_project_story_tab, setActiveProjectStoryTab,
    active_project, setActiveProject, 
    category, setCategory, 
    changeProjectCategory,
    dashboard_story_tabs,
    getProjectDetailsPramas,
    handleTabClick,
    posts, setPosts, loadPosts,
    projectTabs, 
    projects, filteredProjects,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
