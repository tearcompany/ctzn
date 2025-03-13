import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserCheck, Feather, Shield, Sun } from "lucide-react";

export default function AngelicHierarchySection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-primary" />
            <span>Hierarchia Aniołów</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Klasyfikacja aniołów w tradycji mistycznej – Serafini, Cherubini, Trony i inne.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Feather className="h-5 w-5 text-primary" />
            <span>Funkcje Archaniołów</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Poznaj role Archaniołów: Michał – wojownik, Gabriel – posłaniec, Rafael – uzdrowiciel.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Opieka i ochrona</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Jak aniołowie wpływają na nasze życie i jak prosić ich o wsparcie?
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-primary" />
            <span>Anioły w różnych tradycjach</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Porównanie anielskich istot w judaizmie, chrześcijaństwie i islamie.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}