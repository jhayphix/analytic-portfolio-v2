import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "@contexts/NavigationContextProvider";

const MobileNav = () => {
  const { mobile_nav_links } = useContext(NavigationContext);
  const nav_links_db = mobile_nav_links;

  return (
    <div className={`mobile_nav_btn_container d-sm-none`}>
      {/* Add name, icon .... if needed */}
      {nav_links_db?.map(({ icon, path, end }, index) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? "mobile_nav_btn mobile_nav_active" : "mobile_nav_btn"
            }
            key={index}
            to={path}
            end={end}
          >
            {icon}
          </NavLink>
        );
      })}

      {/* <li className="nav-item nav_item" key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav_link py-1 active_nav_link"
                    : "nav-link nav_link py-1"
                }*/}
    </div>
  );
};

export default MobileNav;
