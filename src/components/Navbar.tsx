"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home", href: "/" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Education", id: "education", href: "/#education" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "Contact", id: "contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Solid background after scrolling (always solid on inner pages)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view (home page only)
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const solid = scrolled || !isHome || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-[#0f172a]/85 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="Go to home"
          className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl"
        >
          {"< PARVEZ />"}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = isHome && activeId === item.id;
            return (
              <li key={item.id} className="relative">
                <Link
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-teal-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 py-5">
              {navItems.map((item) => {
                const isActive = isHome && activeId === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-teal-400/10 text-teal-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
