import React from "react";

function WeatherStatus(props) {
  const hasHurricanes = props.hurricaneDays && props.hurricaneDays.length > 0;

  return (
    <div>
      <h1>Weather Status</h1>
      <p>{props.status}</p>
      <p>{props.temperature}</p>
      {hasHurricanes ? (
        <>
          <p>The following days have hurricanes</p>
          <ul>
            {props.hurricaneDays.map((day) => (
              <li>{day}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no hurricanes this week</p>
      )}
    </div>
  );
}

export default WeatherStatus;
