interface ArticleCalloutProps {
  type: "important" | "erreur" | "chiffre";
  label?: string;
  children: React.ReactNode;
}

const configs = {
  important: {
    label: "Point important",
    bg: "#FFF9C4",
    border: "#F3C709",
    labelBg: "#F3C709",
    labelColor: "#1A1A1A",
    textColor: "#1A1A1A",
    emoji: "💡",
  },
  erreur: {
    label: "L'erreur fatale",
    bg: "#FEE2E2",
    border: "#EF4444",
    labelBg: "#EF4444",
    labelColor: "#ffffff",
    textColor: "#1A1A1A",
    emoji: "🥊",
  },
  chiffre: {
    label: "Le chiffre clé",
    bg: "#DBEAFE",
    border: "#3B82F6",
    labelBg: "#3B82F6",
    labelColor: "#ffffff",
    textColor: "#1A1A1A",
    emoji: "📊",
  },
};

export default function ArticleCallout({ type, label, children }: ArticleCalloutProps) {
  const c = configs[type];
  return (
    <div style={{
      position: "relative",
      backgroundColor: c.bg,
      border: `2px solid ${c.border}`,
      borderRadius: "16px",
      padding: "24px 24px 24px 28px",
      margin: "32px 0",
      fontFamily: "var(--font-inter), -apple-system, sans-serif",
    }}>
      {/* Label badge */}
      <div style={{
        position: "absolute",
        top: "-14px",
        left: "20px",
        backgroundColor: c.labelBg,
        color: c.labelColor,
        fontWeight: 800,
        fontSize: "0.78rem",
        letterSpacing: "0.01em",
        padding: "4px 12px",
        borderRadius: "6px",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
        whiteSpace: "nowrap",
      }}>
        {c.emoji} {label || c.label}
      </div>
      <div style={{
        fontSize: "0.92rem",
        color: c.textColor,
        lineHeight: 1.8,
        marginTop: "6px",
      }}>
        {children}
      </div>
    </div>
  );
}
