"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const cases = [
  { img: "/img/website-broodjes-enzo.jpg", title: "Broodjes enzo",           sub: "Website / webshop",  tag: "Web",   url: null },
  { img: "/img/website-coli.jpg",          title: "Coli",                    sub: "Website / maatwerk", tag: "Build", url: null },
  { img: "/img/website-a-janssen.jpg",     title: "A Janssen Montage",       sub: "Website",            tag: "Site",  url: "https://ajanssenmontage.nl/" },
  { img: "/img/website-regio-in-de-peel.jpg", title: "Regio de Peel Innoveert", sub: "Website / branding", tag: "Merk", url: "https://regiodepeelinnoveert.nl/" },
];

const overlayVariants = {
  rest:  { opacity: 0 },
  hover: { opacity: 1, transition: { duration: .25 } },
};

const arrowVariants = {
  rest:  { x: -6, y: 6, opacity: 0 },
  hover: { x: 0,  y: 0, opacity: 1, transition: { duration: .3, ease: [.16,1,.3,1] as [number,number,number,number] } },
};

export default function Cases() {
  return (
    <section id="cases" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,44px)", letterSpacing: "-.04em", fontWeight: 900, lineHeight: 1 }}>Werk waar trots op gebouwd is</h2>
            <p style={{ color: "#555", maxWidth: 420, fontSize: 15 }}>Een mix van websites en visuele projecten die laten zien hoe strak en creatief samen kunnen werken.</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gap: 14 }} className="cases-grid">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={(i % 2) * .12}>
              <motion.article
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 24, overflow: "hidden", background: "#161616", transition: "border-color .3s, box-shadow .3s", position: "relative" }}
              >
                {/* image */}
                <div style={{ aspectRatio: "16/9.5", overflow: "hidden", background: "#0d0d0d", position: "relative" }}>
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                    transition={{ duration: .6, ease: [.16,1,.3,1] }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Image src={c.img} alt={c.title} width={720} height={405} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </motion.div>

                  {/* hover overlay */}
                  {c.url && (
                    <motion.a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={overlayVariants}
                      style={{
                        position: "absolute", inset: 0,
                        background: "rgba(0,0,0,.55)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        backdropFilter: "blur(2px)",
                        cursor: "pointer",
                      }}
                    >
                      <motion.div
                        variants={arrowVariants}
                        style={{
                          width: 56, height: 56, borderRadius: "50%",
                          background: "#D7DA2A", color: "#111",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </motion.div>
                    </motion.a>
                  )}
                </div>

                {/* footer */}
                <div style={{ padding: "16px 20px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 18, letterSpacing: "-.02em", marginBottom: 3 }}>{c.title}</h3>
                    <p style={{ color: "#555", fontSize: 13 }}>{c.sub}</p>
                  </div>
                  <span style={{ padding: "7px 12px", borderRadius: 999, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", whiteSpace: "nowrap" }}>{c.tag}</span>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .cases-grid { grid-template-columns: repeat(2,1fr) }
        @media (max-width:720px) { .cases-grid { grid-template-columns: 1fr } }
      `}</style>
    </section>
  );
}
