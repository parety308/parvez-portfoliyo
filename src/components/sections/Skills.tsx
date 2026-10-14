"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio";
import type { SkillCategory } from "@/types/portfolio";

const categoryTitles: Record<SkillCategory, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases & ORM",
  tools: "Tools & Deployment",
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
          className="mb-14"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            {"</> Skills"}
          </p>
          <h2 className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 ${
                category === "backend" ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="mb-6 text-xl font-semibold text-cyan-400">
                {categoryTitles[category]}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3.5 py-1.5 text-sm text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                  >
                    {skill}
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