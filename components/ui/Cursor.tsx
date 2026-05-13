"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.4 };
  const ringConfig   = { damping: 22, stiffness: 180, mass: 0.6 };

  const dotX  = useSpring(mouseX, springConfig);
  const dotY  = useSpring(mouseY, springConfig);
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", onMove);

    const addHover = () => setHovered(true);
    const rmHover  = () => setHovered(false);

    const attach = () => {
      document.querySelectorAll<HTMLElement>("a,button,[data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", rmHover);
      });
    };
    attach();

    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* dot — snaps instantly */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: dotX, y: dotY,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 16 : 9,
          height: hovered ? 16 : 9,
          borderRadius: "50%",
          background: "#D7DA2A",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          opacity: visible ? 1 : 0,
          transition: "width .2s cubic-bezier(.16,1,.3,1), height .2s cubic-bezier(.16,1,.3,1)",
          willChange: "transform",
        }}
      />

      {/* ring — lags behind */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: ringX, y: ringY,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 50 : 32,
          height: hovered ? 50 : 32,
          borderRadius: "50%",
          border: `1px solid rgba(215,218,42,${hovered ? .65 : .28})`,
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "width .35s cubic-bezier(.16,1,.3,1), height .35s cubic-bezier(.16,1,.3,1), border-color .25s",
          willChange: "transform",
        }}
      />
    </>
  );
}
