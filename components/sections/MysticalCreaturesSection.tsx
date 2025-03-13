import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Feather, Shield, Eye } from "lucide-react";

export default function MysticalCreaturesSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="h-5 w-5 text-primary text-xl">🔥</span>
            <span>Lewiatan i Behemot</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Potężne mistyczne istoty opisane w świętych tekstach i ich znaczenie.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Feather className="h-5 w-5 text-primary" />
            <span>Serafini i Cherubini</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Anielskie istoty w hierarchii duchowej – ich rola i symbolika.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Magiczne bestie</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Mistyczne stworzenia obecne w legendach i ich duchowe interpretacje.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>Ukryte byty duchowe</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Istoty niewidzialne dla ludzi, lecz obecne w duchowym porządku świata.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}