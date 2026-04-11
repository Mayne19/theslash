"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface ArticleFAQProps {
  items: FAQItem[];
}

export default function ArticleFAQ({ items }: ArticleFAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section style={{ backgroundColor: "#F5F0E8", padding: "72px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "#1A1A1A",
            letterSpacing: "-0.03em",
            marginBottom: "36px",
            lineHeight: 1.2,
          }}>
            <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
            <span style={{ color: "#A0A0A0", fontWeight: 700 }}>questions</span>{" "}
            <span style={{ color: "#1A1A1A", fontWeight: 800 }}>fréquentes</span>
          </h2>

          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "18px 0",
                    background: "none", border: "none", cursor: "pointer",
                    textAlign: "left", gap: "16px",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: isOpen ? 700 : 500,
                    fontSize: "0.92rem",
                    color: isOpen ? "#1A1A1A" : "#4B5563",
                    lineHeight: 1.4,
                  }}>
                    {item.q}
                  </span>
                  <div style={{
                    flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%",
                    backgroundColor: isOpen ? "#1A1A1A" : "rgba(0,0,0,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isOpen ? "#ffffff" : "#6B7280", transition: "all 200ms",
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M12 5v14M5 12h14" />}
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <p style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.75,
                    paddingBottom: "18px",
                  }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
