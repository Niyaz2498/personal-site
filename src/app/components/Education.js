import Image from 'next/image';

const educations = [
  {
    logo: '/bits_pilani_wilp_logo.jpeg',
    institution: 'BITS Pilani',
    degree: 'M.Tech AI/ML - WILP',
    timeline: 'Oct 2025 — Present',
  },
  {
    logo: '/velammal_college_of_engineering__technology_madurai_logo.jpeg',
    institution: 'Velammal College of Engineering and Technology',
    degree: 'B.E EEE',
    timeline: '2015 — 2019',
  },
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educations.map((edu, index) => (
          <div key={index} className={`glass-card fade-in-up fade-in-up-delay-${index}`}>
            <div className="card-header">
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                width={48}
                height={48}
                className="card-logo"
              />
              <div className="card-info">
                <h3 className="card-title">{edu.degree}</h3>
                <p className="card-subtitle">{edu.institution}</p>
                <p className="card-meta">{edu.timeline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}