import Link from "next/link";
import { personalInfo } from "@/lib/portfolio";
import { socials } from "@/lib/socials";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#0b0f19] px-6 py-12 text-gray-400">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-lg font-bold text-transparent">
            {personalInfo.name}
          </p>
          <p className="text-sm text-gray-500">{personalInfo.title}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-5 text-xl">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block transition-all hover:scale-110 hover:text-white"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 text-center text-xs text-gray-600">
        © {year} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
