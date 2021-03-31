import React from "react";
import CurrencyBankItem from "./CurrencyBankItem";
import CurrencyChart from "./CurrencyChart";

export default function CurrencyItemMid() {
  return (
    <div className="currency-item-mid_container">
      <div className="currency-item-mid_wrapper">
        <h2 className="currency-item-header">სხვადასხვა ბანკის კურსები</h2>
        <div className="currency-item-content_wrapper">
          <div className="currency-item-content-left">
            <table>
              <thead>
                <tr className="currency-item-table-heading">
                  <th className="cell-1">ბანკი</th>
                  <th className="cell-2">ყიდვა</th>
                  <th className="cell-3">გაყიდვა</th>
                </tr>
              </thead>
              <tbody>
                <CurrencyBankItem />
                <CurrencyBankItem />
                <CurrencyBankItem />
                <CurrencyBankItem />
                <CurrencyBankItem />
                <CurrencyBankItem />
              </tbody>
            </table>
          </div>
          <div className="currency-item-content-right">
            <span>GEL დინამიკა</span>
            <span>USD-სთან მიმართებაში</span>
            <div className="currency-content-nav_wrapper">
              <nav className="currency-content-nav">
                <div className="currency-content-nav-item item-active">
                  დღეები
                </div>
                <div className="currency-content-nav-item">თვეები</div>
                <div className="currency-content-nav-item">კვირები</div>
                <div className="currency-content-nav-item">წლები</div>
              </nav>
            </div>
            <div className="currency-content-pick-time_wrapper">
              <div className="currency-content-picked-time">
                <div className="currency-picked-day">2-10 ოქტ</div>
                <div className="currency-picked-year">2017</div>
              </div>
              <div className="currency-pick-time-text">
                დროის შუალედის არჩევა
              </div>
              <button className="currency-pick-time-btn"></button>
            </div>
            <div className="currency-chart_wrapper">
              <CurrencyChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
