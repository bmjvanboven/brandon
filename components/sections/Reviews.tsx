"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  { q: "Proactieve werkhouding en ontzettend creatief in zijn opdrachten. Dikke aanrader!", by: "Mitchell, Beddenbriljant" },
  { q: "Super blij met onze nieuwe huisstijl en website. Brandon denkt mee en begeleidt perfect!", by: "Teddo, ZODY" },
  { q: "Zeer snel en professioneel geholpen met oog voor detail.", by: "Gijs, Glazenwasserij Gijs" },
];

export default function Reviews() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,44px)", letterSpacing: "-.04em", fontWeight: 900, lineHeight: 1 }}>Wat klanten zeggen</h2>
            <p style={{ color: "#555", maxWidth: 420, fontSize: 15 }}>Vertrouwen bouw je niet alleen met beeld, maar ook met hoe een samenwerking wordt ervaren.</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="reviews-grid">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * .1}>
              <motion.article
                whileHover={{ y: -4, borderColor: "rgba(215,218,42,.14)" }}
                style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 24, padding: 26, background: "linear-gradient(160deg, rgba(255,255,255,.03), rgba(255,255,255,.01))", transition: "border-color .3s", height: "100%" }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: "#D7DA2A", fontSize: 14 }}>★</span>
                  ))}
                </div>
                <blockquote style={{ fontSize: 16, lineHeight: 1.6, fontStyle: "normal" }}>"{r.q}"</blockquote>
                <cite style={{ display: "block", marginTop: 16, fontSize: 13, color: "#555", fontStyle: "normal" }}>— {r.by}</cite>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .reviews-grid { grid-template-columns: repeat(3,1fr) }
        @media (max-width:1040px) { .reviews-grid { grid-template-columns: repeat(2,1fr) } }
        @media (max-width:600px)  { .reviews-grid { grid-template-columns: 1fr } }
      `}</style>
    </section>
  );
}
