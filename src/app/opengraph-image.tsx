import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "theslash — Studio web francophone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F0E8",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0px", marginBottom: "32px" }}>
          <span style={{ fontSize: 120, fontWeight: 900, color: "#A0A0A0", letterSpacing: "-6px" }}>
            / the
          </span>
          <span style={{ fontSize: 120, fontWeight: 900, color: "#F3C709", letterSpacing: "-6px" }}>
            slash
          </span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: 28, color: "#6B7280", fontWeight: 500, margin: 0, letterSpacing: "-0.5px" }}>
          Studio web francophone — Sites, SEO & Design
        </p>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#F3C709",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
