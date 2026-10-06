import ledgerData from "./ledger.json";

export type RawLedgerData = typeof ledgerData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
}

const sec = ledgerData.LedgerIndustries.sections;

export type LedgerBannerData = typeof sec.Banner.variants.LedgerBanner1;
export type LedgerServicesData = typeof sec.Services.variants.LedgerServices1;
export type LedgerAboutData = typeof sec.About.variants.LedgerAbout1;
export type LedgerAchievementsData = typeof sec.Achievements.variants.LedgerAchievements1;
export type LedgerProcessData = typeof sec.Process.variants.LedgerProcess1;
export type LedgerTestimonialData = typeof sec.Testimonial.variants.LedgerTestimonial1;
export type LedgerBlogData = typeof sec.Blog.variants.LedgerBlog1;
export type LedgerTopbarData = typeof sec.Topbar.variants.LedgerTopbar1;
export type LedgerHeaderData = typeof sec.Header.variants.LedgerHeader1;
export type LedgerFooterData = typeof sec.Footer.variants.LedgerFooter1;
export type LedgerBrandData = typeof sec.Brand.variants.LedgerBrand1;
export type LedgerSubBannerData = typeof sec.SubBanner.variants.AboutSubBanner;

export const site = {
  brand: sec.Brand.variants.LedgerBrand1,
  topbar: sec.Topbar.variants.LedgerTopbar1,
  navbar: sec.Header.variants.LedgerHeader1,
  banner: sec.Banner.variants.LedgerBanner1,
  ourServices: sec.Services.variants.LedgerServices1,
  about: sec.About.variants.LedgerAbout1,
  achievements: sec.Achievements.variants.LedgerAchievements1,
  process: sec.Process.variants.LedgerProcess1,
  testimonialSec: sec.Testimonial.variants.LedgerTestimonial1,
  ourBlogs: sec.Blog.variants.LedgerBlog1,
  footer: sec.Footer.variants.LedgerFooter1,
  aboutSubBanner: sec.SubBanner.variants.AboutSubBanner,
  servicesSubBanner: sec.SubBanner.variants.services,
  portfolioSubBanner: sec.SubBanner.variants.portfolio,
  blogSubBanner: sec.SubBanner.variants.blog,
  quoteSubBanner: sec.SubBanner.variants.quote,
  contactSubBanner: sec.SubBanner.variants.contact,
  thankyouSubBanner: sec.SubBanner.variants.thankyou,
  serviceDetailsSubBanner: sec.SubBanner.variants.servicedetails,
  blogDetailsSubBanner: sec.SubBanner.variants.blogdetails,
  whyChooseUs: sec.WhyChooseUs.variants.LedgerWhyChoose1,
  portfolioSec: sec.PortfolioSec.variants.LedgerPortfolio1,
  quoteSec: sec.QuoteSec.variants.LedgerQuote1,
  contactSec: sec.ContactSec.variants.LedgerContact1,
  thankyouSec: sec.ThankYouSec.variants.LedgerThankYou1,
  serviceDetailsSec: sec.ServiceDetails.variants["accounting-bookkeeping"] as any,
  serviceDetailsVariants: sec.ServiceDetails.variants as any,
  blogDetailsVariants: sec.BlogDetails.variants as any,
};

export default ledgerData;
