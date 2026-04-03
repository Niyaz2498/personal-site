'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-niyaz-m/', isEmail: false },
  { name: 'Email', href: 'mailto:mohamedniyazm7@gmail.com', isEmail: true },
  { name: 'GitHub', href: 'https://github.com/Niyaz2498', isEmail: false },
];

export default function Connect() {
  const [toast, setToast] = useState(false);

  const handleCopyEmail = (e, emailHref) => {
    e.preventDefault();
    const email = emailHref.replace('mailto:', '');
    navigator.clipboard.writeText(email);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <footer className="layout-container py-16 md:py-24" id="contact">
      <div className="border-t border-[var(--border-color)] pt-16 md:pt-24 relative">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-12">
            Let&apos;s Connect.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16">
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {socialLinks.map((link, i) => (
              <FadeIn key={link.name} delay={150 + (i * 100)}>
                <a
                  href={link.href}
                  onClick={link.isEmail ? (e) => handleCopyEmail(e, link.href) : undefined}
                  target={link.isEmail ? undefined : "_blank"}
                  rel={link.isEmail ? undefined : "noopener noreferrer"}
                  className="text-2xl md:text-3xl font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors border-b-2 border-transparent hover:border-[var(--accent)] pb-1 inline-block"
                >
                  {link.name} {link.isEmail ? '⎘' : '↗'}
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={450}>
            <div className="text-left text-[var(--text-muted)] font-medium flex flex-col gap-1.5 mt-8 border-t border-[var(--border-color)]/50 pt-8">
              <p>Designed and built by Mohamed Niyaz in {new Date().getFullYear()}.</p>
              <p className="text-sm mt-3 opacity-80">This site was made with Antigravity.</p>
              <p className="text-sm opacity-80">Also thanks to Google for the free credits!</p>
            </div>
          </FadeIn>
        </div>

        {/* Minimalist Toast Notification */}
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-full font-bold shadow-xl transition-all duration-300 z-50 ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          Email copied to clipboard!
        </div>
      </div>
    </footer>
  );
}