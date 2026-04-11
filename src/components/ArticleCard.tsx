"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date?: string;
  category?: string;
  slug: string;
  readingTime?: number;
  coverImage?: string;
}

const fallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
];

export default function ArticleCard({
  title,
  excerpt,
  date,
  category,
  slug,
  readingTime,
  coverImage,
}: ArticleCardProps) {
  const imgIndex = Math.abs(slug.charCodeAt(0) + (slug.charCodeAt(1) || 0)) % fallbackImages.length;
  const imgSrc = coverImage || fallbackImages[imgIndex];

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none", display: "block" }} className="group">
      <article
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          transition: "box-shadow 200ms, transform 200ms",
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.11)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
          (e.currentTarget as HTMLElement).style.transform = "none";
        }}
      >
        {/* Image */}
        <div style={{ width: "100%", height: "200px", overflow: "hidden", backgroundColor: "#F5F0E8" }}>
          <img
            src={imgSrc}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{ padding: "22px" }}>
          {category && (
            <span style={{
              display: "inline-block",
              padding: "4px 12px",
              backgroundColor: "rgba(243,199,9,0.12)",
              color: "#1A1A1A",
              fontSize: "0.7rem",
              fontWeight: 700,
              borderRadius: "50px",
              marginBottom: "12px",
              border: "1px solid rgba(243,199,9,0.25)",
              letterSpacing: "0.02em",
            }}>
              {category}
            </span>
          )}
          <h3 style={{
            fontWeight: 700,
            color: "#1A1A1A",
            fontSize: "0.95rem",
            marginBottom: "8px",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}>
            {title}
          </h3>
          <p style={{
            color: "#6B7280",
            fontSize: "0.85rem",
            lineHeight: 1.7,
            marginBottom: "16px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.75rem", color: "#9CA3AF" }}>
              {date && <span>{date}</span>}
              {date && readingTime && <span>·</span>}
              {readingTime && <span>{readingTime} min de lecture</span>}
            </div>
            <ArrowRight
              size={15}
              style={{ color: "#9CA3AF", transition: "color 150ms, transform 150ms" }}
              className="group-hover:text-[#F3C709] group-hover:translate-x-1"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
