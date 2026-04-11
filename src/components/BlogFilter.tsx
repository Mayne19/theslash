"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";

const CATEGORIES = ["Tous", "Création de site", "SEO", "Web Design", "Performance"];

interface Article {
  title: string;
  excerpt?: string;
  slug: string;
  category?: string;
  readingTime?: number;
  date?: string;
}

export default function BlogFilter({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous"
    ? articles
    : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Filter buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "8px 18px",
              backgroundColor: active === cat ? "#F3C709" : "transparent",
              color: active === cat ? "#1A1A1A" : "#6B7280",
              borderRadius: "50px",
              border: active === cat ? "1px solid #F3C709" : "1px solid rgba(0,0,0,0.12)",
              cursor: "pointer",
              fontFamily: "var(--font-inter), -apple-system, sans-serif",
              fontSize: "0.85rem",
              fontWeight: active === cat ? 700 : 500,
              transition: "all 150ms",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated article grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((article) => (
            <motion.div
              key={article.slug}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <ArticleCard {...article} excerpt={article.excerpt ?? ""} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: "center", padding: "64px 0", color: "#9CA3AF", fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.95rem" }}
        >
          Aucun article dans cette catégorie pour le moment.
        </motion.div>
      )}
    </>
  );
}
