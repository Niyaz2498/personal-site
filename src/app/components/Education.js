import ExperienceItem from './ExperienceItem';

const educations = [
  {
    logo: '/bits_pilani_wilp_logo.jpeg',
    company: 'BITS Pilani',
    title: 'M.Tech AI/ML',
    timeline: 'Oct 2025 - Present',
  },
  {
    logo: '/velammal_college_of_engineering__technology_madurai_logo.jpeg',
    company: 'Velammal College of Engineering and Technology',
    title: 'B.E EEE',
    timeline: '2015 - 2019',
  },
];

export default function Education() {
  return (
    <div style={{ padding: '4rem', background: '#FFFFFF' }}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#065f46', marginBottom: '2.5rem', textAlign: 'center' }}>
        Education
      </h2>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {educations.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            isLast={index === educations.length - 1}
          />
        ))}
      </div>
    </div>
  );
}