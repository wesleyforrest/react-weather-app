import React from "react";
import "./LocationCard.scss";
import SailingLocations from "../SailingLocations/SailingLocations";
import Map from "../../Assets/images/solent.jpeg";

const LocationCard = (props) => {
  const { marina } = props;

  console.log(marina);
  return (
    <div className="location-card">
      <h1 className="location__marina">{marina.marina}</h1>
      <img className="location-card__image" src={marina.image} alt="else" />
      <h4 className="location__longitude">Longitude: {marina.longitude}</h4>
      <h4 className="location__latitude">Latitude: {marina.latitude}</h4>
      <h4 className="location__vhf">VHF Channel: {marina.vhf}</h4>
      <div className="location-Card__buttons">
        <button className="location-Card__buttons__weather">WeatherInfo</button>
        <button className="location-Card__buttons__tides">Tide Info</button>
      </div>
    </div>
  );
};

export default LocationCard;
