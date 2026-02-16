import { useContactInfo } from '../../hooks/useContactInfo';
import { Copy, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactModule() {
  const { data: contactInfo, isLoading } = useContactInfo();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!contactInfo) return;
    
    try {
      await navigator.clipboard.writeText(contactInfo);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="glass-panel p-8 rounded-2xl animate-pulse">
        <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
        <div className="h-10 bg-white/10 rounded w-full"></div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8 rounded-2xl border border-purple-500/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Direct Line to Team</h3>
          <p className="text-gray-400 text-sm">For schedule updates and coordination</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-black/30 p-4 rounded-xl border border-white/10">
        <input
          type="text"
          value={contactInfo || 'Loading...'}
          readOnly
          className="flex-1 bg-transparent text-white outline-none"
        />
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-all flex items-center gap-2"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
