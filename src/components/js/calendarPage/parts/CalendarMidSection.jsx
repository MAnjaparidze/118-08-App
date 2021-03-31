import React, { useState } from "react";
import MidSectionFirstPanel from "../../organizations/parts/MidSectionFirstPanel";
import queryString from 'query-string';

export default function CalendarMidSection() {

  const isHoly = queryString.parse(window.location.href)

  if(isHoly.holy == 1) {
    window.holy = true;
  } else {
    window.holy = false;
  }

  const toggleHoly = (val) => {
    window.location.href = `/ka-ge/newcalendar?val&holy=${val}`;
  };

  return (
    <div className="calendar-mid_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">{window.lang.Calendar}</h2>

        <div className="calendar-mid-panel_wrapper mid-panel-active">
          <button
            className={
              !window.holy
                ? "calendar-free-days-btn calendar-btn-active"
                : "calendar-free-days-btn"
            }
            onClick={() => {
              toggleHoly(0);
            }}
          >
             {window.lang.SecularCalendar}
          </button>
          <button
            className={
              window.holy
                ? "calendar-church-days-btn calendar-btn-active"
                : "calendar-church-days-btn"
            }
            onClick={() => {
              toggleHoly(1);
            }}
          >
            {window.lang.Churchdays}
          </button>
        </div>
      </div>
      {/* <div className="dimmed-overlay"></div> */}
    </div>
  );
}
