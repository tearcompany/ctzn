import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Eye, ChartLine } from "lucide-react";

export default function PropheciesSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Proroctwa biblijne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Analiza najważniejszych proroctw Starego i Nowego Testamentu.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Oś czasu proroctw</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Interaktywna wizualizacja spełnionych i przyszłych proroctw.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>Ukryte znaczenia</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Jakie symbole i liczby ukryte są w proroctwach? Analiza gematryczna.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChartLine className="h-5 w-5 text-primary" />
            <span>Statystyka proroctw</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Ile proroctw zostało już spełnionych? Wizualizacja danych i prognozy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}