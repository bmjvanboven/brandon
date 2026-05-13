"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setWidth(isNaN(pct) ? 0 : pct * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, zIndex: 100,
        height: 2,
        width: `${width}%`,
        background: "#D7DA2A",
        boxShadow: "0 0 10px rgba(215,218,42,.5)",
        transition: "width .06s linear",
        pointerEvents: "none",
      }}
    />
  );
}
