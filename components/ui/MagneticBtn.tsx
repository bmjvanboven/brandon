"use client";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticBtn({ children, className, href, onClick, strength = 0.22 }: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) * strength;
    const dy = (e.clientY - r.top  - r.height / 2) * strength;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  };

  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const shared = {
    ref,
    className,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { transition: "transform .35s cubic-bezier(.16,1,.3,1), box-shadow .25s" } as React.CSSProperties,
  };

  if (href) return <motion.a href={href} whileHover={{ y: -2 }} whileTap={{ scale: .97 }} {...shared}>{children}</motion.a>;
  return <motion.button onClick={onClick} whileHover={{ y: -2 }} whileTap={{ scale: .97 }} {...shared}>{children}</motion.button>;
}
