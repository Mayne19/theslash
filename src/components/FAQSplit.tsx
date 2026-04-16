"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SlashTitle from "@/components/SlashTitle";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSplitProps {
  items: FAQItem[];
  title?: string;
  grayTitle?: string;
  blackTitle?: string;
  imageUrl?: string;
  imageCaption?: string;
  imageComponent?: React.ReactNode;
  contactHref?: string;
}

export default function FAQSplit({
  items,
  title = "Questions fréquentes",
  grayTitle,
  blackTitle,
  imageUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  imageCaption = "Des questions ? On vous répond honnêtement, sans jargon.",
  imageComponent,
  contactHref = "/contact",
}: FAQSplitProps) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {grayTitle && blackTitle ? (
              <SlashTitle
                gray={grayTitle}
                black={blackTitle}
              />
            ) : (
              <h2 style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#1A1A1A",
                letterSpacing: "-0.03em",
              }}>
                {title}
              </h2>
            )}
          </div>
          {contactHref.startsWith("#") ? (
            <a
              href={contactHref}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(contactHref.slice(1));
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#1A1A1A",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
              }}
            >
              Nous contacter →
            </a>
          ) : (
            <Link
              href={contactHref}
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
              Nous contacter →
            </Link>
          )}
        </div>

        {/* Two columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "flex-start",
        }}
        className="faq-split-grid"
        >
          {/* Left: image/component + caption */}
          <div>
            {imageComponent ? (
              <div style={{ marginBottom: "16px" }}>{imageComponent}</div>
            ) : (
              <div style={{
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "16px",
                aspectRatio: "3/4",
              }}>
                <img
                  src={imageUrl}
                  alt="FAQ"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            )}
            {imageCaption && (
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.85rem",
                color: "#6B7280",
                lineHeight: 1.65,
              }}>
                {imageCaption}
              </p>
            )}
          </div>

          {/* Right: accordion */}
          <div>
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 0",
                      background: isOpen ? "transparent" : "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px",
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    }}
                  >
                    <span style={{
                      fontWeight: isOpen ? 700 : 500,
                      fontSize: "0.95rem",
                      color: isOpen ? "#1A1A1A" : "#4B5563",
                      lineHeight: 1.4,
                    }}>
                      {item.question}
                    </span>
                    <div style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "#1A1A1A" : "rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#ffffff" : "#6B7280",
                      transition: "all 200ms",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        {isOpen
                          ? <path d="M18 6L6 18M6 6l12 12" />
                          : <path d="M12 5v14M5 12h14" />
                        }
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{
                          paddingBottom: "20px",
                          fontFamily: "var(--font-inter), -apple-system, sans-serif",
                          fontSize: "0.9rem",
                          color: "#6B7280",
                          lineHeight: 1.75,
                        }}>
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .faq-split-grid { grid-template-columns: 1fr !important; }
          .faq-split-grid > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
