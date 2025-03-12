'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';

// Perfect numbers
const perfectNumbers = [6, 28, 496, 8128];

// Amicable number pairs
const amicableNumbers = [
  [220, 284],
  [1184, 1210],
  [2620, 2924],
];

// Biblical significant numbers
const biblicalNumbers = {
  1: 'Unity, God',
  2: 'Division, Witness',
  3: 'Divine Perfection, Trinity',
  4: 'Creation, World',
  5: "Grace, God's goodness",
  6: 'Man, Human weakness',
  7: 'Completeness, Perfection',
  8: 'New beginnings, Resurrection',
  9: 'Divine completeness, Finality',
  10: 'Law, Responsibility',
  12: 'Governmental perfection',
  13: 'Rebellion, Apostasy',
  40: 'Testing, Trial, Probation',
  50: 'Jubilee, Freedom',
  70: 'Nations, Judgment',
};

export function NumericalAnalysis({ text, compact = false }: { text: string; compact?: boolean }) {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [perfectFound, setPerfectFound] = useState<number[]>([]);
  const [amicableFound, setAmicableFound] = useState<number[][]>([]);
  const [biblicalFound, setBiblicalFound] = useState<{ num: number; meaning: string }[]>([]);
  const [piRelation, setPiRelation] = useState<string>('');

  useEffect(() => {
    if (!text) {
      setNumbers([]);
      setPerfectFound([]);
      setAmicableFound([]);
      setBiblicalFound([]);
      setPiRelation('');
      return;
    }

    // Extract numbers from text (gematria values, word counts, etc.)
    const extractedNumbers: number[] = [];

    // Simple extraction of numeric values
    const numericMatches = text.match(/\d+/g);
    if (numericMatches) {
      numericMatches.forEach((match) => {
        extractedNumbers.push(Number.parseInt(match));
      });
    }

    // Calculate gematria value of the entire text
    let gematriaTotal = 0;
    for (const char of text) {
      const charCode = char.charCodeAt(0);
      gematriaTotal += charCode;
    }
    extractedNumbers.push(gematriaTotal);

    // Add length of text
    extractedNumbers.push(text.length);

    // Add word count
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    if (wordCount > 0) {
      extractedNumbers.push(wordCount);
    }

    setNumbers(extractedNumbers);

    // Check for perfect numbers
    const perfect = extractedNumbers.filter((num) => perfectNumbers.includes(num));
    setPerfectFound(perfect);

    // Check for amicable numbers
    const amicable: number[][] = [];
    extractedNumbers.forEach((num) => {
      amicableNumbers.forEach((pair) => {
        if (pair.includes(num)) {
          amicable.push(pair);
        }
      });
    });
    setAmicableFound(amicable);

    // Check for biblical significant numbers
    const biblical: { num: number; meaning: string }[] = [];
    extractedNumbers.forEach((num) => {
      if (biblicalNumbers[num]) {
        biblical.push({ num, meaning: biblicalNumbers[num] });
      }
    });
    setBiblicalFound(biblical);

    // Check for Pi relation
    if (extractedNumbers.some((num) => Math.abs(num - 314) < 5)) {
      setPiRelation('Value close to Pi (314) detected - connection to divine harmony');
    } else if (extractedNumbers.some((num) => num % 22 === 0 && num % 7 === 0)) {
      setPiRelation('Value divisible by both 22 and 7 (approximation of Pi) - cosmic balance');
    } else {
      setPiRelation('');
    }
  }, [text]);

  if (compact) {
    return (
      <div className="space-y-3">
        {numbers.length > 0 ? (
          <>
            <div>
              <div className="text-xs font-medium mb-1 text-muted-foreground">Detected Numbers</div>
              <div className="flex flex-wrap gap-1">
                {numbers.slice(0, 8).map((num, index) => (
                  <Badge key={index} variant="outline" className="bg-background text-foreground border-border text-xs">
                    {num}
                  </Badge>
                ))}
                {numbers.length > 8 && (
                  <Badge variant="outline" className="bg-background text-foreground border-border text-xs">
                    +{numbers.length - 8} more
                  </Badge>
                )}
              </div>
            </div>

            {(perfectFound.length > 0 || biblicalFound.length > 0 || piRelation) && (
              <div className="grid grid-cols-1 gap-2">
                {perfectFound.length > 0 && (
                  <div className="bg-background p-2 rounded-lg border border-border">
                    <div className="text-xs font-medium mb-1 text-foreground flex items-center gap-1">
                      <CircleDot className="h-3 w-3 text-primary" />
                      Perfect Numbers
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {perfectFound.map((num, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {num}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {biblicalFound.length > 0 && (
                  <div className="bg-background p-2 rounded-lg border border-border">
                    <div className="text-xs font-medium mb-1 text-foreground flex items-center gap-1">
                      <CircleDot className="h-3 w-3 text-primary" />
                      Biblical Significance
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {biblicalFound.slice(0, 2).map((item, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {item.num}: {item.meaning}
                        </Badge>
                      ))}
                      {biblicalFound.length > 2 && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                          +{biblicalFound.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {piRelation && (
                  <div className="bg-background p-2 rounded-lg border border-border">
                    <div className="text-xs font-medium mb-1 text-foreground flex items-center gap-1">
                      <CircleDot className="h-3 w-3 text-primary" />
                      Pi (π) Relation
                    </div>
                    <div className="text-xs text-foreground">{piRelation}</div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="h-[100px] flex items-center justify-center text-muted-foreground text-sm">
            Enter text to analyze numerical patterns
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {numbers.length > 0 ? (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3 text-foreground">Detected Numbers</h3>
            <div className="flex flex-wrap gap-2">
              {numbers.map((num, index) => (
                <Badge key={index} variant="outline" className="bg-background text-foreground border-border">
                  {num}
                </Badge>
              ))}
            </div>
          </div>

          {perfectFound.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-primary" />
                Perfect Numbers Found
              </h3>
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="flex flex-wrap gap-2 mb-2">
                  {perfectFound.map((num, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {num}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Perfect numbers symbolize divine harmony and completeness. They equal the sum of their divisors.
                </p>
              </div>
            </div>
          )}

          {amicableFound.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-primary" />
                Amicable Number Pairs
              </h3>
              <div className="bg-background p-4 rounded-lg border border-border">
                {amicableFound.map((pair, index) => (
                  <div key={index} className="mb-2 last:mb-0">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {pair[0]}
                      </Badge>
                      <span className="text-muted-foreground">and</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {pair[1]}
                      </Badge>
                    </div>
                  </div>
                ))}
                <p className="text-sm text-muted-foreground mt-2">
                  Amicable numbers represent spiritual friendship and mutual support.
                </p>
              </div>
            </div>
          )}

          {biblicalFound.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-primary" />
                Biblical Significance
              </h3>
              <div className="space-y-2">
                {biblicalFound.map((item, index) => (
                  <div key={index} className="bg-background p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {item.num}
                      </Badge>
                      <span className="text-foreground">{item.meaning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {piRelation && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-primary" />
                Pi (π) Relation
              </h3>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-sm text-foreground">{piRelation}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
          Enter text to analyze numerical patterns
        </div>
      )}
    </div>
  );
}
