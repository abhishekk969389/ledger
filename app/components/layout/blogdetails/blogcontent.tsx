"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/app/components/iconMap";
import { FaQuoteLeft } from "react-icons/fa";

export default function BlogContent({ data }: { data: any }) {
    const CalendarAlt = iconMap["FaRegCalendarAlt"];
    const Folder = iconMap["FiFileText"];
    const Clock = iconMap["FaClock"];
    const Quote = iconMap["FaQuoteLeft"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
        >
            {/* Main Image */}
            <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#b98a4a] font-medium mb-4">
                <span className="flex items-center gap-1.5">
                    {CalendarAlt && <CalendarAlt />} {data.date}
                </span>
                <span className="flex items-center gap-1.5">
                    {Folder && <Folder />} {data.category}
                </span>
                <span className="flex items-center gap-1.5">
                    {Clock && <Clock />} {data.readTime}
                </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#0b3b34] mb-6">
                {data.title}
            </h1>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-gray-600 mb-8">
                {data.content?.paragraphs?.map((para: string, idx: number) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {/* Blockquote */}
            {data.content?.blockquote && (
                <blockquote className="mb-8 flex items-start gap-4 rounded-r-lg rounded-l-sm border-l-4 border-[#d4a04a] bg-[#f7f4ee] px-5 py-6 sm:gap-6 sm:px-8 sm:py-7">
                    <FaQuoteLeft
                        aria-hidden="true"
                        className="mt-1 h-8 w-8 shrink-0 text-[#d4a04a] sm:h-12 sm:w-12"
                    />
                    <div>
                        <p className="font-serif text-base leading-relaxed text-[#0f2a3d] sm:text-lg">
                            {data.content.blockquote.text}
                        </p>
                        {data.content.blockquote.author && (
                            <footer className="mt-4 font-serif text-sm font-semibold text-[#b98a4a] sm:text-base">
                                — {data.content.blockquote.author}
                            </footer>
                        )}
                    </div>
                </blockquote>
            )}

            {/* Numbered Sections */}
            <div className="flex flex-col gap-8">
                {data.content?.sections?.map((sec: any, idx: number) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-bold text-[#0b3b34] mb-3">{sec.title}</h2>
                        <p className="text-gray-600 text-sm sm:text-sm md:text-base">{sec.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
