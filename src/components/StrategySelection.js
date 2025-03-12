import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

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
      {/* 戦略選択エリア（カード形式） */}
      <div className="grid grid-cols-3 gap-4">
        {strategies.map((strategy, index) => (
          <Card key={index} className="p-4 text-center shadow-md border rounded-lg hover:bg-gray-100 cursor-pointer">
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
