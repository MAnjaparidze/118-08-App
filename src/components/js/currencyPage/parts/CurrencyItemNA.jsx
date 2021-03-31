import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

// import eye from '../../../../assets/img/icons/visibility-button.svg';
import eye from "../../../../assets/img/icons/chart.svg";
import eye_sell from "../../../../assets/img/icons/chart_sell.svg";
import eye_buy from "../../../../assets/img/icons/chart_buy.svg";
// import eye from '../../../../assets/img/icons/menu-view.svg';

export default function CurrencyItem({ itemData }) {
  const [IsShownSell, setIsShownSell] = useState(false);
  const [IsShownBuy, setIsShownBuy] = useState(false);

  const calcBanksBuy = () => {
    let bankArr = itemData.banks;
    let buyOveral = 0;
    let bankNum = bankArr.length;
    for (let i = 0; i < bankNum; i++) {
      buyOveral += parseFloat(bankArr[i].buy);
    }
    let result = buyOveral / bankNum;
    return Math.round(result * 1000) / 1000;
  };
  const calcBanksSell = () => {
    let bankArr = itemData.banks;
    let sellOveral = 0;
    let bankNum = bankArr.length;
    for (let i = 0; i < bankNum; i++) {
      sellOveral += parseFloat(bankArr[i].sell);
    }
    let result = sellOveral / bankNum;
    return Math.round(result * 1000) / 1000;
  };

  let bankArray = [];

  for (let i in itemData.banks) {
    bankArray.push(itemData.banks[i]);
  }

  return (
    <>
      <td className="cell-1">
        {/* <Link to="/curr_test" data-id={itemData.id}>{itemData.name}</Link> */}
        <span data-id={itemData.id}>{itemData.name}</span>
      </td>
      <td className="cell-2">
        <div className="cell-currency-code">
          {itemData.code ? itemData.code : ""}
        </div>
      </td>
      {/* <td className="cell-2"><div className="cell-currency-code">{itemData.code ? itemData.code : ""}</div></td> */}
      <td className="cell-3">{itemData.course ? itemData.course : ""}</td>
      {/* <td className="cell-3">
        <div
          className="buy-sell buy"
          onMouseEnter={() => setIsShownBuy(true)}
          onMouseLeave={() => setIsShownBuy(false)}
        >
          {itemData.banks && calcBanksBuy() ? (
            <img className="eye" src={eye_buy} alt="" />
          ) : (
            ""
          )}
          {itemData.banks && calcBanksBuy()}
        </div>
      </td> */}
      {/* <td className="cell-4">
        <div
          className="buy-sell sell"
          onMouseEnter={() => setIsShownSell(true)}
          onMouseLeave={() => setIsShownSell(false)}
        >
          {itemData.banks && calcBanksBuy() ? (
            <img className="eye" src={eye_sell} alt="" />
          ) : (
            ""
          )}
          {itemData.banks && calcBanksSell()}
        </div>
      </td> */}
      {/* <td className="cell-5"> // ბირჟის
        <div className="buy-sell buy">{itemData.street_buy_course}</div>
        <div className="buy-sell sell">{itemData.street_sell_course}</div>
      </td> */}

      {IsShownBuy && (
        <div
          className="currency-popover-sell"
          id={itemData.code ? itemData.code : ""}
        >
          <table>
            <tr>
              {bankArray.map((e, index) => {
                return <th key={index}>{e.name}</th>;
              })}
            </tr>
            <tr>
              {bankArray.map((e, index) => {
                return <td key={index}>{e.buy}</td>;
              })}
            </tr>
          </table>
        </div>
      )}

      {IsShownSell && (
        <div
          className="currency-popover-sell"
          id={itemData.code ? itemData.code : ""}
        >
          <table>
            <tr>
              {bankArray.map((e, index) => {
                return <th key={index}>{e.name}</th>;
              })}
            </tr>
            <tr>
              {bankArray.map((e, index) => {
                return <td key={index}>{e.sell}</td>;
              })}
            </tr>
          </table>
        </div>
      )}
    </>
  );
}
