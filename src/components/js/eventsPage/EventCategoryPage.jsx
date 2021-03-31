import React, { useEffect, useState } from "react";
import Header from "../globalParts/Header";
import EventCategoryMidSection from "./parts/categories/EventCategoryMidSection";
import CategoryEventRender from "./parts/categories/CategoryEventRender";
import Footer from "../globalParts/Footer";

import Loader from "react-loader-spinner";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default function EventCategory() {
  const [eventItems, setEventItems] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [])


  const fetchData = async () => {
    let link = window.location.href;
    let startStr = link.indexOf("events/");
    let fetchId = link.slice(startStr + 7, link.length);
    const fetchItem = await fetch(
      `/api/?app=afisha/AfishaApi&resource=&resource=shows&catId=${fetchId}`
    );
    const item = await fetchItem.json();
    setUser(item.user);
    setEventItems(item.tkt_shows);

    switch(fetchId) {
      case '1': setCategoryName('კინო'); 
        break;
      case '16': setCategoryName('თეატრი');
        break;
      case '2': setCategoryName('კონცერტი');
        break;
      case '5': setCategoryName('სპორტი');
        break;
      default: setCategoryName('სხვა');
    }
  };
 
    return (
      <div className="event-category_container">
        <Header user={user ? user : null} />
        <EventCategoryMidSection categoryName = {categoryName} />
        <CategoryEventRender eventItems = {eventItems} />
        <MobileNavigation />
        {/* <Footer /> */}
      </div>
    );
}
