import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiBardLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { sidebarLinks } from "../../data/SidebarLinks.js";
import { GoGear } from "react-icons/go";

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
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
      // style={{
      //   opacity: isVisible ? 1 : 0,
      //   zIndex: isVisible ? 4 : -1,
      // }}
    >
      <div
        className={`${styles.sidebar} ${
          isVisible ? styles.sidebarVisible : ""
        }`}
        // style={{
        //   transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        //   transition: "0.5s",
        //   boxShadow: isVisible
        //     ? "rgba(0, 0, 0, 0.5) 20px 0px 100px 0px"
        //     : "none",
        // }}
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
                    to={link.path as string}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }
                    style={link.customStyle || {}}
                  >
                    {link.icon} {link.label}
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
            <button onClick={() => navigate("/Settings")}>
              <GoGear size={30} color="#8C8C8F" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
