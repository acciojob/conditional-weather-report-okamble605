import React from "react";

const WeatherDisplay = ({ weather }) => {
  const tempColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ color: tempColor }}>Temperature: {weather.temperature}°C</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
