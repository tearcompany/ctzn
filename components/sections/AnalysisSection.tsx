import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calculator, BookOpen, Layers, BarChart3 } from "lucide-react"
import GematriaCalculator from "../base/GematriaCalculator"
import HebrewLetterGrid from "../base/HebrewLetterGrid"
import LetterCombinatorics from "../base/LetterCombinatorics"
import NumericalAnalysis from "../base/NumericalAnalysis"

export default function AnalysisSection({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <span>Analiza Gematrii</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <GematriaCalculator />
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Analiza Liter Hebrajskich</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <HebrewLetterGrid />
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Kombinatoryka Liter</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LetterCombinatorics />
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Analiza Numeryczna</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <NumericalAnalysis />
        </CardContent>
      </Card>
    </div>
  )
}