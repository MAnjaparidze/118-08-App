import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const CategoriesInnerNavigation = () => {

  const [moreNav, toggleNav] = useState(false);

  const ToggleMoreNav = (e) => {
    e.preventDefault();
    toggleNav(!moreNav);
  }

  const moreMenu = [
    {
      id: 28,
      url: '/ka-ge/organizations/28',
      activity_category: window.lang.popular,
    },
    {
      id: 3,
      url: '/ka-ge/organizations/3',
      activity_category: window.lang.Finance,
    },
    {
      id: 9,
      url: '/ka-ge/organizations/9',
      activity_category: window.lang.ImportExport,
    },
    {
      id: 12,
      url: '/ka-ge/organizations/12',
      activity_category: window.lang.EducationScience,
    },
    {
      id: 16,
      url: '/ka-ge/organizations/16',
      activity_category: window.lang.Buildingrepairs,
    },
    {
      id: 19,
      url: '/ka-ge/organizations/19',
      activity_category: window.lang.Production,
    },
    {
      id: 26,
      url: '/ka-ge/organizations/26',
      activity_category: window.lang.CultureArt,
    },
    {
      id: 27,
      url: '/ka-ge/organizations/27',
      activity_category: window.lang.FarmingLivestock,
    },
    {
      id: 20,
      url: '/ka-ge/organizations/20',
      activity_category: window.lang.CarTransport,
    },
    {
      id: 21,
      url: '/ka-ge/organizations/21',
      activity_category: window.lang.nongovernmental,
    },
    {
      id: 22,
      url: '/ka-ge/organizations/22',
      activity_category: window.lang.CommunicationMass,
    },
    {
      id: 25,
      url: '/ka-ge/organizations/25',
      activity_category: window.lang.Drinks,
    }
  ]
  
  return (
    <nav className='categories-navigation__wrapper'>
      <ul className='categories-navigation-list'>
        <li><p>გთავაზობთ:</p></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/4">{window.lang.MealsFun}</NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/23">{window.lang.MedicinePharmacy}</NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/18">{window.lang.Services}</NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/8">{window.lang.Merchants}</NavLink></li>
        <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/24">{window.lang.Sportbeauty} </NavLink></li>
        {/* <li><NavLink className='categories-navigation-item' to="/ka-ge/organizations/6">ტურიზმი, დასვენება </NavLink></li> */}
        <li>
        <button onClick={(e) => { ToggleMoreNav(e) }} className="categories-navigation-item btn" type="button" data-toggle="dropdown">{window.lang.More}</button>
          <div className="dropdown-button categories-navigation-item__wrapper">
            <ul className={moreNav ? "dropdown-menu flex" : "dropdown-menu"}>
              {moreMenu.map((itm, i) => {
                return (<li key={itm.id}><NavLink className='dropdown-menu-item' to={itm.url}>{itm.activity_category}</NavLink></li>)
              })}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default CategoriesInnerNavigation;