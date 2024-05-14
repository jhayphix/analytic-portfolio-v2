import { FaHome, FaBriefcase, FaPhone } from "react-icons/fa";

/*
  |----------------------------------------
  | Navigation
  |----------------------------------------
*/

const base_route = "analytic-portfolio";
export const navigation_db = {
  base_route: base_route,
  nav_links: [
    {
      name: "Home",
      path: `${base_route}/`,
      end: true,
    },
    {
      name: "Portfolio",
      path: `${base_route}/portfolio`,
      end: false,
    },
    {
      name: "About",
      path: `${base_route}/about`,
      end: false,
    },
    {
      name: "Services",
      path: `${base_route}/services`,
      end: false,
    },
    {
      name: "Contact",
      path: `${base_route}/contact`,
      end: false,
    },
  ],

  home: {
    name: "Home",
    path: `/${base_route}/`,
  },
  about: {
    name: "About",
    path: `/${base_route}/about`,
  },
  portfolio: {
    name: "Portfolio",
    path: `/${base_route}/portfolio`,
  },
  dashboard: {
    name: "Project",
    path: `/${base_route}/project/:cat/:id`,
  },
  service: {
    name: "Services",
    path: `/${base_route}/services`,
  },
  contact: {
    name: "Contact",
    path: `/${base_route}/contact`,
  },
};

const mobile_icon_size = 20;
export const mobile_navigation_db = {
  base_route: base_route,
  nav_links: [
    {
      name: "Home",
      path: `${base_route}/`,
      icon: <FaHome size={mobile_icon_size} />,
      end: true,
    },
    {
      name: "Portfolio",
      path: `${base_route}/portfolio`,
      icon: <FaBriefcase size={mobile_icon_size} />,
      end: false,
    },
    {
      name: "Contact",
      path: `${base_route}/contact`,
      icon: <FaPhone size={mobile_icon_size} />,
      end: false,
    },
  ],

  home: {
    name: "Home",
    path: `/${base_route}/`,
  },
  portfolio: {
    name: "Portfolio",
    path: `/${base_route}/portfolio`,
  },
  contact: {
    name: "Contact",
    path: `/${base_route}/contact`,
  },
};
