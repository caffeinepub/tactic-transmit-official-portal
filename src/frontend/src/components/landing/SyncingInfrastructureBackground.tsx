import { useEffect, useRef } from 'react';

export default function SyncingInfrastructureBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const scrollY = window.scrollY;
        const parallaxOffset = scrollY * 0.5;
        gridRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep charcoal gradient base */}
      <div className="absolute inset-0 deep-tech-gradient" />

      {/* Animated moving grid pattern */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-20 syncing-grid-background"
        style={{
          backgroundImage: 'url(/assets/generated/syncing-grid-tile.dim_512x512.png)',
          backgroundSize: '512px 512px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Cinematic poster layer with parallax */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/tt1-assembly-hero-poster.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </div>
  );
}
