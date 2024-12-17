import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  );
}
