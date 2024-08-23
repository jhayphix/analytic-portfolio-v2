// Refrence to this context
// import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";
// const { portrait_img } = useContext(ProfileContext);

// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets

// Register variables
export const ProfileContext = createContext({});
/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProfileContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {};
  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
