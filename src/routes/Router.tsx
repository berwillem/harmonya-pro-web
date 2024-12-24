import CreateProfil from "@/pages/CreateProfil/CreateProfil";
import Login from "@/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AddSevice from "@/pages/AddService/AddService";
import MesReservations from "@/pages/MesReservations/MesReservations";
import Demandes from "@/pages/Demandes/Demandes";
import Abonnements from "@/pages/Abonnements/Abonnements";
import Boutique from "@/pages/Boutique/Boutique";
import Settings from "@/pages/Settings/Settings";
import Compte from "@/pages/Compte/Compte";
import Securite from "@/pages/Securite/Securite";
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
      {
        path: "Abonnements",
        element: <Abonnements />,
      },
      {
        path: "boutique",
        element: <Boutique />,
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "compte",
            element: <Compte />,
          },
          {
            path: "Abonnements",
            element: <Abonnements />,
          },
          {
            path: "securite",
            element: <Securite />,
          },
        ],
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
