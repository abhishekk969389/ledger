import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import QuoteSection from "../components/layout/quote/quotesec";

export default function QuotePage() {
  return (
    <main>
      <SubBanner data={site.quoteSubBanner} />
      <QuoteSection/>
    </main>
  );
}
