import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
// import { createBrowserRouter } from "react-router";
// import RootLayout from "./layout/RootLayout";
// import Homepage from "./pages/homepage/Homepage";
// import Apps from "./pages/apps/Apps";
// import InstallApps from "./pages/installApps/InstallApps";

import { router } from "./router/Routes";
import InstalledAppsProvider from "./context/InstalledAppsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsProvider>
      {" "}
      <RouterProvider router={router} />
    </InstalledAppsProvider>
    ,
  </StrictMode>,
);
