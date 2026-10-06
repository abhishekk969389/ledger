"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";
import { FaAngleRight } from "react-icons/fa";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-serif text-xl font-semibold text-white">{children}</h3>
      <span className="mt-3 block h-[2px] w-8 bg-[#e5b861]" />
    </div>
  );
}

export default function Footer() {
  const data = site.footer;
  const brand = site.brand;

  return (
    <footer className="bg-[#0a3028] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr_1.2fr] sm:px-6 lg:px-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/" className="inline-block">
            <Image
              src={brand.footerLogo.src}
              alt={brand.footerLogo.alt}
              width={brand.footerLogo.width}
              height={brand.footerLogo.height}
              className="h-auto w-[260px]"
            />
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/85">
            {data.description}
          </p>
          <ul className="mt-6 flex gap-3">
            {brand.socials.map(({ icon, label, href }) => {
              const Icon = iconMap[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5b861] text-sm text-white transition hover:bg-[#e5b861] hover:text-[#0a3028]"
                  >
                    {Icon && <Icon />}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Heading>Quick Links</Heading>
          <ul className="space-y-3.5">
            {data.quickLinks.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="flex items-center gap-3 text-[15px] text-white/90 transition hover:text-[#e5b861]"
                >
                  <FaAngleRight className="text-[#e5b861]" />
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Heading>Our Services</Heading>
          <ul className="space-y-3.5">
            {data.services.map((s: any) => (
              <li key={s.name}>
                <Link
                  href={s.href}
                  className="flex items-center gap-3 text-[15px] text-white/90 transition hover:text-[#e5b861]"
                >
                  <FaAngleRight className="text-[#e5b861]" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Heading>Contact Us</Heading>
          <ul className="space-y-5">
            {data.contacts.map(({ icon, lines }) => {
              const Icon = iconMap[icon];
              return (
                <li key={lines[0]} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5b861] text-sm text-[#0a3028]">
                    {Icon && <Icon />}
                  </span>
                  <span className="text-[15px] leading-snug text-white/90">
                    {lines.map((line) => (
                      <span key={line} className="block break-words">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/90 sm:flex-row sm:px-6 lg:px-8">
          <p>{data.bottomText}</p>
          <ul className="flex items-center divide-x divide-[#e5b861]/70">
            {data.bottomLinks.map((link) => (
              <li key={link.name} className="px-4 last:pr-0">
                <Link href={link.href} className="transition hover:text-[#e5b861]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
