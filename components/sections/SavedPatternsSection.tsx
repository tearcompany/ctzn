import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, PlusCircle, RefreshCw, CheckCircle } from "lucide-react";

export default function SavedPatternsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            <span>Wyszukaj Wzorce</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Przeszukaj zapisane wzorce według gematrii i ukrytych zależności.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5 text-primary" />
            <span>Dodaj Nowy Wzorzec</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Stwórz i zapisz nowy wzorzec do dalszej analizy i eksploracji.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-primary" />
            <span>Odnów Wzorce</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Zaktualizuj zapisane wzorce, aby dopasować je do najnowszych odkryć.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>Zatwierdzone Wzorce</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Przeglądaj wzorce, które zostały zweryfikowane i potwierdzone.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}