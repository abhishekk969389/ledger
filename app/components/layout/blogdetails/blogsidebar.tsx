"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/data/index";
import { HiArrowLongRight } from "react-icons/hi2";

export default function BlogSidebar({ data }: { data: any }) {
    const recentPosts = site.ourBlogs.posts.slice(0, 4);

    return (
        <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col gap-8"
        >
            {/* Recent Posts */}
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#0b3b34] mb-6">{data.recentPostsTitle || "Recent Posts"}
                     <div className="h-[2px] w-10 bg-[#D4AF37] mt-1" />
                </h3>
                <div className="flex flex-col gap-5">
                    {recentPosts.map((post, idx) => (
                        <Link 
                            key={idx} 
                            href={`/blogdetails?blog=${post.href.split("/").pop()}`} 
                            className="flex items-center gap-4 group"
                        >
                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm sm:text-sm md:text-sm font-semibold leading-tight text-[#0b3b34] group-hover:text-[#b98a4a] transition line-clamp-2">
                                    {post.title}
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                            </div>
                            <HiArrowLongRight className="text-[#b98a4a] opacity-0 group-hover:opacity-100 transition" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#0b3b34] mb-6">{data.categoriesTitle || "Categories"}
                     <div className="h-[2px] w-10 bg-[#D4AF37] mt-1" />
                </h3>
                <ul className="flex flex-col gap-3">
                    {data.categories?.map((cat: any, idx: number) => {
                        const count = site.ourBlogs.posts.filter(p => p.tag === cat.name).length;
                        return (
                            <li key={idx} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                                <Link href={`/blog?category=${encodeURIComponent(cat.name)}`} className="group flex items-center justify-between text-sm text-[#0b3b34] font-semibold hover:text-[#b98a4a] transition">
                                    <span>{cat.name} <span className="text-gray-500 font-normal">({count})</span></span>
                                    <HiArrowLongRight className="text-[#b98a4a] opacity-0 group-hover:opacity-100 transition" />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* CTA */}
            {data.cta && (
                <div className="relative overflow-hidden rounded-lg bg-[#0b3b34] p-8 py-18 text-white">
                    {/* Background Overlay if image exists, though usually it's dark solid color */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center"></div>
                    <div className="relative z-10">
                        <h3 className="mb-4 text-3xl font-bold">{data.cta.title}</h3>
                        <p className="mb-6 text-base text-gray-300">{data.cta.text}</p>
                        <Link
                            href={data.cta.buttonHref || "/contact"}
                            className="inline-flex items-center gap-2 py-3 rounded-full bg-[#b98a4a] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a0763f]"
                        >
                            {data.cta.buttonText || "Contact Us"}
                            <HiArrowLongRight />
                        </Link>
                    </div>
                </div>
            )}
        </motion.aside>
    );
}
