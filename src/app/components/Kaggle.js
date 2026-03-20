import Image from 'next/image';

const competitions = [
  {
    name: 'AI in Emergency Medicine — Türkiye',
    type: 'Competition',
    status: 'Active',
    rank: null,
    outOf: null,
  },
  {
    name: 'Predicting Student Test Scores',
    type: 'Playground Series S6E1',
    status: 'Completed',
    rank: 1131,
    outOf: 4317,
  },
  {
    name: 'Predicting Heart Disease',
    type: 'Playground Series S6E2',
    status: 'Completed',
    rank: 3705,
    outOf: 4370,
  },
];

const badges = [
  { label: 'Community Competitor', emoji: '🏆' },
  { label: 'Playground Competitor', emoji: '🎮' },
  { label: 'Python Coder', emoji: '🐍' },
  { label: 'Code Uploader', emoji: '📤' },
  { label: 'Dataset Creator', emoji: '📊' },
  { label: 'Community Member', emoji: '🤝' },
  { label: '7-Day Login Streak', emoji: '🔥' },
];

export default function Kaggle() {
  return (
    <section className="section kaggle-section" id="kaggle">
      <h2 className="section-title">Kaggle</h2>

      {/* Profile Card */}
      <div className="kaggle-profile-card glass-card">
        <div className="kaggle-profile-top">
          <div className="kaggle-avatar">
            <Image src="/kaggle-logo.svg" alt="Kaggle" width={32} height={32} className="kaggle-logo-icon" />
          </div>
          <div className="kaggle-identity">
            <h3 className="kaggle-name">Niyaz</h3>
            <span className="kaggle-username">@niyaz2498</span>
          </div>
          <div className="kaggle-tier-badge">
            <span className="tier-dot" />
            Contributor
          </div>
        </div>
        <p className="kaggle-bio">
          &ldquo;Exploring Machine Learning.&rdquo; — Senior Engineer at Presidio,
          pursuing M.Tech AI/ML at BITS Pilani.
        </p>
        <a
          href="https://www.kaggle.com/niyaz2498"
          target="_blank"
          rel="noopener noreferrer"
          className="kaggle-profile-link"
        >
          View Full Profile →
        </a>
      </div>

      {/* Competitions */}
      <h3 className="kaggle-sub-heading">Competitions</h3>
      <div className="kaggle-competitions">
        {competitions.map((comp, i) => (
          <div key={i} className="glass-card kaggle-comp-card">
            <div className="kaggle-comp-header">
              <span className={`kaggle-status-pill ${comp.status === 'Active' ? 'active' : 'completed'}`}>
                {comp.status}
              </span>
              <span className="kaggle-comp-type">{comp.type}</span>
            </div>
            <p className="kaggle-comp-name">{comp.name}</p>
            {comp.rank && comp.outOf ? (
              comp.rank / comp.outOf <= 0.5 ? (
                <div className="kaggle-rank">
                  <span className="rank-number">#{comp.rank}</span>
                  <span className="rank-of">/ {comp.outOf.toLocaleString()}</span>
                  <span className="rank-pct">
                    Top {Math.ceil((comp.rank / comp.outOf) * 100)}%
                  </span>
                </div>
              ) : null
            ) : (
              <p className="kaggle-comp-active-note">⏳ In progress — ends soon</p>
            )}
          </div>
        ))}
      </div>

      {/* Badges */}
      <h3 className="kaggle-sub-heading">Badges Earned</h3>
      <div className="kaggle-badges">
        {badges.map((badge, i) => (
          <span key={i} className="kaggle-badge">
            {badge.emoji} {badge.label}
          </span>
        ))}
      </div>
    </section>
  );
}
