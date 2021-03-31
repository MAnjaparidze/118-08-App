import React, { useState } from "react";
import MidSectionFirstPanel from "../../organizations/parts/MidSectionFirstPanel";

export default function CalendarMidSection({ toggleHolidays, toggleHoly }) {
  const [isFreeDays, toggleFreeDays] = useState(true);
  const [isHolyDays, toggleHolyDays] = useState(false);

  return (
    <div className="calendar-mid_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">{window.lang.Calendar}</h2>

        <div className="calendar-mid-panel_wrapper mid-panel-active">
          <button
            className={
              isFreeDays
                ? "calendar-free-days-btn calendar-btn-active"
                : "calendar-free-days-btn"
            }
          >
            {window.lang.SecularCalendar}
          </button>
          <button
            className={
              isHolyDays
                ? "calendar-church-days-btn calendar-btn-active"
                : "calendar-church-days-btn"
            }
          >
            {window.lang.Churchdays}
          </button>
        </div>
      </div>
      {/* <div className="dimmed-overlay"></div> */}
    </div>
  );
}
