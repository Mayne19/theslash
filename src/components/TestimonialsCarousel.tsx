"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Camille R.",
    title: "Coach business & formatrice",
    initials: "CR",
    avatarColor: "#F3C709",
    company: "Studio CR",
    companyColor: "#F3C709",
    headline: "Mon trafic a triplé en 4 mois.",
    quote:
      "J'avais un site WordPress vieillissant qui ne ramenait personne. En 6 semaines, / theslash a livré un site moderne, rapide et optimisé. Mon trafic a plus que triplé, c'est mon meilleur investissement de l'année.",
    result: "+210% trafic",
  },
  {
    name: "Marc D.",
    title: "Consultant RH indépendant",
    initials: "MD",
    avatarColor: "#3B82F6",
    company: "Marc Duplessis Conseil",
    companyColor: "#3B82F6",
    headline: "ROI atteint dès le 3e mois.",
    quote:
      "On m'avait cité 8 000€ ailleurs pour un résultat similaire. Avec / theslash, j'ai eu un site qui représente vraiment mon niveau de service. Mes prospects arrivent déjà qualifiés, ils ont vu le site, ils sont convaincus.",
    result: "ROI en 3 mois",
  },
  {
    name: "Élise T.",
    title: "Fondatrice e-commerce mode",
    initials: "ET",
    avatarColor: "#22C55E",
    company: "Maison Élise",
    companyColor: "#22C55E",
    headline: "Le site convertit parce qu'il a été pensé pour ça.",
    quote:
      "Ce qui m'a bluffé, c'est la méthode. Pas juste du design, une vraie réflexion sur ma cible, mes messages, mes CTA. Je recommande sans hésitation à tous les entrepreneurs qui veulent un site qui travaille pour eux.",
    result: "4,9★ satisfaction",
  },
];

const clientLogos = ["Freelance", "E-commerce", "Coaching", "Consulting", "SaaS"];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function navigate(dir: number) {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}>
              <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
              <span style={{ color: "#A0A0A0", fontWeight: 700 }}>clients </span>
              <span style={{ color: "#1A1A1A", fontWeight: 800 }}>satisfaits</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a
              href="/contact"
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#1A1A1A",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Démarrer un projet →
            </a>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => navigate(-1)}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,0,0,0.08)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1A1A1A",
                  transition: "background-color 200ms",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => navigate(1)}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#1A1A1A",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  transition: "background-color 200ms",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div style={{ overflow: "hidden", borderRadius: "24px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ x: direction * 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "clamp(28px, 5vw, 48px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
              }}
            >
              {/* Author top */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: t.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#1A1A1A",
                  }}>
                    {t.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontSize: "0.8rem",
                    color: "#9CA3AF",
                  }}>
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Headline */}
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                color: "#1A1A1A",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}>
                &ldquo;{t.headline}&rdquo;
              </p>

              {/* Full quote */}
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1rem",
                color: "#6B7280",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}>
                {t.quote}
              </p>

              {/* Company + result */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: t.companyColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#1A1A1A",
                  }}>
                    {t.initials[0]}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#1A1A1A",
                  }}>
                    {t.company}
                  </span>
                </div>
                <span style={{
                  padding: "5px 14px",
                  backgroundColor: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#22C55E",
                }}>
                  {t.result}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === current ? "#1A1A1A" : "rgba(0,0,0,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms",
              }}
            />
          ))}
        </div>

        {/* Client logos */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(20px, 4vw, 48px)",
          marginTop: "48px",
          flexWrap: "wrap",
          opacity: 0.4,
        }}>
          {clientLogos.map((logo) => (
            <span
              key={logo}
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
              }}
            >
              {logo}™
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
