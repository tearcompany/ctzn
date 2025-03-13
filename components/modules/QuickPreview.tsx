import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

export default function QuickPreview() {
  const [previewText, setPreviewText] = useState("Wybierz element, aby zobaczyć podgląd.");

  return (
    <Card className="p-4 mb-4 border border-border shadow-sm">
      <div className="flex items-center gap-2">
        <Eye className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Szybki podgląd</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{previewText}</p>
    </Card>
  );
}