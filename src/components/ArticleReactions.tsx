"use client";

import { useState } from "react";

const emojis = ["😔", "😐", "😄"];

export default function ArticleReactions() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div style={{
      margin: "48px 0",
      padding: "28px 24px",
      backgroundColor: "#F5F0E8",
      borderRadius: "16px",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
        fontSize: "0.88rem",
        fontWeight: 600,
        color: "#6B7280",
        marginBottom: "16px",
      }}>
        Cet article vous a été utile ?
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {emojis.map((emoji, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              lineHeight: 1,
              fontSize: selected !== null && selected !== i ? "1.5rem" : "2rem",
              filter: selected !== null && selected !== i ? "grayscale(100%)" : "none",
              opacity: selected !== null && selected !== i ? 0.4 : 1,
              transform: selected === i ? "scale(1.1)" : "scale(1)",
              transition: "all 180ms ease",
            }}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
