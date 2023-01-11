import React, { useState } from "react";

function TrafficStatus(props) {
  const [trafficStatus, setTrafficStatus] = useState(props.status);
  const [streetStatus, setStreetStatus] = useState("Open");

  function clearTraffic() {
    setTrafficStatus("Clear");
  }

  function closeStreet() {
    setStreetStatus("closed");
  }

  return (
    <div
      style={{
        border: streetStatus === "closed" ? "2px solid red" : "2px solid black",
      }}
    >
      <p style={{ color: trafficStatus === "Clear" ? "green" : "black" }}>
        {trafficStatus}
      </p>
      <p>{props.street}</p>
      <p>This street is {streetStatus}</p>
      <button onClick={clearTraffic}>Clear Traffic</button>
      <button onClick={closeStreet}>Close street</button>
    </div>
  );
}

export default TrafficStatus;
