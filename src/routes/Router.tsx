// FIXME: reorganize imports
import CreateProfil from "@/pages/CreateProfil/CreateProfil";
import Login from "@/pages/Login/Login";
import MultiStepForm from "@/pages/MultiStepForm/MultiStepForm";
import SubscriptionChoise from "@/pages/SubscriptionChoise/SubscriptionChoise";
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
import CheckPoint1 from "@/pages/CheckPoint1/CheckPoint1";
import MultiStepForm2 from "@/pages/MultiStepForm2/MultiStepForm2";
import ValidationPage from "@/pages/ValidationPage/ValidationPage";
import Register from "@/pages/Register/Register";
import NotFound from "@/pages/NotFound/NotFound";
import ForgetPassword from "@/pages/ForgetPassword/ForgetPassword";
import Agenda from "@/pages/Agenda/Agenda";

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
      { path: "/agenda", element: <Agenda /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/ForgetPassword", element: <ForgetPassword /> },
  {
    path: "/createProfil",
    element: <CreateProfil />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  { path: "/subscriptionChoise", element: <SubscriptionChoise /> },
  { path: "/multiStepForm1", element: <MultiStepForm /> },
  { path: "/MultiStepForm2", element: <MultiStepForm2 /> },
  { path: "/CheckPoint/:id", element: <CheckPoint1 /> },
  { path: "/ValidationPage", element: <ValidationPage /> },
]);

export default Router;
