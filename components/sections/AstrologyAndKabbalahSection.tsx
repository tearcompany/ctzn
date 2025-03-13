import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sun, Moon, Star, Globe } from "lucide-react";

export default function AstrologyAndKabbalahSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-primary" />
            <span>Słońce i Kabała</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Symbolika Słońca w Kabale i jego wpływ na energię duchową.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Moon className="h-5 w-5 text-primary" />
            <span>Księżyc i mistycyzm</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Jak fazy Księżyca wpływają na rytuały i duchowy rozwój w Kabale.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span>Zodiak w Kabale</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Znaczenie znaków zodiaku w Kabale i ich duchowe interpretacje.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Astrologia i sefiroty</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Jak sefiroty odpowiadają planetom i jak to wpływa na życie człowieka.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}