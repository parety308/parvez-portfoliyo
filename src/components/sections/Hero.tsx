"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/lib/portfolio";
import { socials } from "@/lib/socials";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] pt-28 pb-16 text-white"
    >
      {/* Background */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="animate-float absolute top-1/4 left-[10%] h-[480px] w-[480px] rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float absolute right-[10%] bottom-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:2s]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.span
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-medium text-teal-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Open to internships & junior roles
            </motion.span>

            <motion.p
              variants={item}
              className="mb-2 text-sm font-medium tracking-[0.3em] text-gray-400 uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="text-gradient mb-4 text-5xl leading-tight font-extrabold md:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              variants={item}
              className="mb-6 text-xl font-semibold text-gray-200 md:text-2xl"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              variants={item}
              className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={item} className="mb-10 flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 px-7 py-3.5 font-semibold text-black shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-400/60"
              >
                <Download
                  size={18}
                  aria-hidden="true"
                  className="transition group-hover:translate-y-0.5"
                />
                Download Resume
              </a>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-400"
              >
                <FolderGit2 size={18} aria-hidden="true" />
                View Projects
              </Link>
            </motion.div>

            <motion.ul variants={item} className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Photo with spinning gradient ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="animate-float relative">
              <div
                aria-hidden="true"
                className="animate-spin-slow absolute -inset-1.5 rounded-[2rem] bg-[conic-gradient(from_0deg,#14b8a6,#22d3ee,#3b82f6,#14b8a6)] opacity-80 blur-sm"
              />
              <div className="relative h-72 w-72 overflow-hidden rounded-[1.75rem] border-2 border-[#020617] shadow-2xl shadow-cyan-500/30 md:h-96 md:w-96">
                <Image
                  src={personalInfo.avatar}
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 288px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 md:flex"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
