import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { personalInfo } from "@/lib/portfolio";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = `${personalInfo.name} | ${personalInfo.title}`;
const description =
  "Portfolio of Md Parvez Hasan, a Full Stack Developer and Software Engineer specializing in React, Next.js, TypeScript, Node.js, PostgreSQL and MongoDB. Explore projects, skills and experience.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${personalInfo.name}`,
  },
  description,
  keywords: [
    "Md Parvez Hasan",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MERN Stack",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    type: "website",
    title,
    description,
    images: [{ url: personalInfo.avatar }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [personalInfo.avatar],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
