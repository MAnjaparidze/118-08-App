import React from "react";
import EventCell from "./EventCell";

export default function EventsTopTheaters({ topTheaters }) {
  return (
    <div className="events-top-theaters_container">
      <div className='events-top-theaters_wrapper'>
        {/* <h1 className="top-events-description">თეატრი</h1> */}
        <div className="top-events__header">
          <span>{window.lang.Populartheater}</span>
        </div>
        <div className="events-top-items_wrapper">
        {topTheaters &&
            topTheaters.map((el, index) => {
              return <EventCell key={index} event={el} />;
            })}
        </div>
      </div>
    </div>
  );
}
