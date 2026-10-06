"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { iconMap } from "@/app/components/iconMap";
import { site } from "@/data/index";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMessageSquare,
  FiLock,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const inputWrap =
  "flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 focus-within:border-[#c98f3a] focus-within:ring-2 focus-within:ring-[#c98f3a]/20 transition";
const inputBase =
  "w-full bg-transparent py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none";

export default function QuoteSection() {
  const data = site.quoteSec;

  const [form, setForm] = useState({
    fullName: "",
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
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c98f3a]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
                {data.badge}
              </span>
            </div>

            <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0b3b34]">
              {data.title}
            </h2>

            <p className="mt-2 max-w-xl leading-relaxed text-gray-500">
              {data.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {data.features.map(({ icon, title, text }) => {
                const Icon = iconMap[icon];
                return (
                  <div key={title} className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#efece4] text-[#0f3d3a]">
                      {Icon && <Icon className="h-6 w-6" />}
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#0f3d3a]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-gray-500">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative mt-10 overflow-hidden rounded-xl">
              <Image
                src={data.image}
                alt="Quote Image"
                width={1200}
                height={700}
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
              />
              <div className="absolute bottom-0 left-0 max-w-[85%] rounded-tr-lg bg-[#0f3d3a] p-4 sm:max-w-sm sm:p-5">
                <span className="mb-3 block h-px w-8 bg-[#c98f3a]" />
                <p className="text-sm leading-relaxed text-white">
                  {data.imageText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-8"
          >
            <span className="block h-px w-10 bg-[#c98f3a]" />
            <h3 className="mt-3 font-serif text-3xl font-bold text-[#0f3d3a]">
              {data.formTitle}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {data.formSubtitle}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name">
                  <div className={inputWrap}>
                    <FiUser className="text-gray-400" />
                    <input
                      name="fullName"
                      required
                      value={form.fullName}
                      onChange={onChange}
                      placeholder="Enter your full name"
                      className={inputBase}
                    />
                  </div>
                </Field>
                <Field label="Email Address">
                  <div className={inputWrap}>
                    <FiMail className="text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      placeholder="Enter your email"
                      className={inputBase}
                    />
                  </div>
                </Field>
                <Field label="Phone Number">
                  <div className={inputWrap}>
                    <FiPhone className="text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Enter your phone number"
                      className={inputBase}
                    />
                  </div>
                </Field>
                <Field label="Company Name">
                  <div className={inputWrap}>
                    <FiBriefcase className="text-gray-400" />
                    <input
                      name="company"
                      required
                      value={form.company}
                      onChange={onChange}
                      placeholder="Enter your company name"
                      className={inputBase}
                    />
                  </div>
                </Field>
              </div>

              <Field label="Service Required">
                <div className={`${inputWrap} relative`}>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={onChange}
                    className={`${inputBase} appearance-none pr-6 ${
                      form.service ? "" : "text-gray-400"
                    }`}
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    {data.formServices.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="pointer-events-none absolute right-3 text-gray-500" />
                </div>
              </Field>

              <Field label="Tell Us About Your Requirements">
                <div className={`${inputWrap} items-start pt-3`}>
                  <FiMessageSquare className="mt-0.5 shrink-0 text-gray-400" />
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write your requirements here..."
                    className={`${inputBase} resize-y py-0`}
                  />
                </div>
              </Field>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#c98f3a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b57d2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c98f3a] focus-visible:ring-offset-2"
              >
                Get a Quote <FiArrowRight />
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <FiLock className="text-[#c98f3a]" />
                Your information is secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-gray-800">
        {label} <span className="text-red-500">*</span>
      </span>
      {children}
    </label>
  );
}