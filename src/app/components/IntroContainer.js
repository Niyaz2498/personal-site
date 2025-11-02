import Image from 'next/image';

export default function IntroContainer() {
  return (
    <div className="IntroContainer" style={{ display: 'flex', alignItems: 'center', gap: '2rem', height: '50vh', background:"#ffffff"}}>
      <div className="photoContainer" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Image
          src="/niyaz.jpeg"
          alt="A photo of Niyaz"
          width={200}
          height={200}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      <div className="introTextHolder" style={{ flex: 2, fontSize: '1.75rem', lineHeight: '1.75' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.75rem', }}>
          Hey there!
        </div>
        <div>
          I am <span style={{ fontWeight: 'bold', fontSize: '2rem', color: '#059669' }}>Mohamed Niyaz</span>
        </div>
        <div>
          I'm a Senior Engineer at <b>Presidio</b>, and yes, I'm also challenging myself with an <b>M.Tech in AI/ML at BITS Pilani</b>!
        </div>
      </div>
    </div>
  );
}