import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    logo: '/presidio__logo.jpeg',
    company: 'Presidio',
    title: 'Senior Engineer',
    timeline: 'May 2024 — Present',
  },
  {
    logo: '/amazon_logo.jpeg',
    company: 'Amazon',
    title: 'Software Development Engineer in Test - I',
    timeline: 'Nov 2021 — Oct 2023',
  },
  {
    logo: '/zoho_logo.jpeg',
    company: 'Zoho',
    title: 'Member Technical Staff',
    timeline: 'May 2019 — Nov 2021',
  },
  {
    logo: '/zoho_logo.jpeg',
    company: 'Zoho',
    title: 'Project Trainee',
    timeline: 'Dec 2018 — May 2019',
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} delay={index} />
        ))}
      </div>
    </section>
  );
}