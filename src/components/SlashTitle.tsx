import React from "react";

interface SlashTitleProps {
  gray: string;
  black: string;
  as?: "h1" | "h2" | "h3";
  fontSize?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function SlashTitle({
  gray,
  black,
  as: Tag = "h2",
  fontSize = "clamp(2.05rem, 4.75vw, 3.6rem)",
  style,
  className,
}: SlashTitleProps) {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
        fontSize,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        ...style,
      }}
    >
      <span style={{ color: "#A0A0A0", fontWeight: 700 }}>/</span>{" "}
      <span style={{ color: "#A0A0A0", fontWeight: 700 }}>{gray}</span>{" "}
      <span style={{ color: "#1A1A1A", fontWeight: 800 }}>{black}</span>
    </Tag>
  );
}
