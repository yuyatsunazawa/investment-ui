import React, { useState } from "react";

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
    <div>
      <h2>戦略選択</h2>
      <ul>
        {strategies.map((strategy, index) => (
          <li key={index}>{strategy}</li>
        ))}
      </ul>
      <button onClick={refreshStrategies}>リフレッシュ</button>
    </div>
  );
}

