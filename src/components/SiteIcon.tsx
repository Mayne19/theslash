interface SiteIconProps {
  size?: number;
  style?: React.CSSProperties;
}

export default function SiteIcon({ size = 32, style }: SiteIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      style={{ flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="si-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3C709" />
          <stop offset="100%" stopColor="#E6B800" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="72" rx="40" ry="48" fill="url(#si-g)" />
      <ellipse cx="64" cy="20" rx="18" ry="20" fill="url(#si-g)" />
      <ellipse cx="64" cy="118" rx="14" ry="18" fill="url(#si-g)" />
      <ellipse cx="48" cy="50" rx="16" ry="24" fill="#FFF9E6" opacity="0.3" />
      <g transform="translate(75, 25) rotate(-20)">
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#2D5016" opacity="0.8" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#1a3d0f" strokeWidth="0.5" opacity="0.6" />
      </g>
    </svg>
  );
}
