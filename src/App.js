import React from "react";
import StrategySelection from "./components/StrategySelection";
import MarketData from "./components/MarketData";

function App() {
  return (
    <div>
      <h1>Investment UI</h1>
      <MarketData />
      <StrategySelection />
    </div>
  );
}

export default App;

