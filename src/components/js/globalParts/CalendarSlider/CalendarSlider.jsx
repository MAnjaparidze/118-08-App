import React from "react";
import Calendar from "react-calendar";

import ArrowLef from '../../../../assets/img/arrow-lef.png';
import ArrowRig from '../../../../assets/img/arrow-rig.png';

import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../css/slider.css";



export default class CalendarSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
    this.props.nextSemester();
  }
  previous() {
    this.slider.slickPrev();
    this.props.prevSemester();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: "react-calendar-slider-container"
    };
    const { year, calendarItems, changeSemester } = this.props;
    return (
      <>
        <button className="prev-semester" onClick={this.previous}>
         <img src={ArrowLef} alt=""/>
        </button>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 0, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(new Date(year, 1, 1))}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 2, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 3, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 4, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(new Date(year, 5, 1))}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 6, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 7, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 8, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(new Date(year, 9, 1))}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 10, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
          <Calendar
            maxDetail="month"
            minDetail="month"
            activeStartDate={new Date(year, 11, 1)}
            tileClassName="calendar-day-wrapper"
            showNeighboringMonth={false}
          />
        </Slider>
        <button className="next-semester" onClick={this.next}>
          <img src={ArrowRig} alt=""/>
        </button>
      </>
    );
  }
}
