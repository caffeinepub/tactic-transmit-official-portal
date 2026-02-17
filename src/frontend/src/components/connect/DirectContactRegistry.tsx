import { Phone, Mail, Instagram } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export default function DirectContactRegistry() {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Official Phone',
      value: '+91 7356824245',
      href: 'tel:+917356824245',
    },
    {
      icon: Mail,
      label: 'Official Email',
      value: 'tactic.transmit@gmail.com',
      href: 'mailto:tactic.transmit@gmail.com',
    },
    {
      icon: SiInstagram,
      label: 'Instagram',
      value: '@tactic_transmit',
      href: 'https://instagram.com/tactic_transmit',
    },
  ];

  return (
    <div className="glass-panel-strong p-8 rounded-2xl border border-white/10">
      <div className="space-y-6">
        {contactDetails.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-neon-blue/10 rounded-lg">
                <Icon className="w-6 h-6 text-neon-blue" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white font-medium hover:text-neon-blue transition-colors break-all"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-xs text-green-400 font-semibold tracking-wide">
            DIRECT ACCESS ENABLED
          </span>
        </div>
      </div>
    </div>
  );
}
