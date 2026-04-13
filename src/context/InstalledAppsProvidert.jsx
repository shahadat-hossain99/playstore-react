import React from "react";
import { InstalledAppsContext } from "./InstalledAppsContext";

const InstalledAppsProvider = ({ children }) => {
  return (
    <InstalledAppsContext.Provider value={""}>
      {children}
    </InstalledAppsContext.Provider>
  );
};

export default InstalledAppsProvider;
