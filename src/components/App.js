import React, { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulated weather data input
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
