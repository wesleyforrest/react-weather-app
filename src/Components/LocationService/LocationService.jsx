import React from "react";

const LocationService = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Can't find location");
    }
  };

  const showPosition = (position) => {
    const myLatitude = showPosition;
  };
  getLocation();

  return (
    <div>
      <h2>Your current location is{getLocation}</h2>
    </div>
  );
};

export default LocationService;
