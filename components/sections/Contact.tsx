"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  return (
    <section id="contact">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <div style={{ display: "grid", gap: 14 }} className="contact-grid">

          <FadeIn>
            <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 28, padding: "40px 44px", background: "linear-gradient(145deg, rgba(255,255,255,.04), rgba(255,255,255,.01))", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(215,218,42,.06), transparent)", pointerEvents: "none" }} />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase", color: "#bbb", padding: "8px 14px", border: "1px solid rgba(255,255,255,.08)", borderRadius: 999, background: "rgba(255,255,255,.03)" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#D7DA2A", display: "inline-block" }} />
                Open contact
              </span>
              <h2 style={{ fontSize: "clamp(30px,4vw,50px)", lineHeight: .95, letterSpacing: "-.055em", fontWeight: 900, margin: "18px 0 14px", maxWidth: "10ch" }}>
                Heb je iets in je hoofd? Laat het bouwen.
              </h2>
              <p style={{ color: "#555", maxWidth: "46ch", fontSize: 15 }}>Voor een nieuw merk, een frisse website, een webshop of ondersteuning om verder te groeien.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                <motion.a href="tel:+31628839370" whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(215,218,42,.35)" }} whileTap={{ scale: .97 }}
                  style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 22px", borderRadius: 999, fontWeight: 900, fontSize: 14.5, background: "#D7DA2A", color: "#111", boxShadow: "0 12px 28px rgba(215,218,42,.2)" }}>
                  Bel direct
                </motion.a>
                <motion.a href="mailto:info@brandonvanboven.nl" whileHover={{ y: -2 }} whileTap={{ scale: .97 }}
                  style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 22px", borderRadius: 999, fontWeight: 800, fontSize: 14.5, background: "rgba(255,255,255,.05)", color: "#fff", border: "1px solid rgba(255,255,255,.1)" }}>
                  Mail direct
                </motion.a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={.15}>
            <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 28, padding: "28px 30px", background: "linear-gradient(160deg, rgba(255,255,255,.03), rgba(255,255,255,.01))", display: "flex", flexDirection: "column" }}>

              <div style={{ paddingBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#555", marginBottom: 6 }}>Telefoon</div>
                <a href="tel:+31628839370" className="c-link" style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 900, letterSpacing: "-.04em" }}>
                  +31 6 288 39 370
                </a>
              </div>

              <div style={{ padding: "18px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#555", marginBottom: 6 }}>E-mail</div>
                <a href="mailto:info@brandonvanboven.nl" className="c-link" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.02em" }}>
                  info@brandonvanboven.nl
                </a>
              </div>

              <div style={{ padding: "18px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#555", marginBottom: 6 }}>Adres</div>
                <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5, color: "#ccc" }}>Voorste Weegt 14<br />5756 BG Vlierden</div>
              </div>

              <div style={{ paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.07)", marginTop: "auto" }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#555", marginBottom: 10 }}>Volg BRANDON</div>
                <div style={{ display: "flex", gap: 10 }}>
                  <motion.a href="https://www.instagram.com/brandondeurne/" target="_blank" rel="noopener" aria-label="Instagram"
                    whileHover={{ y: -3, background: "#D7DA2A", borderColor: "#D7DA2A", color: "#111" }} whileTap={{ scale: .95 }}
                    style={{ width: 44, height: 44, borderRadius: "50%", display: "grid", placeItems: "center", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", transition: "background .2s, border-color .2s, color .2s" }}>
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                    </svg>
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/company/18706809" target="_blank" rel="noopener" aria-label="LinkedIn"
                    whileHover={{ y: -3, background: "#D7DA2A", borderColor: "#D7DA2A", color: "#111" }} whileTap={{ scale: .95 }}
                    style={{ width: 44, height: 44, borderRadius: "50%", display: "grid", placeItems: "center", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", transition: "background .2s, border-color .2s, color .2s" }}>
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zm7.5 0h5v-9c0-1.93.57-3.5 2.76-3.5 2.17 0 2.24 2.04 2.24 3.62V24h5v-10c0-4.97-2.65-7.26-6.18-7.26-2.91 0-4.17 1.61-4.88 2.74h-.07V7H7.5v17z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
      <style>{`
        #contact { padding: 96px 0 }
        .contact-grid { grid-template-columns: 1.1fr .9fr }
        .c-link { transition: color .2s }
        .c-link:hover { color: #D7DA2A }
        @media (max-width:1040px) { .contact-grid { grid-template-columns: 1fr } }
        @media (max-width:720px)  { #contact { padding: 56px 0 } }
        @media (max-width:600px)  { .contact-grid > div { padding: 28px 24px !important } }
      `}</style>
    </section>
  );
}
