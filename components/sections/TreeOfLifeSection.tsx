import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TreePine, Circle, Link, ChevronRight } from "lucide-react";

export default function TreeOfLifeSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-primary" />
            <span>Drzewo Życia</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Wizualizacja sefirot i ich powiązań. Poznaj strukturę duchową wszechświata.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Circle className="h-5 w-5 text-primary" />
            <span>Sefiroty</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Znaczenie 10 sefirot w kabale. Jak wpływają na życie i duchowość?
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5 text-primary" />
            <span>Ścieżki Drzewa Życia</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Połączenia między sefirotami i ich znaczenie w duchowym rozwoju.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            <span>Kabała praktyczna</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Jak stosować nauki Drzewa Życia w codziennym życiu i praktykach duchowych?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}