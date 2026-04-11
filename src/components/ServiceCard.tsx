"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  forWho?: string;
  result?: string;
  variant?: "compact" | "large";
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  forWho,
  result,
  variant = "compact",
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group flex flex-col"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        padding: "28px",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.11)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
      }}
    >
      {/* Icon box */}
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "13px",
          backgroundColor: "#F5F0E8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
          color: "#1A1A1A",
          flexShrink: 0,
          transition: "background-color 200ms",
        }}
        className="group-hover:bg-[#F3C709]/20"
      >
        {icon}
      </div>

      <h3
        style={{
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#1A1A1A",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.875rem",
          color: "#6B7280",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {description}
      </p>

      {variant === "large" && forWho && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 14px",
            backgroundColor: "#F8F6F0",
            borderRadius: "12px",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.68rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>Pour qui</p>
          <p style={{ fontSize: "0.85rem", color: "#1A1A1A" }}>{forWho}</p>
        </div>
      )}
      {variant === "large" && result && (
        <div
          style={{
            marginTop: "10px",
            padding: "12px 14px",
            backgroundColor: "rgba(243,199,9,0.08)",
            borderRadius: "12px",
            border: "1px solid rgba(243,199,9,0.2)",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.68rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>Résultat attendu</p>
          <p style={{ fontSize: "0.85rem", color: "#1A1A1A" }}>{result}</p>
        </div>
      )}

      <Link
        href={href}
        style={{
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "#1A1A1A",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "20px",
          transition: "color 150ms",
        }}
        className="hover:text-[#F3C709]"
      >
        {variant === "large" ? "Découvrir ce service" : "En savoir plus"}
        <ArrowRight
          size={15}
          style={{ transition: "transform 200ms" }}
          className="group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
