// ... React modules

// ... Contexts
import ProjectContextProvider from "@contexts/ProjectContextProvider";
import ThemeContextProvider from "@contexts/ThemeContextProvider";
import NavigationContextProvider from "@contexts/NavigationContextProvider";
import DefaultContextProvider from "@contexts/DefaultContextProvider.jsx";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <>
      <ThemeContextProvider>
        <NavigationContextProvider>
          <DefaultContextProvider>
            <ProjectContextProvider>{children}</ProjectContextProvider>
          </DefaultContextProvider>
        </NavigationContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default AppContextProvider;
