// ... React modules
import { useContext } from "react";
import { BiPlusCircle } from "react-icons/bi";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components

// ... Assets
import DefDashboardImg1 from "@assets/images/projects/default_dashboard/dashboard_img_1.png";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectCard = ({ project }) => {
  /*
    |----------------------------------------
    | Context and variable extration
    |----------------------------------------
  */
  const { handleProjectClick } = useContext(ProjectContext);

  // Extract variables from data (Project data)
  const project_category = project?.categories?.[0]?.title || "Category";
  const project_main_image = project?.main_image?.asset?.url || "";
  const project_title = project?.title || "Title";
  const project_type = project?.project_type || "Type";

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="work-box">
      {/* Image */}
      <div
        onClick={() => handleProjectClick(project)}
        data-gallery="portfolioGallery"
        className="portfolio-lightbox cursor_pointer"
        role="link"
      >
        <div className="work-img">
          <img
            src={project_main_image || DefDashboardImg1}
            alt={project_title}
            className="img-fluid"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if the default image fails
              e.target.src = DefDashboardImg1; // Set the default image on error
            }}
          />
        </div>
      </div>

      {/* Work content */}
      <div className="work-content">
        <div className="row">
          <div className="col-sm-9">
            <h2 className="w-title mb-2"> {project_title} </h2>
            <div className="w-more">
              <span className="w-category text_accent_1">
                {project_category}
              </span>{" "}
              / <span className="w-date">{project_type}</span>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="w-like">
              <div
                className="plus_link cursor_pointer"
                onClick={() => handleProjectClick(project)}
                role="link"
              >
                {" "}
                <BiPlusCircle className="plus_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = [
  {
    id: "default",
    name: "Bike sales",
    img: DefDashboardImg1,
    category: "excel",
    type: "Personal",
  },
];
export default ProjectCard;
