import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Brain, Star, Circle, Grid } from "lucide-react";

export default function SacredGeometrySection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span>Geometria duchowa</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkryj świętą geometrię i jej powiązania z duchowością oraz wszechświatem.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span>Gwiazdy i symbole</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Poznaj symbolikę gwiazd i ich znaczenie w różnych tradycjach mistycznych.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Circle className="h-5 w-5 text-primary" />
            <span>Koła i cykle</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj cykle czasu i ich znaczenie w duchowym porządku świata.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid className="h-5 w-5 text-primary" />
            <span>Struktury i wzory</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Dowiedz się, jak struktury geometryczne odzwierciedlają boski porządek.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}