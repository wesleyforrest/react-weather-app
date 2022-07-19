import React from "react";

const WeatherData = () => {
  const lat = 58.7984;
  const lng = 17.8081;
  const params = "windSpeed";

  fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
    {
      headers: {
        Authorization:
          "813f21e2-0745-11ed-b6bf-0242ac130002-813f2282-0745-11ed-b6bf-0242ac130002",
      },
    }
  )
    .then((response) => response.json())
    .then((jsonData) => {
      // Do something with response data.
    });

  return <div>WeatherData</div>;
};

export default WeatherData;
