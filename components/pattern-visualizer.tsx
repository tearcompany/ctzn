'use client';

import { useEffect, useRef } from 'react';

export function PatternVisualizer({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !text) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up visualization parameters
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Draw background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // If no text, don't proceed further
    if (!text) return;

    // Convert text to array of values (using character codes for simplicity)
    const values = text.split('').map((char) => char.charCodeAt(0));

    // Draw connections based on character values
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';

    // Draw points around the circle
    const points: [number, number][] = [];
    for (let i = 0; i < values.length; i++) {
      const angle = (i / values.length) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      points.push([x, y]);

      // Draw point
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
      ctx.fill();
    }

    // Draw connections based on character relationships
    for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        // Connect points if they have a relationship
        // (e.g., same character, sequential, or other pattern)
        if (values[i] === values[j] || Math.abs(values[i] - values[j]) < 5 || (values[i] + values[j]) % 7 === 0) {
          ctx.beginPath();
          ctx.moveTo(points[i][0], points[i][1]);
          ctx.lineTo(points[j][0], points[j][1]);
          ctx.stroke();
        }
      }
    }

    // Draw center pattern
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
    ctx.fill();

    // Add some animated particles
    const particles: { x: number; y: number; size: number; speed: number; angle: number }[] = [];
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: centerX,
        y: centerY,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Animation function
    let animationId: number;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Redraw points and connections
      for (let i = 0; i < points.length; i++) {
        ctx.beginPath();
        ctx.arc(points[i][0], points[i][1], 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.fill();
      }

      for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
          if (values[i] === values[j] || Math.abs(values[i] - values[j]) < 5 || (values[i] + values[j]) % 7 === 0) {
            ctx.beginPath();
            ctx.moveTo(points[i][0], points[i][1]);
            ctx.lineTo(points[j][0], points[j][1]);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Check if particle is out of bounds
        const dist = Math.sqrt(Math.pow(p.x - centerX, 2) + Math.pow(p.y - centerY, 2));
        if (dist > radius) {
          // Reset particle
          p.x = centerX;
          p.y = centerY;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();
      }

      // Draw center pattern
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [text]);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: text ? 'block' : 'none' }} />;
}
