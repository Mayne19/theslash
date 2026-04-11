"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const leads = [
  { name: "Sophie M.", action: "vient de nous contacter", time: "à l'instant", avatar: "SM", color: "#F3C709" },
  { name: "Thomas L.", action: "a demandé un devis", time: "il y a 2 min", avatar: "TL", color: "#3B82F6" },
  { name: "Marie D.", action: "vient de nous contacter", time: "il y a 4 min", avatar: "MD", color: "#22C55E" },
];

export default function LeadNotification() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % leads.length);
        setVisible(true);
      }, 500);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const lead = leads[current];

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            padding: "12px 16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            maxWidth: "400px",
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: lead.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "#1A1A1A",
              flexShrink: 0,
            }}
          >
            {lead.avatar}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.2 }}>{lead.name}</p>
            <p style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: "2px", lineHeight: 1.2 }}>
              {lead.action} · {lead.time}
            </p>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
