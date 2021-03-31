import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function EventCell({ event }) {
  return (
    <div className="events-event_wrapper">

      <div className="event-poster">
        <Link
          to={{
            pathname: "/ka-ge/event/" + event.show_id,
            state: { eventInfo: event }
          }}
        >
          <img src={event && event.poster} alt="" />
        </Link>
      </div>

      <div className="event-inner">
        <Link className="event-title" to={{
            pathname: "/ka-ge/event/" + event.show_id,
            state: { eventInfo: event }
          }}>
          {event && event.name}
        </Link>
      </div>
      
    </div>
  );
}
