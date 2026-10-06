"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LedgerSubBannerData } from "@/data/index";

export default function SubBanner({ data }: { data: LedgerSubBannerData }) {
  return (
    <section className="relative flex h-[360px] sm:h-[400px] items-end overflow-hidden bg-[#07110f] text-white">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.bgImage}
        alt={data.title}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40 mix-blend-overlay"
      />

      {/* Dark teal overlay - to match the color #0b3b34 */}
      <div className="absolute inset-0 bg-[#0b3b34]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b34] via-[#0b3b34]/80 to-transparent" />

      {/* Background image overlaid on top with mix-blend for a nice look */}
      <div 
        className="absolute inset-0 h-full w-full opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${data.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-24 md:pb-24 sm:px-10 lg:px-24"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white md:mb-6">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-[14px] font-semibold tracking-[0.15em]">
          {data.breadcrumbs.map((crumb, index) => (
            <div key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span className="text-white">—</span>}
              {index === data.breadcrumbs.length - 1 ? (
                <span className="text-[#b98a4a]">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-white transition hover:text-[#b98a4a]">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
