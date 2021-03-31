import React, { useState, useEffect } from "react";
import CalendarSlider from "../../globalParts/CalendarSlider/CalendarSlider";
import CalendarMonthEvents from "./CalendarMonthEvents";

import ArrowDown from "../../../../assets/img/arrow-down.png";

export default function CalendarRenderSection({ calendarItems }) {
  const [selectedYear, toggleSelectedYear] = useState(2019);
  const [isSelectActive, toggleSelectActive] = useState(false);
  const [semester, changeSemester] = useState(1);
  const [calendarData, setCalendarData] = useState(null);

  const toggleOptionClick = year => {
    toggleSelectedYear(year);
    toggleSelectActive(!isSelectActive);
  };

  const nextSemester = () => {
    if (semester < 3) {
      changeSemester(semester + 1);
    } else {
      changeSemester(1);
    }
  };
  const prevSemester = () => {
    if (semester > 1){
      changeSemester(semester - 1);
    } else {
      changeSemester(3);
    }
  }
  const fetchData = async() => {
    let fetchItem = await fetch(
      `/api/?app=calendar/CalendarApi&resource=list&from=${selectedYear}-01-01&to=${selectedYear}-12-31&holy`
    );
    const item = await fetchItem.json();
    setCalendarData(item.data);
  }

  useEffect(() => {
    fetchData();
  }, [selectedYear])
  
  return (
    <div className="calendar-render-section_container">
      <div name="calendar-year-from" className="calendar-year-select_wrapper">
        <div
          className="calendar-year-select-main"
          onClick={() => {
            toggleSelectActive(!isSelectActive);
          }}
        >
          {selectedYear} <img src={ArrowDown} alt="" />
        </div>
        <div
          className={
            isSelectActive
              ? "calendar-select-options_wrapper options-visible"
              : "calendar-select-options_wrapper"
          }
        >
          <div
            className="calendar-year-select-options"
            onClick={() => toggleOptionClick(2019)}
          >
            2019
          </div>
          <div
            className="calendar-year-select-options"
            onClick={() => toggleOptionClick(2018)}
          >
            2018
          </div>
          <div
            className="calendar-year-select-options"
            onClick={() => toggleOptionClick(2017)}
          >
            2017
          </div>
          <div
            className="calendar-year-select-options"
            onClick={() => toggleOptionClick(2016)}
          >
            2016
          </div>
          <div
            className="calendar-year-select-options"
            onClick={() => toggleOptionClick(2015)}
          >
            2015
          </div>
        </div>
      </div>

      <div className="calendar-panel-items_wrapper">
        <CalendarSlider year={selectedYear} calendarItems={calendarData ? calendarData : calendarItems} nextSemester={() => nextSemester()} prevSemester={() => prevSemester()} />
      </div>
      {calendarItems && (
        <CalendarMonthEvents
          calendarItems={calendarData ? calendarData : calendarItems}
          semester={semester}
        />
      )}
    </div>
  );
}
