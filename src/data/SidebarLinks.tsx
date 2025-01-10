import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { PiMedal } from "react-icons/pi";
import { SidebarLink } from "../types/SidebarLink";

export const sidebarLinks: SidebarLink[] = [
  { label: "home", path: "/", icon: <FaHome size={20} /> },
  { label: "dashboard", path: "/Dashboard", icon: <MdDashboard size={20} /> },
  { label: "statistics", path: "/Statistics", icon: <IoMdStats size={20} /> },

  { section: "reservations" },
  { label: "agenda", path: "/agenda", icon: <FaCalendarAlt size={20} /> },
  {
    label: "my_reservations",
    path: "/MesReservations",
    icon: <LiaPencilRulerSolid size={26} />,
    customStyle: {
      paddingLeft: "0",
      gap: "10px",
      transform: "translateX(-3px)",
    },
  },
  {
    label: "reservation_requests",
    path: "/Demande-reservations",
    icon: <VscGitPullRequestCreate size={20} />,
    customStyle: { fontSize: "smaller" },
  },

  { section: "services" },
  {
    label: "add_service",
    path: "/Addservice",
    icon: <PiMedal size={24} />,
    customStyle: { paddingLeft: "0", gap: "13px" },
  },
  {
    label: "shop",
    path: "/Boutique",
    icon: <HiOutlineBookOpen size={20} />,
  },
  {
    label: "subscriptions",
    path: "/Abonnements",
    icon: <BsSuitcaseLg size={20} />,
  },
];
