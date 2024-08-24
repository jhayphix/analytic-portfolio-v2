// ... React modules
import { useContext } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const SocialIcons = () => {
  const { fullContactSocialIcons } = useContext(ProfileContext);

  return (
    <div id="social_icons_container" className="">
      {fullContactSocialIcons?.map((socialIcons, index) => {
        const { url, target, style, icon } = socialIcons;
        return (
          <a
            key={index}
            href={url}
            target={target}
            rel="noreferrer"
            className={`social_link ${style}`}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
