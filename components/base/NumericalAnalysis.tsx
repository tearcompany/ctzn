import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bar } from "recharts";

function analyzeNumber(num: number) {
  return {
    isPrime: isPrime(num),
    factors: getFactors(num),
    sumOfDigits: sumDigits(num),
  };
}

function isPrime(num: number) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getFactors(num: number): number[] {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}

function sumDigits(num: number): number {
  return num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
}

export default function NumericalAnalysis() {
  const [number, setNumber] = useState<number | "">(0);
  const [analysis, setAnalysis] = useState<any | null>(null);

  const handleAnalyze = () => {
    if (typeof number === "number") {
      setAnalysis(analyzeNumber(number));
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="number"
        placeholder="Wpisz liczbę"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="w-full border p-2 rounded"
      />
      <Button onClick={handleAnalyze} className="w-full">
        Analizuj Liczbę
      </Button>
      {analysis && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Wyniki analizy:</h3>
          <p>❖ Czy liczba pierwsza? {analysis.isPrime ? "Tak" : "Nie"}</p>
          <p>❖ Czynniki: {analysis.factors.join(", ")}</p>
          <p>❖ Suma cyfr: {analysis.sumOfDigits}</p>
        </div>
      )}
    </div>
  );
}