import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall, FiClock } from "react-icons/fi";

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const info = [
  { icon: MdOutlineMail, text: "info@ledgerco.com" },
  { icon: FiPhoneCall, text: "+91 234 567 8900" },
  { icon: FiClock, text: "Mon - Sat 8am to 7pm" },
];

export default function Topbar() {
  return (
    <div className="hidden border-b border-[#d4a24c]/40 bg-[#07110f] text-white md:block">
      <div className="mx-auto flex h-[66px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Social icons */}
        <ul className="flex items-center gap-7">
          {socials.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="text-lg transition hover:text-[#d4a24c]"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        {/* Contact info */}
        <ul className="flex items-center">
          {info.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              className={`flex items-center gap-3 text-[13px] ${
                i !== 0 ? "ml-8 border-l border-white/30 pl-8" : ""
              }`}
            >
              <Icon className="text-2xl text-[#d4a24c]" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}