import React, { useState, useEffect } from "react";
import Header from "../globalParts/Header";
import Footer from "../globalParts/Footer";
import CalendarMidSection from "./parts/CalendarMidSection";
import CalendarRenderSecton from "./parts/CalendarRenderSection";

import FixedSearch from "../globalParts/FixedSearch";

import "../../css/calendarPage/CalendarPage.css";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function CalendarPage() {
 
  const [calendarItems, setCalendarItems] = useState(null);
  const [isHolyCalendar, toggleHolyCalednar] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let fetchItem = null;
    if (isHolyCalendar) {
      console.log("Holy");
      fetchItem = await fetch(
        `/api/?app=calendar/CalendarApi&resource=list&from=2019-01-01&to=2019-12-31&holy`
      );
    } else {
      console.log("Unholy");
      fetchItem = await fetch(
        `/api/?app=calendar/CalendarApi&resource=list&from=2019-01-01&to=2019-12-31`
      );
    }
    let item = await fetchItem.json();
    console.log(item);

    setUser(item.user);
    setCalendarItems(item.data)
  };

  const toggleHolidays = async () => {
    toggleHolyCalednar(false);
    fetchData();
  };

  const toggleHoly = async () => {
    toggleHolyCalednar(true);
    fetchData();
  };

    return (
      <div className="calendar-page_container">
        <Header user={user ? user : null} />
        <CalendarMidSection
          toggleHolidays={() => toggleHolidays()}
          toggleHoly={() => toggleHoly()}
        />
        <CalendarRenderSecton calendarItems={calendarItems} />
        <MobileNavigation />
        <Footer />
        <FixedSearch />
      </div>
    );
}
