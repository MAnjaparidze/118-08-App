import React, { useState, useEffect } from "react";
import "../../../css/eventsPage/EventPage.css";

import ModalVideo from 'react-modal-video'

import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./categories/Component";

import EventTicket from "./EventTicket";
import { setDate } from "date-fns/esm";

import yIcon from "../../../../assets/img/icons/youtube.svg";

export default function EventPageMidRender({ event }) {
  const [tktRender, toggleTKTRender] = useState(false);
  const [tktArray, setTKTArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [minX, setMinX] = useState(0);
  const [maxX, setMaxX] = useState(30);

  const [cinemaFilter, setCinemaFilter] = useState(1);

  let domain = [0, 30];
  let defaultValues = [0, 30];

  const sliderStyle = {
    position: "relative",
    width: "300px"
  };

  const openModal = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    switch (cinemaFilter) {
      case 1:
        setTKTArray([]);
        setFilteredArray(event);
        break;
      case 2:
        setTKTArray([]);
        handleFilterByMovies(window.lang.AmiraniCinema);
        // handleFilterByPrice();
        break;
      case 3:
        setTKTArray([]);
        handleFilterByMovies(window.lang.RustaveliCinema);
        // handleFilterByPrice()
        break;
      case 4:
        setTKTArray([]);
        handleFilterByMovies(window.lang.CaveGallery);
        // handleFilterByPrice()
        break;
      case 5:
        setTKTArray([]);
        handleFilterByMovies(window.lang.CaveaEastPoint);
        // handleFilterByPrice()
        break;
      case 6:
        setTKTArray([]);
        handleFilterByMovies(window.lang.CaveCityMall);
        // handleFilterByPrice()
        break;
      default:
        setFilteredArray(event);
        handleFilterByPrice();
        break;
    }
  }, [cinemaFilter, event]);

  useEffect(() => {
    // console.log(cinemaFilter);
  }, [cinemaFilter]);

  useEffect(() => {
    if (filteredArray) {
      optimizeEvents();
    }
  }, [filteredArray]);

  const handleFilterByMovies = cinema => {
    let filteredData = event.filter(data => {
      // console.log(data);
      return data.event_data.Venue.Name === cinema;
    });
    setFilteredArray(filteredData);
  };

  const handleFilterByPrice = () => {
    // let thisfilteredData = event.filter(data => {
    //   data.event_data.TicketTypes.forEach(tkt => {
    //     if (tkt.Price.Amount >= minX && tkt.Price.Amount <= maxX) {
    //     }
    //   });
    // });

    let thisFilteredData = [];
    filteredArray.forEach(data => {
      data.event_data.TicketTypes.forEach(tkt => {
        if (tkt.Price.Amount >= minX && tkt.Price.Amount <= maxX) {
          thisFilteredData.push(data);
        }
      });
    });

    setFilteredArray(thisFilteredData);
  };

  let moviePoster = event && event[0].poster;
  const poster = {
    backgroundImage: "url(" + moviePoster + ")"
  };

  let youtubeUrl = event && event[0].event_data.ArtistVideoUrl;
  let youtubeVideo =youtubeUrl && youtubeUrl.split("v=")[1].substring(0, 11); 

  const optimizeEvents = () => {
    let dateArray = [];

    filteredArray.forEach(el => {
      let startStrFirst = el.event_data.EventDate.indexOf("-");
      let startStrSecond = el.event_data.EventDate.indexOf(
        "-",
        startStrFirst + 1
      );
      let endStr = el.event_data.EventDate.indexOf("T");
      let elDate = el.event_data.EventDate.slice(startStrSecond + 1, endStr);
      if (!dateArray.includes(elDate)) {
        dateArray.push(elDate);
      }
    });

    for (let i = 0; i < dateArray.length; i++) {
      let tempArray = [];
      let int = 0;
      let month = "";
      filteredArray.forEach(e => {
        let startStrFirst = e.event_data.EventDate.indexOf("-");
        let startStrSecond = e.event_data.EventDate.indexOf(
          "-",
          startStrFirst + 1
        );
        let endStr = e.event_data.EventDate.indexOf("T");
        let elDate = e.event_data.EventDate.slice(startStrSecond + 1, endStr);
        if (dateArray[i] === elDate) {
          tempArray.push(e);
        }

        int = parseInt(
          e.event_data.EventDate.slice(startStrFirst + 1, startStrSecond)
        );
      });
      switch (int) {
        case 1:
          month = window.lang.January;
          break;
        case 2:
          month = window.lang.February;
          break;
        case 3:
          month = window.lang.March;
          break;
        case 4:
          month = window.lang.April;
          break;
        case 5:
          month = window.lang.May;
          break;
        case 6:
          month = window.lang.June;
          break;
        case 7:
          month = window.lang.July;
          break;
        case 8:
          month = window.lang.August;
          break;
        case 9:
          month = window.lang.September;
          break;
        case 10:
          month = window.lang.October;
          break;
        case 11:
          month = window.lang.November;
          break;
        case 12:
          month = window.lang.December;
          break;
        default:
          month = "";
      }
      setTKTArray(tktArray => [
        ...tktArray,
        { id: i, month: month, date: dateArray[i], tickets: tempArray }
      ]);
    }
    // toggleTKTRender(true);
  };

  return (
    <div className="event-page-render_container">
      {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId={youtubeVideo} onClose={() => setIsOpen(false)} /> */}
      <div className="event-page-header">
        <div className="event-page-header_wrapper">
          <div className="event-page-render_left">
            {/* { youtubeVideo ? (
              <a className="youtube-play-icon" onClick={openModal}><img src={yIcon} /></a>
            ) : (
              <a></a>
            )} */}
          <img
              src={event && event[0].poster}
              alt=""
              className="event-page_event-poster"
            />
          </div>

          <div className="event-page-render_right">
            <h2 className="event-page_event-name">
              {event && event[0].event_data.Name}
            </h2>
            <span className="event-page_event-type">
              {event && event[0].event_data.ShowCategoryName}
            </span>
            <div
              className="event-page_event-description"
              dangerouslySetInnerHTML={{
                __html: event && event[0].event_data.Description
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* <div className="category-event-render_filter">
        <div className="cat-event-day-filter">
          <div className="cat-event-day-filter"></div>
        </div>
        <div className="cat-event-price-filter">
          <div className="event-price-range">
            ბილეთები {minX} ლარიდან {maxX} ლარამდე
          </div>
          <Slider
            mode={2}
            step={1}
            domain={domain}
            rootStyle={sliderStyle}
            onChange={e => {
              setMinX(e[0]);
              setMaxX(e[1]);
            }}
            values={defaultValues}
          >
            <Rail>
              {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
            <Ticks count={5}>
              {({ ticks }) => (
                <div className="slider-ticks">
                  {ticks.map(tick => (
                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                  ))}
                </div>
              )}
            </Ticks>
          </Slider>
        </div>
      </div> */}
      { (event && event[0].event_data.ShowCategoryName === window.lang.Cinema) && <div className="category-event-render_cinema-filter">
        <div
          className={
            cinemaFilter === 1
              ? "event-filter-cinema-item cinema-filter--active"
              : "event-filter-cinema-item"
          }
          onClick={() => setCinemaFilter(1)}
        >
          {window.lang.All}
        </div>
        <div
          className={
            cinemaFilter === 2
              ? "event-filter-cinema-item cinema-filter--active"
              : "event-filter-cinema-item"
          }
          onClick={() => setCinemaFilter(2)}
        >
          {window.lang.Amirani}
        </div>
        <div
          className={
            cinemaFilter === 3
              ? "event-filter-cinema-item cinema-filter--active"
              : "event-filter-cinema-item"
          }
          onClick={() => setCinemaFilter(3)}
        >
          {window.lang.Rustaveli}
        </div>
        <div
          className={
            cinemaFilter === 4
              ? "event-filter-cinema-item cinema-filter--active"
              : "event-filter-cinema-item"
          }
          onClick={() => setCinemaFilter(4)}
        >
          {window.lang.Gallery}
        </div>
        <div
          className={
            cinemaFilter === 5
              ? "event-filter-cinema-item cinema-filter--active"
              : "event-filter-cinema-item"
          }
          onClick={() => setCinemaFilter(5)}
        >
          {window.lang.CaveaEastPoint}
        </div>
        <div
          className={
            cinemaFilter === 6
              ? "event-filter-cinema-item cinema-filter--active"
              : "event-filter-cinema-item"
          }
          onClick={() => setCinemaFilter(6)}
        >
          {window.lang.CaveTbilisiMall}
        </div>
      </div>}
      <div className="event-page-render_wrapper">
        <ul className="timeline">
          {tktArray &&
            tktArray.map(el => {
              return (
                <li key={el.id}>
                  <p className="timeline-date">
                    {el.date} {el.month}
                  </p>
                  <div className="timeline-content">
                    {el.tickets &&
                      el.tickets.map((ticket, index) => {
                        return <EventTicket key={index} eventTicket={ticket} />;
                      })}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
