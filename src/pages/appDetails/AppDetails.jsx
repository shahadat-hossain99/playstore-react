import React, { useContext } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import DImg from "../../assets/images/icon-downloads.png";
import RImg from "../../assets/images/icon-ratings.png";
import ReImg from "../../assets/images/icon-review.png";
import { HashLoader } from "react-spinners";
import NotFound from "../notFoundPage/NotFoundPage";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log(id, "where is it");
  const { apps, loading } = useApps();
  //   console.log(apps, loading);

  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const expectedApp = apps.find((app) => app.id == id);
  console.log(expectedApp);

  // 2. Add this check! If it's still loading or app isn't found yet, show a loader
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <HashLoader
          color="#c10fc0"
          cssOverride={{}}
          loading
          size={100}
          speedMultiplier={0.8}
        />
      </div>
    );
  }
  //   // 3. Handle the case where the ID is wrong or app doesn't exist
  if (!expectedApp) {
    return <NotFound></NotFound>;
  }

  const handleInstallApp = () => {
    setInstalledApps([...installedApps, expectedApp]);
  };
  console.log(installedApps, "hi");

  return (
    <div className="container mx-auto mt-20">
      <div className="flex gap-10  items-center">
        <div>
          <img className="w-auto h-80" src={expectedApp.image} alt="" />
        </div>
        <div className="">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold">{expectedApp.title}</h2>
            <p className="text-gray-500">
              Developed by
              <span className="text-purple-400 font-bold">
                {" "}
                {expectedApp.companyName}
              </span>
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <div className="flex gap-10">
              <div>
                <img src={DImg} alt="" />
                <p>Downloads</p>
                <h3 className="font-bold text-4xl">{expectedApp.downloads}</h3>
              </div>

              <div>
                <img src={RImg} alt="" />
                <p>Average Ratings</p>
                <h3 className="font-bold text-4xl">{expectedApp.ratingAvg}</h3>
              </div>

              <div>
                <img src={ReImg} alt="" />
                <p>Total Reviews</p>
                <h3 className="font-bold text-4xl">{expectedApp.reviews}</h3>
              </div>
            </div>
            <button
              onClick={() => {
                handleInstallApp();
              }}
              className="btn bg-purple-400 mt-4 text-white"
            >
              Install Now ({expectedApp.size} MB)
            </button>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <div></div>
      <div className="divider"></div>
      <p className="text-gray-500 font-medium">{expectedApp.description}</p>
    </div>
  );
};

export default AppDetails;
