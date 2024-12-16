import CreateProfil from "@/pages/CreateProfil/CreateProfil";
import Login from "@/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";



const Router = createBrowserRouter([

  { path: "/", element: <Login /> },
  { path: "/createProfil", element: <CreateProfil /> },
]);

export default Router;
