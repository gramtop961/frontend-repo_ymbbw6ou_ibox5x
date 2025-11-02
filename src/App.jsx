import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#home"
            className="bg-gradient-to-r from-violet-400 via-sky-300 to-teal-300 bg-clip-text text-sm font-semibold tracking-wide text-transparent"
          >
            Tanmay D Patil
          </motion.a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a className="transition hover:text-white hover:underline" href="#skills">Skills</a>
            <a className="transition hover:text-white hover:underline" href="#projects">Projects</a>
            <a className="transition hover:text-white hover:underline" href="#contact">Contact</a>
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
