'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, Keyboard, Eye, Calculator, BookOpen, Compass } from 'lucide-react';

export function QuickHelp() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Pomoc</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Pomoc i skróty klawiszowe</DialogTitle>
          <DialogDescription>
            Poznaj funkcje i skróty klawiszowe, które pomogą Ci w analizie kabalistycznej.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="shortcuts">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="shortcuts">Skróty klawiszowe</TabsTrigger>
            <TabsTrigger value="tools">Narzędzia</TabsTrigger>
            <TabsTrigger value="concepts">Pojęcia</TabsTrigger>
          </TabsList>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  <span>Ctrl + Tab</span>
                </div>
                <span>Szybki podgląd tekstu</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  <span>Enter</span>
                </div>
                <span>Pełna analiza tekstu</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  <span>Ctrl + B</span>
                </div>
                <span>Przełącz panel boczny</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  <span>Ctrl + F</span>
                </div>
                <span>Przejdź do wyszukiwania</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  <span>Ctrl + S</span>
                </div>
                <span>Zapisz bieżący wzorzec</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  <span>F11</span>
                </div>
                <span>Tryb pełnoekranowy</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-4 w-4 text-primary" />
                  <span className="font-medium">Gematria</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Analiza numerologiczna tekstu hebrajskiego, gdzie każda litera ma przypisaną wartość liczbową.
                </p>
              </div>

              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="font-medium">Analiza Liter</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Badanie znaczenia i symboliki poszczególnych liter hebrajskich.
                </p>
              </div>

              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="h-4 w-4 text-primary" />
                  <span className="font-medium">Nawigator Wzorców</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Wizualizacja połączeń i wzorców między literami i słowami.
                </p>
              </div>

              <div className="bg-background p-3 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <span className="font-medium">Szybki Podgląd</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Natychmiastowa analiza tekstu bez przeładowywania całej strony.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="space-y-4 mt-4">
            <div className="space-y-3">
              <div className="bg-background p-3 rounded-lg border border-border">
                <h3 className="font-medium mb-1">Gematria</h3>
                <p className="text-sm text-muted-foreground">
                  System przypisywania wartości liczbowych literom alfabetu hebrajskiego, używany do interpretacji
                  tekstów.
                </p>
              </div>

              <div className="bg-background p-3 rounded-lg border border-border">
                <h3 className="font-medium mb-1">Ceruf (צירוף)</h3>
                <p className="text-sm text-muted-foreground">
                  Technika permutacji liter w celu odkrycia ukrytych znaczeń i boskich imion.
                </p>
              </div>

              <div className="bg-background p-3 rounded-lg border border-border">
                <h3 className="font-medium mb-1">Temurah (תמורה)</h3>
                <p className="text-sm text-muted-foreground">
                  Metoda zamiany liter według określonych reguł, np. Atbash, Albam.
                </p>
              </div>

              <div className="bg-background p-3 rounded-lg border border-border">
                <h3 className="font-medium mb-1">Notarikon (נוטריקון)</h3>
                <p className="text-sm text-muted-foreground">
                  Tworzenie akronimów z pierwszych lub ostatnich liter słów w tekście.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
