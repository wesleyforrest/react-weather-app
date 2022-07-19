import React, { useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const LocationMap = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Can't find location");
    }
  };

  const showPosition = (position) => {
    const myLatitude = showPosition;
  };
  getLocation();
  return <div>LocationMap</div>;
};

export default LocationMap;
