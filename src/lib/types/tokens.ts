import type { ThemeTokens } from "@/lib/types";

// ─── DESIGN SYSTEM: LocalMart Connected v5 ───────────────────────────────────
// Unified palette: Emerald-500 primary · Teal-500 secondary · Cyan-500 accent
// No orange, no indigo, no gaming glow. Premium startup quality.
// ─────────────────────────────────────────────────────────────────────────────

export const LIGHT_TOKENS: ThemeTokens = {
  // ── Primary: Emerald ──────────────────────────────────────────────────────
  green:      "#059669",   // emerald-600  (primary action)
  greenMid:   "#10b981",   // emerald-500  (primary default)
  greenLight: "#34d399",   // emerald-400  (primary light)
  greenSoft:  "#d1fae5",   // emerald-100  (primary tint)
  greenBg:    "#ecfdf5",   // emerald-50   (primary bg)

  // ── Secondary: Teal ──────────────────────────────────────────────────────
  orange:     "#14b8a6",   // teal-500  (replaces orange — secondary)
  orangeD:    "#0d9488",   // teal-600
  orangeSoft: "#f0fdfa",   // teal-50

  // ── Accent: Cyan ─────────────────────────────────────────────────────────
  blue:       "#06b6d4",   // cyan-500  (replaces blue)
  blueSoft:   "#ecfeff",   // cyan-50

  // ── Surfaces ─────────────────────────────────────────────────────────────
  beige:      "#f8fafc",   // slate-50
  white:      "#ffffff",

  // ── Slate scale ──────────────────────────────────────────────────────────
  g50:        "#f8fafc",
  g100:       "#f1f5f9",
  g200:       "#e2e8f0",
  g300:       "#cbd5e1",
  g400:       "#94a3b8",
  g500:       "#64748b",
  g600:       "#475569",
  g700:       "#334155",

  // ── Text ─────────────────────────────────────────────────────────────────
  text:       "#0f172a",   // slate-900

  // ── Status ───────────────────────────────────────────────────────────────
  red:        "#dc2626",
  redSoft:    "#fef2f2",
  yellow:     "#f59e0b",
};

export const DARK_TOKENS: ThemeTokens = {
  // ── Primary: Emerald (brightened for dark bg) ────────────────────────────
  green:      "#34d399",   // emerald-400
  greenMid:   "#10b981",   // emerald-500
  greenLight: "#6ee7b7",   // emerald-300
  greenSoft:  "#064e3b",   // emerald-900
  greenBg:    "#022c22",   // emerald-950

  // ── Secondary: Teal ──────────────────────────────────────────────────────
  orange:     "#2dd4bf",   // teal-400
  orangeD:    "#14b8a6",   // teal-500
  orangeSoft: "#042f2e",   // teal-950 approx

  // ── Accent: Cyan ─────────────────────────────────────────────────────────
  blue:       "#22d3ee",   // cyan-400
  blueSoft:   "#083344",   // dark cyan bg

  // ── Surfaces: Slate 950/900 — deep, premium dark ─────────────────────────
  beige:      "#020617",   // slate-950
  white:      "#0f172a",   // slate-900

  g50:        "#0f172a",
  g100:       "#1e293b",
  g200:       "#334155",
  g300:       "#475569",
  g400:       "#64748b",
  g500:       "#94a3b8",
  g600:       "#cbd5e1",
  g700:       "#e2e8f0",

  text:       "#f1f5f9",   // slate-100

  red:        "#f87171",
  redSoft:    "#1a0505",
  yellow:     "#fbbf24",
};

// ─── Semantic aliases (use in components for maintainability) ─────────────────
export const SEMANTIC = {
  // Borders
  borderLight: "rgba(148,163,184,0.15)",
  borderDark:  "rgba(255,255,255,0.08)",

  // Glassmorphism
  glassLight:  "rgba(255,255,255,0.80)",
  glassDark:   "rgba(15,23,42,0.75)",

  // Shadows
  shadowSm:    "0 2px 8px rgba(0,0,0,0.05)",
  shadowMd:    "0 8px 24px rgba(0,0,0,0.08)",
  shadowLg:    "0 20px 50px rgba(0,0,0,0.12)",
  shadowBrand: "0 8px 28px rgba(5,150,105,0.22)",
  shadowBrandLg: "0 16px 48px rgba(5,150,105,0.28)",

  // Background gradients
  heroBgLight: "linear-gradient(145deg, #f0fdf4 0%, #ecfdf5 40%, #f0fdfa 70%, #ecfeff 100%)",
  heroBgDark:  "linear-gradient(145deg, #020617 0%, #0f172a 40%, #111827 70%, #0b1120 100%)",

  // Dot grid
  dotGridLight: "radial-gradient(rgba(0,0,0,.04) 1px, transparent 1px)",
  dotGridDark:  "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)",
} as const;
