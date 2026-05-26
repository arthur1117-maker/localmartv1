import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "danger" | "info" | "teal" | "cyan" | "slate";
  color?: string;
  className?: string;
}

export function Badge({ children, variant = "slate", color, className = "" }: BadgeProps) {
  if (color) {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-white ${className}`}
        style={{ background: color }}
      >
        {children}
      </span>
    );
  }
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
}

// ─── Preset badges — premium styling ────────────────────────────────────────
export function NewBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      borderRadius: 999, padding: "2px 8px",
      fontSize: 9, fontWeight: 800, letterSpacing: ".06em",
      color: "#047857", background: "#ecfdf5",
      border: "1px solid #a7f3d0",
      animation: "badgePop .35s var(--ease-spring)",
    }}>
      ✦ ШИНЭ
    </span>
  );
}

export function OrganicBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      borderRadius: 999, padding: "2px 8px",
      fontSize: 9, fontWeight: 800, letterSpacing: ".04em",
      color: "#065f46", background: "#d1fae5",
      border: "1px solid #6ee7b7",
      animation: "badgePop .35s var(--ease-spring) .05s both",
    }}>
      🌿 ORGANIC
    </span>
  );
}

export function VerifiedBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      borderRadius: 999, padding: "2px 8px",
      fontSize: 9, fontWeight: 800, letterSpacing: ".04em",
      color: "#0f766e", background: "#ccfbf1",
      border: "1px solid #5eead4",
      animation: "badgePop .35s var(--ease-spring) .10s both",
    }}>
      ✓ Баталгаа
    </span>
  );
}

export function PremiumBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      borderRadius: 999, padding: "2px 8px",
      fontSize: 9, fontWeight: 800, letterSpacing: ".04em",
      color: "#1e40af", background: "#dbeafe",
      border: "1px solid #93c5fd",
    }}>
      ⭐ Шилдэг
    </span>
  );
}
