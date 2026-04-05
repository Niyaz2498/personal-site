import FadeIn from './FadeIn';
import GlowCard from './GlowCard';

const competitions = [
  {
    name: 'NVIDIA Nemotron Model Reasoning Challenge',
    type: 'Competition',
    status: 'Active',
    rank: null,
    outOf: null,
    link: 'https://www.kaggle.com/competitions/nvidia-nemotron-model-reasoning',
    tags: ['active', 'model reasoning'],
  },
  {
    name: 'AI in Emergency Medicine — Türkiye',
    type: 'Competition',
    status: 'Completed',
    rank: 2,
    outOf: null,
    link: 'https://www.kaggle.com/competitions/ai-emergency-medicine-turkiye/leaderboard',
    tags: ['community contest', 'team'],
  },
  {
    name: 'Predicting Student Test Scores',
    type: 'Playground Series S6E1',
    status: 'Completed',
    rank: 1131,
    outOf: 4317,
    tags: ['playground', 'individual'],
  },
  {
    name: 'Predicting Heart Disease',
    type: 'Playground Series S6E2',
    status: 'Completed',
    rank: null,
    outOf: null,
    tags: ['playground', 'individual'],
  },
];

const badges = [
  { label: 'Competitor', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2Fb05e17f63f2eead904a1f04d05bb51a6%2FBadge.svg?generation=1727458564383731&alt=media' },
  { label: 'Community Competitor', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F06808571894d065a64243d6ba468be2b%2FBadge-4.svg?generation=1727462524641424&alt=media' },
  { label: 'Playground Competitor', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F45be693e46c3d59a48e65f903aad246b%2FBadge-5.svg?generation=1727462562515977&alt=media' },
  { label: 'Python Coder', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F09e1f99bdf3222934ad7769409ec3f6d%2FBadge-26.svg?generation=1727468059623106&alt=media' },
  { label: 'Code Uploader', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F1e4546d427340e1495b9ee02261e2dc6%2FBadge-34.svg?generation=1727468126171650&alt=media' },
  { label: 'Notebook Modeler', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F2df508502fba7fc8937f3847e46b8ec4%2FBadge-29.svg?generation=1727468233931525&alt=media' },
  { label: 'Dataset Creator', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F28e0e70842ce6972f4d68f5b6ecd549a%2FBadge-12.svg?generation=1727462988946700&alt=media' },
  { label: 'Competition Modeler', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2Feb028e2f7e6b3e2bef2b3682f6919224%2FBadge-25.svg?generation=1727468044501552&alt=media' },
  { label: 'Community Member', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F10489106%2F8235ef48b7e37d36d6e081d112f303de%2FBadge-62.svg?generation=1758039755687969&alt=media' },
  { label: 'Stylish', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2F67d3960ab66dd17a3b6b1546ca8c3acb%2FBadge-40.svg?generation=1727468269875327&alt=media' },
  { label: 'Bookmarker', icon: 'https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F1488634%2Fe06d05ebef3630403946b71cbdc11665%2FBadge-42.svg?generation=1727468309615075&alt=media' }
];

export default function Kaggle() {
  return (
    <section className="layout-container py-16 md:py-24" id="kaggle">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-10 md:mb-16">
          Kaggle
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
        
        {/* Left Column: Profile & Badges */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <FadeIn delay={150}>
            <GlowCard className="p-8 rounded-3xl shadow-sm hover:shadow-md">
              <h3 className="text-2xl font-bold mb-1 text-[var(--text-primary)]">Niyaz</h3>
              <a href="https://www.kaggle.com/niyaz2498" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] font-bold mb-6 inline-block hover:text-[var(--accent)] transition-colors">@niyaz2498 ↗</a>
              <p className="text-[var(--text-primary)] font-medium leading-relaxed mb-6 italic opacity-80">
                &ldquo;Exploring Machine Learning.&rdquo;
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full text-sm font-bold border border-[var(--border-color)] shadow-sm text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-secondary)] animate-pulse shadow-[0_0_8px_var(--text-secondary)]"></span>
                Contributor Tier
              </div>
            </GlowCard>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)] relative inline-block">
                Badges Earned
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent-light)] rounded-full"></span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <div key={i} className="group relative flex items-center justify-center p-1.5 bg-white/5 border border-[var(--border-color)] rounded-xl hover:bg-white/10 hover:border-[var(--accent-light)] transition-all shadow-sm cursor-pointer w-12 h-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={badge.icon} alt={badge.label} className="w-8 h-8 object-contain drop-shadow-md" loading="lazy" />
                    
                    {/* Tooltip positioned nicely above */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs font-bold px-3 py-1.5 rounded shadow-2xl whitespace-nowrap pointer-events-none z-[100]">
                      {badge.label}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Competitions */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {competitions.map((comp, i) => (
            <FadeIn key={i} delay={200 + (i * 100)}>
              <GlowCard className="group p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-lg transform hover:-translate-y-1">
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                  <h4 className="text-xl md:text-2xl font-bold max-w-sm leading-tight text-[var(--text-primary)]">
                    {comp.link ? (
                      <a href={comp.link} target="_blank" rel="noreferrer" className="group-hover:text-[var(--text-secondary)] transition-colors inline-block">
                        {comp.name} 
                        <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ml-1 opacity-0 group-hover:opacity-100">↗</span>
                      </a>
                    ) : (
                      comp.name
                    )}
                  </h4>
                  
                  {/* 2nd Place Badge in top right */}
                  {comp.rank === 2 && (
                    <div className="relative shrink-0 group/medal cursor-default mt-1">
                      {/* Pulsating glow */}
                      <div className="absolute inset-0 bg-slate-300/70 blur-[8px] rounded-lg animate-[pulse_2s_ease-in-out_infinite]"></div>
                      
                      {/* The Badge Itself */}
                      <span className="relative z-10 font-bold text-slate-800 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300/50 px-4 py-1.5 rounded-[9px] text-sm shadow-sm flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-600 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 15.25c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5A1.75 1.75 0 1012 13.75 1.75 1.75 0 0012 10.25z"/>
                          <path d="M15.5 8.75h-7A1.75 1.75 0 016.75 7V3.5A1.75 1.75 0 018.5 1.75h7A1.75 1.75 0 0117.25 3.5V7a1.75 1.75 0 01-1.75 1.75zM8.5 3.25v3.5h7v-3.5h-7z"/>
                          <path d="M12 22.25a7.25 7.25 0 117.25-7.25A7.26 7.26 0 0112 22.25zm0-13a5.75 5.75 0 105.75 5.75A5.76 5.76 0 0012 9.25z"/>
                        </svg>
                        2nd Place
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="text-[var(--text-secondary)] mb-5 font-bold text-sm tracking-wide uppercase">
                  {comp.type}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {comp.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)]/50 capitalize text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Row structure combining Rank + Status */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border-color)] mt-auto w-full">
                  {/* Rank Left Side */}
                  <div className="flex flex-wrap items-center gap-4">
                    {comp.rank !== null && (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold tracking-tighter text-[var(--text-primary)]">#{comp.rank}</span>
                          {comp.outOf && (
                            <span className="text-[var(--text-muted)] font-medium text-lg">/ {comp.outOf.toLocaleString()}</span>
                          )}
                        </div>
                        
                        {comp.outOf && (
                          <span className="font-bold text-[var(--text-primary)] bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-1.5 rounded-lg text-sm">
                            Top {Math.ceil((comp.rank / comp.outOf) * 100)}%
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* Status Right Side */}
                  <div>
                    {comp.status === 'Completed' ? (
                      <span className="text-sm font-bold px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded-full shrink-0">
                        Completed
                      </span>
                    ) : (
                      <span className="text-sm font-bold px-3 py-1 bg-[var(--accent-light)]/10 text-[var(--accent-light)] border border-[var(--accent-light)]/20 rounded-full shrink-0">
                        Active
                      </span>
                    )}
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
