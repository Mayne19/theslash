import { articleCalloutConfigs, type ArticleCalloutType } from "@/lib/articleCallouts";

interface ArticleCalloutProps {
  type: ArticleCalloutType;
  label?: string;
  children: React.ReactNode;
}

export default function ArticleCallout({ type, label, children }: ArticleCalloutProps) {
  const c = articleCalloutConfigs[type];
  return (
    <div
      className={c.className}
      data-callout-type={type}
      style={{
        position: "relative",
        backgroundColor: c.bg,
        border: `2px solid ${c.border}`,
        borderRadius: "16px",
        padding: "24px 24px 24px 28px",
        margin: "32px 0",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
      }}
    >
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
        {label || c.label}
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
