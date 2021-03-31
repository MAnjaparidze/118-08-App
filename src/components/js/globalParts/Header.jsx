import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LocalizedStrings from "react-localization";

// import { lang } from '../globalParts/locale/lang.jsx';

import OrgInactive from "../../../assets/img/menu-icons/home-b.png";
import TktInactive from "../../../assets/img/menu-icons/theater-b.png";
import CalendarInactive from "../../../assets/img/menu-icons/calendar-b.png";
import CitiesInactive from "../../../assets/img/menu-icons/city-b.png";
import CurrencyInactive from "../../../assets/img/menu-icons/valuta-b.png";
import LocationInactive from "../../../assets/img/menu-icons/streets-b.png";
import SalesInactive from "../../../assets/img/menu-icons/sales-b.png";
import TransportInactive from "../../../assets/img/menu-icons/transport-b.png";
import WeatherInactive from "../../../assets/img/menu-icons/weather-b.png";
import LoginIcon from "../../../assets/img/login-reg-blk.png";
import logo from "../../../assets/img/icons/logo.svg";

import { Link } from "react-router-dom/cjs/react-router-dom";
import SignInWindow from "./Registration/Registration";

export default function Header({ user, props }) {
  const [lang, setLang] = useState(false);
  const [isRegWindow, setRegWindow] = useState(false);

  const toggleLanguage = () => {
    if (sessionStorage.getItem("locale") == "ge") {
      sessionStorage.setItem("locale", "en");
    } else {
      sessionStorage.setItem("locale", "ge");
    }
    window.location.reload();
  };

  let isUser = typeof user === "object" && user;

  return (
    <header className="main__header">
      <div className="language-switch">
            <label className={window.lang.Locale == 'ge' ? `active-lang` : ""}>ქარ</label>
            <label className="switch">
              { window.lang.Locale == 'ge' ? ( 
                  <input type="checkbox" id="switchLocale"/>
              ) : (
                  <input type="checkbox" id="switchLocale" checked />
              )}
              <span
                className="slider round"
                onClick={() => {
                  toggleLanguage();
                }}
              ></span>
            </label>
            <label className={window.lang.Locale == 'en' ? `active-lang` : ""}>ENG</label>
        </div>

      <div className="main__header__navigation__logo">
        <NavLink
          to="/ka-ge/organizations"
          className="main__header__navigation__logo__content"
        >
          <img src={logo} alt="" />
        </NavLink>
      </div>

      

      <div className="main__header__navigation__register">
        {isUser ? (
          // <button className="next-page" onClick={this.logout.bind(this)}>გამოსვლა</button>
          <NavLink to="/ka-ge/user" className="navigation__item">
            <span className="navigation__item__profile">{user.fname}</span>
          </NavLink>
        ) : (
          <NavLink
            className="register-link"
            to='/ka-ge/login'
          >
            <img src={LoginIcon} alt="login icon"></img>
          </NavLink>
        )}
      </div>
    </header>
  );
}
