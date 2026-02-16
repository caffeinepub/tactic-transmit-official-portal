import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface DeepTechLayoutProps {
  children: ReactNode;
}

export default function DeepTechLayout({ children }: DeepTechLayoutProps) {
  return (
    <div className="min-h-screen deep-tech-gradient">
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
