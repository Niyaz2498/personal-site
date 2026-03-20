import Image from 'next/image';

export default function Awards() {
  return (
    <section className="section awards-section" id="awards">
      <h2 className="section-title">Awards & Recognition</h2>
      
      <div className="awards-grid">
        <div className="glass-card award-card fade-in-up">
          <div className="award-image-wrapper">
            <Image 
              src="/Spot Award.jpeg" 
              alt="Spot Award" 
              fill
              className="award-image"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="award-info">
            <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Spot Award</h3>
            <p className="card-meta">Recognizing outstanding performance and contribution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
