import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import ContactSection from "../components/layout/contact/contactsec";

export default function ContactPage() {
  return (
    <main>
      <SubBanner data={site.contactSubBanner} />
      <ContactSection/>
    </main>
  );
}
