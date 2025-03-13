'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, CircleDot } from 'lucide-react';

// Biblical time cycles
const biblicalCycles = {
  7: 'Week cycle (Creation)',
  12: 'Month cycle (Tribes, Apostles)',
  40: "Testing period (Flood, Wilderness, Jesus' fast)",
  50: 'Jubilee cycle (Freedom)',
  70: 'Generational cycle (Exile)',
  490: 'Prophetic cycle (70 weeks of Daniel)',
};

// Biblical symbols
const biblicalSymbols = {
  tree: 'Life, Knowledge',
  water: 'Purification, Life',
  fire: 'Presence of God, Judgment',
  bread: 'Sustenance, Body of Christ',
  wine: 'Covenant, Blood of Christ',
  oil: 'Anointing, Holy Spirit',
  lamb: 'Sacrifice, Christ',
  lion: 'Strength, Tribe of Judah',
  dove: 'Holy Spirit, Peace',
  serpent: 'Temptation, Evil',
  star: 'Divine guidance, Messiah',
  crown: 'Authority, Victory',
  gate: 'Access, Opportunity',
  key: 'Authority, Access',
  sword: 'Word of God, Justice',
  light: 'Truth, Guidance',
  darkness: 'Evil, Ignorance',
  mountain: "God's presence, Challenge",
  desert: 'Testing, Isolation',
  sea: 'Chaos, Nations',
  river: 'Life, Abundance',
};

export function BiblicalSymbols({ text, compact = false }: { text: string; compact?: boolean }) {
  const [cycles, setCycles] = useState<{ cycle: number; meaning: string }[]>([]);
  const [symbols, setSymbols] = useState<{ symbol: string; meaning: string }[]>([]);

  useEffect(() => {
    if (!text) {
      setCycles([]);
      setSymbols([]);
      return;
    }

    // Find biblical cycles
    const foundCycles: { cycle: number; meaning: string }[] = [];
    Object.entries(biblicalCycles).forEach(([cycle, meaning]) => {
      const cycleNum = Number.parseInt(cycle);
      if (text.includes(cycle) || text.length === cycleNum || text.split(/\s+/).length === cycleNum) {
        foundCycles.push({ cycle: cycleNum, meaning });
      }
    });
    setCycles(foundCycles);

    // Find biblical symbols
    const foundSymbols: { symbol: string; meaning: string }[] = [];
    Object.entries(biblicalSymbols).forEach(([symbol, meaning]) => {
      if (text.toLowerCase().includes(symbol.toLowerCase())) {
        foundSymbols.push({ symbol, meaning });
      }
    });
    setSymbols(foundSymbols);
  }, [text]);

  if (compact) {
    return (
      <div className="space-y-3">
        {cycles.length > 0 || symbols.length > 0 ? (
          <>
            {cycles.length > 0 && (
              <div>
                <div className="text-xs font-medium mb-1 text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-primary" />
                  Biblical Time Cycles
                </div>
                <div className="flex flex-wrap gap-1">
                  {cycles.slice(0, 2).map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {item.cycle}: {item.meaning.split(' ')[0]}
                    </Badge>
                  ))}
                  {cycles.length > 2 && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      +{cycles.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {symbols.length > 0 && (
              <div>
                <div className="text-xs font-medium mb-1 text-muted-foreground flex items-center gap-1">
                  <CircleDot className="h-3 w-3 text-primary" />
                  Biblical Symbols
                </div>
                <div className="flex flex-wrap gap-1">
                  {symbols.slice(0, 3).map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {item.symbol}
                    </Badge>
                  ))}
                  {symbols.length > 3 && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      +{symbols.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="h-[100px] flex items-center justify-center text-muted-foreground text-sm">
            Enter text to analyze biblical symbolism
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cycles.length > 0 || symbols.length > 0 ? (
        <div className="space-y-6">
          {cycles.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Biblical Time Cycles
              </h3>
              <div className="space-y-2">
                {cycles.map((item, index) => (
                  <div key={index} className="bg-background p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {item.cycle}
                      </Badge>
                      <span className="text-foreground">{item.meaning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {symbols.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-primary" />
                Biblical Symbols
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {symbols.map((item, index) => (
                  <div key={index} className="bg-background p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {item.symbol}
                      </Badge>
                      <span className="text-foreground">{item.meaning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
          Enter text to analyze biblical symbolism
        </div>
      )}
    </div>
  );
}
