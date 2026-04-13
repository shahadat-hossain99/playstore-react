import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";

const Apps = () => {
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
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div className=" container mx-auto my-15">
      <div className="mb-8 text-center p-20 space-y-4">
        <h2 className="font-bold text-5xl">Our All Applications</h2>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <h3 className="font-bold text-2xl pb-3.5"> ({apps.length}) Apps Found</h3>
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
          {apps.map((app, ind) => {
            return <AppCard key={ind} app={app}></AppCard>;
          })}
        </div>
      )}

      {/* <div className="text-center">
        <Link to="/apps">
          {" "}
          <button className=" btn bg-linear-to-r from-[#b944c4] to-[#9514FA] text-white mt-5">
            Show All
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Apps;
