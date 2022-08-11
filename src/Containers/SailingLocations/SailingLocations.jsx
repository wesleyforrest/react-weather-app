import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import marinaInfo from "../../Assets/data/sailingLocations";
import "./SailingLocations.scss";

const SailingLocations = (props) => {
  const marinaJSX = marinaInfo.map((marina) => {
    return <LocationCard marina={marina} />;
  });

  return <div className="card-list">{marinaJSX}</div>;
};

export default SailingLocations;
