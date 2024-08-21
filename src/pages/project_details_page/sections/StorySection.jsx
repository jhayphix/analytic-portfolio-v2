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
    <div className="story_section">
      <ProjectStoryTab
        story_tab={all_story_tabs}
        setCategory={setActiveProjectStoryTab}
      />

      <div className="story_section_container row justify-content-center py-5">
        <div className="__story_container col-md-8 col-12">
          {filtered_story_content.length > 0 ? (
            filtered_story_content.map((story, index) => {
              const { _type, style, children, listItem } = story;
              const textContent = children.map((child) => child.text).join("");

              if (_type === "block") {
                return (
                  <div
                    key={index}
                    className={`story-block ${style} ${
                      listItem === "bullet" ? "bullet-list" : ""
                    }`}
                    style={{ marginBottom: "1rem" }} // Add spacing between blocks
                  >
                    {textContent}
                  </div>
                );
              }

              return null;
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
