import React from "react";
import Slider from "react-slick";
import OrganizationItem from "../../parts/OrganizationItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimilarOrgSlider({ organizations }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1
  };
  return (
    <div className="similar-organizations-slider-wrapper">
      <Slider {...settings}>
        {organizations &&
          organizations.map((element, index) => {
            return <OrganizationItem key={index} organization={element} />;
          })}
      </Slider>
    </div>
  );
}
