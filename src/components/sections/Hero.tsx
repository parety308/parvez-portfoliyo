"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/lib/portfolio";
import { socials } from "@/lib/socials";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({
  resumeAvailable,
}: {
  resumeAvailable: boolean;
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] pt-28 pb-16 text-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px] opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-cyan-400/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.p
              variants={item}
              className="mb-3 text-sm font-medium tracking-[0.3em] text-teal-400 uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-cyan-400 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              variants={item}
              className="mb-6 text-xl font-semibold text-gray-300 md:text-2xl"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              variants={item}
              className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={item} className="mb-8 flex flex-wrap gap-4">
              {resumeAvailable ? (
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 font-semibold text-black shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-400/60"
                >
                  <Download
                    size={18}
                    aria-hidden="true"
                    className="transition group-hover:rotate-12"
                  />
                  Download Resume
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 font-semibold text-black shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-400/60"
                >
                  <Mail size={18} aria-hidden="true" />
                  Request Resume
                </Link>
              )}

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-400"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.ul variants={item} className="flex gap-5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block text-2xl text-gray-400 transition-all duration-300 hover:scale-125 hover:text-white"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              className="relative"
            >
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/20 md:h-96 md:w-96">
                <Image
                  src={personalInfo.avatar}
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 288px"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 animate-pulse rounded-3xl border border-cyan-400/20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
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
