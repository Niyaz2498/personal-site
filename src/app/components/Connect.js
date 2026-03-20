import Image from 'next/image';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-niyaz-m/', icon: '/linkedin-logo.svg' },
  { name: 'Email', href: 'mailto:mohamedniyazm7@gmail.com', icon: '/gmail-logo.svg' },
  { name: 'GitHub', href: 'https://github.com/Niyaz2498', icon: '/github-mark-white.svg' },
];

export default function Connect() {
  return (
    <footer className="footer" id="contact">
      <h2 className="footer-title">Let&apos;s Connect</h2>

      <div className="footer-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Image src={link.icon} alt={link.name} width={18} height={18} />
            {link.name}
          </a>
        ))}
      </div>

      <div className="footer-divider" />
      <div className="footer-copy">
        <p>Built on {new Date().getFullYear()} by Mohamed Niyaz.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          Made with help from <strong>Antigravity</strong>. Thanks to Google for the free plan! 🚀
        </p>
      </div>
    </footer>
  );
}