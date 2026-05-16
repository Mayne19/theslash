import { ideasStudioCallouts } from "@/lib/ideasStudioConfig";

interface ArticleCalloutProps {
  type: "important" | "erreur" | "chiffre";
  label?: string;
  children: React.ReactNode;
}

const configs = Object.fromEntries(
  ideasStudioCallouts.map((callout) => [
    callout.key,
    {
      label: callout.defaultTitle,
      bg: callout.colors.background,
      border: callout.colors.border,
      labelBg: callout.colors.badgeBackground,
      labelColor: callout.colors.badgeText,
      textColor: callout.colors.text,
      emoji: callout.emoji,
      className: callout.className,
    },
  ])
) as Record<ArticleCalloutProps["type"], {
  label: string;
  bg: string;
  border: string;
  labelBg: string;
  labelColor: string;
  textColor: string;
  emoji: string;
  className: string;
}>;

export default function ArticleCallout({ type, label, children }: ArticleCalloutProps) {
  const c = configs[type];
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
