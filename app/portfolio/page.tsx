import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import Portfolio from "../components/layout/portfolio/portfoliosec";

export default function PortfolioPage() {
  return (
    <main>
      <SubBanner data={site.portfolioSubBanner} />
      <Portfolio/>
    </main>
  );
}
