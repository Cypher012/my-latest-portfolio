"use client";

import { useEffect, useRef } from "react";

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const COLS = Math.ceil(window.innerWidth / 40) + 2;
    const ROWS = Math.ceil(window.innerHeight / 40) + 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw animated dot grid
      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          const x = col * 40;
          const y = row * 40;

          // Wave-based opacity
          const wave = Math.sin(time + col * 0.3 + row * 0.3) * 0.5 + 0.5;
          const opacity = 0.08 + wave * 0.12;

          // Determine dot size with subtle pulse
          const size = 1 + wave * 0.8;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(10, 102, 194, ${opacity})`;
          ctx.fill();
        }
      }

      // Draw subtle connecting lines for nearby dots
      ctx.lineWidth = 0.3;
      for (let col = 0; col < COLS - 1; col++) {
        for (let row = 0; row < ROWS - 1; row++) {
          const x = col * 40;
          const y = row * 40;
          const wave = Math.sin(time * 0.7 + col * 0.4 + row * 0.4) * 0.5 + 0.5;

          if (wave > 0.65) {
            const lineOpacity = (wave - 0.65) * 0.25;
            ctx.strokeStyle = `rgba(10, 102, 194, ${lineOpacity})`;

            // Horizontal line
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 40, y);
            ctx.stroke();

            // Vertical line
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 40);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
