import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log(id, "where is it");
  const { apps, loading } = useApps();
  //   console.log(apps, loading);

  const expectedApp = apps.find((app) => app.id === parseInt(id));
  console.log(expectedApp);

  return (
    <div>
      <h3>AppDetails</h3>
    </div>
  );
};

export default AppDetails;
