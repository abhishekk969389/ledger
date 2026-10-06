"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/app/components/iconMap";

export default function ServiceContent({ data }: { data: any }) {
  return (
    <div className="flex-1">
      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 grid gap-8 lg:grid-cols-2 items-start"
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#c98f3a]" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f3d3a]">{data.overview.title}</h2>
          </div>
          <div className="space-y-4 text-gray-500 leading-relaxed text-[15px]">
            {data.overview.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl h-[280px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.overview.image} alt={data.overview.title} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Key Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#c98f3a]" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f3d3a]">{data.keyBenefits.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {data.keyBenefits.benefits.map((b: any, i: number) => {
            const Icon = iconMap[b.icon];
            return (
              <div key={i} className="flex gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-[#0f3d3a] text-[#c98f3a]">
                  {Icon && <Icon className="w-7 h-7" />}
                </span>
                <div>
                  <h3 className="font-serif font-semibold text-[#0f3d3a] mb-1.5">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Our Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-10 bg-[#c98f3a]" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f3d3a]">{data.process.title}</h2>
        </div>
        <p className="text-gray-500 text-[15px] mb-8">{data.process.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Dashed line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[2px] border-t-[2px] border-dashed border-[#e6e3dc] -z-10" />
          
          {data.process.steps.map((step: any, i: number) => {
            const Icon = iconMap[step.icon];
            const isGold = i % 2 === 0;
            return (
              <div key={i} className="flex flex-col items-center text-center bg-white z-10 px-2">
                <span className={`flex items-center justify-center w-14 h-14 rounded-full text-2xl mb-4 shadow-sm ${isGold ? 'bg-[#dfbe8d] text-white' : 'bg-[#0f3d3a] text-white'}`}>
                  {Icon && <Icon />}
                </span>
                <span className="text-[#0f3d3a] font-bold text-lg">{step.num}</span>
                <h3 className="font-serif font-semibold text-[#0f3d3a] mt-1 mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
