import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import MovieIcon from "../../../../assets/img/cat-icons/movies.png";
import TheaterIcon from "../../../../assets/img/cat-icons/theaters.png";
import ConcertIcon from "../../../../assets/img/cat-icons/concerts.png";
import SportIcon from "../../../../assets/img/cat-icons/sport.png";
import more from '../../../../assets/img/cat-icons/more.png';

import ArrowDown from "../../../../assets/img/arrow-down.png";

export default function EventsInnerNav() {
  const [isMoreNav, toggleMoreNav] = useState(false);

  const moreMenu = [
    {
      id: 4,
      cat: 8,
      url: "/ka-ge/events/8",
      activity_category: window.lang.More
    },
    {
      id: 5,
      cat: 13,
      url: "/ka-ge/events/13",
      activity_category: window.lang.Transport
    },
    {
      id: 7,
      cat: 17,
      url: "/ka-ge/events/17",
      activity_category: window.lang.Kids
    },
    {
      id: 8,
      cat: 18,
      url: "/ka-ge/events/18",
      activity_category: window.lang.Opera
    },
    {
      id: 9,
      cat: 26,
      url: "/ka-ge/events/26",
      activity_category: window.lang.railway
    },
    {
      id: 10,
      cat: 30,
      url: "/ka-ge/events/30",
      activity_category: window.lang.Usedtickets
    },
    {
      id: 11,
      cat: 31,
      url: "/ka-ge/events/31",
      activity_category: window.lang.Flights
    },
  ];

  const eventLocation = (cat) => {
    window.location.href = `/ka-ge/events/${cat}`;
  }

  return (
    <div className="events-nav_container">
      <ul className="mid__navigation__list">
        <li className="mid__navigation__item__wrapper">
          <Link onClick={() => eventLocation(1)}
            to={{
              pathname: "/ka-ge/events/1",
              state: { categoryName: window.lang.Cinema }
            }}
            className="mid__navigation__item"
          >
            {/* <Link to='/ka-ge/events/1' className="navigation__item" > */}
            <img src={MovieIcon} alt="" />
            <span>{window.lang.Cinema}</span>
          </Link>
        </li>
        <li className="mid__navigation__item__wrapper">
          <Link onClick={() => eventLocation(16)}
            to={{
              pathname: "/ka-ge/events/16",
              state: { categoryName: window.lang.Theater }
            }}
            className="mid__navigation__item"
          >
            <img src={TheaterIcon} alt="" />
            <span>{window.lang.Theater}</span>
          </Link>
        </li>
        <li className="mid__navigation__item__wrapper">
          <Link onClick={() => eventLocation(2)}
            to={{
              pathname: "/ka-ge/events/2",
              state: { categoryName: window.lang.Concert }
            }}
            className="mid__navigation__item"
          >
            <img src={ConcertIcon} alt="" />
            <span>{window.lang.Concert}</span>
          </Link>
        </li>
        <li className="mid__navigation__item__wrapper">
          <Link onClick={() => eventLocation(5)}
            to={{
              pathname: "/ka-ge/events/5",
              state: { categoryName: window.lang.Sport }
            }}
            className="mid__navigation__item"
          >
            <img src={SportIcon} alt="" />
            <span>{window.lang.Sport}</span>
          </Link>
        </li>
        <li className="mid__navigation__item__wrapper events-navigation-more-btn">
          <div to="#" className='mid__navigation__item events-navigation-more-btn'
            onClick={() => {
              toggleMoreNav(!isMoreNav);
            }}>
            <span>{window.lang.More}</span>
            <img className={isMoreNav ? "more more-active" : "more"} src={ArrowDown} alt="" />
          </div>
        </li>
        {/* <li className="events-more-nav_wrapper">
          <div
            className="events-more-nav"
            onClick={() => {
              toggleMoreNav(!isMoreNav);
            }}
          >
            <span>სხვა</span>
            <img src={ArrowDown} alt="" />
          </div>
        </li> */}
      </ul>
      <div
        className={
          isMoreNav ? `events_additional-nav grid` : "events_additional-nav"
        }
      >
        {moreMenu.map(item => {
          return (
            <Link onClick={() => eventLocation(item.cat)}
              key={item.id}
              to={{
                pathname: item.url,
                state: { categoryName: item.activity_category }
              }}
              className="events-additional-nav_item"
            >
              <div>{item.activity_category}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
