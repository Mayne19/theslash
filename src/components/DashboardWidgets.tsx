"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

function ProgressBar({ value, color, trigger }: { value: number; color: string; trigger: boolean }) {
  return (
    <div style={{ height: "6px", backgroundColor: "rgba(0,0,0,0.07)", borderRadius: "3px", overflow: "hidden" }}>
      <motion.div
        initial={{ width: 0 }}
        animate={trigger ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{ height: "100%", backgroundColor: color, borderRadius: "3px" }}
      />
    </div>
  );
}

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const dur = 1600;
    const start = Date.now();
    const t = setInterval(() => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p >= 1) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [trigger, target]);
  return <>{val}{suffix}</>;
}

export default function DashboardWidgets() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 3vw, 44px)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
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
            Ce que vous obtenez
          </div>
          <h2 style={{
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            letterSpacing: "-0.03em",
          }}>
            <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
            <span style={{ color: "#A0A0A0", fontWeight: 700 }}>des résultats </span>
            <span style={{ color: "#1A1A1A", fontWeight: 800 }}>mesurables</span>
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "16px",
        }}
        className="widget-grid"
        >
          {/* Widget 1, Score */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              backgroundColor: "#F8F6F0",
              borderRadius: "20px",
              padding: "24px",
              gridRow: "1",
              gridColumn: "1",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "4px" }}>
              <span style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "2.8rem",
                color: "#1A1A1A",
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}>
                <CountUp target={82} suffix="" trigger={isInView} />
              </span>
              <span style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "1rem",
                color: "#9CA3AF",
                marginBottom: "6px",
              }}>
                / 100
              </span>
              <TrendingUp size={18} style={{ color: "#22C55E", marginBottom: "6px", marginLeft: "4px" }} />
            </div>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.75rem",
              color: "#9CA3AF",
              marginBottom: "16px",
            }}>
              Score Core Web Vitals moyen
            </p>
            <ProgressBar value={82} color="#F3C709" trigger={isInView} />
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.7rem",
              color: "#C4BBAD",
              marginTop: "8px",
            }}>
              12 optimisations réalisées ce mois
            </p>
          </motion.div>

          {/* Widget 2, Photo + overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              gridRow: "1 / 3",
              gridColumn: "2",
              minHeight: "300px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80"
              alt="Satisfaction client"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
            }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "4px",
              }}>
                Satisfaction client
              </p>
              <p style={{
                fontFamily: "var(--font-inter), -apple-system, sans-serif",
                fontWeight: 800,
                fontSize: "3rem",
                color: "#ffffff",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}>
                <CountUp target={95} suffix="%" trigger={isInView} />
              </p>
            </div>
          </motion.div>

          {/* Widget 3, Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
              gridRow: "1",
              gridColumn: "3",
            }}
          >
            <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#F3C709", fontSize: "0.8rem" }}>★</span>)}
            </div>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.85rem",
              color: "#1A1A1A",
              lineHeight: 1.65,
              marginBottom: "14px",
              fontStyle: "italic",
            }}>
              &ldquo;Mon site génère des leads en continu. Meilleur investissement de l&apos;année.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#F3C709",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.62rem",
                fontWeight: 700,
                color: "#1A1A1A",
              }}>
                SM
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#1A1A1A" }}>Sophie M.</p>
                <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.68rem", color: "#9CA3AF" }}>Freelance</p>
              </div>
            </div>
          </motion.div>

          {/* Widget 4, Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            style={{
              backgroundColor: "#111111",
              borderRadius: "20px",
              padding: "24px",
              gridRow: "2",
              gridColumn: "1",
            }}
          >
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "16px",
              fontWeight: 500,
            }}>
              Temps économisé en moyenne
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {[
                { label: "Heures estimées", value: 240, suffix: "h" },
                { label: "Heures perdues évitées", value: 94, suffix: "h" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "#ffffff",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}>
                    <CountUp target={s.value} suffix={s.suffix} trigger={isInView} />
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter), -apple-system, sans-serif",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                  }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Widget 5, Result card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{
              backgroundColor: "#F3C709",
              borderRadius: "20px",
              padding: "24px",
              gridRow: "2",
              gridColumn: "3",
            }}
          >
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.72rem",
              color: "rgba(26,26,26,0.55)",
              marginBottom: "6px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}>
              Croissance trafic
            </p>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontWeight: 800,
              fontSize: "2.8rem",
              color: "#1A1A1A",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              marginBottom: "4px",
            }}>
              +340%
            </p>
            <p style={{
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.78rem",
              color: "rgba(26,26,26,0.6)",
            }}>
              Moyenne 12 premiers mois
            </p>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .widget-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .widget-grid > *:nth-child(2) {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
          }
          .widget-grid > * {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 480px) {
          .widget-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
