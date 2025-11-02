import React from 'react';
import { Rocket, ServerCog, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime DevOps Dashboard',
    description:
      'Live metrics, deploy status and logs with WebSockets. Built with React, FastAPI, and Tailwind. Deployed on AWS.',
    icon: Rocket,
    tags: ['React', 'FastAPI', 'Tailwind', 'AWS', 'WebSockets'],
  },
  {
    title: 'E‑Commerce Microservices',
    description:
      'Java + Spring 5 backend with API gateway and auth, paired with a responsive React storefront.',
    icon: ServerCog,
    tags: ['Java', 'Spring 5', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Portfolio Engine v2',
    description:
      'Interactive 3D hero with Spline, smooth page transitions and content CMS hooks.',
    icon: Layers,
    tags: ['Spline', 'React', 'Framer Motion', 'CMS'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-slate-400">A quick look at recent work and experiments.</p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map(({ title, description, icon: Icon, tags }) => (
            <motion.article
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 hover:bg-slate-900/80"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-xl bg-slate-800/70 p-2">
                  <Icon className="h-5 w-5 text-teal-300" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-slate-700/70 bg-slate-900/50 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
