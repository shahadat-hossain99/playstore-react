import React, { useEffect, useState } from "react";
// import { use } from "react";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps);

  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setApps(data);
    };
    fetchData();
  }, []);

  console.log(apps, "array of apps");

  return (
    <div>
      <div className="mb-8 text-center p-20 space-y-4">
        <h2 className="font-bold text-5xl">Trending Apps</h2>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>Total Apps :{apps.length}</div>
    </div>
  );
};

export default TrendingApps;
