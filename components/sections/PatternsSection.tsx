import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import PatternVisualizer from "@/components/base/PatternVisualizer"
import PiCircleVisualizer  from "@/components/base/PiCircleVisualizer"
import { Compass, CircleDot } from "lucide-react"

export default function PatternsSection({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            <span>Nawigator Wzorców</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <PatternVisualizer />
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleDot className="h-5 w-5 text-primary" />
            <span>Wizualizacja Koła Pi</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[500px]">
          <PiCircleVisualizer />
        </CardContent>
      </Card>
    </div>
  )
}