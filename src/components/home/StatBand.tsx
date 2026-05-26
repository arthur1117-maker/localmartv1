"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/lib/hooks";
import { useTheme  } from "@/context/ThemeContext";

const STATS = [
  { icon: "📦",    value: 2840,  suffix: "+", label: "Нийт бараа",           accent: "#10b981" },
  { icon: "👨‍🌾", value: 340,   suffix: "+", label: "Баталгаат худалдагч",  accent: "#0d9488" },
  { icon: "📍",    value: 21,    suffix: "",  label: "Аймаг",                accent: "#059669" },
  { icon: "🛒",    value: 12400, suffix: "+", label: "Захиалга биелэв",       accent: "#14b8a6" },
  { icon: "⭐",    value: 4.9,   suffix: "",  label: "Хэрэглэгчийн үнэлгээ", accent: "#f59e0b" },
  { icon: "🚚",    value: 98,    suffix: "%", label: "Цаг хугацаанд хүргэлт",accent: "#10b981" },
];

function useCountUp(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const isFloat = target % 1 !== 0;
    const steps = 55, duration = 1300;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setVal(target); clearInterval(id); }
      else setVal(isFloat ? Math.round(cur * 10) / 10 : Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(id);
  }, [active, target]);
  return val;
}

function StatItem({ stat, active, idx }: { stat: typeof STATS[0]; active: boolean; idx: number }) {
  const { dark } = useTheme();
  const count = useCountUp(stat.value, active);
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        padding: "30px 16px", borderRadius: 18, cursor: "default", position: "relative",
        overflow: "hidden",
        background: dark
          ? (hov ? "rgba(16,185,129,.055)" : "rgba(15,23,42,.55)")
          : (hov ? "#f8fafc" : "#fff"),
        border: `1px solid ${hov
          ? (dark ? "rgba(52,211,153,.20)" : "rgba(16,185,129,.18)")
          : (dark ? "rgba(255,255,255,.06)" : "rgba(148,163,184,.12)")}`,
        boxShadow: hov
          ? (dark ? "0 14px 44px rgba(0,0,0,.42)" : "0 10px 32px rgba(0,0,0,.07)")
          : (dark ? "0 2px 8px rgba(0,0,0,.25)" : "0 1px 4px rgba(0,0,0,.04)"),
        transform: hov ? "translateY(-5px)" : "none",
        transition: "all .26s var(--ease-spring)",
        opacity: active ? 1 : 0,
        animation: active ? `fadeUp .58s cubic-bezier(.16,1,.3,1) ${idx * .08}s both` : "none",
      }}
    >
      {/* Subtle accent at top on hover */}
      {hov && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${stat.accent}60, transparent)`,
          borderRadius: "18px 18px 0 0",
        }} />
      )}

      <div style={{
        fontSize: 28, marginBottom: 14,
        transition: "transform .3s var(--ease-spring)",
        transform: hov ? "scale(1.18) rotate(6deg)" : "none",
        filter: hov ? `drop-shadow(0 4px 12px ${stat.accent}40)` : "none",
      }}>
        {stat.icon}
      </div>
      <div style={{
        fontSize: 28, fontWeight: 900, letterSpacing: "-0.022em",
        color: hov ? stat.accent : (dark ? "#f1f5f9" : "#0f172a"),
        fontFamily: "var(--font-display)",
        lineHeight: 1, marginBottom: 8,
        transition: "color .22s ease",
      }}>
        {stat.value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{stat.suffix}
      </div>
      <div style={{
        fontSize: 11, fontWeight: 500,
        color: dark ? "#64748b" : "#94a3b8",
        lineHeight: 1.45,
        letterSpacing: ".01em",
      }}>
        {stat.label}
      </div>
    </div>
  );
}

export function StatBand() {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.1);

  const bg = dark
    ? "linear-gradient(170deg, #0f172a 0%, #020617 100%)"
    : "linear-gradient(170deg, #f8fafc 0%, #ffffff 60%, #f0fdf4 100%)";

  return (
    <section ref={ref} style={{ background: bg, padding: "80px 24px", position: "relative", overflow: "hidden" }}>

      {/* Subtle radial bloom */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(16,185,129,.05), transparent)"
          : "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(16,185,129,.04), transparent)",
      }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>

        {/* Section header */}
        <div style={{
          textAlign: "center", marginBottom: 48,
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .56s ease both" : "none",
        }}>
          <div className="section-label" style={{ marginBottom: 12 }}>
            📊 Платформын тоо баримт
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.14, margin: 0,
            color: dark ? "#f1f5f9" : "#0f172a",
            fontFamily: "var(--font-display)",
          }}>
            Монголын хамгийн том<br />
            <span className="text-gradient">онлайн зах</span>
          </h2>
          <p style={{
            fontSize: 14, color: dark ? "#64748b" : "#94a3b8",
            marginTop: 12, fontWeight: 400,
          }}>
            Бодит хэрэглэгчид, бодит захиалга, баталгаат чанар
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
          gap: 10,
        }}>
          {STATS.map((s, i) => <StatItem key={s.label} stat={s} active={visible} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
