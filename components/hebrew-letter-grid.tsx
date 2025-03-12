'use client';

import { Badge } from '@/components/ui/badge';

// Hebrew letter information
const hebrewLetters = {
  א: { name: 'Alef', meaning: 'Ox, Strength', value: 1, element: 'Air' },
  ב: { name: 'Bet', meaning: 'House, Dwelling', value: 2, element: 'Earth' },
  ג: { name: 'Gimel', meaning: 'Camel, Lifting up', value: 3, element: 'Water' },
  ד: { name: 'Dalet', meaning: 'Door, Pathway', value: 4, element: 'Fire' },
  ה: { name: 'He', meaning: 'Window, Revelation', value: 5, element: 'Air' },
  ו: { name: 'Vav', meaning: 'Hook, Connection', value: 6, element: 'Earth' },
  ז: { name: 'Zayin', meaning: 'Weapon, Sword', value: 7, element: 'Water' },
  ח: { name: 'Chet', meaning: 'Fence, Enclosure', value: 8, element: 'Fire' },
  ט: { name: 'Tet', meaning: 'Basket, Serpent', value: 9, element: 'Air' },
  י: { name: 'Yod', meaning: 'Hand, Work', value: 10, element: 'Earth' },
  כ: { name: 'Kaf', meaning: 'Palm, Open hand', value: 20, element: 'Water' },
  ל: { name: 'Lamed', meaning: 'Staff, Teaching', value: 30, element: 'Fire' },
  מ: { name: 'Mem', meaning: 'Water, Chaos', value: 40, element: 'Air' },
  נ: { name: 'Nun', meaning: 'Fish, Life', value: 50, element: 'Earth' },
  ס: { name: 'Samekh', meaning: 'Support, Foundation', value: 60, element: 'Water' },
  ע: { name: 'Ayin', meaning: 'Eye, Vision', value: 70, element: 'Fire' },
  פ: { name: 'Pe', meaning: 'Mouth, Speech', value: 80, element: 'Air' },
  צ: { name: 'Tsadi', meaning: 'Fish hook, Righteousness', value: 90, element: 'Earth' },
  ק: { name: 'Qof', meaning: 'Back of head, Horizon', value: 100, element: 'Water' },
  ר: { name: 'Resh', meaning: 'Head, Beginning', value: 200, element: 'Fire' },
  ש: { name: 'Shin', meaning: 'Tooth, Fire', value: 300, element: 'Air' },
  ת: { name: 'Tav', meaning: 'Mark, Sign', value: 400, element: 'Earth' },
  // Final forms
  ך: { name: 'Kaf (final)', meaning: 'Palm, Open hand', value: 20, element: 'Water' },
  ם: { name: 'Mem (final)', meaning: 'Water, Chaos', value: 40, element: 'Air' },
  ן: { name: 'Nun (final)', meaning: 'Fish, Life', value: 50, element: 'Earth' },
  ף: { name: 'Pe (final)', meaning: 'Mouth, Speech', value: 80, element: 'Air' },
  ץ: { name: 'Tsadi (final)', meaning: 'Fish hook, Righteousness', value: 90, element: 'Earth' },
};

// Element colors
const elementColors = {
  Air: 'bg-blue-100 text-blue-700 border-blue-200',
  Earth: 'bg-green-100 text-green-700 border-green-200',
  Water: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  Fire: 'bg-red-100 text-red-700 border-red-200',
};

export function HebrewLetterGrid({ text, compact = false }: { text: string; compact?: boolean }) {
  // Extract unique letters from the text
  const uniqueLetters = text ? [...new Set(text.split(''))] : [];

  if (compact) {
    return (
      <div>
        {uniqueLetters.length > 0 ? (
          <div className="space-y-2">
            <div className="text-xs font-medium mb-1 text-muted-foreground">Hebrew Letters</div>
            <div className="grid grid-cols-2 gap-2">
              {uniqueLetters.slice(0, 6).map((letter, index) => {
                const letterInfo = hebrewLetters[letter];
                if (!letterInfo) return null;

                return (
                  <div key={index} className="bg-background p-2 rounded-lg border border-border flex items-start">
                    <div className="text-xl font-bold mr-2">{letter}</div>
                    <div>
                      <div className="text-xs font-medium">{letterInfo.name}</div>
                      <div className="text-xs text-muted-foreground">{letterInfo.meaning}</div>
                    </div>
                    <Badge variant="outline" className={`${elementColors[letterInfo.element]} text-xs ml-auto`}>
                      {letterInfo.element}
                    </Badge>
                  </div>
                );
              })}
              {uniqueLetters.length > 6 && (
                <div className="bg-background p-2 rounded-lg border border-border flex items-center justify-center text-xs text-muted-foreground">
                  +{uniqueLetters.length - 6} more letters
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-[100px] flex items-center justify-center text-muted-foreground text-sm">
            Enter text to analyze letters
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {uniqueLetters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {uniqueLetters.map((letter, index) => {
            const letterInfo = hebrewLetters[letter];
            if (!letterInfo) return null;

            return (
              <div key={index} className="bg-background p-4 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-3xl font-bold">{letter}</div>
                  <Badge variant="outline" className={elementColors[letterInfo.element]}>
                    {letterInfo.element}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-medium">{letterInfo.name}</div>
                  <div className="text-sm text-muted-foreground">Value: {letterInfo.value}</div>
                  <div className="text-sm text-muted-foreground">Meaning: {letterInfo.meaning}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
          Enter Hebrew text to analyze its letters
        </div>
      )}
    </div>
  );
}
