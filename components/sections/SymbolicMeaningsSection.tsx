import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Sparkles, Eye, MessageSquare } from "lucide-react";

export default function SymbolicMeaningsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Znaczenia uniwersalne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj symbole obecne w różnych kulturach i ich znaczenie w duchowości.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Symbolika w mistycyzmie</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Poznaj tajemnicze symbole wykorzystywane w tradycjach mistycznych.
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
            Odkryj głębsze warstwy znaczeniowe symboli obecnych w starożytnych tekstach.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span>Interpretacje symboliczne</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Dowiedz się, jak interpretować symbole w kontekście duchowym i filozoficznym.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}