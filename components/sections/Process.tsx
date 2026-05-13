"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  { n: "01", t: "Bespreken",      d: "Doel, stijl en richting helder krijgen." },
  { n: "02", t: "Richting kiezen",d: "De basis neerzetten die echt past." },
  { n: "03", t: "Bouwen",         d: "Design en techniek strak uitwerken." },
  { n: "04", t: "Live & door",    d: "Opleveren, finetunen en verder helpen." },
];

export default function Process() {
  return (
    <section id="werkwijze">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,44px)", letterSpacing: "-.04em", fontWeight: 900, lineHeight: 1 }}>Zo werkt het</h2>
            <p style={{ color: "#555", maxWidth: 420, fontSize: 15 }}>Kort, duidelijk en gericht op iets neerzetten dat meteen stevig staat.</p>
          </div>
        </FadeIn>

        <FadeIn delay={.1}>
          <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 28, padding: 32, background: "linear-gradient(160deg, rgba(255,255,255,.03), rgba(255,255,255,.01))" }}>
            <div style={{ display: "grid", gap: 12 }} className="process-steps">
              {steps.map((s, i) => (
                <motion.div key={i} whileHover={{ y: -2, background: "rgba(255,255,255,.055)" }}
                  style={{ padding: 20, borderRadius: 18, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)", position: "relative", transition: "background .2s" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: "50%", background: "#D7DA2A", color: "#111", fontSize: 12, fontWeight: 900, marginBottom: 14 }}>{s.n}</div>
                  <h3 style={{ fontSize: 16, marginBottom: 6 }}>{s.t}</h3>
                  <p style={{ color: "#555", fontSize: 14 }}>{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`
        #werkwijze { padding: 96px 0 }
        .process-steps { grid-template-columns: repeat(4,1fr) }
        @media (max-width:1040px) { .process-steps { grid-template-columns: repeat(2,1fr) } }
        @media (max-width:720px)  { #werkwijze { padding: 56px 0 } }
        @media (max-width:600px)  { .process-steps { grid-template-columns: 1fr } }
      `}</style>
    </section>
  );
}
