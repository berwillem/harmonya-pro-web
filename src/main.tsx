import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={Router} />
    </I18nextProvider>
  </StrictMode>
);
