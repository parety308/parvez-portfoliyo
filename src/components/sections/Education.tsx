"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-[#111827] to-[#0F172A] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 flex items-center gap-2 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            <GraduationCap size={18} aria-hidden="true" />
            Education
          </p>
          <h2 className="text-4xl font-bold text-cyan-400 md:text-5xl">
            Academic Background
          </h2>
        </motion.div>

        <ol className="relative ml-4 border-l border-cyan-500/30">
          {education.map((item, index) => (
            <motion.li
              key={item.degree}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-8 last:mb-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[41px] h-4 w-4 rounded-full border-4 border-[#0F172A] bg-cyan-500"
              />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/20 backdrop-blur-xl">
                <h3 className="mb-2 text-xl font-semibold text-white">{item.degree}</h3>
                <p className="mb-2 text-sm text-cyan-400">{item.institution}</p>
                <p className="mb-4 text-sm text-gray-500">{item.year}</p>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}