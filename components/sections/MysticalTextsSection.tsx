import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Scroll, Compass, Lightbulb } from "lucide-react";

export default function MysticalTextsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Święte teksty</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkryj starożytne teksty mistyczne i ich ukryte znaczenia.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scroll className="h-5 w-5 text-primary" />
            <span>Rękopisy i Kabała</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Przeglądaj starożytne manuskrypty i ich związki z Kabałą.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            <span>Mapa mistycznych ścieżek</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Poznaj tajemnicze ścieżki duchowego rozwoju w różnych tradycjach.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <span>Ukryta mądrość</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkryj tajemnice i głęboką symbolikę ukrytą w tekstach mistycznych.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}