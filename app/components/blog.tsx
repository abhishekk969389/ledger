import { FaRegCalendarAlt } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const posts = [
  {
    tag: "Accounting",
    date: "August 25, 2024",
    title: "Why Accurate Bookkeeping Is Essential for Business Growth",
    text: "Discover how accurate bookkeeping helps you stay organized, reduce errors and make better financial decisions.",
    img: u("photo-1554224155-6726b3ff858f"),
    href: "/blogs/accurate-bookkeeping",
  },
  {
    tag: "Tax Planning",
    date: "August 21, 2024",
    title: "Smart Tax Planning Strategies for Small Businesses",
    text: "Learn effective tax planning strategies to minimize liabilities and keep your business compliant with the latest regulations.",
    img: u("photo-1579621970563-ebec7560ff3e"),
    href: "/blogs/tax-planning-strategies",
  },
  {
    tag: "Business Growth",
    date: "August 20, 2024",
    title: "5 Financial Tips to Improve Your Business Profitability",
    text: "Explore practical financial tips that can help you increase efficiency, manage costs and boost your overall business profitability.",
    img: u("photo-1460925895917-afdab827c52f"),
    href: "/blogs/improve-profitability",
  },
];

export default function Blogs() {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
            Our Blogs
          </p>
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold  text-[#0b3b34]">
          Latest Insights &amp; Resources
          <span className="block">
            for <span className="text-[#b98a4a]">Smarter Business Growth</span>
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          Explore our latest articles, tips and expert insights to help you
          manage finances, stay compliant and grow your business with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-8 grid max-w-[1200px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
          >
            <div className="relative h-[200px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-[#0b3b34] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/40">
                {p.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-5 pt-5">
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <FaRegCalendarAlt className="text-[#b98a4a]" />
                {p.date}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug text-[#0b3b34]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.text}</p>

              <a
                href={p.href}
                className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4 text-sm font-semibold text-[#0b3b34]"
              >
                Read More
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b98a4a] text-xl text-[#b98a4a] transition hover:bg-[#b98a4a] hover:text-white">
                  <HiArrowLongRight />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}