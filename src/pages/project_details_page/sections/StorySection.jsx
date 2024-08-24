// ... React modules
import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

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
  const { active_project } =
    useContext(ProjectContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const storyTabParamsName = searchParams.get("tab") || "tab1";

  const handleTabSearchParams = (tab_name) => {
    setSearchParams({ tab: tab_name });
  };

  // Project Variables
  const project_stories = active_project?.stories;
  const all_story_tabs = project_stories?.map((item) => item?.tab);

  // Get the active project story
  const filtered_story = project_stories?.find(
    (story) => story?.tab?.toLowerCase() === storyTabParamsName?.toLowerCase()
  );

  // Get the content of the story
  const filtered_story_content = filtered_story?.content || [];

  return (
    <div className="__story_section">
      <ProjectStoryTab
        story_tab={all_story_tabs}
        handleTabSearchParams={handleTabSearchParams}
      />

      <div
        className="__story_section_container py-5"
      >
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
                crop,
                hotspot,
              } = story;

              switch (_type) {
                case "block":
                  return (
                    <>
                      {/* All the markdefs what has link */}
                      {markDefs?.map((item) => item?._type).includes("link") &&
                      children ? (
                        <div key={index}>
                          <LinkContent
                            index={index}
                            style={style}
                            children={children}
                            renderMarks={renderMarks}
                            markDefs={markDefs}
                          />
                        </div>
                      ) : (
                        <div key={index}>
                          <BlockContent
                            index={index}
                            style={style}
                            listItem={listItem}
                            children={children}
                            renderMarks={renderMarks}
                          />
                        </div>
                      )}
                    </>
                  );

                case "image":
                  return (
                    <div key={asset?._key}>
                      <ImageContent
                        index={index}
                        asset={asset}
                        alt={alt}
                        caption={caption}
                        crop={crop}
                        hotspot={hotspot}
                      />
                    </div>
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
