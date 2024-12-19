import CreateProfil from "@/pages/CreateProfil/CreateProfil";
import Login from "@/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AddSevice from "@/pages/AddService/AddService";
import MesReservations from "@/pages/MesReservations/MesReservations";
import Demandes from "@/pages/Demandes/Demandes";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "addservice", element: <AddSevice /> },
      {
        path: "MesReservations",
        element: <MesReservations />,
      },
      {
        path: "demande-reservations",
        element: <Demandes />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/createProfil",
    element: <CreateProfil />,
  },
]);

export default Router;
