import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  return (
    <div>
      <div className="container">
        <WeatherBox city={city}></WeatherBox>
        <br></br>
        <WeatherButton setCity={setCity}></WeatherButton>
      </div>
    </div>
  );
}

export default App;
