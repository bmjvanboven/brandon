"use client";

import { useEffect, useState } from "react";

export default function MobilePlaceholder() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "#111111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated glow blob */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(215,218,42,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse 3s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Corner lines */}
      <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "28px", height: "28px", borderTop: "2px solid #D7DA2A", borderLeft: "2px solid #D7DA2A" }} />
      <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", width: "28px", height: "28px", borderTop: "2px solid #D7DA2A", borderRight: "2px solid #D7DA2A" }} />
      <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", width: "28px", height: "28px", borderBottom: "2px solid #D7DA2A", borderLeft: "2px solid #D7DA2A" }} />
      <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "28px", height: "28px", borderBottom: "2px solid #D7DA2A", borderRight: "2px solid #D7DA2A" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Logo / brand */}
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#D7DA2A", textTransform: "uppercase", marginBottom: "2rem" }}>
          BRANDON
        </p>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 10vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#f0f0f0",
            marginBottom: "1.25rem",
            letterSpacing: "-0.03em",
          }}
        >
          Nieuwe website{" "}
          <span style={{ color: "#D7DA2A" }}>in&nbsp;aantocht</span>
        </h1>

        <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.6, maxWidth: "280px", margin: "0 auto 2.5rem" }}>
          We bouwen iets moois. Kom snel terug op desktop voor de volledige ervaring.
        </p>

        {/* Loading bar */}
        <div
          style={{
            width: "180px",
            height: "2px",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "999px",
            margin: "0 auto 0.75rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#D7DA2A",
              borderRadius: "999px",
              animation: "load 2.4s ease-in-out infinite",
            }}
          />
        </div>

        <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" }}>
          bezig met bouwen{dots}
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes load {
          0% { width: 0%; margin-left: 0; }
          50% { width: 70%; margin-left: 15%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
