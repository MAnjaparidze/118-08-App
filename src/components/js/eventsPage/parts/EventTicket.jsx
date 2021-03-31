import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function EventTicket({ eventTicket }) {

  // console.log(eventTicket.event_data);
  let eventTkt = eventTicket && eventTicket.event_data;

  const calcTktPrice = () => {
      let tktMax = 0;
      let tktPrice = 0;
      let tktMin = 0;
      let roundedTktPrice = 0;
      if(eventTkt.TicketTypes.length > 1){
        tktMax = eventTkt.TicketTypes[1].Price.Amount 
      }
      tktMin = eventTicket && eventTkt.TicketTypes[0].Price.Amount;
      tktMax = eventTicket && tktMax;
      tktPrice = (tktMin + tktMax) / eventTkt.TicketTypes.length;
      roundedTktPrice = Math.round(tktPrice * 10) / 10;
      return roundedTktPrice;
  }

  return (

    <div className="event-ticket_container">
      <div className="event-date-additional-info"><span className="additional-info-time">{eventTicket && eventTkt.EventDate.split("T", 2)[1]}</span> <span className="additional-info">{eventTicket && eventTkt.AdditionalInfo}</span></div>
      <div className="event-place">{eventTicket && eventTkt.Venue.Name}</div>
      <div className="event-ticket-price">{(eventTicket && eventTkt.TicketTypes[0].Price.Amount) ? calcTktPrice() : "0"} ₾</div>
      <div className="event-ticket-buy"><a href={eventTicket && eventTkt.Urls.MainUrl} target="_blank" className="event-ticket-buy_btn">{window.lang.Buy}</a></div>
    </div>
    
  );
}
