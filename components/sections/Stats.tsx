"use client";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: 200, suffix: "+", label: "Projecten afgerond" },
  { value: 8,   suffix: " jaar", label: "Ervaring in het vak" },
  { value: 100, suffix: "%", label: "Klanten tevreden" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ padding: "0 0 80px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <div
            style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 28, padding: "44px 0", background: "linear-gradient(160deg, rgba(255,255,255,.03), rgba(255,255,255,.01))", display: "grid", position: "relative", overflow: "hidden" }}
            className="stats-grid"
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(215,218,42,.05), transparent)", pointerEvents: "none" }} />
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "0 40px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.07)" : "none", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(32px,3.8vw,52px)", fontWeight: 900, letterSpacing: "-.055em", lineHeight: 1, color: "#fff" }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: "#555", fontSize: 14, fontWeight: 600, marginTop: 10, letterSpacing: ".01em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <style>{`
        .stats-grid { grid-template-columns: repeat(3,1fr) }
        @media (max-width:720px) {
          .stats-grid { grid-template-columns: 1fr !important; gap: 32px; padding: 36px 0 !important }
          .stats-grid > div { border-left: none !important; padding: 0 24px !important }
        }
      `}</style>
    </section>
  );
}
