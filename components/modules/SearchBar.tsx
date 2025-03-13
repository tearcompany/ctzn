import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Wyszukiwanie:", query);
  };

  return (
    <div className="flex gap-2 p-4 bg-background border-b">
      <Input
        type="text"
        placeholder="Szukaj wzorców, liczb, symboli..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <Button onClick={handleSearch} className="flex items-center gap-2">
        <Search className="h-5 w-5" />
        Szukaj
      </Button>
    </div>
  );
}