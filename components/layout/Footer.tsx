export default function Footer() {
  return (
    <footer style={{ padding: "24px 0 60px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ color: "#555", fontSize: 13 }}>
            © {new Date().getFullYear()} BRANDON &nbsp;·&nbsp;{" "}
            <a href="/algemene-voorwaarden-BRANDON-082024.pdf" target="_blank" rel="noopener" className="footer-link">
              Algemene voorwaarden
            </a>
          </span>
          <span style={{ color: "#555", fontSize: 13 }}>Logo · Website · Webshop · Ondersteuning</span>
        </div>
      </div>
      <style>{`.footer-link { transition: color .2s } .footer-link:hover { color: #f0f0f0 }`}</style>
    </footer>
  );
}
