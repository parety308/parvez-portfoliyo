"use client";

import { motion } from "framer-motion";
import { Code, Database, Monitor, Server, Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skills } from "@/lib/portfolio";
import type { SkillCategory } from "@/types/portfolio";

type CategoryMeta = {
  title: string;
  description: string;
  Icon: typeof Code;
  span: string; // full class strings so Tailwind can detect them
};

const categoryMeta: Record<SkillCategory, CategoryMeta> = {
  frontend: {
    title: "Frontend",
    description: "Interfaces, state and data fetching",
    Icon: Monitor,
    span: "lg:col-span-3",
  },
  backend: {
    title: "Backend",
    description: "APIs, auth, payments and security",
    Icon: Server,
    span: "lg:col-span-3",
  },
  languages: {
    title: "Languages",
    description: "Day-to-day programming languages",
    Icon: Code,
    span: "lg:col-span-2",
  },
  database: {
    title: "Databases & ORM",
    description: "Data modeling and persistence",
    Icon: Database,
    span: "lg:col-span-2",
  },
  tools: {
    title: "Tools & Deployment",
    description: "Workflow, design and hosting",
    Icon: Wrench,
    span: "lg:col-span-2",
  },
};

const categories: SkillCategory[] = [
  "frontend",
  "backend",
  "languages",
  "database",
  "tools",
];

const coreStack: { name: string; Icon: IconType; color: string }[] = [
  { name: "React", Icon: SiReact, color: "text-sky-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-300" },
  { name: "Prisma", Icon: SiPrisma, color: "text-teal-300" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-emerald-400" },
];

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
        {/* Heading */}
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
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            A full-stack toolkit I use to take products from database design to
            polished, production-ready interfaces.
          </p>
        </motion.div>

        {/* Core stack */}
        <div className="mb-16">
          <h3 className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            <span className="h-px w-8 bg-cyan-400/60" aria-hidden="true" />
            Core Stack
          </h3>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {coreStack.map(({ name, Icon, color }, index) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 transition group-hover:border-cyan-400/60">
                  <Icon aria-hidden="true" className={`h-5 w-5 ${color}`} />
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {name}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => {
            const { title, description, Icon, span } = categoryMeta[category];
            const items = skills[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 ${span}`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-500">{description}</p>
                    </div>
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300 tabular-nums">
                    {items.length}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3.5 py-1.5 text-sm text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}