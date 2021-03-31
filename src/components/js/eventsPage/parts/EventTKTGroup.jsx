import React from "react";

export default function EventTKTGroup({el}) {
  return (
    <li key={el.id}>
      <p className="timeline-date">{el.date} {window.lang.November}</p>
      {console.log("Works?")}
      <div className="timeline-content">{el.tickets}</div>
    </li>
  );
}
