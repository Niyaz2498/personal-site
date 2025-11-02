import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    logo: '/presidio__logo.jpeg', 
    company: 'Presidio',
    title: 'Senior Engineer',
    timeline: 'May 2024 - Present',
  },
  {
    logo: '/amazon_logo.jpeg',
    company: 'Amazon',
    title: 'Software Engineer',
    timeline: 'Nov 2021 - Oct 2023',
  },
  {
    logo: '/zoho_logo.jpeg',
    company: 'Zoho',
    title: 'Software Engineer',
    timeline: 'May 2019 - Nov 2021',
  },
  {
    logo: '/zoho_logo.jpeg',
    company: 'Zoho',
    title: 'Software Engineer',
    timeline: 'Dec 2018 - May 2019',
  },
];

export default function Experience() {
  return (
    <div style={{ padding: '4rem', background: '#f7f7f7' }}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#065f46', marginBottom: '2.5rem', textAlign: 'center' }}>
        Previous Experience
      </h2>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}