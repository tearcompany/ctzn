import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Hash, Calculator, Infinity, Link } from "lucide-react";

export default function NumbersAnalysisSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-primary" />
            <span>Święte liczby</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkryj znaczenie liczb doskonałych, zaprzysiężonych i innych wartości w kabale.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <span>Obliczenia gematryczne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Oblicz wartości gematryczne liter i odkryj ich ukryte znaczenia.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Infinity className="h-5 w-5 text-primary" />
            <span>Liczba Pi w symbolice</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj relacje między liczbą Pi a świętą geometrią oraz boskim porządkiem.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5 text-primary" />
            <span>Powiązania numeryczne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkryj matematyczne zależności między liczbami a tekstami biblijnymi.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}