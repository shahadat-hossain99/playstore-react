import React, { useEffect, useState } from "react";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
// import { use } from "react";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps);

  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 4000);
    };
    fetchData();
  }, []);

  console.log(apps, "array of apps");
  console.log(loading, "array of apps");

  return (
    <div className=" container mx-auto">
      <div className="mb-8 text-center p-20 space-y-4">
        <h2 className="font-bold text-5xl">Trending Apps</h2>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <h3> Total Apps :{apps.length}</h3>
      {loading ? (
        <div className="flex items-center justify-center">
          <HashLoader
            color="#c10fc0"
            cssOverride={{}}
            loading
            size={100}
            speedMultiplier={0.8}
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {apps.slice(0, 9).map((app, ind) => {
            return <AppCard key={ind} app={app}></AppCard>;
          })}
        </div>
      )}

      <div className="text-center">
        <Link to="/apps">
          {" "}
          <button className=" btn bg-linear-to-r from-[#b944c4] to-[#9514FA] text-white mt-5">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
