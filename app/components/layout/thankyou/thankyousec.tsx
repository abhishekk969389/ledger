"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCheck, FiHome } from "react-icons/fi";
import { site } from "@/data/index";

export default function ThankYouSection() {
  const data = site.thankyouSec;

  return (
    <section className="flex min-h-[70vh] items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          {/* Check icon with partial gold ring */}
          <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 120 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M60 4 A56 56 0 0 0 8 40"
                stroke="#c98f3a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M112 52 A56 56 0 0 1 60 116"
                stroke="#c98f3a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="flex h-[78%] w-[78%] items-center justify-center rounded-full bg-[#f3ede3] text-[#0f3d3a]">
              <FiCheck className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={3.5} />
            </span>
          </div>

          <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-[#0f3d3a] sm:text-6xl lg:text-7xl">
            {data.title}
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-700 sm:text-xl">
            {data.subtitle}
          </p>

          <span className="my-6 h-0.5 w-16 bg-[#c98f3a] sm:my-8" />

          <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {data.description}
          </p>

          <Link
            href={data.buttonHref}
            className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#0f3d3a] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#0b2e2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f3d3a] focus-visible:ring-offset-2 sm:text-base"
          >
            <FiHome className="h-5 w-5" />
            {data.buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}