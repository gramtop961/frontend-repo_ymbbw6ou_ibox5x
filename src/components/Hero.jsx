import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-sm font-semibold tracking-widest text-teal-300/90"
        >
          PORTFOLIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading mb-3 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-block cursor-pointer bg-gradient-to-r from-violet-400 via-sky-300 to-teal-300 bg-clip-text text-transparent transition-[filter]
                       hover:drop-shadow-[0_0_18px_rgba(124,58,237,0.35)]"
          >
            Tanmay D Patil
            <span
              className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-violet-500/0 via-violet-400/70 to-cyan-300/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Computer Engineer from Mumbai University • Full‑Stack Developer • React, HTML5, CSS3, Java, Spring 5, DevOps, Git, AWS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-teal-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700/70 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800/60"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
