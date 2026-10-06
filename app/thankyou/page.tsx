import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import ThankYouSection from "../components/layout/thankyou/thankyousec";

export default function ThankYouPage() {
  return (
    <main>
      <SubBanner data={site.thankyouSubBanner} />
      <ThankYouSection/>
    </main>
  );
}
