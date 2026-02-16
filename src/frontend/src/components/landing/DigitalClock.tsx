import { useEffect, useState } from 'react';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-lg border border-neon-blue/30">
      <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
      <span className="font-mono text-neon-blue text-lg font-bold tracking-wider">
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
}
