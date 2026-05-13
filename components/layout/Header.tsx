"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#diensten", label: "Wat je krijgt" },
  { href: "#cases",    label: "Cases" },
  { href: "#werkwijze",label: "Werkwijze" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .7, ease: [.16,1,.3,1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background .4s, border-color .4s, backdrop-filter .4s",
        background: scrolled ? "rgba(17,17,17,.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.07)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 78, gap: 16 }}>
          <a href="#top" aria-label="BRANDON home" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/img/logo-brandon.svg" alt="BRANDON" width={110} height={28} priority style={{ height: 26, width: "auto" }} />
          </a>

          {/* desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                padding: "9px 15px", borderRadius: 999,
                fontSize: 14, fontWeight: 600, color: "#bbb",
                transition: "color .2s, background .2s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color="#fff"; (e.target as HTMLElement).style.background="rgba(255,255,255,.06)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color="#bbb"; (e.target as HTMLElement).style.background="transparent"; }}
              >{l.label}</a>
            ))}
            <a href="tel:+31628839370" style={{
              padding: "10px 15px", borderRadius: 999,
              fontSize: 14, fontWeight: 600, color: "#ccc",
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(255,255,255,.03)",
              marginLeft: 4,
              transition: "background .2s",
            }}>+31 6 288 39 370</a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 14px 32px rgba(215,218,42,.32)" }}
              whileTap={{ scale: .97 }}
              style={{
                padding: "11px 18px", borderRadius: 999,
                fontSize: 13.5, fontWeight: 900,
                background: "#D7DA2A", color: "#111",
                marginLeft: 4,
                boxShadow: "0 8px 24px rgba(215,218,42,.2)",
                display: "inline-flex", alignItems: "center",
              }}
            >Contact</motion.a>
          </nav>

          {/* hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="show-mobile"
            style={{
              display: "none",
              width: 44, height: 44, borderRadius: 12,
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(255,255,255,.04)",
              alignItems: "center", justifyContent: "center",
              color: "#fff", cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <><path d="M18 6 6 18"/><path d="M6 6l12 12"/></>
                : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: .35, ease: [.16,1,.3,1] }}
            style={{
              overflow: "hidden",
              background: "rgba(17,17,17,.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,.07)",
            }}
          >
            <div style={{ padding: "12px 22px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ padding: "12px 16px", borderRadius: 12, fontSize: 16, fontWeight: 600, color: "#ccc", textAlign: "center", background: "rgba(255,255,255,.03)" }}
                >{l.label}</a>
              ))}
              <a href="tel:+31628839370" onClick={() => setOpen(false)}
                style={{ padding: "12px 16px", borderRadius: 12, fontSize: 15, fontWeight: 700, color: "#ccc", textAlign: "center", border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.04)" }}
              >+31 6 288 39 370</a>
              <a href="#contact" onClick={() => setOpen(false)}
                style={{ padding: "14px 16px", borderRadius: 999, fontSize: 15, fontWeight: 900, background: "#D7DA2A", color: "#111", textAlign: "center" }}
              >Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 720px) {
          .hidden-mobile { display: none !important }
          .show-mobile { display: inline-flex !important }
        }
      `}</style>
    </motion.header>
  );
}
