import { HiArrowLongRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";
import Link from "next/link";

export default function Blogs({ 
  maxItems = 3, 
  currentPage = 1, 
  category, 
  isPaginated = false 
}: { 
  maxItems?: number; 
  currentPage?: number; 
  category?: string; 
  isPaginated?: boolean; 
}) {
  const data = site.ourBlogs;
  const CalendarAlt = iconMap["FaRegCalendarAlt"];
  
  let filteredPosts = data.posts;
  if (category) {
    filteredPosts = filteredPosts.filter(p => p.tag === category);
  }

  const itemsPerPage = maxItems || 6;
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const displayPosts = isPaginated 
    ? filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredPosts.slice(0, maxItems);

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-16">
      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
            {data.badge}
          </p>
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold  text-[#0b3b34]">
          {data.titlePrefix}
          <span className="block">
            {data.titleSuffix} <span className="text-[#b98a4a]">{data.titleHighlight}</span>
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          {data.description}
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-[1320px] gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-6 lg:px-8">
        {displayPosts.map((p) => (
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
                {CalendarAlt && <CalendarAlt className="text-[#b98a4a]" />}
                {p.date}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug text-[#0b3b34]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.text}</p>

              <Link
                href={`/blogdetails?blog=${p.href.split("/").pop()}`}
                className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4 text-sm font-semibold text-[#0b3b34]"
              >
                Read More
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b98a4a] text-xl text-[#b98a4a] transition hover:bg-[#b98a4a] hover:text-white">
                  <HiArrowLongRight />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      {isPaginated && totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {currentPage > 1 ? (
            <Link
              href={`/blog?page=${currentPage - 1}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-[#b98a4a] hover:text-white hover:border-[#b98a4a] transition"
            >
              <HiChevronLeft className="text-xl" />
            </Link>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-300">
              <HiChevronLeft className="text-xl" />
            </span>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/blog?page=${pageNum}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                pageNum === currentPage
                  ? "bg-[#b98a4a] text-white border-[#b98a4a]"
                  : "border-gray-300 text-gray-500 hover:bg-[#b98a4a] hover:text-white hover:border-[#b98a4a]"
              } transition font-semibold`}
            >
              {pageNum}
            </Link>
          ))}

          {currentPage < totalPages ? (
            <Link
              href={`/blog?page=${currentPage + 1}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-[#b98a4a] hover:text-white hover:border-[#b98a4a] transition"
            >
              <HiChevronRight className="text-xl" />
            </Link>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-300">
              <HiChevronRight className="text-xl" />
            </span>
          )}
        </div>
      )}
    </section>
  );
}
