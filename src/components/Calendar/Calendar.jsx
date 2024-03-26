import React, { useState } from "react";
import ReactCalendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// import React from "react";

import "./Calendar.css";

function Calendar() {
  const [value, onChange] = useState(new Date());
  return <ReactCalendar onChange={onChange} value={value} />;
}

export default Calendar;
