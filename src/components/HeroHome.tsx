"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StatWidget from "@/components/ui/StatWidget";
import LeadNotification from "@/components/ui/LeadNotification";

const rotatingWords = ["attire.", "convainc.", "convertit."];

export default function HeroHome() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #F5F0E8 0%, #FDF8ED 60%, #F5F0E8 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "88px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft background accent */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "5%",
        width: "480px",
        height: "480px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(243,199,9,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        padding: "0 clamp(20px, 3vw, 44px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px, 6vw, 80px)",
        alignItems: "center",
      }}
      className="hero-grid"
      >
        {/* LEFT — Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 16px",
              backgroundColor: "rgba(243,199,9,0.12)",
              border: "1px solid rgba(243,199,9,0.3)",
              borderRadius: "50px",
              marginBottom: "28px",
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontWeight: 600,
              fontSize: "0.78rem",
              color: "#1A1A1A",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#F3C709", display: "inline-block" }}
            />
            Studio web · Disponible pour nouveaux projets
          </motion.div>

          {/* H1 */}
          <div style={{ marginBottom: "24px" }}>
            {/* Line 1: static */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-inter), -apple-system, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.035em",
                  color: "#1A1A1A",
                  lineHeight: 1.08,
                  marginBottom: "2px",
                }}
              >
                Créer un site web qui
              </motion.h1>
            </div>

            {/* Line 2: animated rotating word — fixed height so nothing shifts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                height: "1.15em",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 800,
                    fontSize: "1em",
                    letterSpacing: "-0.035em",
                    color: "#F3C709",
                    lineHeight: 1.08,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {rotatingWords[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "#6B7280",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "36px",
            }}
          >
            Notre studio conçoit des sites web modernes, performants et pensés pour convertir, pour les
            entrepreneurs, freelances et marques francophones.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.66 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 30px",
                backgroundColor: "#1A1A1A",
                color: "#ffffff",
                borderRadius: "50px",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F3C709";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A1A1A";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              }}
            >
              Démarrer un projet
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 30px",
                backgroundColor: "transparent",
                color: "#1A1A1A",
                borderRadius: "50px",
                border: "2px solid rgba(26,26,26,0.2)",
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1A1A1A";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A1A1A";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,26,26,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
              }}
            >
              Voir nos services
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Widgets: StatWidget fixed at top, LeadNotification reserved space at bottom */}
        <div className="hero-widgets" style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-end",
        }}>
          {/* StatWidget — always fixed, never moves */}
          <StatWidget />
          {/* LeadNotification wrapper — fixed minHeight so StatWidget never shifts */}
          <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            minHeight: "72px",
            alignItems: "flex-start",
          }}>
            <LeadNotification />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "50px",
            border: "2px solid rgba(26,26,26,0.15)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
          }}
        >
          <div style={{ width: "4px", height: "8px", backgroundColor: "rgba(26,26,26,0.3)", borderRadius: "2px" }} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-widgets {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
