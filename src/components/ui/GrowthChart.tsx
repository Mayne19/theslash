"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const data = [
  { month: "Jan", value: 0 },
  { month: "Fév", value: 38 },
  { month: "Mar", value: 52 },
  { month: "Avr", value: 67 },
  { month: "Mai", value: 114 },
  { month: "Juin", value: 20 },
  { month: "Juil", value: 61 },
  { month: "Août", value: 79 },
  { month: "Sep", value: 96 },
  { month: "Oct", value: 138 },
  { month: "Nov", value: 215 },
  { month: "Déc", value: 340 },
];

const W = 500;
const H = 160;
const PAD_X = 10;
const PAD_Y = 12;

const minV = Math.min(...data.map((d) => d.value));
const maxV = Math.max(...data.map((d) => d.value));

const pts = data.map((d, i) => ({
  x: PAD_X + (i / (data.length - 1)) * (W - PAD_X * 2),
  y: PAD_Y + (1 - (d.value - minV) / (maxV - minV)) * (H - PAD_Y * 2),
  ...d,
}));

function smooth(points: typeof pts): string {
  return points
    .map((p, i) => {
      if (i === 0) return `M ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      const prev = points[i - 1];
      const cpX = ((prev.x + p.x) / 2).toFixed(1);
      return `C ${cpX},${prev.y.toFixed(1)} ${cpX},${p.y.toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    })
    .join(" ");
}

const linePath = smooth(pts);
const areaPath =
  linePath +
  ` L ${pts[pts.length - 1].x.toFixed(1)},${H} L ${pts[0].x.toFixed(1)},${H} Z`;

export default function GrowthChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg
        viewBox={`0 0 ${W} ${H + 32}`}
        style={{ width: "100%", overflow: "visible" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F3C709" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#F3C709" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={PAD_X}
            y1={PAD_Y + t * (H - PAD_Y * 2)}
            x2={W - PAD_X}
            y2={PAD_Y + t * (H - PAD_Y * 2)}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        ))}

        <motion.path
          d={areaPath}
          fill="url(#growth-fill)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        />

        <motion.path
          d={linePath}
          fill="none"
          stroke="#F3C709"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
        />

        {pts.map((p, i) => (
          <motion.circle
            key={p.month}
            cx={p.x}
            cy={p.y}
            r="5"
            fill="#F3C709"
            stroke="#1A1A1A"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + (i / data.length) * 2 }}
          />
        ))}

        {pts.map((p) => (
          <text
            key={`lbl-${p.month}`}
            x={p.x}
            y={H + 24}
            textAnchor="middle"
            fill={p.month === "Juin" ? "rgba(243,199,9,0.7)" : "rgba(255,255,255,0.45)"}
            fontSize="11"
            fontFamily="var(--font-inter), system-ui"
            fontWeight={p.month === "Juin" ? "700" : "400"}
          >
            {p.month}
          </text>
        ))}
      </svg>
    </div>
  );
}
