import React from 'react';
import { Code2, Server, Cloud, GitBranch, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: Code2, color: 'from-teal-500 to-cyan-400' },
  { name: 'HTML5', icon: Code2, color: 'from-orange-500 to-amber-400' },
  { name: 'CSS3', icon: Code2, color: 'from-sky-500 to-blue-400' },
  { name: 'Java', icon: Server, color: 'from-red-500 to-rose-400' },
  { name: 'Spring 5', icon: Server, color: 'from-emerald-500 to-green-400' },
  { name: 'DevOps', icon: Boxes, color: 'from-purple-500 to-fuchsia-400' },
  { name: 'Git', icon: GitBranch, color: 'from-pink-500 to-rose-400' },
  { name: 'AWS', icon: Cloud, color: 'from-yellow-500 to-orange-400' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Skills & Tooling</h2>
            <p className="mt-2 text-slate-400">Modern, scalable and production‑ready stack.</p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              variants={item}
              key={name}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700 hover:bg-slate-900/80"
            >
              <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl transition group-hover:opacity-30`} />
              <div className="relative z-10 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/70">
                  <Icon className="h-5 w-5 text-teal-300" />
                </span>
                <span className="text-sm font-medium text-slate-200">{name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
