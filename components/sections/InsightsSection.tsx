import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, ListChecks, TrendingUp, Layers } from "lucide-react";

export default function InsightsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <span>Najczęściej używane wzorce</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Przeglądaj wzorce, które są najczęściej wykorzystywane w analizach.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-primary" />
            <span>Twoje zapisane wzorce</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Zarządzaj swoimi zapisanymi wzorcami i ich organizacją.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Trendy w analizach</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Sprawdź, które wzorce zyskują na popularności w analizach.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Powiązania między wzorcami</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj relacje i zależności pomiędzy różnymi wzorcami.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}