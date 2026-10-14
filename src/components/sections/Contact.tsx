"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  type LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { isPlaceholder, personalInfo } from "@/lib/portfolio";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type FormData = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormData, string>>;
type Status = "idle" | "loading" | "success" | "error";

const emptyForm: FormData = { name: "", email: "", message: "" };

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition focus:border-cyan-400 focus:outline-none";

const contactCards: {
  label: string;
  value: string;
  href?: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    Icon: Phone,
  },
  ...(!isPlaceholder(personalInfo.whatsapp) && personalInfo.whatsapp
    ? [
        {
          label: "WhatsApp",
          value: "Chat with me",
          href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`,
          Icon: MessageCircle,
        },
      ]
    : []),
  {
    label: "Location",
    value: personalInfo.location,
    href: undefined,
    Icon: MapPin,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status !== "success") return;

    const timer = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};

    if (!formData.name.trim()) next.name = "Name is required";

    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      next.email = "Enter a valid email";

    if (!formData.message.trim()) next.message = "Please add a short message";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    if (!isConfigured || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...formData },
        { publicKey: PUBLIC_KEY },
      );

      setStatus("success");
      setFormData(emptyForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0F172A] to-[#111827] px-6 py-28 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
        {/* Left: contact information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            Contact
          </p>

          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mb-10 max-w-lg leading-relaxed text-gray-400">
  I'm looking for a Full Stack Developer or Software Engineer role where I
  can build secure, scalable products and keep growing my backend and system
  design skills. Send a message or reach out directly. I usually reply within
  a day.
</p>

          <ul className="grid gap-4 sm:grid-cols-2">
            {contactCards.map(({ label, value, href, Icon }) => {
              const body = (
  <>
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-black">
      <Icon size={20} aria-hidden="true" />
    </span>
    <span className="min-w-0">
      <span className="block text-xs tracking-wider text-gray-500 uppercase">
        {label}
      </span>
      <span className="block truncate text-sm text-gray-200">{value}</span>
    </span>
  </>
);

              const cls =
                "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition";

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`${cls} hover:-translate-y-1 hover:border-cyan-400/50`}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Right: contact form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-teal-400/50 via-white/10 to-cyan-400/50 p-px shadow-2xl shadow-cyan-500/20"
        >
          <div className="rounded-[calc(1rem-1px)] bg-[#0f172a] p-8 md:p-10">
            <h3 className="mb-6 text-xl font-semibold text-cyan-400">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={inputClass}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="mt-1 text-xs text-red-400"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={inputClass}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-1 text-xs text-red-400"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-1 text-xs text-red-400"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 py-4 font-semibold text-black shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:shadow-teal-400/60 active:scale-[0.98] disabled:opacity-60"
              >
                <Send size={18} aria-hidden="true" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <div aria-live="polite">
                <AnimatePresence>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-center text-sm text-cyan-400"
                    >
                      <CheckCircle2 size={16} aria-hidden="true" />
                      Thank you! I will respond shortly.
                    </motion.p>
                  )}

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-center text-sm text-red-400"
                    >
                      <AlertCircle size={16} aria-hidden="true" />
                      {isConfigured
                        ? "Something went wrong. Please email me directly instead."
                        : "The form isn't set up yet. Please email me directly instead."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
