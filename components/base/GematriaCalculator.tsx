import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const hebrewValues: Record<string, number> = {
  "א": 1, "ב": 2, "ג": 3, "ד": 4, "ה": 5, "ו": 6, "ז": 7, "ח": 8, "ט": 9,
  "י": 10, "כ": 20, "ל": 30, "מ": 40, "נ": 50, "ס": 60, "ע": 70, "פ": 80, "צ": 90,
  "ק": 100, "ר": 200, "ש": 300, "ת": 400
};

function calculateGematria(text: string): number {
  return text.split('').reduce((sum, char) => sum + (hebrewValues[char] || 0), 0);
}

export default function GematriaCalculator() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    setResult(calculateGematria(text));
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Wpisz tekst w języku hebrajskim"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <Button onClick={handleCalculate} className="w-full">
        Oblicz Gematrię
      </Button>
      {result !== null && (
        <div className="text-lg font-semibold">Wartość Gematrii: {result}</div>
      )}
    </div>
  );
}