import React, { useState, useEffect } from "react";
import MidSectionFirstPanel from "./MidSectionFirstPanel";
import SearchIcon from "../../../../assets/img/search-blk.png";
import FilterIcon from "../../../../assets/img/filter.png";
import CloseIcon from "../../../../assets/img/black-x.png";
import OrganizationIcon from "../../../../assets/img/icons/org.svg";
import OrganizationSmIcon from "../../../../assets/img/icons/org2.png";

import InnerNavigation from "./InnerNavigation";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function MidSection() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchNameStr, setSearchNameStr] = useState("");
  const [searchPlaceStr, setSearchPlaceStr] = useState("");
  const [searchCityStr, setSearchCityStr] = useState(51063);

  useEffect(() => {
    if (searchNameStr.length >= 3 || searchPlaceStr >= 3) {
      fetchSearchData();
    } else {
      setSearchData([]);
    }
  }, [searchNameStr, searchPlaceStr, searchCityStr]);

  const fetchSearchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=searchByString&str_name=${searchNameStr}&str_addrs=${searchPlaceStr}&is_city=${searchCityStr}`
    );
    const item = await fetchItem.json();
    setSearchData(item.data);
  };

  const searchOrganizations = e => {
    e.preventDefault();
    if (searchActive) {
      let searchContent = `&str_name=${searchNameStr}&str_addrs=${searchPlaceStr}&is_city=${searchCityStr}`;
      window.location.href = `/ka-ge/organizations/search/${searchContent}`;
    } else {
      setSearchActive(true);
    }
  };

  return (
    <div className="midSection__container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <span>ორგანიზაციები</span>
        <form
          className={
            searchActive ? "search-field search-field-active" : "search-field"
          }
        >
          <div className="search-field-container">
            {/* <div className="search-field-wrapper">
              <input
                id="search-field-orgName"
                pattern=".{3,}"
                type="text"
                placeholder="ორგანიზაციის სახელი"
                title="3 characters minimum"
                autoComplete="off"
                required
                min="3"
                onChange={e => {
                  setSearchNameStr(e.target.value);
                }}
              />
              <div className="horizontal-div">
                <select
                 id="city-select-orgCity"
                className="city-select"
                onChange={e => {
                  setSearchCityStr(e.target.value);
                }}
                >
                  <option value="0" hidden >ქალაქები</option>
                  <option value="0">ყველა</option>
                  <option value="51063" selected="selected">თბილისი</option>
                  <option value="51043">ბათუმი</option>
                  <option value="51549">ქუთაისი</option>
                  <option value="53447">რუსთავი</option>
                  <option value="53767">მცხეთა</option>
                  <option value="53666">გორი</option>
                  <option value="53073">ზუგდიდი</option>
                  <option value="56088">ფოთი</option>
                  <option value="50970">ზესტაფონი</option>
                  <option value="53952">ხაშური</option>
                </select>
              </div>

              <input
                id="search-field-orgPlace"
                pattern=".{3,}"
                type="text"
                placeholder="ორგანიზაციის ადგილმდებარეობა"
                title="3 characters minimum"
                autoComplete="off"
                onChange={e => {
                  setSearchPlaceStr(e.target.value);
                }}
              />
            </div> */}
            <div className="search-field-wrapper">
              <button
                type="submit"
                className="submit"
                onClick={e => searchOrganizations(e)}
              >
                <img src={SearchIcon} alt="" />
              </button>
              {searchActive && (
                <input
                  pattern=".{3,}"
                  type="text"
                  placeholder="ორგანიზაციის სახელი"
                  title="3 characters minimum"
                  autoComplete="off"
                  required
                  min="3"
                  onChange={e => {
                    setSearchNameStr(e.target.value);
                  }}
                  className="search-field-input"
                />
              )}
              {searchActive && (
                <button
                  className="filter"
                  onClick={e => {
                    e.preventDefault();
                    setSearchActive(false);
                  }}
                >
                  <img src={CloseIcon} alt="" />
                </button>
              )}
            </div>
            <div className="live-search-wrapper">
              {searchData.map(e => {
                return (
                  <Link
                    key={e.id}
                    to={`/ka-ge/organization/${e.id}`}
                    className="live-search-item"
                  >
                    <img
                      src={
                        e.parent == 0 ? OrganizationIcon : OrganizationSmIcon
                      }
                      alt=""
                    />
                    <div className="live-search-item-info">
                      <span className="live-search-item-name">{e.name}</span>
                      <p className="live-search-item-address">{e.address}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </form>
      </div>
      {/* <div className="dimmed-overlay"></div> */}
      {searchActive && (
        <div className="search-field-additional">
          <div className="horizontal-div">
            <input
              id="search-field-orgPlace"
              pattern=".{3,}"
              type="text"
              placeholder="ორგანიზაციის ადგილმდებარეობა"
              title="3 characters minimum"
              autoComplete="off"
              onChange={e => {
                setSearchPlaceStr(e.target.value);
              }}
            />
            <select
              id="city-select-orgCity"
              className="city-select"
              onChange={e => {
                setSearchCityStr(e.target.value);
              }}
            >
              <option value="0" hidden>
                ქალაქები
              </option>
              <option value="0">ყველა</option>
              <option value="51063" selected="selected">
                თბილისი
              </option>
              <option value="51043">ბათუმი</option>
              <option value="51549">ქუთაისი</option>
              <option value="53447">რუსთავი</option>
              <option value="53767">მცხეთა</option>
              <option value="53666">გორი</option>
              <option value="53073">ზუგდიდი</option>
              <option value="56088">ფოთი</option>
              <option value="50970">ზესტაფონი</option>
              <option value="53952">ხაშური</option>
            </select>
          </div>
        </div>
      )}
      <InnerNavigation />
    </div>
  );
}
