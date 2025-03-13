import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, Cross, Globe, Triangle } from "lucide-react";

export default function BiblicalSymbolsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            <span>Symbole biblijne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Poznaj znaczenie najważniejszych symboli pojawiających się w tekstach biblijnych.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cross className="h-5 w-5 text-primary" />
            <span>Krzyż i inne święte znaki</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj święte znaki i ich znaczenie w tradycji mistycznej.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Uniwersalne symbole</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Jak biblijne symbole łączą się z mitologią i innymi tradycjami duchowymi?
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Triangle className="h-5 w-5 text-primary" />
            <span>Święta geometria</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkryj, jak święta geometria odzwierciedla boski porządek w świecie.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}