import Header       from "@/components/layout/Header";
import Footer       from "@/components/layout/Footer";
import Cursor       from "@/components/ui/Cursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Hero         from "@/components/sections/Hero";
import Clients      from "@/components/sections/Clients";
import Services     from "@/components/sections/Services";
import Cases        from "@/components/sections/Cases";
import Why          from "@/components/sections/Why";
import Process      from "@/components/sections/Process";
import Reviews      from "@/components/sections/Reviews";
import Stats        from "@/components/sections/Stats";
import Contact      from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <Services />
        <Cases />
        <Why />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
