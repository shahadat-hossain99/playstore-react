import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps, setInstalledApps);

  return (
    <div className="container mx-auto my-12">
      {installedApps.map((app, i) => {
        return (
          <div
            key={i}
            className="flex gap-4 items-center shadow-2xl p-5 rounded-md bg-slate-100 m-5"
          >
            <img className="h-36 w-auto" src={app.image} alt="" />
            <h2 className="text-3xl font-bold">{app.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
