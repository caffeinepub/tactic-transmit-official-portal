import { useEffect, useRef } from 'react';

export default function CircuitryPulseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Load circuitry background image
    const circuitryImg = new Image();
    circuitryImg.src = '/assets/generated/tt1-circuitry-bg.dim_1920x1080.png';

    // Pulse nodes
    const pulseNodes: Array<{ x: number; y: number; phase: number; speed: number }> = [];
    for (let i = 0; i < 8; i++) {
      pulseNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circuitry background with low opacity
      if (circuitryImg.complete) {
        ctx.globalAlpha = 0.15;
        ctx.drawImage(circuitryImg, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }

      // Draw pulsing nodes
      pulseNodes.forEach((node) => {
        node.phase += node.speed;
        const intensity = (Math.sin(node.phase) + 1) / 2;
        const radius = 3 + intensity * 5;

        // Neon blue glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 3);
        gradient.addColorStop(0, `rgba(0, 200, 255, ${intensity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(0, 200, 255, ${intensity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(0, 200, 255, ${intensity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation when image loads
    circuitryImg.onload = () => animate();
    if (circuitryImg.complete) animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
