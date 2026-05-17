import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}