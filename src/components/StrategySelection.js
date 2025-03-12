import { Card } from "@/components/ui/card";

const strategies = [
  { id: 1, name: "当日5%下落した銘柄を買い", description: "翌日寄り付きで買い、1週間後に売り" },
  { id: 2, name: "ゴールデンクロスの銘柄を買い", description: "翌日寄り付きで買い、1週間後に売り" },
  { id: 3, name: "RSIが10以下の銘柄を買い", description: "翌日寄り付きで買い、1週間後に売り" },
];

export default function StrategySelection() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📊 戦略を選択</h2>
      <div className="grid grid-cols-3 gap-4">
        {strategies.map((strategy) => (
          <Card
            key={strategy.id}
            className="p-4 text-center border rounded-lg shadow-sm hover:shadow-lg transition duration-200 cursor-pointer"
          >
            <h3 className="font-bold text-lg">{strategy.name}</h3>
            <p className="text-sm text-gray-600">{strategy.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
