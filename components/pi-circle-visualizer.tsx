'use client';

import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

export function PiCircleVisualizer({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // If no text, draw a simple pi circle
    if (!text) {
      drawPiCircle(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4);
      return;
    }

    // Calculate a value from the text
    let textValue = 0;
    for (const char of text) {
      textValue += char.charCodeAt(0);
    }

    // Normalize the value to be between 3.1 and 3.2 (around π)
    const normalizedValue = 3.1 + (textValue % 100) / 1000;

    // Draw the pi circle with the text-derived value
    drawPiCircle(
      ctx,
      canvas.width / 2,
      canvas.height / 2,
      Math.min(canvas.width, canvas.height) * 0.4,
      normalizedValue,
    );

    // Draw text-based pattern
    drawTextPattern(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.3, text);
  }, [text]);

  // Function to draw a circle with pi-based properties
  const drawPiCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    piValue: number = Math.PI,
  ) => {
    // Draw main circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw diameter
    ctx.beginPath();
    ctx.moveTo(x - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Calculate circumference based on the pi value
    const circumference = 2 * piValue * radius;

    // Draw circumference representation
    ctx.beginPath();
    ctx.moveTo(x - radius, y + radius + 20);
    ctx.lineTo(x + radius, y + radius + 20);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw circumference unwrapped
    ctx.beginPath();
    ctx.moveTo(x - radius, y + radius + 40);
    ctx.lineTo(x - radius + circumference, y + radius + 40);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw pi value
    ctx.font = '14px sans-serif';
    ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
    ctx.textAlign = 'center';
    ctx.fillText(`π ≈ ${piValue.toFixed(6)}`, x, y - radius - 10);

    // Draw Shaddai reference
    ctx.font = '12px sans-serif';
    ctx.fillStyle = 'rgba(99, 102, 241, 0.6)';
    ctx.fillText('שדי (Shaddai) = 314', x, y - radius - 30);
  };

  // Function to draw a pattern based on the text
  const drawTextPattern = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, text: string) => {
    // Convert text to numerical values
    const values = text.split('').map((char) => char.charCodeAt(0) % 360);

    // Draw points around the circle based on text
    for (let i = 0; i < values.length; i++) {
      const angle = (values[i] * Math.PI) / 180;
      const x1 = x + Math.cos(angle) * radius;
      const y1 = y + Math.sin(angle) * radius;

      // Draw point
      ctx.beginPath();
      ctx.arc(x1, y1, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${120 + i * 5}, ${100 + i * 10}, 250, 0.8)`;
      ctx.fill();

      // Connect to center
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = `rgba(${120 + i * 5}, ${100 + i * 10}, 250, 0.3)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw connections between adjacent points
    for (let i = 0; i < values.length - 1; i++) {
      const angle1 = (values[i] * Math.PI) / 180;
      const angle2 = (values[i + 1] * Math.PI) / 180;

      const x1 = x + Math.cos(angle1) * radius;
      const y1 = y + Math.sin(angle1) * radius;
      const x2 = x + Math.cos(angle2) * radius;
      const y2 = y + Math.sin(angle2) * radius;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  return (
    <div className="space-y-2">
      <div className="bg-background p-2 rounded-lg border border-border">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
            שדי (Shaddai)
          </Badge>
          <span className="text-foreground text-xs">Value 314 in gematria (π)</span>
        </div>
      </div>

      <div className="h-full relative">
        <canvas ref={canvasRef} className="w-full h-full" />
        {!text && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground pointer-events-none text-sm">
            Enter text to visualize its relationship with Pi
          </div>
        )}
      </div>
    </div>
  );
}
