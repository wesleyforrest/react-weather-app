import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import marinaInfo from "../../Assets/data/sailingLocations";

const SailingLocations = (props) => {
  const marinaJSX = marinaInfo.map(
    (marina = () => {
      return <LocationCard marinas={marinaInfo} />;
    })
  );

  return <div className="card-list">{marinaJSX}</div>;
};

export default SailingLocations;
