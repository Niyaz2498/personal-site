import FadeIn from './FadeIn';
import Image from 'next/image';

export default function Awards() {
  return (
    <section className="layout-container py-24 md:py-32" id="awards">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-12 md:mb-16">
          Awards & Recognition
        </h2>
      </FadeIn>
      
      <FadeIn delay={150}>
        <div className="group flex flex-col md:flex-row gap-8 items-center p-8 md:p-12 rounded-3xl bg-[var(--bg-secondary)] transition-colors duration-300">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">Spot Award</h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Recognizing outstanding performance, dedication, and significant contributions to critical project deliverables.
            </p>
          </div>
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border border-[var(--border-color)] aspect-video md:aspect-square lg:aspect-[4/3] relative shadow-md">
            <Image 
              src="/Spot Award.jpeg" 
              alt="Spot Award Certificate" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
