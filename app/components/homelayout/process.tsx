"use client";

import { motion } from "framer-motion";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";

function IconBadge({ icon: Icon, dark }: { icon: React.ElementType | undefined; dark?: boolean }) {
  if (!Icon) return null;
  return (
    <span
      className={`flex h-18 w-18 shrink-0 items-center justify-center rounded-full text-[44px] ring-[6px] ${
        dark
          ? "bg-[#f6efe1] text-[#0b3b34] ring-white/10"
          : "bg-white text-[#b98a4a] ring-[#b98a4a]/20"
      }`}
    >
      <Icon />
    </span>
  );
}

export default function Process() {
  const data = site.process;
  const step1 = data.steps[0];
  const step2 = data.steps[1];
  const step3 = data.steps[2];

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-3 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* ---------- Heading (row 1, right) ---------- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-first flex h-full flex-col justify-center rounded-3xl bg-white px-6 py-8 lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:rounded-tl-[48px] lg:px-10"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#b98a4a]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
              {data.badge}
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0b3b34] md:text-4xl">
            {data.titlePrefix}
            <span className="block text-[#b98a4a]">{data.titleHighlight}</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            {data.description}
          </p>
        </motion.div>

        {/* ---------- Step 01 (row 1, left) ---------- */}
        <motion.article 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex h-full flex-col rounded-3xl bg-[#0b3b34] p-7 text-white lg:col-span-5 lg:row-start-1 lg:rounded-br-[56px] lg:pr-10"
        >
          <div className="flex items-start justify-between">
            <IconBadge icon={iconMap[step1.icon]} dark />
            <span className="text-4xl lg:text-[44px] font-medium tracking-wide">{step1.number}</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold">{step1.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            {step1.text}
          </p>
        </motion.article>

        {/* ---------- Image 1 (row 2, left) ---------- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-60 w-full overflow-hidden rounded-3xl border-4 border-white shadow-md lg:col-span-5 lg:row-start-2 lg:h-full lg:min-h-[270px] lg:rounded-tr-[56px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={step1.image} alt={step1.title} className="absolute inset-0 h-full w-full object-cover" />
        </motion.div>

        {/* ---------- Step 02 (row 2, right) ---------- */}
        <motion.article 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex h-full flex-col rounded-3xl bg-[#0b3b34] p-7 text-white lg:col-span-7 lg:row-start-2 lg:rounded-tl-[56px] lg:rounded-bl-[56px] lg:pl-12"
        >
          <div className="flex items-start justify-between">
            <IconBadge icon={iconMap[step2.icon]} dark />
            <span className="text-4xl lg:text-[44px] font-medium tracking-wide">{step2.number}</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold">{step2.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
            {step2.text}
          </p>
        </motion.article>

        {/* ---------- Image 2 (row 3, left) ---------- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative h-60 w-full overflow-hidden rounded-3xl border-4 border-white shadow-md lg:col-span-7 lg:row-start-3 lg:h-full lg:min-h-[270px] lg:rounded-br-[56px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={step2.image} alt={step2.title} className="absolute inset-0 h-full w-full object-cover" />
        </motion.div>

        {/* ---------- Step 03 (row 3, right) ---------- */}
        <motion.article 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex h-full flex-col rounded-3xl bg-[#f7ecd9] p-7 text-[#0b3b34] lg:col-span-5 lg:row-start-3 lg:rounded-tl-[56px] lg:pl-10"
        >
          <div className="flex items-center gap-4">
            <IconBadge icon={iconMap[step3.icon]} />
            <span className="h-[2px] w-8 bg-[#b98a4a]" />
            <span className="ml-auto text-[44px] lg:text-5xl font-medium tracking-wide">{step3.number}</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold">{step3.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {step3.text}
          </p>
        </motion.article>
      </div>
    </section>
  );
}
