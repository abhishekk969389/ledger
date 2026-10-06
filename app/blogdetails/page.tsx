import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import BlogContent from "../components/layout/blogdetails/blogcontent";
import BlogSidebar from "../components/layout/blogdetails/blogsidebar";
import { notFound } from "next/navigation";

export default async function BlogDetailsPage({
    searchParams,
}: {
    searchParams: Promise<{ blog?: string }>;
}) {
    const params = await searchParams;
    const currentSlug = params.blog || "accurate-bookkeeping";
    
    const detailsVariants = site.blogDetailsVariants;
    let pageData = detailsVariants[currentSlug];

    if (!pageData) {
        // Fallback for dynamically added posts that don't have a specific variant yet
        pageData = {
            title: "Insights & Updates",
            date: "August 2024",
            category: "General",
            readTime: "5 Min Read",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
            content: {
                paragraphs: [
                    "Welcome to our blog details page. This is a newly added post and its specific detailed content is being updated.",
                    "Please check back soon for more comprehensive insights on this topic."
                ],
                sections: [
                    {
                        title: "More Information Coming Soon",
                        text: "Our team of experts is currently compiling the best resources and data for this article."
                    }
                ]
            },
            sidebar: {
                recentPostsTitle: "Recent Posts",
                categoriesTitle: "Categories",
                categories: [
                    { name: "Accounting & Bookkeeping", count: 2 },
                    { name: "Tax Planning", count: 2 },
                    { name: "Business Advisory", count: 2 },
                    { name: "Audit & Assurance", count: 2 },
                    { name: "Financial Reporting", count: 2 },
                    { name: "Company Formation", count: 2 }
                ],
                cta: {
                    title: "Need Professional Guidance?",
                    text: "Get expert advice for your business finance and taxation needs.",
                    buttonText: "Contact Us",
                    buttonHref: "/contact"
                }
            }
        };
    }

    return (
        <main>
            <SubBanner data={site.blogDetailsSubBanner} />
            <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-16">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
                        <BlogSidebar data={pageData.sidebar} />
                        <BlogContent data={pageData} />
                    </div>
                </div>
            </section>
        </main>
    );
}
