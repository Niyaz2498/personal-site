import FadeIn from './FadeIn';
import GlowCard from './GlowCard';

const educations = [
  {
    institution: 'BITS Pilani',
    degree: 'M.Tech AI/ML - WILP',
    timeline: 'Oct 2025 — Present',
  },
  {
    institution: 'Velammal College of Engineering and Technology',
    degree: 'B.E - EEE',
    timeline: '2015 — 2019',
  },
];

export default function Education() {
  return (
    <section className="layout-container py-16 md:py-24" id="education">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-10 md:mb-16">
          Education
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {educations.map((edu, index) => (
          <FadeIn key={index} delay={index * 150}>
            <GlowCard className="group flex flex-col h-full p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                {edu.degree}
              </h3>
              <p className="text-lg text-[var(--text-secondary)] mb-2 flex-grow font-medium">
                {edu.institution}
              </p>
              <p className="text-[var(--text-muted)] font-semibold mt-auto pt-6 text-sm uppercase tracking-wide border-t border-[var(--border-color)]">
                {edu.timeline}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}