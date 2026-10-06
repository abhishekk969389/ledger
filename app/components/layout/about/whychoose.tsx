"use client";

import { motion } from "framer-motion";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";

export default function WhyChooseUs() {
  const data = site.whyChooseUs;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#b98a4a]" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
                {data.badge}
              </p>
            </div>

            <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0b3b34]">
              {data.titlePrefix}
              <span className="block text-[#0b3b34]">{data.titleHighlight}</span>
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-gray-500">
              {data.description}
            </p>

            <ul className="mt-6 space-y-4">
              {data.features.map(({ title, text, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <li key={title} className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#e8f1ee] text-2xl text-[#b98a4a]">
                      {Icon && <Icon />}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0b3b34]">{title}</h3>
                      <p className="text-sm text-gray-600">{text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.titlePrefix}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[530px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}