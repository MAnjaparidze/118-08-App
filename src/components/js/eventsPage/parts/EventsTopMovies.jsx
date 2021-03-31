import React from "react";
import EventCell from "./EventCell";

export default function EventsTopMovies({ topMovies }) {
  return (
    <div className="events-top-movies_container">
      <div className="events-top-movies_wrapper">
        {/* <h1 className="top-events-description">კინო</h1> */}
        <div className="top-events__header">
          <span>{window.lang.PopularMovie}</span>
        </div>
        <div className="events-top-items_wrapper">
          {topMovies &&
            topMovies.map((el, index) => {
              return <EventCell key={index} event={el} />;
            })}
        </div>
      </div>
    </div>
  );
}
