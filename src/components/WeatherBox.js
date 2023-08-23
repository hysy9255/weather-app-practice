import React from "react";

const WeatherBox = ({ city }) => {
  const fetchData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    props.setWeather(data);
  };
  // const temperature = weather.main.temp;
  // const description = weather.weather[0].description;
  let temperature;
  let description;
  if (city === "") {
    temperature = "temperature";
    description = "description";
  }
  return (
    <div className="weather-box">
      <div>{city}</div>
      <h2>{temperature}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default WeatherBox;
