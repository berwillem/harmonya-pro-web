import { NavLink } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { LiaPencilRulerSolid } from "react-icons/lia";
import styles from "./Sidebar.module.css";
import { MdDashboard, MdOutlineHelpOutline } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { RiBardLine } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { PiMedal } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

const sidebarLinks = [
  { label: "Home", path: "", icon: <FaHome size={22} /> },
  {
    label: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard size={22} />,
  },
  {
    label: "Statistic",
    path: "statistics",
    icon: <IoMdStats size={22} />,
  },

  { section: "Reservations" },
  { label: "Agenda", path: "agenda", icon: <FaCalendarAlt size={22} /> },
  {
    label: "Mes reservations",
    path: "mes-reservations",
    icon: <LiaPencilRulerSolid size={27} />,
    customStyle: { paddingLeft: "0", gap: "10px" },
  },
  {
    label: "Demande de reservations",
    path: "demande-reservations",
    icon: <VscGitPullRequestCreate size={22} />,
  },

  { section: "Services" },
  {
    label: "Ajouter un service",
    path: "ajouter-service",
    icon: <PiMedal size={22} />,
  },
  {
    label: "Boutique",
    path: "boutique",
    icon: <HiOutlineBookOpen size={22} />,
  },
  { label: "Abonnements", path: "abonnements", icon: <BsSuitcaseLg size={22} /> },
];

const Sidebar: React.FC = () => {
  return (
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
                  className={styles.navLink}
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
  );
};

export default Sidebar;
