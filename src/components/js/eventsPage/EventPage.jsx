import React, { useEffect, useState } from "react";
import Header from "../globalParts/Header";
import EventPageRender from "./parts/EventPageMidRender";
import Footer from "../globalParts/Footer";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function EventPage() {
  const [item, setItem] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    let link = window.location.href;
    let startStr = link.indexOf("event/");
    let fetchId = link.slice(startStr + 6, link.length);

    const fetchitem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=events&showId=${fetchId}`
    );

    const item = await fetchitem.json();
    setUser(item.user);
    const firstItem = item.tkt_events;
    setItem(firstItem);
  };

  return (
    <div className="event-page_container">
      <Header user={user ? user : null} />
      <EventPageRender event={item} />
      <MobileNavigation />
      {/* <Footer /> */}
    </div>
  );
}
