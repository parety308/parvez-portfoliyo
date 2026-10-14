import {
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  ImageOff,
  Lightbulb,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaGithub } from "react-icons/fa";
import { isPlaceholder, projects } from "@/lib/portfolio";
import { getProjectWithImage } from "@/lib/projectImages";

type Params = Promise<{ slug: string }>;

type ProjectPageProps = {
  params: Params;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata(
  props: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.shortDescription,
  };
}

/** Instant shell shown while the project data resolves. */
function ProjectSkeleton() {
  return (
    <article
      aria-busy="true"
      className="min-h-screen bg-[#0b0f19] px-6 pt-28 pb-24 text-white"
    >
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="mb-8 h-4 w-36 rounded bg-white/10" />
        <div className="mb-10 h-64 rounded-2xl bg-white/5 sm:h-96" />
        <div className="mb-3 h-10 w-2/3 rounded bg-white/10" />
        <div className="mb-8 h-4 w-1/3 rounded bg-white/5" />
        <div className="mb-10 flex gap-2">
          <div className="h-6 w-20 rounded-full bg-white/5" />
          <div className="h-6 w-24 rounded-full bg-white/5" />
          <div className="h-6 w-16 rounded-full bg-white/5" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-3/4 rounded bg-white/5" />
        </div>
      </div>
    </article>
  );
}

async function ProjectContent({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectWithImage(slug);

  if (!project) {
    notFound();
  }

  const hasLive = !isPlaceholder(project.liveLink);
  const hasGithub = !isPlaceholder(project.githubLink);
  const hasLiveApi =
    Boolean(project.liveApiLink) && !isPlaceholder(project.liveApiLink);
  const hasBackendGithub =
    Boolean(project.backendGithubLink) &&
    !isPlaceholder(project.backendGithubLink);

  return (
    <article className="min-h-screen bg-[#0b0f19] px-6 pt-28 pb-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </Link>

        {/* Hero image */}
        <div className="relative mb-10 h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-96">
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={`${project.name} screenshot`}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-500">
              <ImageOff size={32} aria-hidden="true" />
              <span className="text-sm">Screenshot coming soon</span>
            </div>
          )}
        </div>

        <h1 className="text-gradient mb-2 text-3xl font-extrabold md:text-5xl">
          {project.name}
        </h1>
        <p className="mb-8 text-gray-400">{project.subtitle}</p>

        {/* Tech stack */}
        <section aria-labelledby="tech-heading" className="mb-10">
          <h2 id="tech-heading" className="sr-only">
            Tech stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <div className="mb-14 flex flex-wrap items-center gap-4">
          {hasLive && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Live Demo
            </a>
          )}

          {hasLiveApi && (
            <a
              href={project.liveApiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-gray-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Live API
            </a>
          )}

          {hasGithub && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              <FaGithub size={18} aria-hidden="true" />
              Frontend Repo
            </a>
          )}

          {hasBackendGithub && (
            <a
              href={project.backendGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              <FaGithub size={18} aria-hidden="true" />
              Backend Repo
            </a>
          )}
        </div>

        {/* Overview */}
        <section aria-labelledby="overview-heading" className="mb-14">
          <h2 id="overview-heading" className="mb-4 text-2xl font-semibold">
            Overview
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {project.overview}
          </p>
        </section>

        {/* Challenges */}
        {project.challenges.length > 0 && (
          <section aria-labelledby="challenges-heading" className="mb-14">
            <div className="mb-4 flex items-center gap-2 text-amber-400">
              <AlertTriangle size={20} aria-hidden="true" />
              <h2
                id="challenges-heading"
                className="text-2xl font-semibold text-white"
              >
                Challenges
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-300"
                >
                  <span aria-hidden="true" className="mt-1 text-amber-400">
                    ▹
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Future improvements */}
        {project.improvements.length > 0 && (
          <section aria-labelledby="improvements-heading">
            <div className="mb-4 flex items-center gap-2 text-teal-400">
              <Lightbulb size={20} aria-hidden="true" />
              <h2
                id="improvements-heading"
                className="text-2xl font-semibold text-white"
              >
                Future Improvements
              </h2>
            </div>
            <ul className="space-y-3">
              {project.improvements.map((improvement) => (
                <li
                  key={improvement}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-300"
                >
                  <span aria-hidden="true" className="mt-1 text-teal-400">
                    ▹
                  </span>
                  {improvement}
                </li>
              ))}
            </ul>
          </section>
        )}

        <Link
          href="/#projects"
          className="mt-14 inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </Link>
      </div>
    </article>
  );
}

export default function ProjectPage(props: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={props.params} />
    </Suspense>
  );
}