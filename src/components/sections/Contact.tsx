"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const hasWhatsapp = !isPlaceholder(personalInfo.whatsapp);

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
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-400 uppercase">
            Contact
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Get in Touch</h2>
          <p className="mb-10 max-w-lg leading-relaxed text-gray-400">
            Have a project, a role, or a question? Send me a message or reach
            out directly using any of the options below.
          </p>

          <ul className="space-y-6 text-sm">
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex w-fit items-center gap-3 transition hover:text-cyan-300"
              >
                <Mail size={16} aria-hidden="true" className="text-cyan-400" />
                {personalInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex w-fit items-center gap-3 transition hover:text-cyan-300"
              >
                <Phone size={16} aria-hidden="true" className="text-cyan-400" />
                {personalInfo.phone}
              </a>
            </li>
            {hasWhatsapp && personalInfo.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-3 transition hover:text-cyan-300"
                >
                  <MessageCircle
                    size={16}
                    aria-hidden="true"
                    className="text-cyan-400"
                  />
                  Chat on WhatsApp
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <MapPin size={16} aria-hidden="true" className="text-cyan-400" />
              {personalInfo.location}
            </li>
          </ul>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl md:p-10"
        >
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
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
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
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
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
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-black shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400 active:scale-[0.98] disabled:opacity-60"
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
        </motion.div>
      </div>
    </section>
  );
}
