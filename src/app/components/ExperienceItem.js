import Image from 'next/image';

export default function ExperienceItem({ logo, company, title, timeline, isLast }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1.5rem',
      marginBottom: isLast ? '0' : '2rem',
    }}>
      <Image
        src={logo}
        alt={`${company} logo`}
        width={56}
        height={56}
        style={{ borderRadius: '8px', objectFit: 'contain' }}
      />
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#047857', margin: '0 0 0.25rem 0' }}>{title}</h3>
        <p style={{ margin: '0 0 0.25rem 0', color: '#059669' }}>{company}</p>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>{timeline}</p>
      </div>
    </div>
  );
}