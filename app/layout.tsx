import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/app/components/ui/topbar";
import Navbar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";
import SmoothScroll from "@/app/components/ui/smoothscroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ledger & Co. | Chartered Accountants",
  description:
    "Reliable accounting, tax and advisory solutions to help your business grow with confidence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScroll>
          <div className="relative">
            <Topbar />
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}