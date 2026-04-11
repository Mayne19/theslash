"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const bars = [28, 42, 35, 58, 48, 72, 95];

export default function StatWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
    const target = 12400;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "22px 24px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
        width: "100%",
        maxWidth: "400px",
        position: "relative",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
      }}
    >
      {/* Live indicator */}
      <div style={{ position: "absolute", top: "14px", right: "16px", display: "flex", alignItems: "center", gap: "5px" }}>
        <motion.div
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#22C55E" }}
        />
        <span style={{ fontSize: "0.68rem", color: "#22C55E", fontWeight: 600, letterSpacing: "0.02em" }}>LIVE</span>
      </div>

      <p style={{ fontSize: "0.72rem", color: "#9CA3AF", fontWeight: 500, marginBottom: "6px", letterSpacing: "0.02em" }}>
        Trafic organique
      </p>

      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "2px" }}>
        <span style={{ fontSize: "2rem", fontWeight: 800, color: "#1A1A1A", letterSpacing: "-0.04em", lineHeight: 1 }}>
          {count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count}
        </span>
        <span style={{ fontSize: "0.78rem", color: "#22C55E", fontWeight: 700, display: "flex", alignItems: "center", gap: "3px" }}>
          <TrendingUp size={12} />
          +127%
        </span>
      </div>
      <p style={{ fontSize: "0.7rem", color: "#9CA3AF", marginBottom: "18px" }}>visiteurs ce mois</p>

      {/* Bar chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "56px" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: "56px", display: "flex", alignItems: "flex-end" }}>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.45, delay: isInView ? 0.08 * i + 0.3 : 0, ease: "easeOut" }}
              style={{
                width: "100%",
                height: `${h}%`,
                backgroundColor: i === bars.length - 1 ? "#F3C709" : (i === bars.length - 2 ? "rgba(243,199,9,0.35)" : "#F0EDE8"),
                borderRadius: "4px 4px 0 0",
                transformOrigin: "bottom",
                minHeight: "4px",
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #F0EDE8", marginTop: "10px", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
        {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
          <span key={i} style={{ flex: 1, textAlign: "center", fontSize: "0.6rem", color: "#C4BBAD" }}>{d}</span>
        ))}
      </div>
    </motion.div>
  );
}
