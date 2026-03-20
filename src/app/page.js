import Hero from '@/app/components/IntroContainer';
import Experience from '@/app/components/Experience';
import Education from './components/Education';
import KaggleSection from './components/Kaggle';
import Awards from './components/Awards';
import Connect from './components/Connect';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <Education />
      <KaggleSection />
      <Awards />
      <Connect />
    </main>
  );
}