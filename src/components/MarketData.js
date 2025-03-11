
import React from "react";

const mockMarketData = {
  indices: [
    { name: "日経平均", value: "32,500", change: "+150" },
    { name: "TOPIX", value: "2,350", change: "-5" },
    { name: "USD/JPY", value: "145.25", change: "+0.30" },
  ]
};

export default function MarketData() {
  return (
    <div>
      <h2>市場データ</h2>
      <ul>
        {mockMarketData.indices.map((index) => (
          <li key={index.name}>
            {index.name}: {index.value} ({index.change})
          </li>
        ))}
      </ul>
    </div>
  );
}
