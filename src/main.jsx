import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/homepage/Homepage";
import Apps from "./pages/apps/Apps";
import InstallApps from "./pages/installApps/InstallApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installApps",
        Component: InstallApps,
      },
    ],
    errorElement: <h2>This page is not found</h2>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
