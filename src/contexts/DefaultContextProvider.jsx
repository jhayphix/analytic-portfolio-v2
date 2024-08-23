// Refrence from this context
// import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
// const { portrait_img } = useContext(DefaultContext);

// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import DefDashboardImg1 from "@assets/images/default_dashboard/dashboard_img_1.png";
import DefDashboardImg2 from "@assets/images/default_dashboard/dashboard_img_2.png";
import DefDashboardImg3 from "@assets/images/default_dashboard/dashboard_img_3.png";
import handHoldFeather from "@assets/images/icons/hand_hold_feather.svg";
import PortraitImg from "@assets/images/portrait/avatar_dark.png";

export const DefaultContext = createContext({
  def_project_img_1: "",
  def_project_img_2: "",
  def_project_img_3: "",
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DefaultContextProvider = ({ children }) => {
  const def_project_img_1 = DefDashboardImg1;
  const def_project_img_2 = DefDashboardImg2;
  const def_project_img_3 = DefDashboardImg3;

  const hand_hold_feather = handHoldFeather;
  const portrait_img = PortraitImg;

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    def_project_img_1,
    def_project_img_2,
    def_project_img_3,
    hand_hold_feather,
    portrait_img,
  };
  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <DefaultContext.Provider value={context}>
      {children}
    </DefaultContext.Provider>
  );
};

export default DefaultContextProvider;
