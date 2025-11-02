// app/page.js
import IntroContainer from '@/app/components/IntroContainer';
import Experience from '@/app/components/Experience';
import Education from './components/Education';
import Connect from './components/Connect';

export default function HomePage() {
  return (
    <main>
      <IntroContainer />
      <Experience />
      <Education />
      <Connect />
    </main>
  );
}