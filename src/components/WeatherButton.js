import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = (props) => {
  const cities = ["seoul", "tokyo", "london", "new york", "paris"];

  return (
    <div>
      {cities.map((city, index) => {
        return (
          <Button
            variant="secondary"
            key={index}
            style={{ color: "white", marginRight: "5px" }}
            onClick={() => props.setCity(city)}
          >
            {city}
          </Button>
        );
      })}
    </div>
  );
};

export default WeatherButton;

// {cities.map((city, index) => (
//   <Button variant="secondary" key={index}>
//     {city}
//   </Button>
// ))}
