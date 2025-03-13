import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function generateCombinations(str: string): string[] {
  if (str.length === 1) return [str];
  let result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    for (let perm of generateCombinations(remaining)) {
      result.push(char + perm);
    }
  }
  return Array.from(new Set(result));
}

export default function LetterCombinatorics() {
  const [text, setText] = useState("");
  const [combinations, setCombinations] = useState<string[]>([]);

  const handleGenerate = () => {
    setCombinations(generateCombinations(text));
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Wpisz litery hebrajskie"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <Button onClick={handleGenerate} className="w-full">
        Generuj kombinacje
      </Button>
      {combinations.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Kombinacje:</h3>
          <div className="grid grid-cols-3 gap-2">
            {combinations.map((combo, index) => (
              <div key={index} className="p-2 border rounded bg-background">
                {combo}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}