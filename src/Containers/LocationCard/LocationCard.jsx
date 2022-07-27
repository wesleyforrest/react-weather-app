import React from "react";
import SailingLocations from "../SailingLocations/SailingLocations";

const LocationCard = (props) => {
  const { SailingLocations } = props;
  return (
    <div className="location-card">
      <h1 className="location__marina">{}</h1>
      <img src="something" alt="else" />
      <h4 className="location__longitude">Longitude{SailingLocations}</h4>
      <h4 className="location__latitude">Latitude{}</h4>
      <h2 className="location__vhf">VHF Channel{}</h2>
      <div className="location-Card__buttons">
        <button className="location-Card__buttons__weather">WeatherInfo</button>
        <button className="location-Card__buttons__tides">Tide Info</button>
      </div>
    </div>
  );
};

export default LocationCard;
