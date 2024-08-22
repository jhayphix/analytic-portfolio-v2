// ... React modules
import React, { useContext } from "react";

// ... Components
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";
import ProjectStoryTab from "@components/tabs/ProjectStoryTab";

// ... Rich Content
import BlockContent from "@components/rich_content/BlockContent";
import ImageContent from "@components/rich_content/ImageContent";
import LinkContent from "@components/rich_content/LinkContent";

// Display the marks as classes
const renderMarks = (marks) => {
  const markClasses = {
    strong: "__text_strong",
    em: "__text_italic",
    underline: "__text_underline",
    highlight: "__text_highlight", // Add additional classes if needed
  };

  return marks?.map((mark) => markClasses[mark] || "").join(" ");
};

const StorySection = () => {
  // Contents
  const { active_project, active_project_story_tab, setActiveProjectStoryTab } =
    useContext(ProjectContext);

  // Project Variables
  const project_stories = active_project?.stories;
  const all_story_tabs = project_stories?.map((item) => item?.tab);

  // Get the active project story
  const filtered_story = project_stories?.find(
    (story) =>
      story?.tab?.toLowerCase() === active_project_story_tab?.toLowerCase()
  );

  // Get the content of the story
  const filtered_story_content = filtered_story?.content || [];

  const picked_story = filtered_story_content?.slice(20);
  console.log(picked_story)

  return (
    <div className="__story_section">
      <ProjectStoryTab
        story_tab={all_story_tabs}
        setCategory={setActiveProjectStoryTab}
      />

      <div className="__story_section_container py-5">
        <div className="__story_container">
          {filtered_story_content.length > 0 ? (
            filtered_story_content.map((story, index) => {
              const {
                _type,
                style,
                children,
                listItem,
                asset,
                alt,
                caption,
                markDefs,
              } = story;

              switch (_type) {
                case "block":
                  return (
                    <>
                      {/* All the markdefs what has link */}
                      {markDefs?.map((item) => item?._type).includes("link") &&
                      children ? (
                        <LinkContent
                          key={index}
                          index={index}
                          style={style}
                          children={children}
                          renderMarks={renderMarks}
                          markDefs={markDefs}
                        />
                      ) : (
                        <BlockContent
                          key={index}
                          index={index}
                          style={style}
                          listItem={listItem}
                          children={children}
                          renderMarks={renderMarks}
                        />
                      )}
                    </>
                  );

                case "image":
                  return (
                    <ImageContent
                      key={index}
                      index={index}
                      asset={asset}
                      alt={alt}
                      caption={caption}
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
