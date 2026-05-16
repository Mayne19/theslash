"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level?: "h2" | "h3";
}

interface ArticleSidebarLeftProps {
  items: TOCItem[];
}

export default function ArticleSidebarLeft({ items }: ArticleSidebarLeftProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  const updateScroll = useCallback(() => {
    if (items.length === 0) return;

    const scrollY = window.scrollY;
    const offsets = items.map((item) => {
      const el = document.getElementById(item.id);
      return el ? el.getBoundingClientRect().top + scrollY - 120 : null;
    }).filter((v): v is number => v !== null);

    if (offsets.length === 0) return;

    const viewportMiddle = scrollY + window.innerHeight / 2;

    let currentActive = items[0].id;
    for (let i = 0; i < offsets.length; i++) {
      if (viewportMiddle >= offsets[i]) {
        currentActive = items[i].id;
      }
    }

    const updates: Record<string, number> = {};
    items.forEach((item, i) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const start = el.getBoundingClientRect().top + scrollY - 120;
      const nextEl = items[i + 1] ? document.getElementById(items[i + 1].id) : null;
      const end = nextEl
        ? nextEl.getBoundingClientRect().top + scrollY - 120
        : start + el.offsetHeight;
      const p = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
      updates[item.id] = p;
    });

    setActiveId(currentActive);
    setSectionProgress(updates);
  }, [items]);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  useEffect(() => {
    const raf = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(raf);
  }, [updateScroll]);

  return (
    <div style={{ position: "sticky", top: "104px", display: "flex", flexDirection: "column", gap: "20px" }}>

      {items.length > 0 && (
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 8px 0", display: "flex", flexDirection: "column", gap: "0" }}>
            {items.map((item) => {
              const p = sectionProgress[item.id] ?? 0;
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-inter), -apple-system, sans-serif",
                      fontSize: item.level === "h3" ? "0.75rem" : "0.8rem",
                      fontWeight: isActive ? 700 : 400,
                      color: isActive ? "#1A1A1A" : "#9CA3AF",
                      textDecoration: "none",
                      padding: "6px 0 4px",
                      paddingLeft: item.level === "h3" ? "16px" : "0",
                      lineHeight: 1.45,
                      transition: "color 150ms ease",
                    }}
                  >
                    {item.text}
                  </a>
                  {isActive && (
                    <div style={{
                      height: "2px",
                      borderRadius: "2px",
                      overflow: "hidden",
                      marginBottom: "8px",
                      marginLeft: item.level === "h3" ? "16px" : "0",
                      backgroundColor: "transparent",
                    }}>
                      <div style={{
                        height: "100%",
                        width: `${Math.round(p * 100)}%`,
                        backgroundColor: "#F3C709",
                        borderRadius: "2px",
                        transition: "width 80ms linear",
                      }} />
                    </div>
                  )}
                  {!isActive && <div style={{ marginBottom: "8px" }} />}
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <div style={{ backgroundColor: "#1A1A1A", borderRadius: "16px", padding: "20px" }}>
        <img src="/icon.svg" alt="/ theslash" style={{ height: "32px", width: "32px", marginBottom: "12px" }} />
        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.35, marginBottom: "8px" }}>
          Et si on bossait ensemble ?
        </p>
        <p style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: "16px" }}>
          Site vitrine, landing page, refonte. On répond sous 24h.
        </p>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          padding: "9px 16px", backgroundColor: "#F3C709", color: "#1A1A1A",
          borderRadius: "50px", fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontWeight: 700, fontSize: "0.78rem", textDecoration: "none",
        }}>
          Démarrer un projet <ArrowRight size={12} />
        </Link>
      </div>

    </div>
  );
}
