"use client";
import { useState } from "react";
import { useTheme  } from "@/context/ThemeContext";
import { useInView } from "@/lib/hooks";
import { CATEGORIES } from "@/lib/data";

interface CategoryGridProps { onExplore: (cat?: string) => void; }

export function CategoryGrid({ onExplore }: CategoryGridProps) {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.08);
  const [hov, setHov] = useState<string | null>(null);

  const sectionBg = dark
    ? "linear-gradient(180deg, #020617 0%, #0f172a 100%)"
    : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)";

  return (
    <section ref={ref} style={{ background: sectionBg, padding: "80px 24px", position: "relative", overflow: "hidden" }}>

      {/* Subtle background accent */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,.04), transparent)"
          : "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,.03), transparent)",
      }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 48,
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .56s ease both" : "none",
        }}>
          <div className="section-label">📦 Ангиллаар хайх</div>
          <h2 style={{
            fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.14, margin: "0 0 12px",
            color: dark ? "#f1f5f9" : "#0f172a",
            fontFamily: "var(--font-display)",
          }}>
            Ямар бараа хэрэгтэй вэ?
          </h2>
          <p style={{
            fontSize: 15, color: dark ? "#64748b" : "#94a3b8",
            fontWeight: 400, maxWidth: 380, margin: "0 auto",
          }}>
            Монголын бүх нутгаас, бүх ангиллын бараа нэг дороос
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
        }} className="sm:grid-cols-4 md:grid-cols-8">
          {CATEGORIES.map((cat, i) => {
            const isHov = hov === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => onExplore(cat.label)}
                onMouseEnter={() => setHov(cat.label)}
                onMouseLeave={() => setHov(null)}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "18px 8px 16px", borderRadius: 16, cursor: "pointer", border: "none",
                  background: isHov
                    ? (dark ? `rgba(16,185,129,.07)` : cat.bg)
                    : (dark ? "rgba(15,23,42,.55)" : "#f8fafc"),
                  outline: `1.5px solid ${isHov
                    ? (dark ? "rgba(52,211,153,.25)" : cat.color + "30")
                    : (dark ? "rgba(255,255,255,.055)" : "rgba(148,163,184,.10)")}`,
                  boxShadow: isHov
                    ? (dark
                        ? `0 12px 32px rgba(0,0,0,.42), 0 0 0 1px rgba(52,211,153,.06)`
                        : `0 10px 28px rgba(0,0,0,.07), 0 0 0 1px ${cat.color}10`)
                    : "none",
                  transform: isHov ? "translateY(-5px) scale(1.02)" : "none",
                  transition: "all .24s var(--ease-spring)",
                  fontFamily: "inherit",
                  opacity: visible ? 1 : 0,
                  animation: visible ? `fadeUp .52s cubic-bezier(.16,1,.3,1) ${i * .038}s both` : "none",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Icon container */}
                <div style={{
                  width: 46, height: 46, borderRadius: 13,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, marginBottom: 9,
                  background: isHov
                    ? (dark ? `rgba(16,185,129,.14)` : cat.bg)
                    : (dark ? "rgba(255,255,255,.05)" : "#f1f5f9"),
                  border: `1px solid ${isHov
                    ? (dark ? "rgba(52,211,153,.22)" : cat.color + "25")
                    : (dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)")}`,
                  transform: isHov ? "scale(1.12) rotate(5deg)" : "none",
                  transition: "transform .28s var(--ease-spring)",
                  boxShadow: isHov ? `0 4px 16px ${cat.color}20` : "none",
                }}>
                  {cat.icon}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: 11, fontWeight: 700, lineHeight: 1.3, textAlign: "center",
                  color: isHov ? (dark ? "#34d399" : cat.color) : (dark ? "#94a3b8" : "#475569"),
                  fontFamily: "var(--font-display)", marginBottom: 3,
                  transition: "color .2s ease",
                }}>
                  {cat.label}
                </div>
                <div style={{
                  fontSize: 9, fontWeight: 600,
                  color: dark ? "#475569" : "#94a3b8",
                  letterSpacing: ".04em",
                }}>
                  {cat.count}+ бараа
                </div>

                {/* Hover shimmer */}
                {isHov && (
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: 16,
                    background: "linear-gradient(135deg, rgba(255,255,255,.05) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Browse all */}
        <div style={{
          textAlign: "center", marginTop: 40,
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .56s ease .42s both" : "none",
        }}>
          <button onClick={() => onExplore()}
            className="btn btn-outline btn-lg"
            style={{ fontFamily: "var(--font-display)", gap: 8, letterSpacing: "-0.01em" }}>
            Бүх ангилал харах
            <span style={{ transition: "transform .2s" }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
