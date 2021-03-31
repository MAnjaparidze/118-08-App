import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import SearchIcon from "../../../../assets/img/search-blk.png";
import CurrencyItemCO from "./CurrencyItemCO";
import CurrencyItemNA from './CurrencyItemNA';
import CurrencyItemST from './CurrencyItemST';
import Loader from "react-loader-spinner";

export default function CurrencyRenderSection({
  data,
  dataPopular,
  searchCurr
}) {
  const [showData, setShowData] = useState(false);

  const [isNational, setNational] = useState(false);
  const [isCommercial, setCommercial] = useState(true);
  const [isStock, setStock] = useState(false);

  const toggleCurrencyNav = (navType) => {
    switch(navType) {
      case "NA":
        setNational(true);
        setCommercial(false);
        setStock(false);
        break;
      case "CO":
        setNational(false);
        setCommercial(true);
        setStock(false);
        break;
      case "ST":
        setNational(false);
        setCommercial(false);
        setStock(true);
        break;
      default:
        setNational(false);
        setCommercial(true);
        setStock(false);
        break;
    }
  }
  
  const content = data ? (
    <div className="currency-render-section_wrapper">
     
      <table className="currency-table" id="popular-currency">
        {/* <thead className="currency-table-info">
          <tr className="currency-table-headers">
            <th className={isNational ? "cell-active cell-1" : "cell-1"} onClick={() => {toggleCurrencyNav("NA")}}>ეროვნული</th>
            <th className={isCommercial ? "cell-active cell-2" : "cell-2"} onClick={() => {toggleCurrencyNav("CO")}}>კომერციული</th>
            <th className={isStock ? "cell-active cell-3" : "cell-3"} onClick={() => {toggleCurrencyNav("ST")}}>ჯიხური</th>
          </tr>
        </thead> */}
        <thead className="currency-table-content">
          <tr className="currency-table-headers">
            <th className="cell-1">{window.lang.Currency}</th>
            <th className="cell-2">კოდი</th>
            <th className="cell-4">
              <div className="buy-sell">{window.lang.Buy}</div>
            </th>
            <th className="cell-5">
              <div className="buy-sell">{window.lang.Sell}</div>
            </th>
          </tr>
        </thead>
        {!showData && (
        <tbody className='currency-table-mid'>
          {dataPopular &&
            dataPopular.map((e, index) => {
              return (
                <tr className="currency-item_wrapper" key={index}>
                  <CurrencyItemCO itemData={e} />
                </tr>
              );
            })}
        </tbody>
        )}
      </table>
      

      {!showData && (
      <div className="load_more_container">
        <div className="load_more_container_center_wrapper">
            {/* <Link className="load-more" onClick={() => setShowData(!showData)}> */}
            <Link className="load-more" onClick={() => { setShowData(!showData); window.scrollTo(0, 260);}}>
              {" "}
              {window.lang.SeeMore}
            </Link>
        </div>
      </div>
      )}

      {showData && (
        <table className="currency-table" id="all-currency">
          {/* <thead className="currency-table-info">
            <tr className="currency-table-headers">
              <th className="cell-1">{window.lang.Currency}</th>
              <th className="cell-2">კოდი</th>
              <th className="cell-3">{window.lang.NationalBank}</th>
              <th className="cell-4"> {window.lang.CommercialBanks} </th>
              <th className="cell-5">{window.lang.MarketRate}</th>
            </tr>
          </thead> */}
          <thead className="currency-table-info">
            <tr className="currency-table-headers fixed-table-currency-bar">
              {/* <th className="cell-1">{window.lang.Currency}</th> */}
              {/* <th className="cell-1">{window.lang.NationalBank}</th>
              <th className="cell-2">{window.lang.CommercialBanks}</th>
              <th className="cell-3">{window.lang.MarketRate}</th> */}
              <th className={isNational ? "cell-active cell-1" : "cell-1"} onClick={() => {toggleCurrencyNav("NA")}}>ეროვნული</th>
              <th className={isCommercial ? "cell-active cell-2" : "cell-2"} onClick={() => {toggleCurrencyNav("CO")}}>კომერციული</th>
              <th className={isStock ? "cell-active cell-3" : "cell-3"} onClick={() => {toggleCurrencyNav("ST")}}>ჯიხური</th>
            </tr>
          </thead>
          <thead className="currency-table-content">
            <tr className="currency-inner-search_wrapper">
              <img
                src={SearchIcon}
                alt=""
                className="currency-inner-search-icon"
              />
              <input
                type="text"
                className="currency-inner-search"
                placeholder="ყველა ვალუტა"
                onChange={e=> { searchCurr(e.target.value); window.scrollTo(0, 260);}}
                // onChange={e => searchCurr(e.target.value)}
              />
            </tr>
            {/* <tr className="currency-table-headers"> */}
              {/* <th className="cell-1">{window.lang.Currency}</th> */}
              {/* <th className="cell-2">კოდი</th> */}
              {/* <th className="cell-3">{window.lang.OfficialRate} </th> */}
              {/* <th className="cell-4"> */}
              {/* <div className="buy-sell">{window.lang.Buy}</div> */}
              {/* <div className="buy-sell">{window.lang.Sell}</div> */}
              {/* </th> */}
              {/* <th className="cell-4">
                <div className="buy-sell">{window.lang.Buy}</div>
              </th>
              <th className="cell-5">
                <div className="buy-sell">{window.lang.Sell}</div>
              </th>
            </tr> */}
          </thead>
          <tbody>
            {data.map((e, index) => {
              return (
                <tr className="currency-item_wrapper" key={index}>
                  { isNational && <CurrencyItemNA itemData={e} />}
                  { isCommercial&& <CurrencyItemCO itemData={e} />}
                  { isStock && <CurrencyItemST itemData={e} />}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  ) : (
    <div className="content-loader-container">
      <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
    </div>
  );
  return <div className="currency-render-section_container">{content}</div>;
}
