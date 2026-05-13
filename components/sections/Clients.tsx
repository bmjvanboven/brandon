"use client";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const clients = [
  { href: "https://daero.nl/",                  src: "/img/logo-klant-1.png", alt: "Daero" },
  { href: "https://vanlieroptegels.nl/",         src: "/img/logo-klant-2.png", alt: "Van Lierop Tegels" },
  { href: "https://ajanssenmontage.nl/",         src: "/img/logo-klant-3.png", alt: "A Janssen Montage" },
  { href: "https://regiodepeelinnoveert.nl/",    src: "/img/logo-klant-4.png", alt: "Regio de Peel Innoveert" },
  { href: "https://vloetrecruit.nl/",            src: "/img/logo-klant-5.png", alt: "Vloet Recruit" },
  { href: "https://www.tcconnect.nl/",           src: "/img/logo-klant-6.png", alt: "TC connect" },
];
const doubled = [...clients, ...clients];

export default function Clients() {
  return (
    <section style={{ padding: "20px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)", padding: "28px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginBottom: 22, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(20px,2.2vw,28px)", letterSpacing: "-.03em", fontWeight: 900 }}>Bedrijven die al goed staan</h2>
              <p style={{ color: "#555", fontSize: 14 }}>Een greep uit merken waar al aan gebouwd is.</p>
            </div>

            {/* Desktop: marquee */}
            <div className="clients-marquee-wrap" style={{ overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 120, background: "linear-gradient(90deg, #111, transparent)", zIndex: 1, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 120, background: "linear-gradient(-90deg, #111, transparent)", zIndex: 1, pointerEvents: "none" }} />
              <div
                style={{ display: "flex", alignItems: "center", gap: 72, width: "max-content", animation: "marquee 28s linear infinite", willChange: "transform", backfaceVisibility: "hidden" }}
                onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
              >
                {doubled.map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noopener"
                    style={{ display: "flex", alignItems: "center", minWidth: 140, opacity: .75, transition: "opacity .25s, transform .25s" }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.opacity="1"; el.style.transform="translateY(-3px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.opacity=".75"; el.style.transform=""; }}
                  >
                    <Image src={c.src} alt={c.alt} width={160} height={68} style={{ maxHeight: 68, width: "auto" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile: swipe carousel */}
            <div className="clients-carousel-wrap">
              <div className="clients-carousel">
                {clients.map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noopener" className="clients-carousel-item">
                    <Image src={c.src} alt={c.alt} width={160} height={68} style={{ maxHeight: 56, width: "auto", opacity: .8 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @keyframes marquee { from{transform:translate3d(0,0,0)} to{transform:translate3d(-50%,0,0)} }

        .clients-carousel-wrap { display: none }

        @media (max-width: 720px) {
          .clients-marquee-wrap { display: none }
          .clients-carousel-wrap { display: block }
          .clients-carousel {
            display: flex;
            gap: 0;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 4px;
          }
          .clients-carousel::-webkit-scrollbar { display: none }
          .clients-carousel-item {
            flex: 0 0 50%;
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 16px;
          }
        }
      `}</style>
    </section>
  );
}
