import { Card } from "@/components/ui/card";

const hebrewAlphabet = [
  "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י",
  "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר",
  "ש", "ת"
];

export default function HebrewLetterGrid() {
  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Alfabet hebrajski</h2>
      <div className="grid grid-cols-6 gap-4 text-center">
        {hebrewAlphabet.map((letter) => (
          <div key={letter} className="p-3 border rounded-lg bg-background">
            <span className="text-2xl font-bold">{letter}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}