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
  { label: "Home", path: "", icon: <FaHome size={20} /> },
  {
    label: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    label: "Statistic",
    path: "statistics",
    icon: <IoMdStats size={20} />,
  },

  { section: "Reservations" },
  { label: "Agenda", path: "agenda", icon: <FaCalendarAlt size={20} /> },
  {
    label: "Mes reservations",
    path: "MesReservations",
    icon: <LiaPencilRulerSolid size={26} />,
    customStyle: { paddingLeft: "0", gap: "10px" },
  },
  {
    label: "Demande de reservations",
    path: "demande-reservations",
    icon: <VscGitPullRequestCreate size={20} />,
  },

  { section: "Services" },
  {
    label: "Ajouter un service",
    path: "addservice",
    icon: <PiMedal size={24} />,
    customStyle: { paddingLeft: "0", gap: "13px" },
  },
  {
    label: "Boutique",
    path: "boutique",
    icon: <HiOutlineBookOpen size={20} />,
  },
  {
    label: "Abonnements",
    path: "abonnements",
    icon: <BsSuitcaseLg size={20} />,
  },
];
