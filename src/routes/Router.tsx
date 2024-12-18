import CreateProfil from "@/pages/CreateProfil/CreateProfil";
import Login from "@/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AddSevice from "@/pages/AddService/AddService";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "addservice", element: <AddSevice /> }],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/createProfil",
    element: <CreateProfil />,
  },
]);

export default Router;
