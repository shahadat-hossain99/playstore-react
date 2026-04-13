import React from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-white p-5  shadow-sm mx-2">
      <figure>
        <img
          className="object-contain h-54 w-auto rounded-full"
          src={app.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title align-bottom">{app.title}</h2>

        <div className="flex justify-between items-center pt-4 mt-auto">
          <span className="font-bold btn btn-soft btn-success">
            <LuDownload /> {app.downloads}{" "}
          </span>
          <span className="btn btn-warning font-bold btn-soft">
            <FaStar />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
