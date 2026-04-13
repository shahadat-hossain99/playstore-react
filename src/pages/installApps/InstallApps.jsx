import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps, setInstalledApps);

  return (
    <div>
      <h2>All Installed apps are here</h2>
    </div>
  );
};

export default InstallApps;
