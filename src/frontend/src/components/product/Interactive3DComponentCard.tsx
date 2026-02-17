import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Interactive3DComponentCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  index: number;
}

export default function Interactive3DComponentCard({
  name,
  title,
  image,
  description,
  index,
}: Interactive3DComponentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-8 items-center`}
    >
      <div className="lg:w-1/2">
        <div
          className="glass-panel-strong p-2 rounded-2xl border border-neon-blue/30 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-neon-blue interactive-3d-card"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl pointer-events-none" />
        </div>
      </div>

      <div className="lg:w-1/2 space-y-4">
        <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-2">
          <span className="text-neon-blue font-bold tracking-wider text-sm">
            {title.toUpperCase()}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {name}
        </h2>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-white font-medium"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-5 h-5" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-5 h-5" />
              Show Technical Details
            </>
          )}
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-panel p-6 rounded-xl mt-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
