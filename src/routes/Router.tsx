import CreateProfil from "@/pages/CreateProfil/CreateProfil";
import Login from "@/pages/Login/Login";
import MultiStepForm from "@/pages/MultiStepForm/MultiStepForm";
import SubscriptionChoise from "@/pages/SubscriptionChoise/SubscriptionChoise";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AddSevice from "@/pages/AddService/AddService";
import MesReservations from "@/pages/MesReservations/MesReservations";
import Demandes from "@/pages/Demandes/Demandes";
import CheckPoint2 from "@/pages/CheckPoint2/CheckPoint2";
import CheckPoint1 from "@/pages/CheckPoint1/CheckPoint1";
import MultiStepForm2 from "@/pages/MultiStepForm2/MultiStepForm2";
import ValidationPage from "@/pages/ValidationPage/ValidationPage";
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
  { path: "/subscriptionChoise", element: <SubscriptionChoise /> },
  { path: "/multiStepForm", element: <MultiStepForm /> },
  { path: "/MultiStepForm2", element: <MultiStepForm2 /> },
  { path: "/CheckPoint2", element: <CheckPoint2 /> },
  { path: "/CheckPoint1", element: <CheckPoint1 /> },
  { path: "/ValidationPage", element: <ValidationPage /> },
]);

export default Router;
