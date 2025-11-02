import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">Let’s build something</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Open to full‑stack roles and freelance collaborations across frontend, backend and cloud.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900/80"
          >
            <Mail className="h-4 w-4 text-teal-300" /> Email
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900/80"
          >
            <Github className="h-4 w-4 text-teal-300" /> GitHub
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900/80"
          >
            <Linkedin className="h-4 w-4 text-teal-300" /> LinkedIn
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
          <MapPin className="h-4 w-4" /> Mumbai, India
        </div>
      </div>
    </section>
  );
}
