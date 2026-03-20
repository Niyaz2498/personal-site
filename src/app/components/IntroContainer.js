'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const phrases = [
  'Crafting Scalable Systems',
  'Passionate about AI & ML',
  'Solving Complex Problems',
  'Building Quality Software',
];

const socialLinks = [
  { href: 'https://github.com/Niyaz2498', icon: '/github-mark-white.svg', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mohamed-niyaz-m/', icon: '/linkedin-logo.svg', label: 'LinkedIn' },
  { href: 'mailto:mohamedniyazm7@gmail.com', icon: '/gmail-logo.svg', label: 'Email' },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-photo-wrapper">
          <div className="hero-photo-ring">
            <Image
              src="/niyaz.jpeg"
              alt="Mohamed Niyaz"
              width={220}
              height={220}
              className="hero-photo"
              priority
            />
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting">Hey there! 👋</p>
          <h1 className="hero-name">
            I&apos;m <span className="accent">Mohamed Niyaz</span>
          </h1>
          <p className="hero-tagline">
            Senior Engineer at <strong>Presidio</strong> · M.Tech AI/ML at{' '}
            <strong>BITS Pilani</strong>
          </p>

          <div className="typing-wrapper">
            <span>{displayText}</span>
            <span className="typing-cursor" />
          </div>

          <div className="hero-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label={link.label}
                title={link.label}
              >
                <Image src={link.icon} alt={link.label} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}