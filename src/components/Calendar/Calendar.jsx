import React, { useState } from "react";
import ReactCalendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";


// import React from "react";

import "./Calendar.css";

function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <ReactCalendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calendar;
