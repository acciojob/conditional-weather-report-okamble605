import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  // Initial weather data
  const [weatherData, setWeatherData] = useState({ temperature: 25, conditions: "Sunny" });

  // Optionally, we can fetch or update weather data using useEffect, but since no API is needed, we are using the hardcoded data.
  useEffect(() => {
    // In real-world applications, you would fetch data here. For now, using static data.
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);  // Empty array ensures this runs once after the component mounts.

  return (
    <div className="App">
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}

export default App;
