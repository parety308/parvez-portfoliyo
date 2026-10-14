
"use client";

import { motion } from "framer-motion";
import { ArrowRight, ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { isPlaceholder } from "@/lib/portfolio";
import type { ProjectWithImage } from "@/types/portfolio";

const MAX_TAGS = 3;
const INITIAL_PROJECTS = 3;

export default function Projects({
  projects,
}: {
  projects: ProjectWithImage[];
}) {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const techOptions = useMemo(
    () => ["All", ...new Set(projects.flatMap((project) => project.techStack))],
    [projects],
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      const matchesTech =
        activeTech === "All" || project.techStack.includes(activeTech);

      return matchesSearch && matchesTech;
    });
  }, [projects, search, activeTech]);

  const hasActiveFilter = search.trim() !== "" || activeTech !== "All";
  const visibleProjects =
    showAll || hasActiveFilter
      ? filtered
      : filtered.slice(0, INITIAL_PROJECTS);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#111827] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-cyan-400 md:text-5xl">
            Featured Work
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            A selection of projects showcasing my skills, technologies, and
            experience building web applications.
          </p>
        </motion.div>

        {/* Search and technology filter */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <input
              id="project-search"
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setShowAll(false);
              }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="project-tech" className="sr-only">
              Filter by technology
            </label>
            <select
              id="project-tech"
              value={activeTech}
              onChange={(event) => {
                setActiveTech(event.target.value);
                setShowAll(false);
              }}
              className="w-full rounded-xl border border-cyan-400/20 bg-[#111827] px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400 md:w-64"
            >
              {techOptions.map((tech) => (
                <option key={tech} value={tech}>
                  {tech === "All" ? "All technologies" : tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p aria-live="polite" className="mb-10 text-sm text-gray-500">
          {hasActiveFilter
            ? `Found ${filtered.length} matching projects`
            : `Showing ${visibleProjects.length} of ${projects.length} projects`}
        </p>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-gray-400">
            No projects match your search.
          </p>
        )}

        <motion.ul layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            const extraTags = project.techStack.length - MAX_TAGS;

            return (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-px shadow-lg transition duration-500 hover:from-teal-400/60 hover:to-cyan-400/60 hover:shadow-cyan-400/30"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="block h-full rounded-[calc(1rem-1px)] bg-[#0f172a] p-4"
                >
                  <div className="relative h-56 overflow-hidden rounded-xl bg-[#0b0f19]">
                    {project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={`${project.name} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2 bg-white/5 text-gray-500">
                        <ImageOff size={28} aria-hidden="true" />
                        <span className="text-xs">
                          Screenshot coming soon
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-white">
                      {project.name}
                    </h3>

                    <p className="mb-3 text-xs text-cyan-400/70">
                      {project.subtitle}
                    </p>

                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400">
                      {project.shortDescription}
                    </p>

                    <ul className="mb-6 flex flex-wrap gap-2">
                      {project.techStack.slice(0, MAX_TAGS).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                        >
                          {tech}
                        </li>
                      ))}

                      {extraTags > 0 && (
                        <li className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                          +{extraTags} more
                        </li>
                      )}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all group-hover:gap-3">
                        View Details
                        <ArrowRight size={16} aria-hidden="true" />
                      </span>

                      {!isPlaceholder(project.liveLink) && (
                        <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-teal-300 uppercase">
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Show all / show less */}
        {!hasActiveFilter && projects.length > INITIAL_PROJECTS && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {showAll ? "Show Less" : "Show All Projects"}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-300 ${
                  showAll
                    ? "-rotate-90"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
