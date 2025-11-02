import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-teal-300">Tanmay D Patil</a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Tanmay D Patil • Built with React, Tailwind and Spline
      </footer>
    </div>
  );
}
