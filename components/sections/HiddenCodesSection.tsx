import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Eye, Layers, Search } from "lucide-react";

export default function HiddenCodesSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span>Kody biblijne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkrywanie ukrytych wzorców w Piśmie Świętym za pomocą algorytmów.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>Equidistant Letter Sequences (ELS)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Metoda ELS do odkrywania ukrytych przesłań w starożytnych tekstach.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Poziomy znaczeniowe</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Interpretacja ukrytych kodów w warstwach tekstów mistycznych.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            <span>Interaktywna analiza</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj ukryte kody i sekwencje liter w świętych tekstach.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}