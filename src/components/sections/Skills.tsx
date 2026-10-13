"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio";
import type { SkillCategory, SkillLevel } from "@/types/portfolio";

const categoryTitles: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & Platforms",
};

const levelStyles: Record<SkillLevel, string> = {
  Proficient: "border-cyan-400/40 bg-cyan-500/10 text-cyan-300",
  Familiar: "border-white/15 bg-white/5 text-gray-300",
};

const categories = Object.keys(categoryTitles) as SkillCategory[];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#111827] px-6 py-28 text-white"
    >
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
          className="mb-6"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            {"</> Skills"}
          </p>
          <h2 className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Technologies I Work With
          </h2>
        </motion.div>

        <ul className="mb-14 flex flex-wrap gap-4 text-xs text-gray-400">
          <li className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-cyan-400/40 bg-cyan-500/30" />
            Proficient: used in real projects regularly
          </li>
          <li className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-white/15 bg-white/10" />
            Familiar: used, still growing
          </li>
        </ul>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40"
            >
              <h3 className="mb-6 text-xl font-semibold text-cyan-400">
                {categoryTitles[category]}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {skills[category].map((skill) => (
                  <li
                    key={skill.name}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${levelStyles[skill.level]}`}
                  >
                    <span>{skill.name}</span>
                    <span className="sr-only"> ({skill.level})</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}