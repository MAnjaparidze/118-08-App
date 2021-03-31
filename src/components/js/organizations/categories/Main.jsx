import React from "react";
import Header from "../../globalParts/Header";
import MidSection from "./parts/CategoriesMidSection";
import OrganizationContent from "./parts/OrganizationContent";
import Footer from "../../globalParts/Footer";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom/cjs/react-router-dom";

import queryString from "query-string";
import MobileNavigation from "../../globalParts/MobileNavigation/MobileNavigation";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToReturn: null,
      request: false,
      page: 1,
      searchNameStr: "",
      searchAddrsStr: "",
      searchData: [],
      loader: false,
      user: null
    };
  }
  componentDidMount() {
    let currURL = window.location.href;
    let pageURL = this.props.location.search;
    if (currURL.includes("search/")) {
      this.fetchSearchData();
    } else if (currURL.includes("pg")) {
      this.state.page = parseInt(queryString.parse(pageURL).pg) + 1;
      this.fetchData(queryString.parse(pageURL).pg);
    } else {
      this.state.page = 2;
      window.location.replace(`${this.props.match.url}?pg=1`);
      this.fetchData(1);
    }
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.orgid !== prevProps.match.params.orgid) {
      this.state.page = 2;
      window.location.replace(`${this.props.match.url}?pg=1`);
      this.fetchData(1);
    }
  }

  changeOrg = async newOrg => {
    await this.setState({ dataToReturn: newOrg });
  };
  fetchData = async page => {
    // console.log("Came in fetch")
    const fetchItem = await fetch(
      // `/api/?app=organizations/OrganizationApi&resource=orgByCategory&id=${this.props.match.params.orgid}&pg=1`
      `/api/?app=organizations/OrganizationApi&resource=orgByCategory&id=${this.props.match.params.orgid}&pg=${page}`
    );
    const item = await fetchItem.json();
    this.setState({ user: item.user });
    this.setState({ dataToReturn: item.data });
    this.setState({ loader: false });
  };

  fetchLiveSearchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=searchByString&str_name=${this.state.searchNameStr}&str_addrs=${this.state.searchPlaceStr}`
    );
    const item = await fetchItem.json();
    // setSearchData(item.data);
    this.setState({ searchData: item.data });
  };

  setSearchNameStr = e => {
    console.log(e);
    this.setState({ searchNameStr: e.target.value }, () => {
      this.fetchLiveSearchData();
    });
  };
  setSearchAddrsStr = e => {
    this.setState({ searchAddrsStr: e.target.value }, () => {
      this.fetchLiveSearchData();
    });
  };

  fetchSearchData = async () => {
    let currURL = window.location.href;
    let searchItem = currURL.search("search/");
    let strStart = searchItem + 7;
    let urlLength = currURL.length;
    let slicedUrl = currURL.slice(strStart, urlLength);

    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=searchByString&str=${slicedUrl}`
    );
    const item = await fetchItem.json();
    this.setState({ dataToReturn: item.data });
  };

  loadMore = () => {
    this.setState({ loader: true });
    window.scrollTo(0, 0);
    let page = this.state.page++;
    window.location.replace(`${this.props.match.url}?pg=${page}`);
    this.setState(
      {
        loader: true
      },
      () => {
        this.fetchData(page);
      }
    );
  };

  render() {
    const { dataToReturn, searchData } = this.state;

    const RenderContent = this.state.dataToReturn ? (
      <OrganizationContent organizations={dataToReturn} />
    ) : (
      <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
    );
    return (
      <div className="meal-fun__container">
        <Header user={this.state.user ? this.state.user : null} />
        <MidSection
          resultCount={dataToReturn ? dataToReturn.length : 0}
          searchData={searchData ? searchData : []}
          changeOrg={this.changeOrg}
          page={this.state.page}
          searchNameStr={this.state.searchNameStr}
          searchAddrsStr={this.state.searchAddrsStr}
          setSearchNameStr={e => this.setSearchNameStr(e)}
          setSearchAddrsStr={e => this.setSearchAddrsStr(e)}
        />
        <div className="organization-render-container--wrapper">
         {RenderContent}
        </div>
        <div className="next-page_container">
          <div className="next-page_container_left_wrapper">
            {/* <Link className="next-page" to={`${this.props.match.url}?pg=${this.state.page}`}>მეტის ნახვა</Link> */}
            <button className="next-page" onClick={this.loadMore.bind(this)}>
            {window.lang.SeeMore}
            </button>
          </div>
          <div className="next-page_container_right_wrapper"></div>
        </div>
        <MobileNavigation />
      </div>
    );
  }
}
