"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const metrics = [
  { label: "Performance", value: 98, color: "#22C55E", badge: "Excellent" },
  { label: "SEO", value: 94, color: "#F3C709", badge: "Excellent" },
  { label: "Accessibilité", value: 91, color: "#3B82F6", badge: "Très bon" },
];

const r = 44;
const cx = 60;
const cy = 60;
const circumference = 2 * Math.PI * r;

export default function SeoWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(1); // SEO par défaut

  const m = metrics[active];

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
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
        <p style={{ fontSize: "0.72rem", color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Score {m.label}
        </p>
        <motion.span
          key={active}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            fontSize: "0.68rem",
            backgroundColor: `${m.color}18`,
            color: m.color,
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: "50px",
          }}
        >
          {m.badge}
        </motion.span>
      </div>

      {/* SVG Circle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ position: "relative", width: "160px", height: "160px" }}>
          <svg width="160" height="160" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F0EDE8" strokeWidth="8" />
            <AnimatePresence mode="wait">
              <motion.circle
                key={active}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={m.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={isInView ? { strokeDashoffset: circumference * (1 - m.value / 100) } : { strokeDashoffset: circumference }}
                exit={{ strokeDashoffset: circumference }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </AnimatePresence>
          </svg>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                style={{ fontSize: "2.6rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                {m.value}
              </motion.span>
            </AnimatePresence>
            <span style={{ fontSize: "0.68rem", color: "#9CA3AF", marginTop: "2px" }}>/ 100</span>
          </div>
        </div>
      </div>

      {/* Clickable metrics */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {metrics.map((metric, idx) => (
          <button
            key={metric.label}
            onClick={() => setActive(idx)}
            style={{
              background: active === idx ? `${metric.color}10` : "none",
              border: active === idx ? `1px solid ${metric.color}40` : "1px solid transparent",
              borderRadius: "10px",
              padding: "8px 10px",
              cursor: "pointer",
              transition: "all 150ms",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <span style={{ fontSize: "0.75rem", color: active === idx ? "#1A1A1A" : "#6B7280", fontWeight: active === idx ? 700 : 500 }}>
                {metric.label}
              </span>
              <span style={{ fontSize: "0.75rem", color: metric.color, fontWeight: 700 }}>{metric.value}</span>
            </div>
            <div style={{ height: "5px", backgroundColor: "#F0EDE8", borderRadius: "3px", overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${metric.value}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                style={{ height: "100%", backgroundColor: metric.color, borderRadius: "3px" }}
              />
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
