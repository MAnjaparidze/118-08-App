import React, { useState, useEffect } from "react";

import Map from "../../globalParts/GoogleMap/GoogleMap";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../css/slider.css";

import ArrowDown from "../../../../assets/img/arrow-wt.png";
import ArrowDown_Blk from "../../../../assets/img/arrow-blk.png";
import SearchIco from "../../../../assets/img/search.png";
import SearchIcon from "../../../../assets/img/search-blk.png";

import NoImage from "../../../../assets/img/no-img.jpg";
import TestImg1 from "../../../../assets/test/tbilisi.png";
import TestImg2 from "../../../../assets/test/tbilisi2.jpg";

import Loader from "react-loader-spinner";

import StreetItem from "./StreetItem";

import "../../../css/streetsPage/streets.css";
import { stringLiteral } from "@babel/types";

export default function MidSection({
  countries,
  cities,
  districts,
  streets,
  country,
  countryPhone,
  city,
  district,
  setCountry,
  setCountryPhone,
  setCity,
  setDistrict,
  setCountryId,
  setCityId,
  setDistrictId,
  isStrLoaded
}) {
  const [showCountries, toggleShowCountries] = useState(false);
  const [showCities, toggleShowCities] = useState(false);
  const [showDistricts, toggleShowDisctricts] = useState(false);
  const [searchActive, toggleSearch] = useState(false);
  const [cityCode, setCityCode] = useState(32);

  const [filteredData, setFilteredData] = useState(null);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);

  useEffect(() => {
    // console.log(countries)
  }, [countries]);

  const filterData = searchString => {
    let filteredArray = [];
    if (searchString.length >= 3) {
      streets.filter(e => {
        if (e.name && e.name.includes(searchString)) {
          filteredArray.push(e);
        }
        return setFilteredData(filteredArray);
      });
    } else {
      return setFilteredData(null);
    }
  };

  const filterCountries = str => {
    if (str.length >= 3) {
      let filteredData = countries.filter(country =>
        country.name.includes(`${str}`)
      );
      setFilteredCountries(filteredData);
    } else {
      setFilteredCountries(countries);
    }
  };
  const filterCities = str => {
    if (str.length >= 2) {
      let filteredData = cities.filter(city => {
        return isNaN(str)
          ? city.name != null
            ? city.name.includes(`${str}`)
            : 0
          : city.town_new_code != null
          ? city.town_new_code.includes(`${str}`)
          : 0;
      });
      setFilteredCities(filteredData);
    } else {
      setFilteredCities(cities);
    }
  };
  // const filterCities = str => {
  //   if (str.length >= 2) {
  //     let filteredData = cities.filter(city => city.name.includes(`${str}`));
  //     setFilteredCities(filteredData);
  //   } else {
  //     setFilteredCities(cities);
  //   }
  // };
  const filterDistricts = str => {
    if (str.length >= 2) {
      let filteredData = districts.filter(district =>
        district.name.includes(`${str}`)
      );
      setFilteredDistricts(filteredData);
    } else {
      setFilteredDistricts(districts);
    }
  };

  useEffect(() => {
    // console.log(filteredCities);
  }, [filteredCities]);

  useEffect(() => {
    setFilteredCountries(countries);
    setFilteredCities(cities);
    setFilteredDistricts(districts);
  }, [countries, cities, districts]);

  useEffect(() => {
    if (showCountries) {
      let countryInput = document.getElementById("country-search-input");
      countryInput.focus();
    }
  }, [showCountries]);
  useEffect(() => {
    if (showCities) {
      let cityInput = document.getElementById("city-search-input");
      cityInput.focus();
    }
  }, [showCities]);
  useEffect(() => {
    if (showDistricts) {
      let districtInput = document.getElementById("district-search-input");
      districtInput.focus();
    }
  }, [showDistricts]);
  useEffect(() => {
    if (searchActive) {
      let streetInput = document.getElementById("street-search-input");
      streetInput.focus();
    }
  }, [searchActive]);

  // const settings = {
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   className: "streets-gallery-slider",
  //   centerMode: true,
  //   arrows: true,
  //   lazyLoad: true
  // };

  return (
    <div className="streets-mid-container">
      <div className="streets-mid-bg">
        <div className="streets-label">{window.lang.StreetsZIPcodes}</div>
        {/* <div className="dimmed-overlay"></div> */}
      </div>
      {/* <div
        className="overalyList"
        onClick={() => {
          toggleShowCountries(false);
          toggleShowCities(false);
          toggleShowDisctricts(false);
        }}
      ></div> */}
      <div className="streets-content-wrapper">
        <div className="pick-place">
          <div className="pick-country">
            <label htmlFor="country-items-wrapper">
              {/* {window.lang.Choosecountry} */}
            </label>
            <div className="country-items-container">
              <div
                id="country-items-wrapper"
                onClick={() => {
                  toggleShowCountries(!showCountries);
                }}
              >
                <span className="country-item-name">{country}</span>
                <img src={ArrowDown} alt="" />
              </div>
              <div
                className={
                  showCountries
                    ? `country-items-list-wrapper list-visible`
                    : `country-items-list-wrapper`
                }
              >
                <div className="country-items-search">
                  <input
                    id="country-search-input"
                    placeholder={window.lang.Findcountry}
                    type="text"
                    onChange={e => filterCountries(e.target.value)}
                  />
                </div>
                {filteredCountries &&
                  filteredCountries.map(e => {
                    return (
                      <div
                        key={e.country_id}
                        className="country-item"
                        onClick={() => {
                          setCountry(e.name);
                          setCountryPhone(e.phone_code);
                          setCountryId(e.country_id);
                          toggleShowCountries(false);
                        }}
                      >
                        {e.name}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="pick-city">
            <label htmlFor="city-items-wrapper">
              {/* {window.lang.Choosecity} */}
            </label>
            <div className="city-items-container">
              <div
                id="city-items-wrapper"
                onClick={() => toggleShowCities(!showCities)}
              >
                <span className="city-item-name">
                  {city} {cityCode ? `(${cityCode})` : null}
                </span>
                <img src={ArrowDown} alt="" />
              </div>
              <div
                className={
                  showCities
                    ? `city-items-list-wrapper list-visible`
                    : `city-items-list-wrapper`
                }
              >
                <div className="city-items-search">
                  <input
                    id="city-search-input"
                    placeholder={window.lang.FindCity}
                    type="text"
                    onChange={e => {
                      filterCities(e.target.value);
                    }}
                  />
                </div>
                {filteredCities &&
                  filteredCities.map(e => {
                    return (
                      <div
                        key={e.id}
                        className="city-item"
                        onClick={() => {
                          setCity(e.name);
                          setCityId(e.town_id);
                          setCityCode(e.town_new_code.replace(";", ""));
                          toggleShowCities(false);
                        }}
                      >
                        {e.name}{" "}
                        {e.town_new_code &&
                          `(${e.town_new_code.replace(";", "")})`}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="pick-district">
            <label htmlFor="district-items-wrapper">
              {/* {window.lang.Choosedistrict} */}
            </label>
            <div className="district-items-container">
              <div
                id="district-items-wrapper"
                onClick={() => {
                  toggleShowDisctricts(!showDistricts);
                }}
              >
                <span className="district-item-name">{district}</span>
                <img src={ArrowDown} alt="" />
              </div>
              <div
                className={
                  showDistricts
                    ? `district-items-list-wrapper list-visible`
                    : `district-items-list-wrapper`
                }
              >
                <div className="district-items-search">
                  <input
                    id="district-search-input"
                    placeholder={window.lang.Searcharea}
                    type="text"
                    onChange={e => {
                      filterDistricts(e.target.value);
                    }}
                  />
                </div>
                {filteredDistricts && (
                  <div
                    key={0}
                    className="city-item"
                    onClick={() => {
                      setDistrict("ყველა");
                      setDistrictId(null);
                      toggleShowDisctricts(false);
                    }}
                  >
                    ყველა
                  </div>
                )}
                {filteredDistricts &&
                  filteredDistricts.map(e => {
                    return (
                      <div
                        key={e.id}
                        className="city-item"
                        onClick={() => {
                          setDistrict(e.name);
                          setDistrictId(e.town_district_id);
                          toggleShowDisctricts(false);
                        }}
                      >
                        {e.name}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="streets-content-right">
        <div className="search-street-wraper">
          <img src={SearchIcon} alt="" />
          <input
              id="street-search-input"
              type="text"
              className="street-search-input-head"
              placeholder="მოძებნეთ ქუჩა"
              onChange={e => filterData(e.target.value)}
            />
          </div>
          {/* <div className="content-right-head">
            <div
              className={
                searchActive
                  ? "content-right-search content-right-search-active"
                  : "content-right-search"
              }
            >
              <div
                className="street-search-logo-wrapper"
                onClick={() => {
                  toggleSearch(!searchActive);
                }}
              >
                <img src={SearchIco} alt="" />
              </div>

              {searchActive && (
                <input
                  id="street-search-input"
                  type="text"
                  className="street-search-input"
                  placeholder="მოძებნეთ ქუჩა"
                  onChange={e => filterData(e.target.value)}
                />
              )}
            </div>
          </div> */}
          <div className="streets-content-right">
            <div className="content-right-items">
              {isStrLoaded ? (
                filteredData ? (
                  filteredData.map((e, index) => {
                    return <StreetItem key={index} streetItem={e} />;
                  })
                ) : (
                  streets &&
                  streets.map((e, index) => {
                    return (
                        <StreetItem key={index} streetItem={e} />
                    );
                  })
                )
              ) : (
                <div className="loader-container">
                  <Loader
                    type="ThreeDots"
                    color="#somecolor"
                    height={80}
                    width={80}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
