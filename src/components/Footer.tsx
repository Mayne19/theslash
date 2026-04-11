"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/creation-site-web-professionnel", label: "Création site web" },
  { href: "/services/landing-page", label: "Landing page" },
  { href: "/services/site-vitrine", label: "Site vitrine" },
  { href: "/services/refonte-site-web", label: "Refonte de site" },
  { href: "/services/app-web-sur-mesure", label: "Application web" },
  { href: "/services/site-no-code", label: "Site Webflow / No-code" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111", color: "#ffffff" }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "72px clamp(20px, 3vw, 44px) 0",
      }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "48px",
          marginBottom: "56px",
        }}
        className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <img src="/logo-texte.png" alt="/ theslash" style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.875rem",
              color: "#6B7280",
              lineHeight: 1.75,
              maxWidth: "260px",
              marginBottom: "20px",
            }}>
              Studio web francophone, nous créons des sites qui attirent, convainquent et convertissent.
            </p>
            <a
              href="mailto:hello@theslash.fr"
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.875rem",
                color: "#F3C709",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              hello@theslash.fr
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#4B5563",
              marginBottom: "16px",
            }}>
              Navigation
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontSize: "0.875rem",
                      color: "#9CA3AF",
                      textDecoration: "none",
                      transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#4B5563",
              marginBottom: "16px",
            }}>
              Services
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontSize: "0.875rem",
                      color: "#9CA3AF",
                      textDecoration: "none",
                      transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#4B5563",
              marginBottom: "16px",
            }}>
              Newsletter
            </h3>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.8rem",
              color: "#6B7280",
              lineHeight: 1.65,
              marginBottom: "16px",
            }}>
              Conseils web, SEO et design chaque semaine. Pas de spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <input
                type="email"
                placeholder="votre@email.com"
                style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontSize: "0.875rem",
                  padding: "11px 14px",
                  borderRadius: "10px",
                  border: "1px solid #2D2D2D",
                  backgroundColor: "#1A1A1A",
                  color: "#ffffff",
                  outline: "none",
                  width: "100%",
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  padding: "11px 14px",
                  borderRadius: "10px",
                  backgroundColor: "#F3C709",
                  color: "#1A1A1A",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "opacity 200ms",
                }}
              >
                S&apos;inscrire <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #1F2937",
          padding: "24px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontSize: "0.78rem",
            color: "#4B5563",
          }}>
            © 2026 / theslash. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href="/mentions-legales"
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.78rem",
                color: "#4B5563",
                textDecoration: "none",
                transition: "color 150ms",
              }}
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.78rem",
                color: "#4B5563",
                textDecoration: "none",
                transition: "color 150ms",
              }}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
