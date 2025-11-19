import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faUtensils, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
      end: true,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Cuisine",
      path: "/cuisine",
      icon: faUtensils,
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: faStar,          
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          Re<span>cipe</span>Flow
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              to={link.path}
              end={link.end}
              key={link.name}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
