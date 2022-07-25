import React from "react";
import { useEffect } from "react";

const WeatherData = () => {
  const GetTides = () => {
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
        console.log(jsonData);

        const weatherInfo = () => {
          const weather = jsonData;
          return weatherInfo;
        };
        // Do something with response data.
      });
  };

  useEffect(() => {
    GetTides();
  }, []);

  //console.log(weatherInfo());
  return <div>WeatherData</div>;
};

export default WeatherData;
