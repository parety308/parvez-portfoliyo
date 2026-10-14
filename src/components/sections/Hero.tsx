
"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/lib/portfolio";
import { socials } from "@/lib/socials";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const buttonClass =
  "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-400/60";

export default function Hero({
  resumeAvailable,
}: {
  resumeAvailable: boolean;
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] pt-24 pb-16 text-white"
    >
      {/* Background */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="animate-float absolute top-1/4 left-[10%] h-[400px] w-[400px] rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float absolute right-[10%] bottom-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/20 blur-3xl [animation-delay:2s]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.span
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs font-medium text-teal-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Open to Full Stack &amp; Software Engineer roles
            </motion.span>

            <motion.p
              variants={item}
              className="mb-2 text-xs font-medium tracking-[0.25em] text-gray-400 uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="text-gradient mb-3 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              variants={item}
              className="mb-5 text-lg font-semibold text-gray-200 sm:text-xl"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              variants={item}
              className="mb-8 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mb-8 flex flex-wrap gap-3"
            >
              {resumeAvailable ? (
                <a href={personalInfo.resumeUrl} download className={buttonClass}>
                  <Download
                    size={17}
                    aria-hidden="true"
                    className="transition group-hover:translate-y-0.5"
                  />
                  Download Resume
                </a>
              ) : (
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20request`}
                  className={buttonClass}
                >
                  <Download size={17} aria-hidden="true" />
                  Request Resume
                </a>
              )}

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-400"
              >
                <FolderGit2 size={17} aria-hidden="true" />
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Profile photo */}
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
              <div className="relative h-64 w-64 overflow-hidden rounded-[1.75rem] border-2 border-[#020617] shadow-2xl shadow-cyan-500/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="https://i.postimg.cc/YCf2396s/2c1624dd-fcfb-4adb-bbf1-dbe40d4fe788.jpg"
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 256px"
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 md:flex"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
