import { FaUsers, FaShieldAlt, FaChartLine, FaPlus } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const points = [
  { icon: FaUsers, text: "Client-Focused Approach" },
  { icon: FaShieldAlt, text: "Transparent & Reliable Services" },
  { icon: FaChartLine, text: "Long-Term Business Support" },
];

const avatars = [
  u("photo-1507003211169-0a1dd7228f2d", 120),
  u("photo-1494790108377-be9c29b29330", 120),
  u("photo-1500648767791-00dcc994a43e", 120),
];

export default function About() {
  return (
    <section className="relative overflow-hidden mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* soft decorative shapes */}
      <div className="pointer-events-none absolute -right-20 top-0 hidden h-72 w-40 rotate-[30deg] bg-[#f1e6d2]/60 lg:block" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 hidden h-40 w-72 -skew-x-12 bg-[#f1e6d2]/50 lg:block" />

      <div className="relative mx-auto grid max-w-[1300px] px-8 lg:px-14 items-center gap-14  lg:grid-cols-2">
        {/* ---------- Left: image collage ---------- */}
        <div className="relative mx-auto h-[420px] w-full max-w-[600px] sm:h-[520px]">
          {/* dark green shape */}
          <div className="absolute -left-4 bottom-0 h-[45%] w-[35%] rounded-bl-3xl bg-[#0b3b34] [clip-path:polygon(0_25%,100%_0,100%_100%,0_100%)]" />
          {/* beige accent */}
          <div className="absolute -top-3 left-[45%] h-6 w-24 rounded-t-xl bg-[#f1e6d2]" />
          {/* dotted pattern */}
          <div className="absolute -left-6 top-12 hidden h-24 w-12 [background-image:radial-gradient(#b98a4a_1.2px,transparent_1.2px)] [background-size:12px_12px] sm:block" />
          <div className="absolute -bottom-4 right-10 hidden h-20 w-28 [background-image:radial-gradient(#b98a4a_1.2px,transparent_1.2px)] [background-size:14px_14px] sm:block" />

          {/* main image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={u("photo-1556761175-5973dc0f32e7", 900)}
            alt="Advisors reviewing documents with a client"
            className="absolute left-0 top-0 h-[80%] w-[56%] rounded-lg border-4 border-white object-cover shadow-xl sm:left-6"
          />
          {/* second image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={u("photo-1589829545856-d10d557cf95f", 900)}
            alt="Law books and scales of justice"
            className="absolute right-0 top-[5%] h-[80%] w-[46%] rounded-lg object-cover shadow-xl"
          />

          {/* clients badge */}
          <div className="absolute bottom-[4%] left-[8%] flex flex-col items-center rounded-lg bg-white px-6 py-4 shadow-xl sm:left-[16%]">
            <div className="flex items-center">
              {avatars.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="-ml-2 h-10 w-10 rounded-full border-2 border-white object-cover first:ml-0"
                />
              ))}
              <span className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#0b3b34] text-[#e5b861]">
                <FaPlus />
              </span>
            </div>
            <p className="mt-3 text-lg text-gray-800">
              <span className="font-semibold text-[#b98a4a]">20K+</span> Clients Worldwide
            </p>
          </div>
        </div>

        {/* ---------- Right: content ---------- */}
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#b98a4a]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
              About Us
            </p>
          </div>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0b3b34]">
            Your Trusted Partner for
            <span className="block text-[#b98a4a]">Smarter Business Growth</span>
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-gray-500">
            We are a team of experienced chartered accountants and business
            advisors dedicated to delivering reliable financial, tax and
            compliance solutions. Our goal is to help businesses stay compliant,
            make informed decisions and achieve long-term growth.
          </p>

          {/* stats box */}
          <div className="mt-8 flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0 sm:pl-4">
              <p className="text-7xl font-bold leading-none text-[#0b3b34]">25+</p>
              <p className="mt-3 font-medium leading-snug text-[#0b3b34]">
                Years of
                <br />
                Working Experience
              </p>
            </div>

            <span className="hidden h-24 w-px bg-[#b98a4a]/50 sm:block" />

            <ul className="flex flex-col gap-3">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f6efe1] text-lg text-[#b98a4a] ring-1 ring-[#b98a4a]/30">
                    <Icon />
                  </span>
                  <span className="text-sm text-gray-600">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-4 rounded-md bg-[#0b3b34] py-3 pl-6 pr-4 font-medium text-white transition hover:bg-[#0f4d44]"
          >
            Discover More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5b861] text-xl text-[#0b3b34]">
              <HiArrowLongRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}