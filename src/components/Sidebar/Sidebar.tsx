import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiBardLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { sidebarLinks } from "../../data/SidebarLinks.js";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.sidebar}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
