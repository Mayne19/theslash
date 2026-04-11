"use client";

import { useState } from "react";

interface ArticleSidebarRightProps {
  url: string;
  title: string;
}

export default function ArticleSidebarRight({ url, title }: ArticleSidebarRightProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  const btn = {
    width: "38px", height: "38px", borderRadius: "10px",
    backgroundColor: "#F5F0E8", border: "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", textDecoration: "none",
  } as React.CSSProperties;

  return (
    <div style={{ position: "sticky", top: "104px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>

      {/* Copy link */}
      <button onClick={handleCopy} title={copied ? "Copié !" : "Copier le lien"} style={{ ...btn, backgroundColor: copied ? "#F3C709" : "#F5F0E8" }}>
        {copied ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>

      {/* X */}
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" title="Partager sur X" style={btn}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#6B7280">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" title="Partager sur LinkedIn" style={btn}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#6B7280">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* Facebook */}
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" title="Partager sur Facebook" style={btn}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#6B7280">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>

      {/* Label below */}
      <p style={{
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
        fontSize: "0.6rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#C4BBAD",
        marginTop: "4px",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        whiteSpace: "nowrap",
      }}>
        Partager sur
      </p>

    </div>
  );
}
