import React, { useState, useEffect } from "react";
import MidSectionFirstPanel from "../../organizations/parts/MidSectionFirstPanel";
import { Link } from "react-router-dom/cjs/react-router-dom";

import SearchIcon from "../../../../assets/img/search.png";
import SearchIcon_Blk from "../../../../assets/img/search-blk.png";
import CloseIcon_Blk from '../../../../assets/img/black-x.png'

import "../../../css/eventsPage/EventsMidSection.css";
import EventsInnerNav from "./EventsInnerNav";

export default function EventsMidSection() {
  const [searchStr, setSearchStr] = useState("");
  const [fetchData, setFetchData] = useState(null);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    console.log(fetchData);
  }, [fetchData]);

  const searchEventLive = async e => {
    if (e.length >= 3) {
      const fetchItem = await fetch(
        `/api/?app=afisha/AfishaApi&resource=searchByName&name=${e}`
      );
      const item = await fetchItem.json();
      setFetchData(item.tkt_search);
    } else {
      setFetchData(null)
    }
  };

  useEffect(() => {
    console.log(fetchData);
  }, [fetchData])

  const toggleSearch = (e) => {
    e.preventDefault();
    if (searchActive) {

    } else {
      setSearchActive(true);
    }
  }

  return (
    <div className="events-mid-section_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">{window.lang.Afisha}</h2>
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
      </div>
      {/* <div className="dimmed-overlay"></div> */}
      <EventsInnerNav />
    </div>
  );
}
