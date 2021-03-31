import React from "react";
import "../../../css/eventsPage/EventsRenderSection.css";
import Loader from "react-loader-spinner";
import EventsTopMovies from "./EventsTopMovies";
import EventsTopTheaters from "./EventsTopTheaters";

export default function EventRenderSection({ topMovies, topTheaters }) {
  return (
    <div className="event-render-section_container">
      {topMovies ? (
        <>
          <EventsTopMovies topMovies={topMovies} />
          <EventsTopTheaters topTheaters={topTheaters} />
        </>
      ) : (
        <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
      )}
    </div>
  );
}
