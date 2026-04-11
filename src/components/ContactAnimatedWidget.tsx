"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle, Clock, MessageSquare, Zap } from "lucide-react";

const notifications = [
  { icon: "✉️", title: "Nouveau message reçu", sub: "Demande de devis — Site vitrine", time: "maintenant" },
  { icon: "🚀", title: "Projet lancé", sub: "Landing page — Romain D.", time: "il y a 2 min" },
  { icon: "✅", title: "Devis envoyé", sub: "Application web — Startup Paris", time: "il y a 5 min" },
];

export default function ContactAnimatedWidget() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % notifications.length), 3500);
    return () => clearInterval(t);
  }, []);

  const notif = notifications[idx];

  return (
    <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", backgroundColor: "#1A1A1A", padding: "28px", aspectRatio: "3/4", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "var(--font-inter), -apple-system, sans-serif" }}>

      {/* Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E" }} />
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Disponible · Réponse sous 24h</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <img src="/logo-texte.png" alt="/ theslash" style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)", flexShrink: 0 }} />
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#ffffff" }}>/ theslash</p>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>Studio web francophone</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
          {[
            { icon: <CheckCircle size={14} />, label: "Projets livrés", value: "47+" },
            { icon: <Zap size={14} />, label: "Délai moyen", value: "4 sem." },
            { icon: <MessageSquare size={14} />, label: "Satisfaction", value: "4.9/5" },
            { icon: <Clock size={14} />, label: "Réponse", value: "< 24h" },
          ].map((s) => (
            <div key={s.label} style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "10px 12px" }}>
              <div style={{ color: "#F3C709", marginBottom: "4px" }}>{s.icon}</div>
              <p style={{ fontWeight: 800, fontSize: "0.95rem", color: "#ffffff" }}>{s.value}</p>
              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live notification */}
      <div>
        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Activité en direct</p>
        <div style={{ position: "relative", height: "64px", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(243,199,9,0.1)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(243,199,9,0.2)" }}
            >
              <span style={{ fontSize: "1.3rem" }}>{notif.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{notif.title}</p>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{notif.sub}</p>
              </div>
              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>{notif.time}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
