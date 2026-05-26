"use client";
import { useTheme } from "@/context/ThemeContext";

interface StarRatingProps {
  rating:    number;
  reviews?:  number;
  size?:     "sm" | "md" | "lg";
  showCount?: boolean;
}

export function StarRating({ rating, reviews, size = "sm", showCount = true }: StarRatingProps) {
  const { dark } = useTheme();
  const sz = { sm: 11, md: 13, lg: 15 }[size];
  const txSz = { sm: 11, md: 12, lg: 13 }[size];
  const filled = Math.floor(rating);
  const partial = rating - filled;
  const empty = 5 - Math.ceil(rating);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {Array.from({ length: filled }).map((_, i) => <Star key={`f${i}`} type="full" size={sz} />)}
        {partial >= 0.3 && <Star key="p" type={partial >= 0.7 ? "three-quarter" : "half"} size={sz} />}
        {Array.from({ length: empty }).map((_, i) => <Star key={`e${i}`} type="empty" size={sz} />)}
      </div>
      <span style={{ fontSize: txSz, fontWeight: 700, color: "#059669", lineHeight: 1 }}>
        {rating.toFixed(1)}
      </span>
      {showCount && reviews !== undefined && (
        <span style={{ fontSize: txSz - 1, fontWeight: 500, color: dark ? "#475569" : "#94a3b8" }}>
          ({reviews})
        </span>
      )}
    </div>
  );
}

function Star({ type, size }: { type: "full" | "half" | "three-quarter" | "empty"; size: number }) {
  const gold  = "#f59e0b";
  const empty = "#e2e8f0";
  if (type === "full")  return <svg width={size} height={size} viewBox="0 0 16 16" fill={gold}><path d="M8 1l1.9 4 4.1.6-3 2.9.7 4.2L8 10.5 4.3 12.7l.7-4.2L2 5.6l4.1-.6z"/></svg>;
  if (type === "empty") return <svg width={size} height={size} viewBox="0 0 16 16" fill={empty}><path d="M8 1l1.9 4 4.1.6-3 2.9.7 4.2L8 10.5 4.3 12.7l.7-4.2L2 5.6l4.1-.6z"/></svg>;
  const pct = type === "half" ? "50%" : "75%";
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <defs>
        <linearGradient id={`sg-${type}-${size}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset={pct} stopColor={gold} />
          <stop offset={pct} stopColor={empty} />
        </linearGradient>
      </defs>
      <path d="M8 1l1.9 4 4.1.6-3 2.9.7 4.2L8 10.5 4.3 12.7l.7-4.2L2 5.6l4.1-.6z"
        fill={`url(#sg-${type}-${size})`} />
    </svg>
  );
}
