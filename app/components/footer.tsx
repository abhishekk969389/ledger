import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Accounting & Bookkeeping",
  "Tax Planning & Compliance",
  "Audit & Assurance",
  "Business Advisory",
  "Company Formation",
  "Payroll Services",
  "Financial Reporting",
];

const contacts = [
  { icon: FaMapMarkerAlt, lines: ["123 Business Avenue,", "Mumbai, Maharashtra 400001"] },
  { icon: FaPhoneAlt, lines: ["+91 98765 43210", "+91 98765 43211"] },
  { icon: FaEnvelope, lines: ["info@ledgerandco.com", "support@ledgerandco.com"] },
  { icon: FaClock, lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"] },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-serif text-xl font-semibold text-white">{children}</h3>
      <span className="mt-3 block h-[2px] w-8 bg-[#e5b861]" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a3028] text-white">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr_1.2fr] lg:px-12">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo2.png"
              alt="Ledger & Co. Chartered Accountants"
              width={320}
              height={90}
              className="h-auto w-[260px]"
            />
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/85">
            Trusted chartered accountants delivering comprehensive accounting,
            taxation and financial advisory solutions to help businesses grow
            with confidence.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5b861] text-sm text-white transition hover:bg-[#e5b861] hover:text-[#0a3028]"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <Heading>Quick Links</Heading>
          <ul className="space-y-3.5">
            {quickLinks.map((l) => (
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
        </div>

        {/* Services */}
        <div>
          <Heading>Our Services</Heading>
          <ul className="space-y-3.5">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="flex items-center gap-3 text-[15px] text-white/90 transition hover:text-[#e5b861]"
                >
                  <FaAngleRight className="text-[#e5b861]" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <Heading>Contact Us</Heading>
          <ul className="space-y-5">
            {contacts.map(({ icon: Icon, lines }) => (
              <li key={lines[0]} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5b861] text-sm text-[#0a3028]">
                  <Icon />
                </span>
                <span className="text-[15px] leading-snug text-white/90">
                  {lines.map((line) => (
                    <span key={line} className="block break-words">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/90 sm:flex-row lg:px-12">
          <p>© 2026 Ledger &amp; Co. All Rights Reserved.</p>
          <ul className="flex items-center divide-x divide-[#e5b861]/70">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((t) => (
              <li key={t} className="px-4 last:pr-0">
                <Link href="#" className="transition hover:text-[#e5b861]">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}