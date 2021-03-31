import React, { Component } from "react";
import "../../css/currencyPage/CurrencyPage.css";
import Header from "../globalParts/Header";
import Footer from "../globalParts/Footer";

import CurrencyMidSection from "./parts/CurrencyMidSection";
import CurrencyRenderSection from "./parts/CurrencyRenderSection";
import MobileNavigation from "../globalParts/MobileNavigation/MobileNavigation";

export default class CurrencyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyItems: null,
      currencyItemsPopular: null,
      currToSearch: null,
      searchData: "",
      user: null
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchDataPopular();
    window.scrollTo(0, 0);
  }

  searchCurr = async searchItem => {
    let returnData = this.state.currencyItems.filter(e => {
      return e.name.includes(searchItem) && e;
    });
    this.setState({ searchData: returnData });
  };

  fetchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=currency/CurrencyApi&resource=list`
    );
    const item = await fetchItem.json();

    this.setState({ user: item.user });
    this.setState({ currencyItems: item.data });
  };

  // popular
  fetchDataPopular = async () => {
    const fetchItemPopular = await fetch(
      `/api/?app=currency/CurrencyApi&resource=populars`
    );
    const itemPopular = await fetchItemPopular.json();
    await this.setState({ currencyItemsPopular: itemPopular.data });
  };

  render() {
    return (
      <div className="currency-page_container">
        <Header user={this.state.user ? this.state.user : null} />
        <CurrencyMidSection data={this.state.currencyItems} />
        <CurrencyRenderSection
          data={
            this.state.searchData === ""
              ? this.state.currencyItems
              : this.state.searchData
          }
          searchCurr={e => this.searchCurr(e)}
          dataPopular={this.state.currencyItemsPopular}
        />
        <MobileNavigation />
      </div>
    );
  }
}
