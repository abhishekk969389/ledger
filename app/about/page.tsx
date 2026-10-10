import SubBanner from "@/app/components/ui/subbanner";
import AboutSection from "@/app/components/homelayout/about";
import { site } from "@/data/index";
import WhyChooseUs from "../components/layout/about/whychoose";
import Achievements from "../components/homelayout/achievement";

export default function AboutPage() {
  return (
    <main>
      <SubBanner data={site.aboutSubBanner} />
    
        <AboutSection hideCTA={true} />
        <WhyChooseUs/>
    
    </main>
  );
}
