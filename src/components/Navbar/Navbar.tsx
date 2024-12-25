import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../../data/SidebarLinks.js";
import { FiBell, FiUser } from "react-icons/fi";
import { MdOutlineTranslate } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar component
import { RiMenuUnfold4Line } from "react-icons/ri";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const matchingLink = sidebarLinks.find((link) => link.path === currentPath);

  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <>
      <div className="navbar">
        <button className="menu-icon" onClick={toggleSidebar}>
          <RiMenuUnfold4Line className="menu-icon-icon" />
        </button>
        <h2 className="navbar-title">
          {matchingLink?.label || window.location.pathname.split("/")[1]}
        </h2>
        <div className="navbar-icons">
          <FiBell size={24} />
          <MdOutlineTranslate size={24} />
          <FiUser size={24} />
        </div>
      </div>
      <Sidebar
        isVisible={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};

export default Navbar;
