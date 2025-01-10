import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../../data/SidebarLinks.js";
import { FiBell, FiUser } from "react-icons/fi";
import { MdOutlineTranslate } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar component
import { RiMenuUnfold4Line } from "react-icons/ri";
import { useTranslation } from "react-i18next"; // Import useTranslation

import "./Navbar.css";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation(); // Use the translation hook
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const matchingLink = sidebarLinks.find((link) => link.path === currentPath);

  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !(formRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="navbar">
        <button className="menu-icon" onClick={toggleSidebar}>
          <RiMenuUnfold4Line className="menu-icon-icon" />
        </button>
        <h2 className="navbar-title">
          {t(matchingLink?.label) || window.location.pathname.split("/")[1]}
        </h2>
        <div className="navbar-icons">
          <FiBell size={24} />
          <div
            ref={formRef}
            className="manage"
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
            <MdOutlineTranslate size={24} />
            <div
              className={isOpen ? "manage-menu active-manage" : "manage-menu"}
            >
              <ul>
                <li onClick={() => handleLanguageChange("fr")}>
                  <span>Français</span>
                </li>
                <li onClick={() => handleLanguageChange("en")}>
                  <span>English</span>
                </li>
                <li onClick={() => handleLanguageChange("ar")}>
                  <span>Arabic</span>
                </li>
                <li onClick={() => handleLanguageChange("es")}>
                  <span>Spanish</span>
                </li>
              </ul>
            </div>
          </div>
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
