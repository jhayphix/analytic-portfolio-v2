import React, { useContext } from "react";
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";
import ProjectStoryTab from "@components/tabs/ProjectStoryTab";

const StorySection = () => {
  const { active_project, active_project_story_tab, setActiveProjectStoryTab } =
    useContext(ProjectContext);

  const project_stories = active_project?.stories;
  const all_story_tabs = project_stories?.map((item) => item?.tab);

  const filtered_story = project_stories?.find(
    (story) =>
      story?.tab?.toLowerCase() === active_project_story_tab?.toLowerCase()
  );

  const filtered_story_content = filtered_story?.content || [];

  return (
    <div className="__story_section">
      <ProjectStoryTab
        story_tab={all_story_tabs}
        setCategory={setActiveProjectStoryTab}
      />

      <div className="__story_section_container py-5">
        <div className="__story_container col-md-8 col-12">
          {filtered_story_content.length > 0 ? (
            filtered_story_content.map((story, index) => {
              const { _type, style, children, listItem, asset, alt, caption } =
                story;
              const textContent = children
                ? children.map((child) => child.text).join("")
                : "";

              switch (_type) {
                // When it is a block type
                case "block":
                  return (
                    <div
                      key={index}
                      className={`__story_block ${style} ${
                        listItem === "bullet" ? "__bullet_list" : ""
                      }`}
                    >
                      {textContent}
                    </div>
                  );

                // When it is an image
                case "image":
                  return (
                    <div key={index} className="__story_image">
                      <img src={asset?._ref} alt={alt || "Story image"} />
                      {caption && <p className="__image_caption">{caption}</p>}
                    </div>
                  );

                // When it is a quote
                case "quote":
                  return (
                    <blockquote key={index} className="__story_quote">
                      {textContent}
                    </blockquote>
                  );

                // When it is a lecture
                case "list":
                  return (
                    <ul
                      key={index}
                      className={`__story_list ${
                        listItem === "bullet" ? "__bullet_list" : ""
                      }`}
                    >
                      {children.map((child, idx) => (
                        <li key={idx}>{child.text}</li>
                      ))}
                    </ul>
                  );

                // When it is embed
                case "embed":
                  return (
                    <div
                      key={index}
                      className="__story_embed"
                      dangerouslySetInnerHTML={{ __html: story.url }}
                    />
                  );

                default:
                  return null;
              }
            })
          ) : (
            <div>Story is currently unavailable...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorySection;
