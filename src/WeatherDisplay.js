import React from "react";

const WeatherDisplay = ({ weather }) => {
  const tempColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ color: tempColor }}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
      <span>Weather Info</span>
    </div>
  );
};

export default WeatherDisplay;
