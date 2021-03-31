import React from "react";
import Chartkick, { LineChart, PieChart } from "react-chartkick";

export default function CurrencyChart() {
  return (
    <div>
      <LineChart
        curve={true}
        data={{
          "2017-10-02": 2.34,
          "2017-10-03": 1.94,
          "2017-10-04": 2.94,
          "2017-10-05": 1.80,
          "2017-10-06": 1.7,
          "2017-10-07": 2.1,
          "2017-10-08": 2.12,
          "2017-10-09": 1.8,
          "2017-10-10": 2
        }}
      />
    </div>
  );
}
