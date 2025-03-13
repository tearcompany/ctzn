import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function PatternVisualizer() {
  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  const handleHighlight = () => {
    if (!pattern) return;
    const regex = new RegExp(pattern, "gi");
    const highlighted = text.replace(regex, (match) => `<mark>${match}</mark>`);
    setHighlightedText(highlighted);
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Wpisz tekst do analizy"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <Input
        type="text"
        placeholder="Wzorzec do wyszukania"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <Button onClick={handleHighlight} className="w-full flex items-center gap-2">
        <Search className="h-5 w-5" />
        Podświetl wzorzec
      </Button>
      <div
        className="mt-4 p-2 border rounded bg-background"
        dangerouslySetInnerHTML={{ __html: highlightedText || text }}
      />
    </div>
  );
}