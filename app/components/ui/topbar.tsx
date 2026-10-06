import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";

export default function Topbar() {
  const data = site.topbar;
  const brand = site.brand;

  return (
    <div className="absolute inset-x-0 top-0 z-40 hidden border-b border-[#d4a24c]/40 bg-transparent text-white md:block">
      <div className="mx-auto flex h-[66px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Social icons */}
        <ul className="flex items-center gap-7">
          {brand.socials.map(({ icon, href, label }) => {
            const Icon = iconMap[icon];
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-lg transition hover:text-[#d4a24c]"
                >
                  {Icon && <Icon />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Contact info */}
        <ul className="flex items-center">
          {data.info.map(({ icon, text }, i) => {
            const Icon = iconMap[icon];
            return (
              <li
                key={text}
                className={`flex items-center gap-3 text-[13px] ${
                  i !== 0 ? "ml-8 border-l border-white/30 pl-8" : ""
                }`}
              >
                {Icon && <Icon className="text-2xl text-[#d4a24c]" />}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
