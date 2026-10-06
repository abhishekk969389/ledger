import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

// Swap this for any Unsplash photo you prefer
const BANNER_IMG =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1800&q=80";

export default function Banner() {
  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden bg-[#07110f] text-white lg:min-h-[calc(100vh-66px)]">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BANNER_IMG}
        alt="Business advisor reviewing documents"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07110f] via-[#07110f]/85 to-[#07110f]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07110f]/80 via-transparent to-[#07110f]/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-20 md:pt-42 lg:px-12 lg:pb-12">
        <div className="flex items-center gap-5">
          <span className="h-[2px] w-14 bg-[#d4a24c]" />
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/90">
            Chartered Accountants
          </p>
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[85px] font-bold leading-[0.95] ">
          <span className="block">Business</span>
          <span className="block bg-gradient-to-b from-[#f1d08a] to-[#b98530] bg-clip-text text-transparent">
            Advisor
          </span>
        </h1>

        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/90">
          Reliable accounting, tax and advisory solutions to help your business
          grow with confidence.
        </p>

        <Link
          href="/about"
          className="mt-8 inline-flex overflow-hidden rounded-md border border-[#d4a24c]/70 transition hover:brightness-110"
        >
          <span className="bg-gradient-to-r from-[#0b2a22] to-[#07110f] px-6 py-3.5 text-lg font-semibold">
            Discover More
          </span>
          <span className="flex items-center bg-[#d4a24c] px-5 text-3xl text-black">
            <HiArrowLongRight />
          </span>
        </Link>
      </div>
    </section>
  );
}