import React, { useState, useEffect } from "react";
import EventCell from "../EventCell";
import Loader from "react-loader-spinner";

export default function CategoryEventRender({ eventItems }) {
  return (
    <div className="category-event-render_container">
      {eventItems ? (
        <div className="category-event-render_wrapper">
          {eventItems.map((el, index) => {
            // console.log(el);
            return <EventCell key={index} event={el} />;
          })}
        </div>
      ) : (
        <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
      )}
    </div>
  );
}
