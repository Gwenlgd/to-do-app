import React, { useState, useEffect } from "react";
import "./Clock.css";
import ReactClock from "react-clock";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  function tick() {
    setTime(new Date());
  }
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="clock">
      <div className="clock-one">
        <ReactClock value={time} />
      </div>
      <div className="clock-two">
        <p>{formattedTime}</p>
      </div>
    </div>
  );
}
export default Clock;
