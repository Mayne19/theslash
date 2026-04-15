"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-inter), -apple-system, sans-serif", padding: "0 24px", textAlign: "center" }}>
      <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "16px" }}>Erreur</p>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#1A1A1A", letterSpacing: "-0.03em", marginBottom: "16px" }}>
        Quelque chose s&apos;est mal passé.
      </h1>
      <p style={{ fontSize: "1rem", color: "#6B7280", marginBottom: "32px", maxWidth: "480px", lineHeight: 1.7 }}>
        Une erreur inattendue s&apos;est produite. Vous pouvez réessayer ou revenir à l&apos;accueil.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={reset}
          style={{ padding: "12px 28px", backgroundColor: "#1A1A1A", color: "#fff", borderRadius: "50px", border: "none", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}
        >
          Réessayer
        </button>
        <a href="/" style={{ padding: "12px 28px", backgroundColor: "transparent", color: "#1A1A1A", borderRadius: "50px", border: "1px solid rgba(0,0,0,0.15)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
          Accueil
        </a>
      </div>
    </div>
  );
}
