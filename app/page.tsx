import Topbar from "@/app/components/topbar";
import Navbar from "@/app/components/navbar";
import Banner from "@/app/components/banner";
import Services from "./components/services";
import About from "./components/about";
import Achievements from "./components/achievement";
import Process from "./components/process";
import Testimonials from "./components/testimonial";
import Blogs from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Topbar />
      <div className="relative">
        <Navbar />
        <Banner />
        <Services/>
        <About/>
        <Achievements/>
        <Process/>
        <Testimonials/>
        <Blogs/>
        <Footer/>
      </div>
    </main>
  );
}