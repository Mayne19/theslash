import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Home, Mail, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page introuvable — theslash" },
};

const suggestions = [
  { href: "/", icon: <Home size={16} />, label: "Accueil" },
  { href: "/services", icon: <Layers size={16} />, label: "Nos services" },
  { href: "/blog", icon: <BookOpen size={16} />, label: "Blog" },
  { href: "/contact", icon: <Mail size={16} />, label: "Contact" },
];

export default function NotFound() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(160deg, #F5F0E8 0%, #FDF8ED 60%, #F5F0E8 100%)",
      padding: "80px clamp(20px, 3vw, 44px)",
      fontFamily: "var(--font-inter), -apple-system, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Decorative background number */}
      <p style={{
        position: "absolute",
        fontSize: "clamp(18rem, 40vw, 32rem)",
        fontWeight: 900,
        letterSpacing: "-0.06em",
        color: "rgba(0,0,0,0.035)",
        lineHeight: 1,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        userSelect: "none",
        pointerEvents: "none",
        margin: 0,
      }}>
        404
      </p>

      <div style={{ textAlign: "center", maxWidth: "600px", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(5rem, 18vw, 12rem)",
          fontWeight: 900,
          color: "#1A1A1A",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          marginBottom: "20px",
        }}>
          404
        </h1>

        <p style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 800,
          color: "#1A1A1A",
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
          marginBottom: "20px",
        }}>
          Cette page a disparu<br />
          <span style={{ color: "#A0A0A0", fontWeight: 700 }}>quelque part sur internet.</span>
        </p>

        <p style={{
          fontSize: "1rem",
          color: "#6B7280",
          lineHeight: 1.8,
          marginBottom: "48px",
          maxWidth: "460px",
          margin: "0 auto 48px",
        }}>
          Lien cassé, page supprimée ou URL incorrecte — dans tous les cas, vous n&apos;êtes pas au bon endroit. Voici où aller :
        </p>

        {/* Suggestions grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          marginBottom: "36px",
        }}>
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 18px",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "14px",
                textDecoration: "none",
                color: "#1A1A1A",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "box-shadow 150ms, transform 150ms",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <span style={{ color: "#F3C709" }}>{s.icon}</span>
              {s.label}
              <ArrowRight size={14} style={{ marginLeft: "auto", color: "#D1D5DB" }} />
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
