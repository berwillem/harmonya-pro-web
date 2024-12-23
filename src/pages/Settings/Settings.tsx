import MiniNav from "@/components/MiniNav/MiniNav";
import "./Settings.css";
import { Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <div className="SettingsLayout">
      <MiniNav />
      <Outlet />
    </div>
  );
}
