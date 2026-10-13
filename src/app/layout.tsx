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
  "Portfolio of Md Parvez Hasan, a Full Stack Developer specializing in React, Next.js, Node.js and MongoDB. Explore projects, skills and experience.";

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
