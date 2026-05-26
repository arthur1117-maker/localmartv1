import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Unified LocalMart Emerald–Teal–Cyan system ──────────────────────
        primary: {
          50:  "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",   // primary action
          600: "#059669",   // primary hover
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        secondary: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          400: "#2dd4bf",
          500: "#14b8a6",   // secondary accent
          600: "#0d9488",
        },
        accent: {
          400: "#22d3ee",
          500: "#06b6d4",   // cyan highlight
          600: "#0891b2",
        },
        // Semantic surface system
        surface: {
          0:   "#ffffff",
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
        },
        // Dark surfaces
        dark: {
          950: "#020617",
          900: "#0f172a",
          850: "#111827",
          800: "#1e293b",
          700: "#334155",
        },
        // Muted/UI text
        muted: {
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          900: "#0f172a",
        },
        // Status colors - unified
        success: { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0", dot: "#10b981" },
        warning: { bg: "#fffbeb", text: "#92400e", border: "#fde68a", dot: "#f59e0b" },
        danger:  { bg: "#fef2f2", text: "#991b1b", border: "#fecaca", dot: "#ef4444" },
        info:    { bg: "#eff6ff", text: "#1e40af", border: "#bfdbfe", dot: "#3b82f6" },
      },
      fontFamily: {
        sans:    ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
        "2xs": "1px",
      },
      // ── Unified shadow scale ──────────────────────────────────────────────
      boxShadow: {
        // Card shadows
        "card-xs":  "0 1px 3px rgba(0,0,0,.04), 0 1px 2px rgba(0,0,0,.03)",
        "card-sm":  "0 2px 8px rgba(0,0,0,.05), 0 1px 3px rgba(0,0,0,.04)",
        "card":     "0 4px 16px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04)",
        "card-md":  "0 8px 24px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.05)",
        "card-lg":  "0 16px 40px rgba(0,0,0,.10), 0 4px 12px rgba(0,0,0,.06)",
        "card-xl":  "0 24px 56px rgba(0,0,0,.12), 0 8px 20px rgba(0,0,0,.07)",
        // Brand shadows
        "em":       "0 4px 20px rgba(5,150,105,.15), 0 1px 4px rgba(0,0,0,.06)",
        "em-md":    "0 8px 28px rgba(5,150,105,.22), 0 2px 8px rgba(0,0,0,.06)",
        "em-lg":    "0 16px 48px rgba(5,150,105,.25), 0 4px 12px rgba(0,0,0,.08)",
        "teal":     "0 4px 20px rgba(13,148,136,.15), 0 1px 4px rgba(0,0,0,.06)",
        "cyan":     "0 4px 20px rgba(6,182,212,.15), 0 1px 4px rgba(0,0,0,.06)",
        // Ring shadows
        "ring-em":  "0 0 0 3px rgba(16,185,129,.18)",
        "ring-em-lg":"0 0 0 5px rgba(16,185,129,.14)",
        // Dark card shadows
        "dark-card":"0 4px 20px rgba(0,0,0,.28), 0 1px 6px rgba(0,0,0,.2)",
        "dark-lg":  "0 16px 48px rgba(0,0,0,.45), 0 4px 16px rgba(0,0,0,.3)",
      },
      keyframes: {
        fadeUp:    { from:{ opacity:"0", transform:"translateY(22px)" }, to:{ opacity:"1", transform:"translateY(0)" } },
        fadeIn:    { from:{ opacity:"0" }, to:{ opacity:"1" } },
        scaleIn:   { from:{ opacity:"0", transform:"scale(.94)" }, to:{ opacity:"1", transform:"scale(1)" } },
        float:     { "0%,100%":{ transform:"translateY(0)" }, "50%":{ transform:"translateY(-9px)" } },
        floatSlow: { "0%,100%":{ transform:"translateY(0) rotate(0deg)" }, "50%":{ transform:"translateY(-6px) rotate(0.8deg)" } },
        skim:      { "0%":{ backgroundPosition:"-600px 0" }, "100%":{ backgroundPosition:"600px 0" } },
        shimmer:   { "0%":{ backgroundPosition:"-600px 0" }, "100%":{ backgroundPosition:"600px 0" } },
        pulseDot:  { "0%,100%":{ boxShadow:"0 0 0 0 rgba(16,185,129,.5)" }, "70%":{ boxShadow:"0 0 0 8px rgba(16,185,129,0)" } },
        barGrow:   { from:{ width:"0" }, to:{ width:"var(--bar-w)" } },
        orb:       { "0%,100%":{ transform:"translate(0,0)" }, "50%":{ transform:"translate(24px,-28px)" } },
        slideInRight:{ from:{ transform:"translateX(110%)", opacity:"0" }, to:{ transform:"translateX(0)", opacity:"1" } },
        slideUp:   { from:{ transform:"translateY(20px)", opacity:"0" }, to:{ transform:"translateY(0)", opacity:"1" } },
        shake:     { "0%,100%":{ transform:"translateX(0)" }, "20%,60%":{ transform:"translateX(-5px)" }, "40%,80%":{ transform:"translateX(5px)" } },
        bounceIn:  { "0%":{ transform:"scale(.87)", opacity:"0" }, "55%":{ transform:"scale(1.04)", opacity:"1" }, "100%":{ transform:"scale(1)" } },
        spin:      { to:{ transform:"rotate(360deg)" } },
        scaleInSm: { from:{ opacity:"0", transform:"scale(.96) translateY(-5px)" }, to:{ opacity:"1", transform:"scale(1) translateY(0)" } },
        gradientShift:{ "0%":{ backgroundPosition:"0% 50%" }, "50%":{ backgroundPosition:"100% 50%" }, "100%":{ backgroundPosition:"0% 50%" } },
        heartBeat: { "0%,100%":{ transform:"scale(1)" }, "14%":{ transform:"scale(1.3)" }, "28%":{ transform:"scale(1)" }, "42%":{ transform:"scale(1.18)" }, "70%":{ transform:"scale(1)" } },
        wishPop:   { "0%":{ transform:"scale(1)" }, "40%":{ transform:"scale(1.42)" }, "100%":{ transform:"scale(1)" } },
        progressFill:{ from:{ width:"0" }, to:{ width:"var(--progress-w)" } },
        fadeInUp:  { from:{ opacity:"0", transform:"translateY(12px)" }, to:{ opacity:"1", transform:"translateY(0)" } },
      },
      animation: {
        "fade-up":     "fadeUp .58s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":     "fadeIn .36s ease both",
        "scale-in":    "scaleIn .28s cubic-bezier(0.16,1,0.3,1)",
        float:         "float 4.2s ease-in-out infinite",
        "float-slow":  "floatSlow 6.5s ease-in-out infinite",
        skim:          "skim 1.5s ease-in-out infinite",
        "pulse-dot":   "pulseDot 2.4s ease-in-out infinite",
        "bar-grow":    "barGrow .85s cubic-bezier(0.16,1,0.3,1) both",
        shimmer:       "shimmer 1.5s ease-in-out infinite",
        orb:           "orb 14s ease-in-out infinite",
        "slide-right": "slideInRight .32s cubic-bezier(0.16,1,0.3,1)",
        "slide-up":    "slideUp .28s cubic-bezier(0.16,1,0.3,1)",
        "heart-beat":  "heartBeat .62s ease",
        "gradient":    "gradientShift 8s ease infinite",
        "wish-pop":    "wishPop .36s cubic-bezier(0.16,1,0.3,1)",
        dropdown:      "scaleInSm .18s cubic-bezier(0.16,1,0.3,1)",
        "bounce-in":   "bounceIn .42s cubic-bezier(0.16,1,0.3,1)",
        spin:          "spin .8s linear infinite",
        "progress-fill":"progressFill .9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in-up":  "fadeInUp .32s ease both",
        shake:         "shake .35s ease",
      },
    },
  },
  plugins: [],
};

export default config;
