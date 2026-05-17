"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  text?: string;
  cta?: string;
  ctaHref?: string;
  secondary?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Prêt à créer un site qui convertit vraiment ?",
  text = "Vous avez un projet, une idée ou un site à refaire. Discutons-en. Sans engagement, sans jargon, juste une conversation honnête sur ce que vous voulez accomplir.",
  cta = "Démarrer un projet",
  ctaHref = "/contact",
  secondary,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section style={{ backgroundColor: "#F3C709", padding: "96px 0" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 clamp(20px, 3vw, 44px)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.05rem, 4.75vw, 3.6rem)",
          color: "#1A1A1A",
          letterSpacing: "-0.03em",
          marginBottom: "20px",
          lineHeight: 1.15,
        }}>
          {title}
        </h2>
        <p style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontSize: "1.1rem",
          color: "rgba(26,26,26,0.7)",
          lineHeight: 1.7,
          marginBottom: "40px",
          maxWidth: "560px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          {text}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href={ctaHref}
            style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              backgroundColor: "#1A1A1A",
              color: "#ffffff",
              borderRadius: "50px",
              padding: "16px 36px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 200ms",
              boxShadow: "0 4px 0 rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 0 rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 0 rgba(0,0,0,0.25)";
            }}
          >
            {cta}
            <ArrowRight size={17} />
          </Link>
          {secondary && secondaryHref && (
            <Link
              href={secondaryHref}
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                backgroundColor: "transparent",
                color: "#1A1A1A",
                borderRadius: "50px",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid rgba(26,26,26,0.3)",
                transition: "all 200ms",
              }}
            >
              {secondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
