import React from 'react';
import Slider from 'react-slick';
import WithoutPhoto from '../../../../assets/img/org-no-picture-mid-new.jpg';
import NoPhoto from '../../../../assets/img/org-no-picture-other-new.jpg';
import "../../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import '../../../css/slider.css';

export default function SliderContainer({ organization, image, images }) {

    // const dimmer = () => {
    //     let images = document.getElementsByClassName('slick-active');
    //     let imagesArr = [...images];
    //     console.log(imagesArr);
    //     imagesArr.forEach(img => {
    //         if (img.classList.contains("slick-current")) {
    //             console.log(img.children[0].children[0].children[0], 'works');

    //             // img.children[0].children[0].children[0].classList.add("display-none");
    //         }
    //     })
    // }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'slider-inner',
        centerMode: true,
        arrows:false,
        lazyLoad:true,
    };
    return (
        <div className='img-slider'>
            <Slider {...settings}>
                <div className='slider-img-wrapper'>
                    {/* <div className='dimmed-overlay'></div> */}
                    <img src={WithoutPhoto} alt="" />
                </div>
                {images.map(image => {
                    return (
                        <div key={'#'}className='slider-img-wrapper'><img src={NoPhoto} alt='Not Found' /></div>
                    )
                })}
            </Slider>
        </div>
    )
}
