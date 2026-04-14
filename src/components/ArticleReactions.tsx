"use client";

import { useState, useEffect } from "react";

const REACTIONS = [
  { emoji: "😔", label: "Pas utile" },
  { emoji: "😐", label: "Correct" },
  { emoji: "😄", label: "Très utile" },
];

export default function ArticleReactions({ slug }: { slug: string }) {
  const storageKey = `reaction_${slug}`;
  const [selected, setSelected] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      setSelected(Number(saved));
    }
    setReady(true);
  }, [storageKey]);

  function vote(i: number) {
    localStorage.setItem(storageKey, String(i));
    setSelected(i);
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
      {selected !== null && (
        <p style={{ fontSize: "0.75rem", color: "#C4BBAD", marginTop: "-12px", marginBottom: "16px" }}>
          Vous pouvez changer votre avis
        </p>
      )}
      <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
        {REACTIONS.map((r, i) => (
          <button
            key={i}
            onClick={() => vote(i)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              borderRadius: "12px",
              transition: "all 180ms ease",
              transform: selected === i ? "scale(1.15)" : "scale(1)",
            }}
          >
            <span style={{
              fontSize: selected === i ? "2rem" : "1.6rem",
              lineHeight: 1,
              transition: "all 180ms ease",
              filter: selected !== null && selected !== i ? "grayscale(1) opacity(0.4)" : "none",
            }}>
              {r.emoji}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
