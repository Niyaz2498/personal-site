import FadeIn from './FadeIn';

export default function IntroContainer() {
  return (
    <section className="layout-container min-h-screen flex flex-col justify-center py-16" id="hero">
      <FadeIn>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]"></div>
          <p className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] tracking-wide uppercase text-sm">
            Hello, I am
          </p>
        </div>
      </FadeIn>
      
      <FadeIn delay={150}>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-[var(--text-primary)] mb-4 leading-tight">
          Mohamed Niyaz.
        </h1>
      </FadeIn>

      <FadeIn delay={300}>
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-8 max-w-4xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-secondary)] to-[var(--accent-light)] drop-shadow-sm">
          Machine learning enthusiast
        </h2>
      </FadeIn>

      <FadeIn delay={450}>
        <div className="border-l-4 border-[var(--accent-light)] pl-6 mt-4">
          <p className="text-base md:text-2xl text-[var(--text-primary)] max-w-2xl leading-relaxed font-medium">
            Senior Engineer at <span className="font-bold text-[var(--accent-light)]">Presidio</span> blending machine learning with robust engineering. 
            Currently pursuing my M.Tech in AI/ML from <span className="font-bold text-[var(--accent-light)]">BITS Pilani</span>.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}