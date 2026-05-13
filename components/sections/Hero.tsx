"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const line = {
  hidden: { y: "110%" },
  show:   { y: "0%", transition: { duration: 0.9, ease: E } },
};
const fade = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: E } },
};

const headings = ["Alles wat je", "nodig hebt om", "sterk online", "te staan."];

export default function Hero() {
  return (
    <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
      {/* blobs — transform only, GPU-accelerated */}
      <motion.div
        animate={{ x: [-40, 0, -40], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        style={{ position: "absolute", width: 700, height: 500, top: -120, right: -160, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(215,218,42,.12), transparent 70%)", filter: "blur(70px)", pointerEvents: "none", willChange: "transform" }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        style={{ position: "absolute", width: 500, height: 400, bottom: 0, left: -120, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,255,255,.04), transparent 70%)", filter: "blur(70px)", pointerEvents: "none", willChange: "transform" }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px", position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-grid">
          {/* main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [.16,1,.3,1] }}
            style={{
              border: "1px solid rgba(255,255,255,.08)", borderRadius: 28, padding: "44px 44px 36px",
              background: "linear-gradient(145deg, rgba(255,255,255,.04), rgba(255,255,255,.01))",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}
          >
            <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(215,218,42,.08), transparent)", pointerEvents: "none" }} />

            <div>
              {/* eyebrow */}
              <motion.span
                initial={{ opacity: 0, scale: .96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .6, ease: [.16,1,.3,1] }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  fontSize: 11, fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase",
                  color: "#bbb", padding: "8px 14px",
                  border: "1px solid rgba(255,255,255,.08)", borderRadius: 999,
                  background: "rgba(255,255,255,.03)",
                }}
              >
                <motion.span
                  animate={{ boxShadow: ["0 0 8px rgba(215,218,42,.4)","0 0 20px rgba(215,218,42,.7)","0 0 8px rgba(215,218,42,.4)"] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "#D7DA2A", display: "inline-block" }}
                />
                Strak, premium en creatief
              </motion.span>

              {/* heading */}
              <motion.h1
                variants={container}
                initial="hidden"
                animate="show"
                style={{ fontSize: "clamp(38px,6vw,60px)", lineHeight: .94, letterSpacing: "-.06em", fontWeight: 900, margin: "22px 0 18px", maxWidth: "11ch" }}
              >
                {headings.map((t, i) => (
                  <span key={i} style={{ display: "block", overflow: "hidden" }}>
                    <motion.span variants={line} style={{ display: "block" }}>{t}</motion.span>
                  </span>
                ))}
              </motion.h1>

              <motion.p variants={fade} initial="hidden" animate="show" style={{ color: "#ccc", fontSize: "clamp(16px,1.6vw,19px)", maxWidth: "50ch", lineHeight: 1.55 }}>
                Van logo en huisstijl tot website, webshop en ondersteuning.
                Geen losse onderdelen, maar één geheel dat klopt en vertrouwen uitstraalt.
              </motion.p>

              <motion.div
                variants={fade} initial="hidden" animate="show"
                style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}
              >
                <motion.a href="#contact" whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(215,218,42,.35)" }} whileTap={{ scale: .97 }}
                  style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 22px", borderRadius: 999, fontWeight: 900, fontSize: 14.5, background: "#D7DA2A", color: "#111", boxShadow: "0 12px 28px rgba(215,218,42,.2)" }}>
                  Open contact
                </motion.a>
                <motion.a href="#cases" whileHover={{ y: -2 }} whileTap={{ scale: .97 }}
                  style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 22px", borderRadius: 999, fontWeight: 800, fontSize: 14.5, background: "rgba(255,255,255,.05)", color: "#fff", border: "1px solid rgba(255,255,255,.1)" }}>
                  Bekijk werk
                </motion.a>
              </motion.div>
            </div>

            {/* points */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7, duration: .7, ease: [.16,1,.3,1] }}
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 32 }}
              className="hero-points"
            >
              {[
                { t: "Logo & huisstijl", s: "Herkenbaar vanaf de eerste seconde." },
                { t: "Website & webshop", s: "Strak gebouwd en klaar om te werken." },
                { t: "Ondersteuning",     s: "Doorpakken na livegang." },
              ].map((p, i) => (
                <motion.div key={i} whileHover={{ y: -2, background: "rgba(255,255,255,.07)" }}
                  style={{ padding: "14px 16px", borderRadius: 16, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.06)", transition: "background .2s" }}>
                  <strong style={{ display: "block", fontSize: 14, marginBottom: 3 }}>{p.t}</strong>
                  <span style={{ color: "#666", fontSize: 13 }}>{p.s}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* side cards */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .25, duration: .8, ease: [.16,1,.3,1] }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {[
              {
                label: "Direct contact",
                content: (
                  <div style={{ padding: "16px", borderRadius: 16, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".12em", color: "#666", fontWeight: 800, marginBottom: 4 }}>Bel of mail</div>
                      <a href="tel:+31628839370" style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-.03em", transition: "color .2s" }}
                        onMouseEnter={e=>((e.target as HTMLElement).style.color="#D7DA2A")}
                        onMouseLeave={e=>((e.target as HTMLElement).style.color="")}
                      >+31 6 288 39 370</a>
                    </div>
                    <motion.a href="mailto:info@brandonvanboven.nl" whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(215,218,42,.28)" }} whileTap={{ scale:.97 }}
                      style={{ display: "inline-flex", alignItems: "center", minHeight: 42, padding: "0 16px", borderRadius: 999, fontWeight: 900, fontSize: 13, background: "#D7DA2A", color: "#111", whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(215,218,42,.18)" }}>
                      Mail direct
                    </motion.a>
                  </div>
                ),
              },
              {
                label: "Wat BRANDON doet",
                content: (
                  <>
                    <h3 style={{ fontSize: 17, marginBottom: 6 }}>Van idee naar iets dat staat</h3>
                    <p style={{ color: "#666", fontSize: 14 }}>Voor nieuwe bedrijven en merken die hun uitstraling, site of shop goed willen neerzetten.</p>
                  </>
                ),
              },
              {
                label: "Focus",
                content: (
                  <>
                    <h3 style={{ fontSize: 17, marginBottom: 6 }}>Creatief in uitstraling. Rustig in uitvoering.</h3>
                    <p style={{ color: "#666", fontSize: 14 }}>Opvallend waar het telt, strak waar het moet. Precies die combinatie maakt het sterk.</p>
                  </>
                ),
              },
            ].map((card, i) => (
              <motion.div key={i} whileHover={{ y: -2, borderColor: "rgba(255,255,255,.13)" }}
                style={{ flex: 1, border: "1px solid rgba(255,255,255,.07)", borderRadius: 28, padding: 22, background: "linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.015))", transition: "border-color .3s" }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".13em", color: "#666", fontWeight: 800, marginBottom: 14 }}>{card.label}</div>
                {card.content}
              </motion.div>
            ))}
          </motion.aside>
        </div>
      </div>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 20px; align-items: stretch }
        @media (max-width: 1040px) { .hero-grid { grid-template-columns: 1fr } }
        @media (max-width: 600px) {
          .hero-grid > div:first-child { padding: 28px 24px 24px !important }
          .hero-points { grid-template-columns: 1fr !important }
        }
      `}</style>
    </section>
  );
}
