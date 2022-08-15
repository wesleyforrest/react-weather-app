import React from "react";
import "./LocationCard.scss";
import SailingLocations from "../SailingLocations/SailingLocations";
import Map from "../../Assets/images/solent.jpeg";

const LocationCard = (props) => {
  const { marina } = props;

  console.log(marina);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1 className="flip-card__marina">{marina.marina}</h1>
          <img
            className="flip-card-front__image"
            src={marina.image}
            alt="else"
          />
          <h4 className="flip-card__longitude">
            Longitude: {marina.longitude}
          </h4>
          <h4 className="flip-card__latitude">Latitude: {marina.latitude}</h4>
          <h4 className="flip-card__vhf">VHF Channel: {marina.vhf}</h4>
          <div className="flip-card-Card__buttons">
            <button className="flip-card-card__buttons-weather">
              WeatherInfo
            </button>
            <button className="flip-card-card__buttons-tides">Tide Info</button>
          </div>
        </div>
        <div className="flip-card-weather">
          <h2>Weather Info</h2>
        </div>
        <div className="flip-card-tide">
          <h2>Tide info</h2>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
