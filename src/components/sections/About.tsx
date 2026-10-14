"use client";

import { motion, type Variants } from "framer-motion";
import {
  Code,
  GraduationCap,
  Heart,
  Layers,
  Rocket,
  Sparkles,
  User,
} from "lucide-react";
import { aboutContent, projects } from "@/lib/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { label: "Projects Built", value: `${projects.length}+`, Icon: Code },
  { label: "Core Stack", value: "Next.js", Icon: Layers },
  { label: "B.Sc. CSE Student", value: "CUET", Icon: GraduationCap },
];

export default function About() {
  const hobbies = aboutContent.hobbies ?? [];
  const learning = aboutContent.learning ?? [];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1220] to-[#0F172A] px-6 py-28 text-white"
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-20" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-700/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 flex items-center gap-3 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            <User size={18} aria-hidden="true" />
            About Me
          </p>
          <h2 className="text-gradient text-4xl font-bold md:text-5xl">
            The Person Behind the Code
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-3">
          <motion.div
            className="space-y-8 lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Story */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 border-l-teal-400/60 border-l-4 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="mb-4 text-lg leading-relaxed text-gray-200">
                {aboutContent.journey}
              </p>
              <p className="text-lg leading-relaxed text-gray-400">
                {aboutContent.focus}
              </p>
            </motion.div>

            {/* Work I enjoy */}
            <motion.div variants={fadeUp}>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                <Sparkles size={18} aria-hidden="true" />
                Work I Enjoy
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {aboutContent.enjoy.map((entry) => (
                  <li
                    key={entry}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-xs text-cyan-300"
                    >
                      ▹
                    </span>
                    {entry}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Currently learning */}
            {learning.length > 0 && (
              <motion.div variants={fadeUp}>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                  <Rocket size={18} aria-hidden="true" />
                  Currently Learning
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {learning.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Hobbies */}
            {hobbies.length > 0 && (
              <motion.div variants={fadeUp}>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-teal-400 uppercase">
                  <Heart size={18} aria-hidden="true" />
                  Outside of Code
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <li
                      key={hobby}
                      className="rounded-full border border-teal-400/25 bg-teal-500/10 px-4 py-2 text-sm text-teal-200 transition hover:scale-105"
                    >
                      {hobby}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Stat cards */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map(({ label, value, Icon }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-gradient-to-br from-teal-400/40 via-white/10 to-cyan-400/40 p-px"
              >
                <div className="rounded-[calc(1rem-1px)] bg-[#0f172a] p-6 text-center">
                  <Icon
                    aria-hidden="true"
                    className="mx-auto mb-3 h-8 w-8 text-cyan-400"
                  />
                  <p className="text-gradient mb-1 text-3xl font-extrabold">
                    {value}
                  </p>
                  <p className="text-xs tracking-wider text-gray-400 uppercase">
                    {label}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
