
"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Languages, MapPin } from "lucide-react";
import { certifications, education, isPlaceholder, languages } from "@/lib/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-b from-[#111827] to-[#0F172A] px-6 py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-teal-600/15 blur-3xl"
      />

      <div className="mx-auto max-w-5xl">
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
          <h2 className="text-gradient text-4xl font-bold md:text-5xl">
            Academic Background
          </h2>
        </motion.div>

        <ol className="relative ml-5 border-l border-cyan-500/30">
          {education.map((item, index) => (
            <motion.li
              key={item.degree}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-10 last:mb-0"
            >
              {/* Glowing dot with icon */}
              <span
                aria-hidden="true"
                className="absolute top-6 -left-[3.35rem] flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#0F172A] bg-gradient-to-br from-teal-400 to-cyan-500 text-black shadow-lg shadow-cyan-500/50"
              >
                <GraduationCap size={16} />
              </span>

              <div className="rounded-2xl bg-gradient-to-br from-teal-400/40 via-white/10 to-cyan-400/40 p-px transition hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="rounded-[calc(1rem-1px)] bg-[#0f172a] p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      {item.year}
                    </span>
                    <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
                      Currently studying
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                    {item.degree}
                  </h3>

                  <p className="mb-4 flex items-start gap-2 text-sm text-cyan-400">
                    <MapPin
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    {item.institution}
                  </p>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Certifications and Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {/* Certifications */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <Award size={18} aria-hidden="true" />
              Certifications
            </h3>

            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-sm text-gray-300">
                  <p className="font-medium text-white">{cert.name}</p>
                  <p className="mt-1 text-gray-400">{cert.issuer}</p>

                  {!isPlaceholder(cert.url) && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-cyan-400 transition hover:text-cyan-300"
                    >
                      View Certificate →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-teal-400/30 hover:bg-white/[0.07]">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-teal-400 uppercase">
              <Languages size={18} aria-hidden="true" />
              Languages
            </h3>

            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between gap-4 text-sm text-gray-300"
                >
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-right text-gray-400">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
