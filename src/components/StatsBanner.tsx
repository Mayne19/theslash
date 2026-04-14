"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItem {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Projets livrés" },
  { value: 4.9, suffix: "★", label: "Satisfaction client", decimals: 1 },
  { value: 340, suffix: "%", label: "Croissance moyenne" },
  { value: 24, suffix: "h", label: "Délai de réponse" },
];

function Counter({ item, trigger }: { item: StatItem; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * item.value).toFixed(item.decimals ?? 0)));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, item.value, item.decimals]);

  const display = item.decimals ? count.toFixed(item.decimals) : Math.floor(count);

  return (
    <span>
      {item.prefix}{display}{item.suffix}
    </span>
  );
}

export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "48px 0",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 clamp(20px, 3vw, 44px)",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px",
      }}
      className="stats-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              color: "#1A1A1A",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "8px",
            }}>
              <Counter item={s} trigger={isInView} />
            </div>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.85rem",
              color: "#9CA3AF",
              fontWeight: 500,
            }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
