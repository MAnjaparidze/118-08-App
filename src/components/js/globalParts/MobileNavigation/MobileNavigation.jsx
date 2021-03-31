import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";

import OrgInactive from "../../../../assets/img/menu-icons/home-b.png";
import TktInactive from "../../../../assets/img/menu-icons/theater-b.png";
import CalendarInactive from "../../../../assets/img/menu-icons/calendar-b.png";
import CitiesInactive from "../../../../assets/img/menu-icons/city-b.png";
import CurrencyInactive from "../../../../assets/img/menu-icons/valuta-b.png";
import LocationInactive from "../../../../assets/img/menu-icons/streets-b.png";
import SalesInactive from "../../../../assets/img/menu-icons/sales-b.png";
import TransportInactive from "../../../../assets/img/menu-icons/transport-b.png";
import WeatherInactive from "../../../../assets/img/menu-icons/weather-b.png";
import LoginIcon from "../../../../assets/img/login-reg.png";
import logo from "../../../../assets/img/icons/logo.svg";

export default function MobileNavigation() {
  return (
    <div>
      <nav className="main__header__navigation">
        <ul className="header__navigation__list">
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/organizations" className="navigation__item">
              <span className="navigation__item__organizations">
                {window.lang.Organizations}
              </span>
            </NavLink>
          </li>
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/events" className="navigation__item">
              <span className="navigation__item__events">
                {window.lang.Afisha}
              </span>
            </NavLink>
          </li>
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/currency" className="navigation__item">
              <span className="navigation__item__currency">
                {window.lang.Currency}
              </span>
            </NavLink>
          </li>
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/streets" className="navigation__item">
              <span className="navigation__item__locations">
                {window.lang.Streets}
              </span>
            </NavLink>
          </li>
          {/* <li className="navigation__item__wrapper">
            <Link to="" className="navigation__item">
              <span className="navigation__item__transport">
                {window.lang.Transport}
              </span>
            </Link>
          </li> */}
          <li className="navigation__item__wrapper">
            <NavLink to="/ka-ge/newcalendar" className="navigation__item">
              <span className="navigation__item__calendar">
                {window.lang.Calendar}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
