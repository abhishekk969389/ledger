"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { iconMap } from "@/app/components/iconMap";
import { HiChevronRight, HiArrowRight } from "react-icons/hi2";
import { useState } from "react";

export default function ServiceSidebar({ data, services, currentSlug }: { data: any, services: any[], currentSlug: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };
  
  return (
    <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-8">
      {/* Services List */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#0f3d3a] rounded-xl overflow-hidden shadow-lg p-6"
      >
        <h3 className="text-white font-serif text-xl font-bold mb-2">{data.servicesTitle}</h3>
        <div className="h-[2px] w-10 bg-[#D4AF37] mb-4" />
        <ul className="flex flex-col gap-2">
          {services.map((s) => {
            const isActive = s.slug === currentSlug;
            return (
              <li key={s.slug}>
                <Link
                  href={`/servicedetails?service=${s.slug}`}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-semibold transition ${
                    isActive 
                      ? "bg-[#dfbe8d] text-[#0f3d3a]" 
                      : "bg-[#164a47] text-white hover:bg-[#dfbe8d] hover:text-[#0f3d3a]"
                  }`}
                >
                  {s.title}
                  <HiChevronRight />
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>

      {/* Consultation Form */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#fcfaf7] border border-[#e6e3dc] rounded-xl shadow-sm p-6"
      >
        <h3 className="text-[#0f3d3a] font-serif text-xl font-bold mb-2">{data.formTitle}</h3>
         <div className="h-[2px] w-10 bg-[#D4AF37] mb-4" />
        <p className="text-sm text-gray-500 mb-6">{data.formSubtitle}</p>
        
        <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
          {data.formFields.map((f: any) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={f.name} className="relative flex items-center bg-white border border-gray-200 rounded-md focus-within:border-[#c98f3a] focus-within:ring-1 focus-within:ring-[#c98f3a] transition">
                <span className="absolute left-3 text-gray-400">
                  {Icon && <Icon className="w-4 h-4" />}
                </span>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  required
                  value={(form as any)[f.name]}
                  onChange={onChange}
                  className="w-full bg-transparent py-2.5 pl-9 pr-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            );
          })}
          
          <div className="relative flex items-start bg-white border border-gray-200 rounded-md focus-within:border-[#c98f3a] focus-within:ring-1 focus-within:ring-[#c98f3a] transition pt-2.5">
            <span className="absolute left-3 text-gray-400 mt-0.5">
              {iconMap.FiFileText && (() => { const Icon = iconMap.FiFileText; return <Icon className="w-4 h-4" /> })()}
            </span>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={form.message}
              onChange={onChange}
              className="w-full bg-transparent pl-9 pr-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#0f3d3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#164a47]"
          >
            {data.buttonText}
            <HiArrowRight />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
