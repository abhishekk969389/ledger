"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { site } from "@/data/index";

export default function Banner() {
  const data = site.banner;

  return (
    <section className="relative flex min-h-[100vh] lg:min-h-[100vh] items-center lg:items-end overflow-hidden bg-[#07110f] text-white">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.image}
        alt="Business advisor reviewing documents"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07110f] via-[#07110f]/85 to-[#07110f]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07110f]/80 via-transparent to-[#07110f]/40" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pt-24 pb-12 sm:pt-32 sm:px-6 lg:px-8 lg:pb-8 lg:pt-0"
      >
        <div className="flex items-center gap-5">
          <span className="h-[2px] w-14 bg-[#d4a24c]" />
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/90">
            {data.badge}
          </p>
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl xl:text-[85px] font-bold leading-[0.95] ">
          <span className="block">{data.titlePrefix}</span>
          <span className="block bg-gradient-to-b from-[#f1d08a] to-[#b98530] bg-clip-text text-transparent">
            {data.titleHighlight}
          </span>
        </h1>

        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/90">
          {data.description}
        </p>

        <Link
          href={data.cta.href}
          className="mt-8 inline-flex overflow-hidden rounded-md border border-[#d4a24c]/70 transition hover:brightness-110"
        >
          <span className="bg-gradient-to-r from-[#0b2a22] to-[#07110f] px-4 py-[11px] text-lg font-semibold">
            {data.cta.label}
          </span>
          <span className="flex items-center bg-[#d4a24c] px-5 text-3xl text-black">
            <HiArrowLongRight />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
