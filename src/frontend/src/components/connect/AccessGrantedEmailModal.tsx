import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface AccessGrantedEmailModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AccessGrantedEmailModal({ open, onClose }: AccessGrantedEmailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const emailSubject = 'Access Granted: Tactic Transmit Secure Infrastructure';
  const emailBody = `Welcome to the Pulse.

You are receiving this email because you have successfully registered with the Tactic Transmit Official Portal. Your account now grants you "Tier 1" access to our internal contact registry and technical documentation.

Verified Founder Contact Lines:
 * Direct Hotline: +91 7356824245
 * Official Instagram: @tactic_transmit
 * Primary Inquiry Email: tactic.transmit@gmail.com

Our Lead Architect, Johann G. Thekkel, and Ad Handler, Nandhukrishna Biju, have been notified of your registration. If you are an administrator requesting a schedule audit or a hardware demo, please reply directly to this email or use the Messaging Terminal on our portal.

Precision. Automated. Synchronized.

The Tactic Transmit Board
Johann | Joel | Dejon | Nandhu`;

  const fullEmailText = `Subject: ${emailSubject}\n\n${emailBody}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEmailText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="glass-panel-strong p-8 rounded-2xl max-w-3xl w-full border border-neon-blue/30 max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Access Granted</h2>
          <p className="text-gray-300">Your registration confirmation</p>
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-6">
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-1">Subject:</p>
            <p className="text-white font-semibold">{emailSubject}</p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-gray-400 mb-2">Message:</p>
            <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-mono">
              {emailBody}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCopy}
            className="flex-1 py-3 px-6 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy Email
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
