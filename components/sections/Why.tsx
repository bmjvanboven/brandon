"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const items = [
  { n: "01", t: "Alles onder één dak",  d: "Van uitstraling tot realisatie. Minder losse schakels en meer samenhang." },
  { n: "02", t: "Snel schakelen",        d: "Direct contact, korte lijnen en geen onnodige lagen ertussen." },
  { n: "03", t: "Geen standaard werk",   d: "Geen dertien-in-een-dozijn oplossing, maar iets dat echt past bij het merk." },
  { n: "04", t: "Doorbouwen waar nodig", d: "Niet alleen live zetten, maar ook blijven verbeteren als dat slim is." },
];

export default function Why() {
  return (
    <section className="why-section">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,44px)", letterSpacing: "-.04em", fontWeight: 900, lineHeight: 1 }}>Waarom dit werkt</h2>
            <p style={{ color: "#555", maxWidth: 420, fontSize: 15 }}>Niet groter doen dan nodig. Wel zorgen dat alles klopt en vertrouwen uitstraalt.</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gap: 14 }} className="why-grid">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * .09}>
              <motion.article
                whileHover={{ y: -4, borderColor: "rgba(215,218,42,.15)" }}
                style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 24, padding: "22px 22px 20px", background: "linear-gradient(160deg, rgba(255,255,255,.03), rgba(255,255,255,.01))", transition: "border-color .3s" }}
              >
                <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: ".12em", color: "#D7DA2A", textTransform: "uppercase", marginBottom: 14 }}>{item.n}</div>
                <h3 style={{ fontSize: 18, letterSpacing: "-.025em", marginBottom: 8 }}>{item.t}</h3>
                <p style={{ color: "#555", fontSize: 14 }}>{item.d}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .why-section { padding: 96px 0 }
        .why-grid { grid-template-columns: repeat(4,1fr) }
        @media (max-width:1040px) { .why-grid { grid-template-columns: repeat(2,1fr) } }
        @media (max-width:720px)  { .why-section { padding: 56px 0 } }
        @media (max-width:600px)  { .why-grid { grid-template-columns: 1fr } }
      `}</style>
    </section>
  );
}
