import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { History } from "lucide-react"

export default function HistorySection({ recentAnalyses, setSearchQuery, setActiveTab }) {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <span>Historia analiz</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentAnalyses.length > 0 ? (
          <div className="space-y-2">
            {recentAnalyses.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <History className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{item.text}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(item.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs border px-3 py-1 rounded" onClick={() => setSearchQuery(item.text)}>
                    Analizuj
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <History className="h-12 w-12 mb-2 opacity-20" />
            <p>Brak historii analiz</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}