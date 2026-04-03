import FadeIn from './FadeIn';

const experiences = [
  {
    company: 'Presidio',
    title: 'Senior Engineer',
    timeline: 'May 2024 — Present',
  },
  {
    company: 'Amazon',
    title: 'Software Development Engineer in Test - I',
    timeline: 'Nov 2021 — Oct 2023',
  },
  {
    company: 'Zoho',
    title: 'Member Technical Staff',
    timeline: 'May 2019 — Nov 2021',
  },
  {
    company: 'Zoho',
    title: 'Project Trainee',
    timeline: 'Dec 2018 — May 2019',
  },
];

export default function Experience() {
  return (
    <section className="layout-container py-16 md:py-24" id="experience">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-10 md:mb-16">
          Experience
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-10 md:gap-14">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="group relative border-l-[3px] border-[var(--border-color)] pl-6 hover:border-[var(--text-secondary)] transition-colors duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--text-secondary)] transition-colors duration-300">
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-baseline gap-2 md:gap-4 text-lg">
                <span className="font-bold text-[var(--text-secondary)]">{exp.company}</span>
                <span className="text-[var(--text-muted)] text-sm md:text-base font-medium uppercase tracking-wide">— {exp.timeline}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}