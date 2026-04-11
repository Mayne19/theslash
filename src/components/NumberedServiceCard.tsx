"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface NumberedServiceCardProps {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function NumberedServiceCard({
  num,
  icon,
  title,
  description,
  href,
}: NumberedServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "28px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.05)",
        borderBottom: hovered ? "3px solid #F3C709" : "3px solid transparent",
        transition: "border-color 200ms, box-shadow 200ms, transform 200ms",
        transform: hovered ? "translateY(-4px)" : "none",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <span style={{
          fontSize: "3.5rem",
          fontWeight: 800,
          color: hovered ? "#F3C709" : "rgba(243,199,9,0.25)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          transition: "color 200ms",
        }}>
          {num}
        </span>
        <div style={{ color: "#C4BBAD" }}>
          {icon}
        </div>
      </div>

      <h3 style={{
        fontWeight: 700,
        fontSize: "1.05rem",
        color: "#1A1A1A",
        marginBottom: "10px",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: "0.875rem",
        color: "#6B7280",
        lineHeight: 1.75,
        flex: 1,
        marginBottom: "20px",
      }}>
        {description}
      </p>

      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: hovered ? "#F3C709" : "#1A1A1A",
          textDecoration: "none",
          transition: "color 200ms",
        }}
      >
        En savoir plus
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
