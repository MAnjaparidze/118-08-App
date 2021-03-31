import React, { useState } from "react";
import MidSectionFirstPanel from "../../../organizations/parts/MidSectionFirstPanel";
import { Link } from "react-router-dom/cjs/react-router-dom";

import SearchIcon from "../../../../../assets/img/search.png";
import SearchIcon_Blk from "../../../../../assets/img/search-blk.png";
import CloseIcon_Blk from '../../../../../assets/img/black-x.png'

import "../../../../css/eventsPage/EventCategoryMid.css";
import EventsInnerNav from "../EventsInnerNav";

export default function EventCategoryMidSection({ categoryName }) {
  const [fetchData, setFetchData] = useState(null);
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    if (searchActive) {

    } else {
      setSearchActive(true);
    }
  }
  const searchEventLive = async e => {
    if (e.length >= 3) {
      const fetchItem = await fetch(
        `/api/?app=afisha/AfishaApi&resource=searchByName&name=${e}`
      );
      const item = await fetchItem.json();

      setFetchData(item.tkt_search);
    }
  };
  return (
    <div className="event-category-mid_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 class="category-title">{categoryName}</h2>
        <form className={searchActive ? "search-field search-field--active" : "search-field"}>
          <button className='search-btn' onClick={e => toggleSearch(e)}>
            <img className='search-icon' src={SearchIcon_Blk} alt="" />
          </button>
          {searchActive && <div className="search-field-wrapper">
            <input
              type="text"
              placeholder="საძიებო ფრაზა"
              onChange={e => searchEventLive(e.target.value)}
            />
            <button className='close-btn' onClick={e => { e.preventDefault(); setSearchActive(false); setFetchData(null) }}>
              <img src={CloseIcon_Blk} alt="" />
            </button>
          </div>}
          <div className="live-search-wrapper">
            {fetchData &&
              fetchData.map(e => {
                return (
                  <Link
                    key={e.id}
                    to={`/ka-ge/event/${e.show_id}`}
                    className="live-search-item"
                  >
                    <div className="">{e.name}</div>
                  </Link>
                );
              })}
          </div>
        </form>
        {/* <div className="category-description">{categoryName}</div> */}
      </div>
      {/* <div className="dimmed-overlay"></div> */}
      {/* <EventsInnerNav /> */}
    </div>
  );
}
