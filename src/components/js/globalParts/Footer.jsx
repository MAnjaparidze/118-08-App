import React from 'react';
import { Link } from 'react-router-dom';

import appStore from "../../../assets/img/icons/app-store.svg";
import playStore from "../../../assets/img/icons/play-store.svg";

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer-content__wrapper'>
                <div className='footer-info__wrapper'>
                    <div className='footer-info-div'>
                        <span className='footer-info-header'>მოდულები</span>
                        <ul className='footer-info-list'>
                            <Link to='#'><li>ორგანიზაციები</li></Link>
                            <Link to='#'><li>აფიშა</li></Link>
                            <Link to='#'><li>ტრანსპორტ</li></Link>
                            {/* <Link to='#'><li>ამინდი</li></Link> */}
                            <Link to='#'><li>ვალუტა</li></Link>
                            {/* <Link to='#'><li>ქუჩები/კოდები</li></Link> */}
                            <Link to='#'><li>ქალაქები</li></Link>
                            {/* <Link to='#'><li>ფასდაკლებები</li></Link> */}
                            <Link to='#'><li>კალენდარი</li></Link>
                        </ul>
                    </div>
                    <div className='footer-info-div'>
                        <span className='footer-info-header'>კატეგორიები</span>
                        <ul className='footer-info-list'>
                            <Link to='#'><li>კვება, გართობა</li></Link>
                            <Link to='#'><li>მედიცინა, ფარმაცია</li></Link>
                            <Link to='#'><li>მომსახურება</li></Link>
                            <Link to='#'><li>სავაჭრო ობიექტები</li></Link>
                            <Link to='#'><li>სპორტი, სილამაზე</li></Link>
                            <Link to='#'><li>ტურიზმი, დასვენება</li></Link>
                        </ul>
                    </div>
                    <div className='footer-info-div'>
                        <span className='footer-info-header'>ენები</span>
                        <ul className='footer-info-list'>
                            <Link to='#'><li>ქართული</li></Link>
                            <Link to='#'><li>ინგლისური</li></Link>
                        </ul>
                    </div>
                    <div className='footer-info-div'>
                        <span className='footer-info-header'>კომპანია</span>
                        <ul className='footer-info-list'>
                            <Link to='#'><li>ჩვენს შესახებ</li></Link>
                            <Link to='#'><li>კონტაქტი</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='footer-download-app'>
                    <span className='footer-info-header'>დაგვიკავშირდით</span>
                    <ul className='footer-info-list'>
                        <Link to='#'><li>(+995) 555 555 555</li></Link>
                        <Link to='#'><li>customerservice@08.ge</li></Link>
                    </ul>
                    <span className='footer-info-header'>გადმოწერეთ აპლიკაცია</span>
                    <ul className='footer-info-list'>
                        <Link className="footer-download-app-icons app-store" to='#'><img src={appStore} /></Link>
                        <Link className="footer-download-app-icons play-store" to='#'><img src={playStore} /></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
