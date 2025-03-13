import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart3, Eye, Search, Star } from "lucide-react";

export default function TrendsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Analiza trendów</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Sprawdź, jakie liczby i wzorce są najczęściej analizowane w systemie.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>Najczęściej wyszukiwane</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Zobacz, które pojęcia i symbole są najczęściej eksplorowane przez użytkowników.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            <span>Wyszukiwarka wzorców</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Znajdź interesujące Cię wzorce, liczby i symbole za pomocą inteligentnej wyszukiwarki.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span>Popularne symbole</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Przeglądaj listę najbardziej znaczących i często analizowanych symboli.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}