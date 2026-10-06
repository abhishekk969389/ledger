import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import ServiceContent from "../components/layout/servicedetails/servicecontent";
import ServiceSidebar from "../components/layout/servicedetails/servicesidebar";

export default async function ServiceDetailsPage({
    searchParams,
}: {
    searchParams: Promise<{ service?: string }>;
}) {
    const params = await searchParams;
    const currentSlug = params.service || "accounting-bookkeeping";
    
    const detailsVariants = site.serviceDetailsVariants;
    const pageData = detailsVariants[currentSlug] || detailsVariants["accounting-bookkeeping"];

    return (
        <main>
            <SubBanner data={site.serviceDetailsSubBanner} />
            <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
                        <ServiceContent data={pageData} />
                        <ServiceSidebar
                            data={pageData.sidebar}
                            services={site.ourServices.services}
                            currentSlug={currentSlug}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
