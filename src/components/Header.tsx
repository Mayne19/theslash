"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks: { href: string; label: string; exact?: boolean }[] = [
  { href: "/", label: "Accueil", exact: true },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          backgroundColor: scrolled ? "rgba(245,240,232,0.90)" : "#F5F0E8",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
          transition: "background-color 300ms, border-color 300ms, box-shadow 300ms",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
              <img src="/icon.svg" alt="/ theslash" style={{ height: "32px", width: "32px" }} />
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: "40px" }} className="hidden-mobile">
              {navLinks.map((link) => {
                const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontWeight: active ? 600 : 500,
                      fontSize: "0.9375rem",
                      color: active ? "#1A1A1A" : "#6B7280",
                      textDecoration: "none",
                      transition: "color 150ms",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = active ? "#1A1A1A" : "#6B7280"; }}
                  >
                    {link.label}
                    {active && (
                      <span style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "#F3C709",
                        borderRadius: "2px",
                      }} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Link
                href="/contact"
                className="hidden-mobile"
                style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  backgroundColor: "#1A1A1A",
                  color: "#ffffff",
                  borderRadius: "50px",
                  padding: "10px 22px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F3C709";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A1A1A";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                }}
              >
                Démarrer un projet
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="show-mobile"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  backgroundColor: mobileOpen ? "#E8E3DA" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 150ms",
                }}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              zIndex: 40,
              backgroundColor: "#F5F0E8",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px clamp(20px, 3vw, 44px)", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: (link.exact ? pathname === link.href : pathname.startsWith(link.href)) ? "#1A1A1A" : "#6B7280",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    backgroundColor: (link.exact ? pathname === link.href : pathname.startsWith(link.href)) ? "rgba(243,199,9,0.12)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  backgroundColor: "#1A1A1A",
                  color: "#ffffff",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
