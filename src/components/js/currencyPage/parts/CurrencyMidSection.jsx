import React, { useState, useEffect } from "react";
import MidSectionFirstPanel from "../../organizations/parts/MidSectionFirstPanel";

import SwappIcon from "../../../../assets/img/swap-curr.png";
import ArrowDown from "../../../../assets/img/arrow-down.png";

export default function CurrencyMidSection({ data }) {
  let [firstCoefficient, setfirstCoefficient] = useState(null);
  let [secondCoefficient, setSecondCoefficient] = useState(null);

  let [currToActive, toggleCurrTo] = useState(false);
  let [currFromActive, toggleCurrFrom] = useState(false);

  let [currFromShow, setCurrFromShow] = useState('USD');
  let [currToShow, setCurrToShow] = useState('GEL');

  let [firstValue, setFirstValue] = useState('');
  let [secondValue, setSecondValue] = useState('');

  let [searchItemFrom, setSearchItemFrom] = useState("");
  let [searchItemTo, setSearchItemTo] = useState("");

  let initFirstCoeff = data && data[0].course;
  let initSecondCoeff = data && data[1].course;

  var optionItemsFrom =
    data &&
    data.map(i => {
      return (
        <div
          key={i.id}
          className="option-item"
          currency={i.course}
          value={`${i.code.toLowerCase()}`}
          onClick={async () => {
            setCurrFromShow(`${i.code}`);
            toggleCurrFrom(false);
            setfirstCoefficient(i.course);
            calculate();
          }}
        >
          <div className="currency-list-options">
            <div className="cell-currency-code-sm">{i.code}</div>
            <span>{i.name}</span>
          </div>
        </div>
      );
    });
  var optionItemsTo =
    data &&
    data.map(i => {
      return (
        <div
          key={i.id}
          className="option-item"
          currency={i.course}
          value={`${i.code.toLowerCase()}`}
          onClick={() => {
            setCurrToShow(`${i.code}`);
            toggleCurrTo(false);
            setSecondCoefficient(i.course);
            calculate();
          }}
        >
          <div className="currency-list-options">
            <div className="cell-currency-code-sm">{i.code}</div>
            <span>{i.name}</span>
          </div>
        </div>
      );
    });
  let searchOptionItemsFromArray = [];
  let searchOptionItemsFrom =
    data &&
    data.filter(e => {
      if (e.name.includes(searchItemFrom)) {
        searchOptionItemsFromArray.push(
          <div
            key={e.id}
            className="option-item"
            currency={e.course}
            value={`${e.code.toLowerCase()}`}
            onClick={() => {
              setCurrFromShow(`${e.code}`);
              toggleCurrFrom(false);
              setfirstCoefficient(e.course);
              calculate();
            }}
          >
            <div className="currency-list-options">
              <div className="cell-currency-code-sm">{e.code}</div>
              <span>{e.name}</span>
            </div>
          </div>
        );
      }
    });
  let searchOptionItemsToArray = [];
  let searchOptionItemsTo =
    data &&
    data.filter(e => {
      if (e.name.includes(searchItemTo)) {
        
        searchOptionItemsToArray.push(
          <div
            key={e.id}
            className="option-item"
            currency={e.course}
            value={`${e.code.toLowerCase()}`}
            onClick={() => {
              setCurrToShow(`${e.code}`);
              toggleCurrTo(false);
              setSecondCoefficient(e.course);
              calculate();
            }}
          >
            <div className="currency-list-options">
              <div className="cell-currency-code-sm">{e.code}</div>
              <span>{e.name}</span>
            </div>
          </div>
        );
      }
    });

  const swappCurr = async () => {
    let temp = firstCoefficient ? firstCoefficient : initFirstCoeff;
    let second = secondCoefficient ? secondCoefficient : initSecondCoeff;

    
    setfirstCoefficient(second);
    setSecondCoefficient(temp);
    let tempFromShow = currFromShow;
    let tempToShow = currToShow;
    setCurrFromShow(tempToShow);
    setCurrToShow(tempFromShow);

    calculate();
  };

  const calculate = () => {
    var fromVal = document.getElementById("from-num").value;

    setFirstValue(fromVal);

    let coefficient = null;
    let first = firstCoefficient ? firstCoefficient : initFirstCoeff;
    let second = secondCoefficient ? secondCoefficient : initSecondCoeff;

    coefficient = first / second;
    let calced = Math.floor(fromVal * coefficient * 10000) / 10000;
    setSecondValue(calced);
  };
  useEffect(() => {
    calculate();
  }, [currFromShow]);

  useEffect(() => {
    calculate();
  });

  return (
    <div className="currency-mid-section_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">{window.lang.ExchangeRate}</h2>
      </div>

      <div className="currency-mid_third-panel_container">
        <div className="third-panel-value_container">
          <input
            className="third-panel-value-from"
            defaultValue={firstValue}
            id="from-num"
            onChange={() => {
              calculate();
            }}
            autoComplete="off"
            placeholder="0"
          />
          <div className="third-panel-value-middle"></div>
          <div className="third-panel-value-to" id="to-num">
            {secondValue ? secondValue : 0}
          </div>
        </div>

        <div className="third-panel-curr_container">
          <div
            className="third-panel-curr-from"
            id="curr-from"
            onClick={() => {
              toggleCurrFrom(!currFromActive);
              toggleCurrTo(false);
            }}
            autoComplete="off"
            placeholder="0"
          >
            {currFromShow === null ? data && data[0].code : currFromShow}
            {/* {currFromShow === null ? data && data[0].name : currFromShow} */}
            <div className="drop-down-arrow">
              <img src={ArrowDown} alt="" />
            </div>
          </div>

          <div className="swapp-icon" onClick={() => swappCurr()}>
            <img src={SwappIcon} alt="" />
          </div>

          <div
            className="third-panel-curr-to"
            id="curr-to"
            onClick={() => {
              toggleCurrTo(!currToActive);
              toggleCurrFrom(false);
            }}
          >
            {currToShow === null ? data && data[1].code : currToShow}
            <div className="drop-down-arrow">
              <img src={ArrowDown} alt="" />
            </div>
          </div>

          <div className="curr-dropdown-container">
            {currFromActive && (
              <div className="from-dropdown-wrapper">
                <div className="from-search">
                  <input
                    type="text"
                    onChange={e => setSearchItemFrom(e.target.value)}
                  />
                </div>
                <div className="option-wrapper">
                  {searchItemFrom === ""
                    ? optionItemsFrom
                    : searchOptionItemsFromArray}
                </div>
              </div>
            )}
            {currToActive && (
              <div className="to-dropdown-wrapper">
                <div className="to-search">
                  <input
                    type="text"
                    onChange={e => setSearchItemTo(e.target.value)}
                  />
                </div>
                <div className="option-wrapper">
                  {searchItemTo === ""
                    ? optionItemsTo
                    : searchOptionItemsToArray}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="dimmed-overlay bg-mid-currency"></div> */}
    </div>
  );
}
