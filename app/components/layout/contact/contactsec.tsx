"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiChevronDown,
  FiSettings,
  FiArrowRight,
  FiFileText,
} from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

const field =
  "flex items-center gap-2.5 rounded-md border border-gray-200 bg-[#f7f6f3] px-3.5 focus-within:border-[#c98f3a] focus-within:ring-2 focus-within:ring-[#c98f3a]/20 transition";
const control =
  "w-full bg-transparent py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none";

export default function ContactSection() {
  const data = site.contactSec;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // TODO: send to your API route
  };

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:grid-cols-[1.05fr_1fr]">
          {/* LEFT: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c98f3a]" />
              <span className="text-xs font-medium uppercase tracking-wide text-[#c98f3a]">
                {data.badge}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#0f3d3a] sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              {data.description}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={field}>
                  <FiUser className="shrink-0 text-gray-500" />
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Full Name"
                    className={control}
                  />
                </div>
                <div className={field}>
                  <FiMail className="shrink-0 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email Address"
                    className={control}
                  />
                </div>
                <div className={field}>
                  <FiPhone className="shrink-0 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Phone Number"
                    className={control}
                  />
                </div>
                <div className={field}>
                  <BsBuilding className="shrink-0 text-gray-500" />
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Company Name"
                    className={control}
                  />
                </div>
              </div>

              <div className={`${field} relative`}>
                <FiFileText className="shrink-0 text-gray-500" />
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={`${control} appearance-none pr-6 ${
                    form.service ? "" : "text-gray-400"
                  }`}
                >
                  <option value="">Service Required</option>
                  {data.formServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3.5 text-gray-500" />
              </div>

              <div className={`${field} items-start pt-3.5`}>
                <FiMessageSquare className="mt-0.5 shrink-0 text-gray-500" />
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="Your Message"
                  className={`${control} resize-y py-0`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#c98f3a] px-6 py-3.5 text-sm font-medium text-white transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f3d3a] focus-visible:ring-offset-2"
              >
                <FiSettings className="h-4 w-4" />
                Send Message
                <FiArrowRight />
              </button>
            </form>
          </motion.div>

          {/* RIGHT: INFO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative isolate min-h-[420px] overflow-hidden bg-[#0b2e2c]"
          >
            <Image
              src={data.image}
              alt="Modern office interior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2e2c] via-[#0b2e2c]/90 to-[#0b2e2c]/40" />

            <ul className="space-y-6 p-6 sm:p-8 lg:p-10">
              {data.info.map(({ icon, title, lines }, i) => {
                const Icon = iconMap[icon];
                return (
                  <li
                    key={title}
                    className={`flex items-start gap-4 ${
                      i !== data.info.length - 1
                        ? "border-b border-white/10 pb-6"
                        : ""
                    }`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#c98f3a] text-white shadow-md">
                      {Icon && <Icon className="h-5 w-5" />}
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-white">
                        {title}
                      </h3>
                      <div className="mt-1 space-y-0.5 text-sm text-white/80">
                        {lines.map((l) => (
                          <p key={l}>{l}</p>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* MAP */}
        <div className="relative mt-6 sm:mt-8 md:mt-10">
          <iframe
            title="Office location map"
            src={data.mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            className="rounded-[20px] shadow-2xl border border-slate-800/80"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}