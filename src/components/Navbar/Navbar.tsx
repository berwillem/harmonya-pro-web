import React from "react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../../data/SidebarLinks.js"; // Import sidebarLinks array
import { FiBell, FiGlobe, FiUser } from "react-icons/fi"; // Icons for Navbar
import { MdOutlineTranslate } from "react-icons/md";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");
  const matchingLink = sidebarLinks.find((link) => link.path === currentPath);

  return (
    <div className="navbar">
      <h2 className="navbar-title">{matchingLink?.label || "Home"}</h2>

      <div className="navbar-icons">
        <FiBell size={24} />
        <MdOutlineTranslate size={24} />
        <FiUser size={24} />
      </div>
    </div>
  );
};

export default Navbar;
