import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import MealIcon from '../../../../assets/img/cat-icons/meal.png';
import MedicineIcon from '../../../../assets/img/cat-icons/medicine.png';
import SupportIcon from '../../../../assets/img/cat-icons/support.png';
import StoresIcon from '../../../../assets/img/cat-icons/stores.png';
import SportBeautyIcon from '../../../../assets/img/cat-icons/sport.png';
import TourismIcon from '../../../../assets/img/cat-icons/tourism.png';
import more from '../../../../assets/img/cat-icons/more.png';

import ArrowDown from '../../../../assets/img/arrow-down.png';


export default function InnerNavigation() {

    const [extraNav, setExtraNav] = useState(false);

    const moreMenu = [
        {
            id: 28,
            url: '/ka-ge/organizations/28',
            activity_category: 'პოპულარული',
        },
        {
            id: 3,
            url: '/ka-ge/organizations/3',
            activity_category: 'ფინანსები',
        },
        {
            id: 9,
            url: '/ka-ge/organizations/9',
            activity_category: 'იმპორტი, ექსპორტი',
        },
        {
            id: 12,
            url: '/ka-ge/organizations/12',
            activity_category: 'განათლება, მეცნიერება',
        },
        {
            id: 16,
            url: '/ka-ge/organizations/16',
            activity_category: 'მშენებლობა, რემონტი',
        },
        {
            id: 19,
            url: '/ka-ge/organizations/19',
            activity_category: 'წარმოება',
        },
        {
            id: 26,
            url: '/ka-ge/organizations/26',
            activity_category: 'კულტურა, ხელოვნება',
        },
        {
            id: 27,
            url: '/ka-ge/organizations/27',
            activity_category: 'მეურნეობა, მეცხოველეობა',
        },
        {
            id: 20,
            url: '/ka-ge/organizations/20',
            activity_category: 'ავტომობილი, ტრანსპორტი',
        },
        {
            id: 21,
            url: '/ka-ge/organizations/21',
            activity_category: 'სახელმწიფო, არასამთავრობო',
        },
        {
            id: 22,
            url: '/ka-ge/organizations/22',
            activity_category: 'კომუნიკაცია, მასმედია',
        },
        {
            id: 25,
            url: '/ka-ge/organizations/25',
            activity_category: 'სასმელები',
        }
    ]
    const firstRow = moreMenu.slice(0, 4);
    const secondRow = moreMenu.slice(4, 8);
    const thirdRow = moreMenu.slice(8, 12);

    return (
        <nav className="midSection__navigation__wrapper">
            <div className='midSection__secondary__wrapper'>
                <ul className='mid__navigation__list'>
                    <li className="mid__navigation__item__wrapper">
                        <Link to="/ka-ge/organizations/4" className='mid__navigation__item'>
                            <img src={MealIcon} alt="" />
                            <span>კვება,<br></br> გართობა</span>
                        </Link>
                    </li>
                    <li className="mid__navigation__item__wrapper">
                        <Link to="/ka-ge/organizations/23" className='mid__navigation__item'>
                            <img src={MedicineIcon} alt="" />
                            <span>მედიცინა,<br></br> ფარმაცია</span>
                        </Link>
                    </li>
                    <li className="mid__navigation__item__wrapper">
                        <Link to="/ka-ge/organizations/18" className='mid__navigation__item'>
                            <img src={SupportIcon} alt="" />
                            <span>მომსახურება</span>
                        </Link>
                    </li>
                    <li className="mid__navigation__item__wrapper">
                        <Link to="/ka-ge/organizations/8" className='mid__navigation__item'>
                            <img src={StoresIcon} alt="" />
                            <span>სავაჭრო <br></br>ობიექტები</span>
                        </Link>
                    </li>
                    <li className="mid__navigation__item__wrapper">
                        <Link to="/ka-ge/organizations/24" className='mid__navigation__item'>
                            <img src={SportBeautyIcon} alt="" />
                            <span>სპორტი,<br></br> სილამაზე</span>
                        </Link>
                    </li>
                    <li className="mid__navigation__item__wrapper">
                        <Link to="/ka-ge/organizations/6" className='mid__navigation__item'>
                            <img src={TourismIcon} alt="" />
                            <span>ტურიზმი,<br></br> დასვენება</span>
                        </Link>
                    </li>
                    <li className="mid__navigation__item__wrapper mid__navigation__item__other">
                        <Link to="#" className='mid__navigation__item ' onClick={() => { setExtraNav(!extraNav) }}>
                            <span>სხვა</span>
                            <img className={extraNav ? "more more--active" : "more"} src={ArrowDown} alt="" />
                        </Link>
                    </li>

                </ul>
                <div className={extraNav ? `mid-section__additional-nav flex` : 'mid-section__additional-nav'}>
                    <div className='additional-nav-row'>
                        {firstRow.map((itm, i) => {
                            return (<Link key={itm.id} to={itm.url}><div className="additiona-nav__item">{itm.activity_category}</div></Link>)
                        })}
                    </div>
                    <div className='additional-nav-row'>
                        {secondRow.map((itm, i) => {
                            return (<Link key={itm.id} to={itm.url}><div className="additiona-nav__item">{itm.activity_category}</div></Link>)
                        })}
                    </div>
                    <div className='additional-nav-row'>
                        {thirdRow.map((itm, i) => {
                            return (<Link key={itm.id} to={itm.url}><div className="additiona-nav__item">{itm.activity_category}</div></Link>)
                        })}
                    </div>
                </div>
                {/* <div className='additional-nav-row__btn__wrapper'>
                    <div className='additional-nav-row__btn' onClick={() => { setExtraNav(!extraNav) }}>
                        <span>სხვა</span>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div> */}
            </div>
        </nav>
    )
}
