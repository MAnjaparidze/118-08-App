import React from "react";
import ReactDOM from "react-dom";

import LocalizedStrings from 'react-localization';
import { lang } from '../src/components/js/globalParts/locale/lang';

import "./index.css";
import "./components/css/categories.css";
import MainPage from "./components/js/organizations/Main";
import Category from "./components/js/organizations/categories/Main";
import OrganizationPage from "./components/js/organizations/parts/OrganizationPage";

import EventsPage from "./components/js/eventsPage/EventsPage";
import EventCategory from "./components/js/eventsPage/EventCategoryPage";
import EventPage from "./components/js/eventsPage/EventPage";

import CurrencyPage from "./components/js/currencyPage/CurrencyPage";
import CurrencyItemPage from "./components/js/currencyPage/CurrencyItemPage";

import StreetsPage from './components/js/streetsPage/StreetsPage';
import CalendarPage from './components/js/calendarPage/CalendarPage';
import NewCalendarPage from './components/js/calendarPage/NewCalendarPage';

import LoginPage from './components/js/globalParts/Registration/Login';
import RegisterPage from './components/js/globalParts/Registration/RegisterPhysicalEntity';
import RegisterPage2 from './components/js/globalParts/Registration/RegisterLegalEntity';

import * as serviceWorker from "./serviceWorker";

import "./components/css/mediaQuery.css";

import { Route, BrowserRouter as Router } from "react-router-dom";
// import { Route, HashRouter as Router, Redirect } from "react-router-dom";

// users
import { PrivateRoute } from './PrivateRoute';
// import UserPage from './components/js/userPage/userPage';
import UserPage from './components/js/userPage/UserPage'; 

// set default locale
if(sessionStorage.getItem('locale') == null) {
  sessionStorage.setItem('locale', 'ge');
}
// locales
window.lang = new LocalizedStrings(lang);
// set locale
window.lang.setLanguage(sessionStorage.getItem('locale'));

const routing = (
  <Router>
    <div className="app__container">
      <Route exact path='/ka-ge/login' component={LoginPage} />
      <Route exact path='/ka-ge/registration' component={RegisterPage} />
      <Route exact path='/ka-ge/registration-2' component={RegisterPage2} />

      <Route exact path="/" component={MainPage} />
      {/* <Redirect exact from="/" to="/ka-ge/organizations" /> */}
      <Route exact path="/ka-ge/organizations" component={MainPage} />
      <Route exact path="/ka-ge/organizations/:orgid" component={Category} />
      <Route exact path="/ka-ge/organizations/search/:id" component={Category} />
      <Route exact path="/ka-ge/organization/:id" component={OrganizationPage} />

      <Route exact path="/ka-ge/events" component={EventsPage} />
      <Route exact path="/ka-ge/events/:eventId" component={EventCategory} />
      <Route exact path="/ka-ge/event/:eventId" component={EventPage} />

      <Route path="/ka-ge/streets" component={StreetsPage} />

      <Route exact path="/ka-ge/currency" component={CurrencyPage} />
      {/* <Route path="/curr_test" component={CurrencyItemPage} /> */}

      <Route exact path='/ka-ge/calendar' component={CalendarPage} />
      <Route exact path='/ka-ge/newcalendar' component={NewCalendarPage} />
      
      {/* <UserRoute /> */}
      {/* <Route exact path='/ka-ge/user' component={UserPage} /> */}

      <Route exact path="/ka-ge/user" component={UserPage} />

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
