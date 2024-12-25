import { NavLink } from "react-router-dom";
import { FaUser, FaLock, FaFileInvoice, FaBell } from "react-icons/fa";
import "./MiniNav.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLockOpen } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const navItems = [
  { to: "Compte", label: "Compte", icon: <LuUser size={20} /> },
  { to: "Securite", label: "Sécurité", icon: <MdLockOpen size={20} /> },
  {
    to: "Abonnements",
    label: "Facturation et plans",
    icon: <LiaFileInvoiceSolid size={20} />,
  },
  {
    to: "Notifications",
    label: "Notification",
    icon: <IoMdNotificationsOutline size={20} />,
  },
];

export default function MiniNav() {
  return (
    <div className="mini-nav">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
