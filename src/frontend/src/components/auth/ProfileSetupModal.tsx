import { useState } from 'react';
import { useSaveCallerUserProfile } from '../../hooks/useCurrentUserProfile';

interface ProfileSetupModalProps {
  open: boolean;
  onComplete: () => void;
}

export default function ProfileSetupModal({ open, onComplete }: ProfileSetupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const saveProfile = useSaveCallerUserProfile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    try {
      await saveProfile.mutateAsync({ name: name.trim(), email: email.trim() });
      onComplete();
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="glass-panel-strong p-8 rounded-2xl max-w-md w-full border border-neon-blue/30">
        <h2 className="text-2xl font-bold text-white mb-4">Complete Your Profile</h2>
        <p className="text-gray-300 mb-6">
          Please provide your name and email to unlock secure contact details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="profile-name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="Enter your name"
              autoFocus
              required
            />
          </div>

          <div>
            <label htmlFor="profile-email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="profile-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim() || !email.trim() || saveProfile.isPending}
            className="w-full py-3 px-6 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saveProfile.isPending ? 'Saving...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
