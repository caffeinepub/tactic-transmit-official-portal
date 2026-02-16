import { useState } from 'react';
import { useSubmitMessage } from '../../hooks/useMessageTerminal';
import { CheckCircle2 } from 'lucide-react';

export default function MessagingTerminalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const submitMessage = useSubmitMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Email address is required');
      return;
    }

    try {
      await submitMessage.mutateAsync({
        from: name.trim() || 'Anonymous',
        email: email.trim(),
        message: message.trim(),
      });

      setName('');
      setEmail('');
      setMessage('');
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="glass-panel-strong p-8 rounded-2xl border border-white/10">
      {showSuccess ? (
        <div className="text-center py-12">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">
            We've received your message and will respond via email soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={submitMessage.isPending}
            className="w-full py-3 px-6 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitMessage.isPending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
