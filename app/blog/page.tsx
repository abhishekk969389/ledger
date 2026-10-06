import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import Blogs from "@/app/components/homelayout/blog";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;
  const page = parseInt(params.page || "1", 10);

  return (
    <main>
      <SubBanner data={site.blogSubBanner} />
      <Blogs maxItems={6} currentPage={page} category={category} isPaginated={true} />
    </main>
  );
}
