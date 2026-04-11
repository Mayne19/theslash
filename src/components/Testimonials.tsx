"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    result: "+210% de trafic",
    resultColor: "#22C55E",
    quote:
      "J'avais un site WordPress vieillissant qui ne ramenait personne. En 6 semaines, / theslash a livré un site moderne, rapide et optimisé. Mon trafic a plus que triplé en 4 mois. C'est mon meilleur investissement de l'année.",
    name: "Camille R.",
    title: "Coach business & formatrice",
    initials: "CR",
    avatarColor: "#F3C709",
  },
  {
    result: "ROI en 3 mois",
    resultColor: "#3B82F6",
    quote:
      "On m'avait cité 8 000€ ailleurs pour un résultat similaire. Avec / theslash, j'ai eu un site qui représente vraiment mon niveau de service. Mes prospects arrivent déjà qualifiés, ils ont vu le site, ils sont convaincus.",
    name: "Marc D.",
    title: "Consultant RH indépendant",
    initials: "MD",
    avatarColor: "#3B82F6",
  },
  {
    result: "4,9★ satisfaction",
    resultColor: "#F3C709",
    quote:
      "Ce qui m'a bluffé, c'est la méthode. Pas juste du design, une vraie réflexion sur ma cible, mes messages, mes CTA. Le site convertit parce qu'il a été pensé pour ça. Je recommande sans hésitation.",
    name: "Élise T.",
    title: "Fondatrice e-commerce mode",
    initials: "ET",
    avatarColor: "#22C55E",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-block",
            padding: "6px 16px",
            backgroundColor: "rgba(243,199,9,0.12)",
            border: "1px solid rgba(243,199,9,0.3)",
            borderRadius: "50px",
            marginBottom: "20px",
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            color: "#1A1A1A",
          }}>
            Ils nous font confiance
          </div>
          <h2 style={{
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
            <span style={{ color: "#A0A0A0", fontWeight: 700 }}>des résultats qui </span>
            <span style={{ color: "#1A1A1A", fontWeight: 800 }}>parlent d&apos;eux-mêmes</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontSize: "1.05rem",
            color: "#6B7280",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Ce que nos clients disent après avoir travaillé avec nous.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
        className="testimonial-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: "#F8F6F0",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Result badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                backgroundColor: `${t.resultColor}15`,
                border: `1px solid ${t.resultColor}30`,
                borderRadius: "50px",
                marginBottom: "16px",
                alignSelf: "flex-start",
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: t.resultColor }} />
                <span style={{
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: t.resultColor,
                  letterSpacing: "0.02em",
                }}>
                  {t.result}
                </span>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#F3C709", fontSize: "0.85rem" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.9rem",
                color: "#374151",
                lineHeight: 1.75,
                flex: 1,
                marginBottom: "20px",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: t.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.72rem",
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
                    fontSize: "0.85rem",
                    color: "#1A1A1A",
                  }}>
                    {t.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontSize: "0.75rem",
                    color: "#9CA3AF",
                  }}>
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
