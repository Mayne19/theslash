"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import SlashTitle from "@/components/SlashTitle";

interface AccordionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

interface ServiceAccordionProps {
  items: AccordionItem[];
  grayTitle?: string;
  blackTitle?: string;
}

export default function ServiceAccordion({ items, grayTitle = "nos services", blackTitle = "en détail" }: ServiceAccordionProps) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ backgroundColor: "#F5F0E8", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

        {/* Header row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(40px, 6vw, 80px)",
          marginBottom: "48px",
          alignItems: "flex-end",
        }}
        className="accordion-header"
        >
          <div>
            <SlashTitle gray={grayTitle} black={blackTitle} />
          </div>
          <p style={{
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontSize: "1rem",
            color: "#6B7280",
            lineHeight: 1.7,
            maxWidth: "420px",
          }}>
            Chaque service est conçu pour répondre à un besoin précis. Nous choisissons la solution adaptée à votre situation.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={item.title}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "22px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      backgroundColor: isOpen ? "rgba(243,199,9,0.15)" : "rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#1A1A1A" : "#9CA3AF",
                      flexShrink: 0,
                      transition: "all 200ms",
                    }}>
                      {item.icon}
                    </div>
                    <span style={{
                      fontWeight: isOpen ? 700 : 500,
                      fontSize: "1.05rem",
                      color: isOpen ? "#1A1A1A" : "#6B7280",
                      transition: "all 200ms",
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0, color: isOpen ? "#1A1A1A" : "#C4BBAD" }}
                  >
                    <ChevronUp size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{
                        padding: "0 0 28px 52px",
                        fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      }}>
                        <p style={{
                          fontSize: "0.9rem",
                          color: "#6B7280",
                          lineHeight: 1.75,
                          marginBottom: "14px",
                        }}>
                          {item.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: "4px 12px",
                                backgroundColor: "rgba(243,199,9,0.12)",
                                borderRadius: "50px",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                color: "#1A1A1A",
                                border: "1px solid rgba(243,199,9,0.25)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={item.href}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "#1A1A1A",
                            textDecoration: "none",
                          }}
                        >
                          En savoir plus <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .accordion-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
