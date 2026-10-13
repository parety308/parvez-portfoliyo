import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400 uppercase">
        404
      </p>
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Page not found</h1>
      <p className="mb-8 max-w-md text-gray-400">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 font-semibold text-black transition hover:-translate-y-1"
      >
        <Home size={18} aria-hidden="true" />
        Back to Home
      </Link>
    </section>
  );
}
