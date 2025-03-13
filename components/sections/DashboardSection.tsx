import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart3, Compass, History, Layers } from "lucide-react"

export default function DashboardSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Analiza Numeryczna</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Eksploruj znaczenie liczb i ich powiązania w gematrii.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            <span>Nawigator Wzorców</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Odkrywaj ukryte zależności między literami i symbolami.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Historia Analiz</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Przeglądaj zapisane analizy i wracaj do wcześniejszych wyników.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            <span>Przegląd Czasu</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Śledź cykle i sekwencje w czasie zgodnie z tekstami biblijnymi.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}