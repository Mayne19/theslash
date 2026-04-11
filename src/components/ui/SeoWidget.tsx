"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Performance", value: 98, color: "#22C55E" },
  { label: "SEO", value: 94, color: "#F3C709" },
  { label: "Accessibilité", value: 91, color: "#3B82F6" },
];

const r = 44;
const cx = 60;
const cy = 60;
const circumference = 2 * Math.PI * r;

export default function SeoWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.09)",
        width: "100%",
        maxWidth: "360px",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
        <p style={{ fontSize: "0.72rem", color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Score SEO
        </p>
        <span style={{ fontSize: "0.68rem", backgroundColor: "rgba(34,197,94,0.1)", color: "#22C55E", fontWeight: 600, padding: "3px 8px", borderRadius: "50px" }}>
          Excellent
        </span>
      </div>

      {/* SVG Circle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ position: "relative", width: "160px", height: "160px" }}>
          <svg width="160" height="160" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F0EDE8" strokeWidth="8" />
            <motion.circle
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="#F3C709"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={isInView ? { strokeDashoffset: circumference * (1 - 0.94) } : { strokeDashoffset: circumference }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
            />
          </svg>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: "2.6rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1, letterSpacing: "-0.04em" }}>94</span>
            <span style={{ fontSize: "0.68rem", color: "#9CA3AF", marginTop: "2px" }}>/ 100</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {metrics.map((m, idx) => (
          <div key={m.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <span style={{ fontSize: "0.75rem", color: "#1A1A1A", fontWeight: 500 }}>{m.label}</span>
              <span style={{ fontSize: "0.75rem", color: m.color, fontWeight: 700 }}>{m.value}</span>
            </div>
            <div style={{ height: "5px", backgroundColor: "#F0EDE8", borderRadius: "3px", overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${m.value}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                style={{ height: "100%", backgroundColor: m.color, borderRadius: "3px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
