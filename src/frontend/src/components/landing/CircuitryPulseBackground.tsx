import { useEffect, useRef } from 'react';

export default function CircuitryPulseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Load background image
    const img = new Image();
    img.src = '/assets/generated/tt1-circuitry-bg.dim_1920x1080.png';

    let animationFrame: number;
    let pulsePhase = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background image
      if (img.complete) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        
        ctx.globalAlpha = 0.4;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        ctx.globalAlpha = 1;
      }

      // Draw animated pulse lines
      pulsePhase += 0.02;
      const pulseIntensity = (Math.sin(pulsePhase) + 1) / 2;

      ctx.strokeStyle = `rgba(0, 191, 255, ${0.3 + pulseIntensity * 0.4})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(0, 191, 255, 0.8)';

      // Draw circuit-like lines
      for (let i = 0; i < 5; i++) {
        const offset = (pulsePhase * 100 + i * 200) % canvas.width;
        ctx.beginPath();
        ctx.moveTo(offset, 0);
        ctx.lineTo(offset, canvas.height);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      animationFrame = requestAnimationFrame(animate);
    };

    img.onload = () => {
      animate();
    };

    if (img.complete) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
