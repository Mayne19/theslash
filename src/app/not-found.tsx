import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page introuvable — theslash" },
};

export default function NotFound() {
  return (
    <section style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 100%)",
      padding: "80px clamp(20px, 3vw, 44px)",
      fontFamily: "var(--font-inter), -apple-system, sans-serif",
    }}>
      <div style={{ textAlign: "center", maxWidth: "560px" }}>
        <p style={{
          fontSize: "clamp(5rem, 15vw, 9rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          lineHeight: 1,
          marginBottom: "8px",
          color: "#1A1A1A",
        }}>
          <span style={{ color: "#F3C709" }}>4</span>0<span style={{ color: "#F3C709" }}>4</span>
        </p>
        <p style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#9CA3AF",
          marginBottom: "24px",
        }}>
          Page introuvable
        </p>
        <h1 style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 800,
          color: "#1A1A1A",
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
          marginBottom: "16px",
        }}>
          Cette page n&apos;existe pas (ou plus).
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "#6B7280",
          lineHeight: 1.75,
          marginBottom: "40px",
        }}>
          Vous avez peut-être suivi un lien obsolète, ou tapé une URL incorrecte. Pas de panique.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              backgroundColor: "#1A1A1A",
              color: "#ffffff",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              backgroundColor: "transparent",
              color: "#1A1A1A",
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.15)",
            }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
