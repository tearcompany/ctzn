import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TimerIcon } from "lucide-react"
import TimelineVisualizer from "../base/TimelineVisualizer"

export default function TimelineSection({ searchQuery }: { searchQuery: string }) {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TimerIcon className="h-5 w-5 text-primary" />
          <span>Oś Czasowa Biblijna</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[600px]">
        <TimelineVisualizer />
      </CardContent>
    </Card>
  )
}