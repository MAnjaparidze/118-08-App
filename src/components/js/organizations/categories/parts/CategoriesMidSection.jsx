import React from "react";
import MidSectionFirstPanel from "../../parts/MidSectionFirstPanel";

import OrganizationIcon from "../../../../../assets/img/icons/org.svg";
// import SearchIcon from "../../../../../assets/img/search.png";

import { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

import FilterIcon from "../../../../../assets/img/filter.png";
import SearchIcon from "../../../../../assets/img/search-blk.png";
import OrganizationSmIcon from "../../../../../assets/img/icons/org2.png";

import CategoriesInnerNavigation from "./CategoriesInnerNavigation";
import Axios from "axios";

import classnames from "classnames";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom";

import BackIcon from "../../../../../assets/img/arr-lef.png";

export default class midSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartDayChange = this.handleStartDayChange.bind(this);
    this.handleEndDayChange = this.handleEndDayChange.bind(this);
    this.state = {
      visible: false,
      filteredArray: [],
      isHeadOffice: false,
      isInsured: false,
      hasWebPage: false,
      hasExtraInfo: false,
      hasCorpMobile: false,
      hasSale: false,
      hasDirectorMobile: false,
      isRestaurant: false,
      isNGO: false,
      isCultural: false,
      isService: false,
      isTransportation: false,
      isEducational: false,
      isFinancial: false,
      isImportExport: false,
      isLLC: false,
      isActionalSociety: false,
      isOpen: false,
      hasMenu: false,
      hasDelivery: false,
      establishDate: null,
      workersNumber: null,
      isENG: false,
      selectedStartDay: undefined,
      selectedEndDay: undefined,
      prevScrollpos: window.pageYOffset,
      scroll: true,
      setSearchCityStr: 0,
      filteredData: [],
      searchStr: "",
      additionalFilterActive: false,
      searchNameStr: "",
      searchData: [],
      searchPlaceStr: '',
      searchCityStr: '',
    };
  }

  // start scroll event
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    // const filterPosition = document.getElementById("filterbar").offsetTop;
    let scroll = false;

    // if (currentScrollPos <= filterPosition + 69) {
    //   scroll = true;
    // } else {
    //   scroll = false;
    // }

    this.setState({
      prevScrollpos: currentScrollPos,
      scroll
    });
  };
  // end scroll

  toggleAddFilter = e => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  };
  parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale });
  };

  handleStartDayChange = async selectedStartDay => {
    await this.setState({
      selectedStartDay: selectedStartDay
    });
  };
  handleEndDayChange = async selectedEndDay => {
    await this.setState({
      selectedEndDay: selectedEndDay
    });
  };

  setSearchNameStr = (e) => {
    this.setState({ searchNameStr: e.target.value })
  }

  // this.url = 'api/?app=organizations/OrganizationApi&resource=searchByStringAdvanced';
  async handleFilter() {
    let url =
      "/api/?app=organizations/OrganizationApi&resource=searchByStringAdvanced";

    let currentUrl = window.location.href;
    let pgNum = currentUrl.indexOf("pg=");
    let startNum = pgNum + 3;
    let pgCatteg = currentUrl.substr(startNum, currentUrl.length);

    let cattegNum = currentUrl.indexOf("ons/");
    let cattegStartNum = cattegNum + 4;
    let cattegEndNum = currentUrl.indexOf("?pg");
    let cattegId = currentUrl.substr(cattegStartNum, cattegEndNum);
    console.log(
      cattegId,
      cattegStartNum,
      cattegEndNum,
      "<===================="
    );

    if (this.state.isHeadOffice) {
      url = url + "&isHeadOffie=1";
    }
    if (this.state.isInsured) {
      url = url + "&isInsured=1";
    }
    if (this.state.hasWebPage) {
      url = url + "&hasWebPage=1";
    }
    if (this.state.hasExtraInfo) {
      url = url + "&hasExtraInfo=1";
    }
    if (this.state.hasCorpMobile) {
      url = url + "&hasCorpMobile=1";
    }
    if (this.state.hasSale) {
      url = url + "&hasSale=1";
    }
    if (this.state.hasDirectorMobile) {
      url = url + "&hasDirectorMobile=1";
    }
    if (this.state.isRestaurant) {
      url = url + "&isRestaurant=1";
    }
    if (this.state.isNGO) {
      url = url + "&isNGO=1";
    }
    if (this.state.isOpen) {
      url = url + "&isOpen=1";
    }
    if (this.state.hasMenu) {
      url = url + "&hasMenu=1";
    }
    if (this.state.hasDelivery) {
      url = url + "&hasDelivery=1";
    }
    if (
      url ===
      "/api/?app=organizations/OrganizationApi&resource=searchByStringAdvanced"
    ) {
      url = `/api/?app=organizations/OrganizationApi&resource=orgByCategory&id=${cattegId}`;
    }
    console.log(url);

    const fetchItem = await fetch(`${url}`);
    const item = await fetchItem.json();
    this.props.changeOrg(item.data);
    console.log(item);
  }

  async toggleSwitch(stateComponent, state) {
    switch (stateComponent) {
      case "isHeadOffice":
        await this.setState({ isHeadOffice: !state });
        this.handleFilter();
        break;
      case "isInsured":
        await this.setState({ isInsured: !state });
        this.handleFilter();
        break;
      case "hasWebpage":
        await this.setState({ hasWebPage: !state });
        this.handleFilter();
        break;
      case "hasExtraInfo":
        await this.setState({ hasExtraInfo: !state });
        this.handleFilter();
        break;
      case "hasCorpMobile":
        await this.setState({ hasCorpMobile: !state });
        this.handleFilter();
        break;
      case "hasSale":
        await this.setState({ hasSale: !state });
        this.handleFilter();
        break;
      case "hasDirectorMobile":
        await this.setState({ hasDirectorMobile: !state });
        this.handleFilter();
        break;
      case "isRestaurant":
        await this.setState({ isRestaurant: !state });
        this.handleFilter();
        break;
      case "isNGO":
        await this.setState({ isNGO: !state });
        this.handleFilter();
        break;
      case "isOpen":
        await this.setState({ isOpen: !state });
        this.handleFilter();
        break;
      case "hasMenu":
        await this.setState({ hasMenu: !state });
        this.handleFilter();
        break;
      case "hasDelivery":
        await this.setState({ hasDelivery: !state });
        this.handleFilter();
        break;
      default:
        break;
    }
  }

  toggleLanguage = async () => {
    await this.setState({ isENG: !this.state.isENG });
  };
  componentDidUpdate(prevState) {
    // if (prevState.searchNameStr !== this.state.searchNameStr) {
    //   console.log("Updated", this.state.searchNameStr)
    // }
    if (this.state.searchNameStr.length >= 3) {
      this.searchOrganizationsLive();
    } 
  }

  searchOrganizationsLive = async()  => {
    // let searchContent = `&str_name=${this.props.searchNameStr}&str_addrs=${this.props.searchAddrsStr}&is_city=${this.state.setSearchCityStr}`;

    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=searchByString&str_name=${this.state.searchNameStr}&str_addrs=${this.state.searchPlaceStr}&is_city=${this.state.searchCityStr}`
    );
    const item = await fetchItem.json();
    this.setState({ searchData: item.data});

  }

  searchOrganizations = e => {
    e.preventDefault();
    console.log(this.props.searchPlaceStr);
    // let searchContent = `&str_name=${this.props.searchNameStr}&str_addrs=${this.props.searchAddrsStr}`;

    let searchContent = `&str_name=${this.props.searchNameStr}&str_addrs=${this.props.searchAddrsStr}&is_city=${this.state.setSearchCityStr}`;

    window.location.href = `/ka-ge/organizations/search/${searchContent}`;
  };

  setSearchCityStr = e => {
    this.setState({ setSearchCityStr: e });
  };

  render() {
    const { currentCategory, resultCount } = this.props;
    const FORMAT = "MM/dd/yyyy";
    return (
      <div className="categoriesMidSection__container">
        {/* <MidSectionFirstPanel /> */}
        <div className="midSection__search-panel">
          <Link to="/ka-ge/organizations" className="categories-go-back">
            <img src={BackIcon} alt="" />
          </Link>
          <form
            className={
              this.props.searchActive
                ? "search-field search-field-active"
                : "search-field"
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
                  onClick={e => this.searchOrganizations(e)}
                >
                  <img src={SearchIcon} alt="" />
                </button>
                {
                  <input
                    pattern=".{3,}"
                    type="text"
                    placeholder="ორგანიზაციის სახელი"
                    title="3 characters minimum"
                    autoComplete="off"
                    required
                    min="3"
                    onChange={e => {
                      this.setSearchNameStr(e);
                    }}
                    className="search-field-input"
                  />
                }
                <button
                  className="filter"
                  onClick={e => this.toggleAddFilter(e)}
                >
                  <img src={FilterIcon} alt="" />
                </button>
                {/* <div className="search-field-additional">
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
              </div> */}
              </div>
              <div className="live-search-wrapper">
                {/* {this.props.searchData.map(e => {
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
                })} */}
                {this.state.searchData.map(e => {
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
          {/* <form
            className="search-field"
            onSubmit={e => this.searchOrganizations(e)}
          >
            <div className="search-field-container">
              <input
                id="search-field-cat"
                type="text"
                pattern=".{3,}"
                placeholder="საძიებო ფრაზა"
                title="3 characters minimum"
                autoComplete="off"
                onChange={e => {
                  this.props.searchInputOnChange(e);
                }}
              />
              <div className="search-field-wrapper">
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
                    this.props.setSearchNameStr(e);
                  }}
                />
                <div className="horizontal-div">
                  <select
                    id="city-select-orgCity"
                    className="city-select"
                    onChange={e => this.setSearchCityStr(e.target.value)}
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
                <input
                  id="search-field-orgPlace"
                  pattern=".{3,}"
                  type="text"
                  placeholder="მისამართი: ქუჩა, უბანი"
                  title="3 characters minimum"
                  autoComplete="off"
                  onChange={e => {
                    this.props.setSearchAddrsStr(e);
                  }}
                />
              </div>
              <div className="live-search-wrapper">
                {this.props.searchData.map(e => {
                  return (
                    <Link
                      key={e.id}
                      to={`/ka-ge/organization/${e.id}`}
                      className="live-search-item"
                    >
                      <img src={OrganizationIcon} alt="" />
                      <div className="">
                        {e.name} <p>{e.address}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <button type="submit">
              <img src={SearchIcon} alt="" />
            </button>
          </form> */}
          {/* <CategoriesInnerNavigation currentCategory={currentCategory} /> */}
        </div>

        {/* <CategoriesInnerNavigation currentCategory={currentCategory} /> */}

        {/* <div className="filter-map-wrapper" id="filterbar">
          <div
            className={classnames(" filter-org-all", {
              sticky: !this.state.scroll
            })}
          >
            <div className="filter-org-all-inner">
              <div className="filter-open-org filter-each">
                <div className="filter-toggle">
                  <span className="language-span" id="opened">
                    {window.lang.Open}
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={() => {
                        this.toggleSwitch("isOpen", this.state.isOpen);
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <div className="filter-menu-org filter-each">
                <div className="filter-toggle">
                  <span className="language-span" id="menu">
                    {window.lang.Menu}
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={() => {
                        this.toggleSwitch("hasMenu", this.state.hasMenu);
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <div className="filter-delivery-org filter-each">
                <div className="filter-toggle">
                  <span className="language-span" id="delivery">
                    {window.lang.DeliveryService}
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={() => {
                        this.toggleSwitch(
                          "hasDelivery",
                          this.state.hasDelivery
                        );
                      }}
                    ></span>
                  </label>
                </div>
              </div>
              <div
                className="filter-all-btn"
                onClick={e => this.toggleAddFilter(e)}
              >
                <div
                  className={
                    this.state.visible ? "all-filter active-link" : "all-filter"
                  }
                >
                  {window.lang.Allfilters}
                </div>
                <div
                  className={
                    this.state.visible
                      ? "filter-all-icon--active"
                      : "filter-all-icon"
                  }
                ></div>
              </div>
            </div>
          </div>
          
          
          
          
          <div
            className={classnames(
              "see-results-button",
              { sticky: !this.state.scroll },
              { visible: this.state.visible },
              { invisible: !this.state.visible }
            )}
          >
            <span>{window.lang.Viewresults}</span>
            <span className="result-counter">{resultCount && resultCount}</span>
          </div>
        </div> */}

        {/* <div
          className={classnames(
            "additional-filters__wrapper",
            { sticky: !this.state.scroll },
            { visible: this.state.visible },
            { invisible: !this.state.visible }
          )}
        > */}
        {/* <div className="additional-filters">
            <div className="additional-checkbox-filters">
              <div>
                <span>{window.lang.Activitiesorganization}</span>
                <ul>
                  <li>
                    <input type="checkbox" id="checkbox1" />{" "}
                    <label htmlFor="checkbox1">სახელმწიფო არასამთავრობო</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox2" />{" "}
                    <label htmlFor="checkbox2">კულტურა, ხელოვნება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox3" />{" "}
                    <label htmlFor="checkbox3">მომსახურება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox4" />{" "}
                    <label htmlFor="checkbox4">ავტომობილი, ტრანსპორტი</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox5" />{" "}
                    <label htmlFor="checkbox5">განათლება, მეცნიერება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox6" />{" "}
                    <label htmlFor="checkbox6">ფინანსები</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox7" />{" "}
                    <label htmlFor="checkbox7">იმპორტი, ექსპორტი</label>
                  </li>
                </ul>
              </div>
              <div>
                <span>ორგანიზაციის ტიპი</span>
                <ul>
                  <li>
                    <input type="checkbox" id="checkbox8" />
                    <label htmlFor="checkbox8">
                      შპს - შეზღუდული შესაძლებლობების საზოგადოება
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox9" />
                    <label htmlFor="checkbox9">სს - სააქციო საზოგადოება</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkbox10" />
                    <label htmlFor="checkbox10">სს- სააქციო საზოგადოება</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="additional-input-filters">
              <div>
                <span>{window.lang.organizationwasfounded}</span>
                <form className="organization-establish-date">
                  <DayPickerInput
                    formatDate={this.formatDate}
                    format={FORMAT}
                    parseDate={this.parseDate}
                    onDayChange={this.handleStartDayChange}
                    component={props => (
                      <input {...props} type="text" placeholder={window.lang.From} />
                    )}
                  />
                  <DayPickerInput
                    formatDate={this.formatDate}
                    format={FORMAT}
                    parseDate={this.parseDate}
                    onDayChange={this.handleEndDayChange}
                    component={props => (
                      <input {...props} type="text" placeholder={window.lang.till} />
                    )}
                  />
                </form>
              </div>
              <div>
                <span>{window.lang.Numberemployees}</span>
                <form className="organization-worker-number">
                  <input type="text" placeholder={window.lang.From} />
                  <input type="text" placeholder={window.lang.till} />
                </form>
              </div>
            </div>
          </div> */}
        {/* </div> */}

        {this.state.visible && <div className="categories-additional-filter">
          <div className="additional-switch-filters">
            <div className="additional-switch-filter">
              <span>{window.lang.hedophis}</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("isHeadOffice", this.state.isHeadOffice);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>{window.lang.CorporateInsurance}</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("isInsured", this.state.isInsured);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>{window.lang.Website}</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("hasWebPage", this.state.hasWebPage);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>დამატებითი ინფორმაცია</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch(
                      "hasCorpMobile",
                      this.state.hasCorpMobile
                    );
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>კორპორატიული მობილური</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("isHeadOffice", this.state.isHeadOffice);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>ფასდაკლება</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch("hasSale", this.state.hasSale);
                  }}
                ></span>
              </label>
            </div>
            <div className="additional-switch-filter">
              <span>დირექტორის ნომერი</span>
              <label className="switch">
                <input type="checkbox" />
                <span
                  className="slider round"
                  onClick={() => {
                    this.toggleSwitch(
                      "hasDirectorMobile",
                      this.state.hasDirectorMobile
                    );
                  }}
                ></span>
              </label>
            </div>
          </div>
        </div>}
        {/* <div className="dimmed-overlay"></div> */}
      </div>
    );
  }
}
