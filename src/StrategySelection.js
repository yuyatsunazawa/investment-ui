import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const mockMarketData = {
  indices: [
    { name: "日経平均", value: "32,500", change: "+150" },
    { name: "TOPIX", value: "2,350", change: "-5" },
    { name: "USD/JPY", value: "145.25", change: "+0.30" },
  ],
  topStocks: [
    { name: "トヨタ", value: "2,100", change: "+2%" },
    { name: "ソニー", value: "13,200", change: "-1%" },
    { name: "三菱UFJ", value: "1,050", change: "+0.5%" },
  ],
  topGainers: [
    { name: "A社", change: "+15%" },
    { name: "B社", change: "+12%" },
    { name: "C社", change: "+10%" },
  ],
  topLosers: [
    { name: "X社", change: "-8%" },
    { name: "Y社", change: "-6%" },
    { name: "Z社", change: "-5%" },
  ],
};

const mockStrategies = [
  "当日5%下落した銘柄を買い",
  "ゴールデンクロスの銘柄を買い",
  "RSIが10以下の銘柄を買い",
  "ボリンジャーバンド-2σを下回った銘柄を買い",
  "直近一ヶ月の安値更新の銘柄を買い",
  "当日5%以上上昇した銘柄を売り",
  "デッドクロスの銘柄を売り",
];

export default function StrategySelection() {
  const [strategies, setStrategies] = useState(mockStrategies.slice(0, 3));
  
  const refreshStrategies = () => {
    const shuffled = [...mockStrategies].sort(() => 0.5 - Math.random());
    setStrategies(shuffled.slice(0, 3));
  };

  return (
    <div className="p-4 space-y-4">
      {/* 市場データ表示 */}
      <div className="grid grid-cols-3 gap-2 text-center bg-gray-100 p-2 rounded-lg">
        {mockMarketData.indices.map((index) => (
          <div key={index.name} className="text-sm">
            <strong>{index.name}</strong> <br /> {index.value} ({index.change})
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 p-2 rounded-lg">
        {mockMarketData.topStocks.map((stock) => (
          <div key={stock.name} className="text-sm">
            <strong>{stock.name}</strong> <br /> {stock.value} ({stock.change})
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 p-2 rounded-lg">
        <div>
          <strong>値上がり</strong>
          {mockMarketData.topGainers.map((stock) => (
            <div key={stock.name}>{stock.name} ({stock.change})</div>
          ))}
        </div>
        <div>
          <strong>値下がり</strong>
          {mockMarketData.topLosers.map((stock) => (
            <div key={stock.name}>{stock.name} ({stock.change})</div>
          ))}
        </div>
      </div>
      
      {/* 戦略選択エリア */}
      <div className="grid grid-cols-3 gap-4">
        {strategies.map((strategy, index) => (
          <Card key={index} className="p-4 text-center cursor-pointer hover:bg-gray-100">
            {strategy}
          </Card>
        ))}
      </div>
      
      {/* ボタンエリア */}
      <div className="flex justify-between">
        <Button onClick={refreshStrategies} variant="outline">
          <RefreshCw size={16} className="mr-2" /> Refresh
        </Button>
        <Button variant="default">カスタムシミュレーションを試す</Button>
      </div>
    </div>
  );
}

