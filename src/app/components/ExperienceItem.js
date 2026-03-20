import Image from 'next/image';

export default function ExperienceItem({ logo, company, title, timeline, delay = 0 }) {
  return (
    <div className={`timeline-item fade-in-up fade-in-up-delay-${delay}`}>
      <div className="timeline-dot" />
      <div className="glass-card">
        <div className="card-header">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={48}
            height={48}
            className="card-logo"
          />
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{company}</p>
            <p className="card-meta">{timeline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}