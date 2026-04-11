"use client";

import { useState, useEffect } from "react";

const REACTIONS = [
  { emoji: "😔", label: "Pas utile" },
  { emoji: "😐", label: "Correct" },
  { emoji: "😄", label: "Très utile" },
];

const BASE_COUNTS = [4, 11, 38];

export default function ArticleReactions({ slug }: { slug: string }) {
  const storageKey = `reaction_${slug}`;
  const [selected, setSelected] = useState<number | null>(null);
  const [counts, setCounts] = useState<number[]>(BASE_COUNTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      const idx = Number(saved);
      setSelected(idx);
      setCounts(BASE_COUNTS.map((c, i) => (i === idx ? c + 1 : c)));
    }
    setReady(true);
  }, [storageKey]);

  function vote(i: number) {
    if (selected !== null) return;
    localStorage.setItem(storageKey, String(i));
    setSelected(i);
    setCounts((prev) => prev.map((c, idx) => (idx === i ? c + 1 : c)));
  }

  if (!ready) return null;

  return (
    <div style={{
      margin: "48px 0",
      padding: "28px 24px",
      backgroundColor: "#F5F0E8",
      borderRadius: "16px",
      textAlign: "center",
      fontFamily: "var(--font-inter), -apple-system, sans-serif",
    }}>
      <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#6B7280", marginBottom: "20px" }}>
        {selected !== null ? "Merci pour votre retour !" : "Cet article vous a été utile ?"}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
        {REACTIONS.map((r, i) => (
          <button
            key={i}
            onClick={() => vote(i)}
            disabled={selected !== null}
            style={{
              background: "none",
              border: "none",
              cursor: selected !== null ? "default" : "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              borderRadius: "12px",
              transition: "all 180ms ease",
              opacity: selected !== null && selected !== i ? 0.35 : 1,
              transform: selected === i ? "scale(1.12)" : "scale(1)",
              outline: selected === i ? "2px solid #F3C709" : "none",
              outlineOffset: "2px",
            }}
          >
            <span style={{ fontSize: selected === i ? "2rem" : "1.6rem", lineHeight: 1, transition: "font-size 180ms" }}>
              {r.emoji}
            </span>
            <span style={{
              fontSize: "0.72rem",
              fontWeight: selected === i ? 700 : 500,
              color: selected === i ? "#1A1A1A" : "#9CA3AF",
            }}>
              {counts[i]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
