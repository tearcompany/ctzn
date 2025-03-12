'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

// Hebrew letter to gematria value mapping
const hebrewGematria = {
  א: 1,
  ב: 2,
  ג: 3,
  ד: 4,
  ה: 5,
  ו: 6,
  ז: 7,
  ח: 8,
  ט: 9,
  י: 10,
  כ: 20,
  ל: 30,
  מ: 40,
  נ: 50,
  ס: 60,
  ע: 70,
  פ: 80,
  צ: 90,
  ק: 100,
  ר: 200,
  ש: 300,
  ת: 400,
  ך: 20,
  ם: 40,
  ן: 50,
  ף: 80,
  ץ: 90, // Final forms
};

// Significant gematria values and their meanings
const significantValues = {
  1: 'Unity, Beginning, God',
  7: 'Completion, Perfection, Rest',
  8: 'New Beginning, Resurrection',
  10: 'Divine Order, Completeness',
  13: 'Love, Unity, Oneness',
  18: 'Life (חי)',
  26: 'YHWH (יהוה)',
  40: 'Testing, Trials, Preparation',
  70: 'Divine Judgment, Nations',
  72: 'Divine Name (שם)',
  90: 'Righteous Judgment',
  100: 'Divine Election, Promise',
  248: 'Abraham (אברהם), Mercy',
  314: 'Shaddai (שדי), Pi (π)',
  613: 'Commandments (תרי״ג)',
};

// Words with the same gematria value
const gematriaConnections = {
  13: ['אהבה (love)', 'אחד (one)'],
  26: ['יהוה (YHWH)', 'כבוד (glory)'],
  86: ['אלהים (Elohim)', 'הטבע (nature)'],
  358: ['משיח (Messiah)', 'נחש (serpent)'],
};

export function GematriaCalculator({ text, compact = false }: { text: string; compact?: boolean }) {
  const [gematriaValue, setGematriaValue] = useState(0);
  const [letterValues, setLetterValues] = useState<{ letter: string; value: number }[]>([]);
  const [connections, setConnections] = useState<string[]>([]);
  const [significance, setSignificance] = useState<string>('');

  useEffect(() => {
    if (!text) {
      setGematriaValue(0);
      setLetterValues([]);
      setConnections([]);
      setSignificance('');
      return;
    }

    let total = 0;
    const values: { letter: string; value: number }[] = [];

    // Calculate gematria
    for (const char of text) {
      if (hebrewGematria[char]) {
        total += hebrewGematria[char];
        values.push({ letter: char, value: hebrewGematria[char] });
      }
    }

    setGematriaValue(total);
    setLetterValues(values);

    // Find connections
    setConnections(gematriaConnections[total] || []);

    // Find significance
    setSignificance(significantValues[total] || '');

    // If no exact match, find closest significant values
    if (!significantValues[total]) {
      const significantNums = Object.keys(significantValues).map(Number);
      const closest = significantNums.reduce((prev, curr) =>
        Math.abs(curr - total) < Math.abs(prev - total) ? curr : prev,
      );

      if (Math.abs(closest - total) < 10) {
        setSignificance(`Near ${closest}: ${significantValues[closest]}`);
      }
    }
  }, [text]);

  if (compact) {
    return (
      <div className="space-y-3">
        {text ? (
          <>
            <div className="flex flex-col items-center justify-center p-3 bg-background rounded-lg border border-border">
              <div className="text-lg font-bold mb-1 text-center">{text}</div>
              <div className="flex items-center gap-1">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span className="text-2xl font-bold text-primary">{gematriaValue}</span>
              </div>
              {significance && (
                <div className="mt-1 text-center">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {significance}
                  </Badge>
                </div>
              )}
            </div>

            <div>
              <div className="text-xs font-medium mb-1 text-muted-foreground">Letter Breakdown</div>
              <div className="grid grid-cols-6 gap-1">
                {letterValues.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-1 bg-background rounded border border-border"
                  >
                    <span className="text-sm">{item.letter}</span>
                    <span className="text-xs text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {connections.length > 0 && (
              <div>
                <div className="text-xs font-medium mb-1 text-muted-foreground">Same Gematria</div>
                <div className="flex flex-wrap gap-1">
                  {connections.map((word, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                      {word}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="h-[100px] flex items-center justify-center text-muted-foreground text-sm">
            Enter text to calculate gematria
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {text ? (
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border">
            <div className="text-2xl font-bold mb-2 text-center">{text}</div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-primary" />
              <span className="text-4xl font-bold text-primary">{gematriaValue}</span>
            </div>
            {significance && (
              <div className="mt-2 text-center text-foreground">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {significance}
                </Badge>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 text-foreground">Letter Breakdown</h3>
            <div className="grid grid-cols-5 gap-2">
              {letterValues.map((item, index) => (
                <div key={index} className="flex flex-col items-center p-2 bg-background rounded border border-border">
                  <span className="text-xl">{item.letter}</span>
                  <span className="text-xs text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {connections.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground">Words with Same Gematria</h3>
              <div className="flex flex-wrap gap-2">
                {connections.map((word, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground">
                    {word}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
          Enter Hebrew text to calculate its gematria value
        </div>
      )}
    </div>
  );
}
