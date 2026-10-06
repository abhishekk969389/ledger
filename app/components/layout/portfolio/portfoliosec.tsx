import Image from "next/image";
import { site } from "@/data/index";

export default function Portfolio() {
    const data = site.portfolioSec;

    return (
        <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {data.projects.map((p) => (
                        <article
                            key={p.title}
                            className="group flex flex-col overflow-hidden rounded-md bg-white shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
                        >
                            <div className="relative h-[200px] overflow-hidden sm:h-[210px]">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-[2px] w-5 bg-[#b98a4a]" />
                                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#b98a4a]">
                                        {p.category}
                                    </p>
                                </div>

                                <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0b3b34]">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}