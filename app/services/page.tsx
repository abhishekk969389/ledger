import SubBanner from "@/app/components/ui/subbanner";
import Services from "@/app/components/homelayout/services";
import { site } from "@/data/index";

export default function ServicesPage() {
  return (
    <main>
      <SubBanner data={site.servicesSubBanner} />
      <Services gridMode={true} />
    </main>
  );
}
