import React, { useState, useEffect, Component } from "react";
import Header from "../globalParts/Header";
import Footer from "../globalParts/Footer";
import queryString from 'query-string';

import Calendar from "rc-year-calendar";
// import 'rc-year-calendar/locales/rc-year-calendar.ge';
import CalendarMidSection from "./parts/CalendarMidSection";
import "react-tippy/dist/tippy.css";
import '../../css/calendarPage/NewCalendarPage.css';
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function NewCalendarPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const [language, setLanguage] = useState(window.lang.Locale);
  const [style, setStyle] = useState("background");
  const [isHolyCalendar, toggleHolyCalednar] = useState(false);

  const isHoly = queryString.parse(window.location.href)

  if(isHoly.holy == 1) {
    window.holy = true;
  } else {
    window.holy = false;
  }

  window.scrollTo(0, 0);

  // const [user, setUser] = useState(null);
  const getIssues = (year) => {
    return fetch(
      `/api/?app=calendar/CalendarApi&resource=list&from=${year}-01-01&to=${year}-12-31&${window.holy ? 'holy' : 'unholy'}`
      // `/api/?app=calendar/CalendarApi&resource=list&from=${year}-01-01&to=${year}-12-31&unholy`
      // `/api/?app=calendar/CalendarApi&resource=list&from=2019-01-01&to=2019-12-31&holy`
    )
      .then(result => result.json())
      .then(result => {
        if (result.data) {
         
          let arr = [];        

          for(let i in result.data) {
            if (!window.holy) {
              if(result.data[i].remark != '') {
                arr.push(result.data[i]);
              }
            } else {
              if(result.data[i].remark == '' && result.data[i].description != '-' ||  result.data[i].description != '' && result.data[i].remark != '' && result.data[i].description != '-') {
                arr.push(result.data[i]);
              }
            }
          }

          let res = arr.map(r => ({
            id: r.id,
            startDate: new Date(r.date),
            endDate: new Date(r.date),
            name: window.holy ? r.description : '',
            details: r.remark,
            color: r.color == null ? '#aae248' : r.color,
          }));

         

          return res;
        }
        return [];
      });
  }

  const handleDayEnter = (e) => {
    if (e.events.length > 0) {
      var content = [];
      for (var i in e.events) {

        var hoverMainElement = document.createElement('div');
        hoverMainElement.classList.add("event-tooltip-content");
        hoverMainElement.setAttribute("id", e.events[i].id);
  
        var hoverElementName = document.createElement('div');
        hoverElementName.classList.add('event-name');
        hoverElementName.innerHTML = `${e.events[i].name}`;
  
        var hoverElementDescr = document.createElement('div');
        hoverElementDescr.classList.add("event-details")
        hoverElementDescr.innerHTML = `${e.events[i].details}`;

        hoverMainElement.appendChild(hoverElementName)
        hoverMainElement.appendChild(hoverElementDescr);

        content.push(hoverMainElement);
        e.element.appendChild(hoverMainElement)

      }
    }
  }

  const handleDayLeave = (e) => {
    if(e.events.length >= 1){
      for(let i = 0; i < e.events.length; i++){
        const elementToRemove = document.getElementById(e.events[i].id);
        elementToRemove.remove();
      }
    }
  }

  const toggleHolidays = async () => {
    toggleHolyCalednar(false);
    getIssues();
  };

  const toggleHoly = async () => {
    toggleHolyCalednar(true);
    getIssues();
  };

    return (
      <div className="calendar-page_container">
        <Header />
        <CalendarMidSection
          toggleHolidays={() => toggleHolidays()}
          toggleHoly={() => toggleHoly()}
        />
        <div className="calendar-page_calendar-container">
          <Calendar
            year={currentYear}
            minDate={minDate}
            maxDate={maxDate}
            language={language}
            style={style}
            dataSource={year => getIssues(year)}
            onDayEnter={e => handleDayEnter(e)}
            onDayLeave={e => handleDayLeave(e)}
          />
        </div>
        <MobileNavigation />
        {/* <Footer /> */}
      </div>
    );
}
