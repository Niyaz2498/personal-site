
import SocialLink from './SocialLink';


const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-niyaz-m/', icon: '/linkedin-logo.svg' },
  { name: 'Gmail', href: 'mailto:mohamedniyazm7@gmail.com', icon: '/gmail-logo.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/mohamed.niyaz.14/', icon: '/Instagram_Glyph_White.svg' },
  { name: 'Kaggle', href: 'https://www.kaggle.com/niyaz2498', icon: '/kaggle-logo.svg' },
  { name: 'GitHub', href: 'https://github.com/Niyaz2498', icon: '/github-mark-white.svg' },
];

export default function Connect() {
  return (
    <div style={{ padding: '4rem', background: '#000000', fontSize: '1.2rem' }}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '2.5rem', textAlign: 'center' }}>
        Connect with Me
      </h2>
      <div id='connectContentHolder' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        {socialLinks.map((link) => (
          <SocialLink key={link.name} href={link.href} icon={link.icon} name={link.name} alt={`${link.name} Logo`} />
        ))}
      </div>
    </div>
  );
}