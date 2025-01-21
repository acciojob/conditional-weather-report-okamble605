import React from "react";

function WeatherDisplay({ weather }) {
  // Destructure the temperature and conditions from props
  const { temperature, conditions } = weather;

  // Determine the color of the temperature based on the threshold
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color: temperatureColor }}>Temperature: {temperature}°C</p>
      <span style={{ color: 'black' }}>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
