"use client";

import { motion, type Variants } from "framer-motion";
import { Code, GraduationCap, Layers, Sparkles, User } from "lucide-react";
import { aboutContent, education, projects } from "@/lib/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { label: "Projects Built", value: `${projects.length}`, Icon: Code },
  { label: "Core Stack", value: "MERN", Icon: Layers },
  {
    label: `${education[0]?.degree.includes("Computer Science") ? "B.Sc. CSE Student" : "Student"}`,
    value: "CUET",
    Icon: GraduationCap,
  },
];

export default function About() {
  const hobbies = aboutContent.hobbies ?? [];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1220] to-[#0F172A] px-6 py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px] opacity-20"
      />
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
          <h2 className="text-4xl font-bold text-cyan-400 md:text-5xl">
            Professional Summary
          </h2>
          <p className="mt-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Full Stack • React • Node.js • REST APIs
          </p>
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-3">
          <motion.div
            className="max-w-3xl space-y-6 text-lg leading-relaxed text-gray-300 lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p variants={fadeUp}>{aboutContent.journey}</motion.p>
            <motion.p variants={fadeUp}>{aboutContent.focus}</motion.p>

            <motion.div variants={fadeUp} className="pt-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                <Sparkles size={18} aria-hidden="true" />
                Work I Enjoy
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {aboutContent.enjoy.map((entry) => (
                  <li
                    key={entry}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-gray-300"
                  >
                    <span aria-hidden="true" className="mt-1 text-cyan-400">
                      ▹
                    </span>
                    {entry}
                  </li>
                ))}
              </ul>
            </motion.div>

            {hobbies.length > 0 && (
              <motion.div variants={fadeUp} className="pt-4">
                <h3 className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                  Outside of Code
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <li
                      key={hobby}
                      className="rounded-full border border-teal-400/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-300"
                    >
                      {hobby}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map(({ label, value, Icon }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-cyan-500/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40"
              >
                <Icon
                  aria-hidden="true"
                  className="mx-auto mb-3 h-8 w-8 text-cyan-400"
                />
                <p className="mb-1 text-3xl font-bold text-white">{value}</p>
                <p className="text-xs tracking-wider text-gray-400 uppercase">
                  {label}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
