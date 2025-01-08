import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiBardLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { sidebarLinks } from "../../data/SidebarLinks.js";
import { GoGear } from "react-icons/go";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const { t } = useTranslation();
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.show : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`${styles.sidebar} ${
          isVisible ? styles.sidebarVisible : ""
        }`}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <div className={styles.sidebarHeader}>
          <h2>Harmonya</h2>
        </div>
        <nav>
          <ul>
            {sidebarLinks.map((link, index) =>
              link.section ? (
                <li key={`section-${index}`} className={styles.section}>
                  {link.section} <hr className={styles.line} />
                </li>
              ) : (
                <li key={index}>
                  <NavLink
                    onClick={onClose}
                    to={link.path as string}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }
                    style={link.customStyle || {}}
                  >
                    {link.icon} {t(link.label)}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className={styles.sidebarFooter}>
          <NavLink to="intelligence" className={styles.navLink}>
            <RiBardLine size={22} /> Harmonya intelligence
          </NavLink>
          <div className={styles.logout}>
            <button>
              <LuLogOut
                size={22}
                style={{ transform: "scaleX(-1)" }}
                color="red"
              />
            </button>
            <button>
              <MdOutlineHelpOutline size={30} color="#8C8C8F" />
            </button>
            <button onClick={() => navigate("/Settings/compte")}>
              <GoGear size={30} color="#8C8C8F" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
