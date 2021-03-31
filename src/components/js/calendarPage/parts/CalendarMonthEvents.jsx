import React from "react";

export default function CalendarMonthInfo({ calendarItems, semester }) {

  let janEvents = [];
  let febEvents = [];
  let marEvents = [];
  let aprEvents = [];
  let mayEvents = [];
  let junEvents = [];
  let julEvents = [];
  let augEvents = [];
  let sepEvents = [];
  let octEvents = [];
  let novEvents = [];
  let decEvents = [];

  const sortEvents = e => {
    switch (e.month) {
      case "იანვარი":
        janEvents.push(e);
        break;
      case "თებერვალი":
        febEvents.push(e);
        break;
      case "მარტი":
        marEvents.push(e);
        break;
      case "აპრილი":
        aprEvents.push(e);
        break;
      case "მაისი":
        mayEvents.push(e);
        break;
      case "ივნისი":
        junEvents.push(e);
        break;
      case "ივლისი":
        julEvents.push(e);
        break;
      case "აგვისტო":
        augEvents.push(e);
        break;
      case "სექტემბერი":
        sepEvents.push(e);
        break;
      case "ოქტომბერი":
        octEvents.push(e);
        break;
      case "ნოემბერი":
        novEvents.push(e);
        break;
      case "დეკემბერი":
        decEvents.push(e);
        break;
      default:
        break;
    }
  };

  calendarItems.forEach(e => {
    sortEvents(e);
  });

  const showDescr = element => {
    if (element.remark) {
      return element.remark;
    } else if (element.additional_comment) {
      return element.additional_comment;
    } else if (element.description) {
      return element.description;
    }
  };

  return (
    <div className="calendar-panel-events_container">
      <div className="calendar-panel-events_wrapper">
        {semester === 1 && (
          <>
            <span className="calendar-panel-month-label">იანვარი</span>
            {janEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 2 && (
          <>
            <span className="calendar-panel-month-label">მაისი</span>
            {mayEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 3 && (
          <>
            <span className="calendar-panel-month-label">სექტემბერი</span>
            {sepEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="calendar-panel-events_wrapper">
        {semester === 1 && (
          <>
            <span className="calendar-panel-month-label">თებერვალი</span>
            {febEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 2 && (
          <>
            <span className="calendar-panel-month-label">ივნისი</span>
            {junEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 3 && (
          <>
            <span className="calendar-panel-month-label">ოქტომბერი</span>
            {octEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="calendar-panel-events_wrapper">
        {semester === 1 && (
          <>
            <span className="calendar-panel-month-label">მარტი</span>
            {marEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 2 && (
          <>
            <span className="calendar-panel-month-label">ივლისი</span>
            {julEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 3 && (
          <>
            <span className="calendar-panel-month-label">ნოემბერი</span>
            {novEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="calendar-panel-events_wrapper last-panel-event">
        {semester === 1 && (
          <>
            <span className="calendar-panel-month-label">აპრილი</span>
            {aprEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 2 && (
          <>
            <span className="calendar-panel-month-label">აგვისტო</span>
            {augEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {semester === 3 && (
          <>
            <span className="calendar-panel-month-label">დეკემბერი</span>
            {decEvents.map(el => {
              return (
                <div key={el.id}>
                  <div className="calendar-panel-event">
                    <div className="calendar-panel-event-day">
                      {el.date.slice(-2)}
                    </div>
                    <div className="calendar-panel-event-description">
                      {showDescr(el)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
