import Banner from "@/app/components/homelayout/banner";
import Services from "@/app/components/homelayout/services";
import About from "@/app/components/homelayout/about";
import Achievements from "@/app/components/homelayout/achievement";
import Process from "@/app/components/homelayout/process";
import Testimonials from "@/app/components/homelayout/testimonial";
import Blogs from "@/app/components/homelayout/blog";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services/>
      <About/>
      <Achievements/>
      <Process/>
      <Testimonials/>
      <Blogs/>
    </main>
  );
}