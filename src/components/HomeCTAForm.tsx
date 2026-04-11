"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HomeCTAForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "10px",
    fontFamily: "var(--font-inter), -apple-system, sans-serif",
    fontSize: "0.88rem",
    color: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  if (sent) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", padding: "48px 0", textAlign: "center" }}>
        <CheckCircle size={40} color="#F3C709" strokeWidth={1.5} />
        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#ffffff" }}>Message envoyé !</p>
        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
          On revient vers vous sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ display: "block", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Prénom</label>
          <input required type="text" placeholder="Marie" style={inputStyle} />
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Nom</label>
          <input required type="text" placeholder="Dupont" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Email</label>
        <input required type="email" placeholder="marie@exemple.fr" style={inputStyle} />
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Votre projet en quelques mots</label>
        <textarea required rows={3} placeholder="Je cherche à créer un site vitrine pour mon activité de coach..." style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }} />
      </div>
      <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px", backgroundColor: "#F3C709", color: "#1A1A1A", borderRadius: "50px", border: "none", cursor: "pointer", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 700, fontSize: "0.9rem", marginTop: "4px" }}>
        Envoyer ma demande <ArrowRight size={15} />
      </button>
    </form>
  );
}
