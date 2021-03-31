import React, { useState, useEffect } from "react";

import "../../../../css/parts/ReviewItem.css";

export default function ReviewItem() {
  let rate_count = 4;
  let review_id = Math.floor(Math.random() * 100);

  const toggleStars = () => {
    let starsToToggle = document.getElementsByClassName(
      `star-div-${review_id}`
    );
    let starsToToggleArr = Array.from(starsToToggle);
    if (starsToToggleArr.length > 0) {
      for (let i = 0; i < rate_count; i++) {
        starsToToggleArr[i].classList.add("star-active");
      }
    }
  };

  const renderStars = () => {
    let returnStars = [];
    for (let i = 0; i < 5; i++) {
      returnStars.push(
        <div className={`star-div star-div-${review_id}`}></div>
      );
    }
    return returnStars;
  };
  return (
    <div className="review-item-wrapper">
      <div className="review-count">
        <div className="reviewer-name">ინკოგნიტო</div>
        <div className="review-stars">{renderStars()}</div>
        <div className="timeout-div">
          {setTimeout(() => {
            return toggleStars();
          }, 500)}
        </div>
      </div>
      <p className="review-content">
        ლორემ იპსუმ დაახლოება მუშტი თავქარანმა გამომდიოდეს ბეჯით ამეწერა,
        ფაფახიანმა ხევისთავიც ლივერპულელი, ტომთან ზრდაშეჩერებულ, შევუგინე,
        გააყოლებს მერელას მოიფხანონ. ერთობას ელოცნა მეხსიერება წიბრაზითა ბეჯით
        თავქარანმა. ტიკტიკა ლოცვაზედ ბუდაპეშტში, უშნო ერთობას სხივი გამოძრომას.
      </p>
    </div>
  );
}
