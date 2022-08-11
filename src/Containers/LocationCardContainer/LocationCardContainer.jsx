import React from "react";
import "./LocationCardContainer.scss";
import SailingLocations from "../SailingLocations/SailingLocations";

const LocationCardContainer = () => {
  return (
    <div className="container">
      <SailingLocations />
    </div>
  );
};

export default LocationCardContainer;
