import Header            from "@/components/layout/Header";
import Footer            from "@/components/layout/Footer";
import Cursor            from "@/components/ui/Cursor";
import SmoothScroll      from "@/components/ui/SmoothScroll";
import MobilePlaceholder from "@/components/ui/MobilePlaceholder";
import Hero        from "@/components/sections/Hero";
import Clients     from "@/components/sections/Clients";
import Services    from "@/components/sections/Services";
import Cases       from "@/components/sections/Cases";
import Why         from "@/components/sections/Why";
import Process     from "@/components/sections/Process";
import Reviews     from "@/components/sections/Reviews";
import Stats       from "@/components/sections/Stats";
import Contact     from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Mobile — placeholder only */}
      <div className="md:hidden">
        <MobilePlaceholder />
      </div>

      {/* Desktop — full site */}
      <div className="hidden md:block">
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
      </div>
    </>
  );
}
