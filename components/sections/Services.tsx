"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D7DA2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="3" y="3" width="10" height="10" rx="2"/><circle cx="15" cy="15" r="6"/>
      </svg>
    ),
    title: "Logo & huisstijl",
    desc: "Een uitstraling die direct herkenbaar is en overal goed staat. Van eerste richting tot definitieve uitwerking.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D7DA2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>
      </svg>
    ),
    title: "Website & webshop",
    desc: "Strakke websites en shops die vertrouwen opbouwen, fijn werken en technisch goed in elkaar zitten.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D7DA2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M12 18v-3M7 10a5 5 0 1 1 10 0v3a2 2 0 0 0 2 2"/><path d="M5 15a2 2 0 0 0 2-2v-3"/><path d="M9 21h6"/>
      </svg>
    ),
    title: "Ondersteuning",
    desc: "Content, aanpassingen en doorontwikkeling om niet stil te vallen zodra alles eenmaal live staat.",
  },
];

export default function Services() {
  return (
    <section id="diensten" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,44px)", letterSpacing: "-.04em", fontWeight: 900, lineHeight: 1 }}>Wat je hier krijgt</h2>
            <p style={{ color: "#555", maxWidth: 420, fontSize: 15 }}>De basis goed neerzetten, strak uitvoeren en daarna zorgen dat het geheel sterk blijft staan.</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gap: 14 }} className="services-grid">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * .1}>
              <motion.article
                whileHover={{ y: -5, borderColor: "rgba(215,218,42,.2)", boxShadow: "0 24px 56px rgba(0,0,0,.4)" }}
                style={{ height: "100%", border: "1px solid rgba(255,255,255,.07)", borderRadius: 28, padding: 28, background: "linear-gradient(160deg, rgba(255,255,255,.035), rgba(255,255,255,.01))", position: "relative", overflow: "hidden", transition: "border-color .3s, box-shadow .3s" }}
              >
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 70% at 100% 100%, rgba(215,218,42,.07), transparent)", opacity: 0, transition: "opacity .4s" }} className="card-glow" />
                <div style={{ width: 52, height: 52, borderRadius: 16, display: "grid", placeItems: "center", background: "rgba(215,218,42,.1)", border: "1px solid rgba(215,218,42,.2)", marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontSize: 22, letterSpacing: "-.03em", marginBottom: 9 }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: 15 }}>{s.desc}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .services-grid { grid-template-columns: repeat(3,1fr) }
        @media (max-width:1040px) { .services-grid { grid-template-columns: repeat(2,1fr) } }
        @media (max-width:600px)  { .services-grid { grid-template-columns: 1fr } }
      `}</style>
    </section>
  );
}
