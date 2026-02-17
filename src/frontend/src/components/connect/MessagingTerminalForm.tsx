import { useState } from 'react';
import { useSubmitMessage } from '../../hooks/useMessageTerminal';
import { CheckCircle2, Mail, Copy } from 'lucide-react';

export default function MessagingTerminalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; message: string } | null>(null);

  const submitMessage = useSubmitMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Email address is required');
      return;
    }

    try {
      const submittedName = name.trim() || 'Anonymous';
      
      await submitMessage.mutateAsync({
        from: submittedName,
        email: email.trim(),
        message: message.trim(),
      });

      setSubmittedData({
        name: submittedName,
        email: email.trim(),
        message: message.trim(),
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 10000);
    } catch (error) {
      console.error('Failed to submit message:', error);
      alert('Failed to save message. Please try again.');
    }
  };

  const composeMailto = () => {
    if (!submittedData) return '#';
    const subject = encodeURIComponent(`Message from ${submittedData.name}`);
    const body = encodeURIComponent(
      `From: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}`
    );
    return `mailto:tactic.transmit@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = () => {
    if (!submittedData) return;
    const text = `Subject: Message from ${submittedData.name}\n\nFrom: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('Message content copied to clipboard!');
    });
  };

  return (
    <div className="glass-panel-strong p-8 rounded-2xl border border-white/10">
      {showSuccess && submittedData ? (
        <div className="text-center py-12">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Recorded!</h3>
          <p className="text-gray-400 mb-6">
            Your message has been saved. To send it via email, use one of the options below:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={composeMailto()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue hover:bg-neon-blue/80 text-white font-semibold rounded-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Open in Email Client
            </a>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
            >
              <Copy className="w-5 h-5" />
              Copy to Clipboard
            </button>
          </div>
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
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
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
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
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
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={submitMessage.isPending}
            className="w-full py-3 px-6 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitMessage.isPending ? 'Saving...' : 'Submit Message'}
          </button>
        </form>
      )}
    </div>
  );
}
