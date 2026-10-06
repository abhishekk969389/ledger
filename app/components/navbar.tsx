"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Logo (public/logo1.png) */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo1.png"
            alt="Ledger & Co. Chartered Accountants"
            width={320}
            height={90}
            priority
            className="h-auto w-[220px] lg:w-[320px]"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setActive(l.name)}
              className={`relative pb-2 text-[17px] font-medium transition hover:text-[#d4a24c] ${
                active === l.name
                  ? "text-[#d4a24c] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#d4a24c]"
                  : ""
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-full border border-[#d4a24c] bg-gradient-to-r from-[#0b2a22] to-[#07110f] px-8 py-3.5 text-[18px] font-medium transition hover:bg-[#d4a24c] hover:text-black lg:flex"
        >
          Get a Quote
          <HiArrowLongRight className="text-2xl" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-3xl lg:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 bg-[#07110f]/95 px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => {
                setActive(l.name);
                setOpen(false);
              }}
              className={`text-lg ${active === l.name ? "text-[#d4a24c]" : ""}`}
            >
              {l.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 w-fit rounded-full border border-[#d4a24c] px-6 py-3"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}