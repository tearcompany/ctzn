'use client';

import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { TimerIcon as Timeline, Clock, CircleDot } from 'lucide-react';

// Biblical timeline events
const timelineEvents = [
  { year: -4000, event: 'Creation (traditional dating)' },
  { year: -2348, event: 'Great Flood' },
  { year: -1996, event: 'Tower of Babel' },
  { year: -1921, event: 'Birth of Abraham' },
  { year: -1706, event: 'Jacob enters Egypt' },
  { year: -1446, event: 'Exodus from Egypt' },
  { year: -1406, event: 'Israelites enter Canaan' },
  { year: -1050, event: 'Saul becomes king' },
  { year: -1010, event: 'David becomes king' },
  { year: -970, event: 'Solomon becomes king' },
  { year: -930, event: 'Kingdom divides' },
  { year: -722, event: 'Fall of Northern Kingdom' },
  { year: -586, event: 'Fall of Jerusalem, Babylonian Exile' },
  { year: -538, event: 'Return from Exile begins' },
  { year: -516, event: 'Second Temple completed' },
  { year: -458, event: 'Ezra arrives in Jerusalem' },
  { year: -445, event: 'Nehemiah rebuilds Jerusalem walls' },
  { year: -333, event: 'Alexander the Great conquers Persia' },
  { year: -166, event: 'Maccabean Revolt' },
  { year: -63, event: 'Romans take Jerusalem' },
  { year: 0, event: 'Birth of Jesus Christ' },
  { year: 30, event: 'Crucifixion and Resurrection' },
  { year: 70, event: 'Destruction of Jerusalem and Temple' },
  { year: 135, event: 'Bar Kokhba revolt crushed' },
];

// Biblical cycles
const biblicalCycles = [
  { years: 7, name: 'Sabbatical Year (Shemitah)' },
  { years: 50, name: 'Jubilee Year' },
  { years: 490, name: '70 Weeks of Daniel' },
];

export function TimelineVisualizer({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<{ year: number; event: string } | null>(null);
  const [highlightedYears, setHighlightedYears] = useState<number[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw timeline
    drawTimeline(ctx, canvas.width, canvas.height);

    // If text is provided, try to find relevant years to highlight
    if (text) {
      const years: number[] = [];

      // Extract years from text
      const yearMatches = text.match(/-?\d+/g);
      if (yearMatches) {
        yearMatches.forEach((match) => {
          const year = Number.parseInt(match);
          if (year >= -4000 && year <= 135) {
            years.push(year);
          }
        });
      }

      // If no direct years found, use text length or character codes
      if (years.length === 0) {
        const textValue = text.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const scaledYear = -4000 + (textValue % 4135);
        years.push(scaledYear);
      }

      setHighlightedYears(years);

      // Highlight these years on the timeline
      years.forEach((year) => {
        highlightYear(ctx, canvas.width, canvas.height, year);
      });
    } else {
      setHighlightedYears([]);
    }
  }, [text]);

  const drawTimeline = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const timelineWidth = width - margin.left - margin.right;
    const timelineHeight = height - margin.top - margin.bottom;

    // Draw timeline axis
    ctx.beginPath();
    ctx.moveTo(margin.left, height - margin.bottom);
    ctx.lineTo(margin.left + timelineWidth, height - margin.bottom);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Calculate scale
    const minYear = -4000;
    const maxYear = 135;
    const yearRange = maxYear - minYear;

    // Draw year markers and events
    const majorTickInterval = 500;
    const minorTickInterval = 100;

    // Draw minor ticks
    for (let year = minYear; year <= maxYear; year += minorTickInterval) {
      const x = margin.left + ((year - minYear) / yearRange) * timelineWidth;

      ctx.beginPath();
      ctx.moveTo(x, height - margin.bottom);
      ctx.lineTo(x, height - margin.bottom + 5);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw major ticks and labels
    for (let year = minYear; year <= maxYear; year += majorTickInterval) {
      const x = margin.left + ((year - minYear) / yearRange) * timelineWidth;

      ctx.beginPath();
      ctx.moveTo(x, height - margin.bottom);
      ctx.lineTo(x, height - margin.bottom + 10);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.8)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw year label
      ctx.font = '12px sans-serif';
      ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
      ctx.textAlign = 'center';
      ctx.fillText(year.toString(), x, height - margin.bottom + 25);
    }

    // Draw events
    timelineEvents.forEach((event) => {
      const x = margin.left + ((event.year - minYear) / yearRange) * timelineWidth;

      // Draw event marker
      ctx.beginPath();
      ctx.arc(x, height - margin.bottom - 15, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
      ctx.fill();

      // Draw event line
      ctx.beginPath();
      ctx.moveTo(x, height - margin.bottom - 15);
      ctx.lineTo(x, height - margin.bottom);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw event label (only for major events, to avoid overcrowding)
      if ([-4000, -1446, -1010, -586, 0, 70].includes(event.year)) {
        ctx.font = '10px sans-serif';
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.textAlign = 'center';
        ctx.fillText(event.event, x, height - margin.bottom - 30);
        ctx.fillText(`(${event.year})`, x, height - margin.bottom - 18);
      }
    });

    // Draw biblical cycles
    biblicalCycles.forEach((cycle, index) => {
      const y = margin.top + index * 30;

      ctx.font = '12px sans-serif';
      ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
      ctx.textAlign = 'left';
      ctx.fillText(`${cycle.name} (${cycle.years} years)`, margin.left, y);

      // Draw cycle visualization
      const cycleWidth = (cycle.years / yearRange) * timelineWidth;

      for (let year = minYear; year <= maxYear; year += cycle.years) {
        const x = margin.left + ((year - minYear) / yearRange) * timelineWidth;

        ctx.beginPath();
        ctx.rect(x, y + 5, cycleWidth, 5);
        ctx.fillStyle = `rgba(${99 + index * 20}, ${102 + index * 20}, 241, 0.4)`;
        ctx.fill();
      }
    });
  };

  const highlightYear = (ctx: CanvasRenderingContext2D, width: number, height: number, year: number) => {
    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const timelineWidth = width - margin.left - margin.right;

    // Calculate scale
    const minYear = -4000;
    const maxYear = 135;
    const yearRange = maxYear - minYear;

    // Calculate x position
    const x = margin.left + ((year - minYear) / yearRange) * timelineWidth;

    // Draw highlight
    ctx.beginPath();
    ctx.arc(x, height - margin.bottom - 15, 8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 170, 0, 0.6)';
    ctx.fill();

    // Find closest event
    let closestEvent = null;
    let minDistance = Number.MAX_VALUE;

    timelineEvents.forEach((event) => {
      const distance = Math.abs(event.year - year);
      if (distance < minDistance) {
        minDistance = distance;
        closestEvent = event;
      }
    });

    if (closestEvent && minDistance < 100) {
      setSelectedEvent(closestEvent);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-background p-4 rounded-lg border border-border">
        <div className="flex items-center gap-2 mb-2">
          <Timeline className="h-5 w-5 text-primary" />
          <span className="text-lg font-medium">Biblical Timeline</span>
        </div>
        <p className="text-sm text-muted-foreground">Visualizing biblical chronology and prophetic cycles</p>
      </div>

      <div className="h-[400px] relative">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {selectedEvent && (
        <div className="bg-background p-4 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-base font-medium">Selected Event</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {selectedEvent.year}
            </Badge>
            <span className="text-foreground">{selectedEvent.event}</span>
          </div>
        </div>
      )}

      {highlightedYears.length > 0 && (
        <div className="bg-background p-4 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-2">
            <CircleDot className="h-5 w-5 text-primary" />
            <span className="text-base font-medium">Highlighted Years</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {highlightedYears.map((year, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {year}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
