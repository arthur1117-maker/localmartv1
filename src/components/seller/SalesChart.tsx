"use client";
import { useState, useMemo } from "react";
import { useTheme }   from "@/context/ThemeContext";
import { useInView }  from "@/lib/hooks";
import { WEEK_SALES } from "@/lib/data";

/* ── Generate synthetic period data from WEEK_SALES ── */
function genPeriodData(period: "7d" | "30d" | "3m") {
  const base = WEEK_SALES; // 7 days of real data
  if (period === "7d") return base;

  if (period === "30d") {
    // Generate 4 weeks by slightly randomizing the base
    const weeks = [1, 0.82, 1.14, 0.94];
    return weeks.flatMap((mult, wi) =>
      base.map((d, di) => ({
        day: `${wi * 7 + di + 1}`,
        value: Math.round(d.value * mult * (0.88 + Math.random() * 0.24)),
        pct: Math.round(d.pct * mult),
      }))
    );
  }

  // 3m: 12 weeks
  const mults = [0.6, 0.72, 0.78, 0.88, 0.92, 0.97, 1.0, 1.08, 1.14, 1.04, 1.18, 1.22];
  return mults.map((mult, i) => ({
    day: `Д${i + 1}`,
    value: Math.round(
      base.reduce((s, d) => s + d.value, 0) * mult * (0.88 + Math.random() * 0.24)
    ),
    pct: Math.round(Math.min(100, mult * 75)),
  }));
}

type Period = "7d" | "30d" | "3m";
const PERIOD_LABELS: Record<Period, string> = { "7d": "7 хоног", "30d": "30 хоног", "3m": "3 сар" };

const W = 340, H = 120, PAD = { t: 12, r: 16, b: 28, l: 48 };
const inner = { w: W - PAD.l - PAD.r, h: H - PAD.t - PAD.b };

function toXY(idx: number, val: number, max: number, total: number) {
  return {
    x: PAD.l + (idx / Math.max(total - 1, 1)) * inner.w,
    y: PAD.t + (1 - val / (max || 1)) * inner.h,
  };
}

export function SalesChart() {
  const { C, dark }      = useTheme();
  const { ref, visible } = useInView(0.05);
  const [period, setPeriod] = useState<Period>("7d");

  const data   = useMemo(() => genPeriodData(period), [period]);
  const max    = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => toXY(i, d.value, max, data.length));
  const polyline = points.map(p => `${p.x},${p.y}`).join(" ");

  const area = [
    `M ${points[0].x},${PAD.t + inner.h}`,
    ...points.map(p => `L ${p.x},${p.y}`),
    `L ${points[points.length - 1].x},${PAD.t + inner.h}`,
    "Z",
  ].join(" ");

  const totalRevenue = data.reduce((s, d) => s + d.value, 0);
  const avgRevenue   = Math.round(totalRevenue / data.length);

  // Show x-axis labels: for 7d show all; for 30d show every 7th; for 3m show every point
  const showLabel = (i: number) => {
    if (period === "7d")  return true;
    if (period === "30d") return i % 7 === 0;
    return true;
  };

  const borderCol = dark ? "rgba(255,255,255,.08)" : "#e2e8f0";

  return (
    <div ref={ref}>
      {/* Header with period selector */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
          📈 Борлуулалтын график
        </div>
        <div style={{
          display: "flex", gap: 2, padding: "3px",
          background: dark ? "rgba(255,255,255,.06)" : "#f1f5f9",
          borderRadius: 10, border: `1px solid ${borderCol}`,
        }}>
          {(["7d", "30d", "3m"] as Period[]).map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                padding: "4px 12px", borderRadius: 7, border: "none",
                fontSize: 11, fontWeight: 700, cursor: "pointer",
                fontFamily: "inherit", transition: "all .18s",
                background: period === p ? (dark ? "#059669" : "#059669") : "transparent",
                color: period === p ? "#fff" : (dark ? "#64748b" : "#64748b"),
                boxShadow: period === p ? "0 2px 6px rgba(5,150,105,.24)" : "none",
              }}
            >
              {PERIOD_LABELS[p]}
            </button>
          ))}
        </div>
      </div>

      {/* Line chart */}
      <div style={{
        borderRadius: 14, overflow: "hidden", marginBottom: 16,
        background: dark ? "rgba(255,255,255,.03)" : "#f8fafc",
        border: `1px solid ${borderCol}`,
        padding: "14px 8px 8px",
      }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", overflow: "visible" }}>
          <defs>
            <linearGradient id="salesAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor={C.green} stopOpacity="0.18" />
              <stop offset="100%" stopColor={C.green} stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map(t => {
            const y   = PAD.t + t * inner.h;
            const val = ((1 - t) * max / 1000).toFixed(0);
            return (
              <g key={t}>
                <line x1={PAD.l} y1={y} x2={PAD.l + inner.w} y2={y}
                  stroke={dark ? "rgba(255,255,255,.06)" : "#e2e8f0"} strokeWidth="1" strokeDasharray="4,4" />
                <text x={PAD.l - 6} y={y + 4} textAnchor="end"
                  fontSize="8" fill={C.g400} fontFamily="inherit">{val}K</text>
              </g>
            );
          })}

          {/* Area */}
          <path d={area} fill="url(#salesAreaGrad)" />

          {/* Line */}
          <polyline points={polyline} fill="none" stroke={C.green} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{
              strokeDasharray: visible ? "none" : "1000",
              strokeDashoffset: visible ? "0" : "1000",
              transition: "stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1)",
            }} />

          {/* Points + labels */}
          {points.map((pt, i) => (
            <g key={i}>
              {/* Show dots for 7d and 3m, skip individual dots for 30d (too dense) */}
              {period !== "30d" && (
                <circle cx={pt.x} cy={pt.y} r={period === "3m" ? 3 : 4}
                  fill={C.white} stroke={C.green} strokeWidth="2"
                  style={{ opacity: visible ? 1 : 0, transition: `opacity .3s ease ${0.8 + i * 0.04}s` }} />
              )}
              {showLabel(i) && (
                <text x={pt.x} y={H - 4} textAnchor="middle"
                  fontSize="8" fill={C.g500} fontFamily="inherit" fontWeight="700">
                  {data[i].day.slice(0, 3)}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Bar chart (7d only) */}
      {period === "7d" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
          {data.map((row, i) => (
            <div key={row.day} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700, width: 56, flexShrink: 0, color: C.g500 }}>
                {row.day}
              </div>
              <div style={{ flex: 1, borderRadius: 8, overflow: "hidden",
                background: dark ? "rgba(255,255,255,.06)" : "#f1f5f9", height: 22 }}>
                <div style={{
                  height: "100%", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
                  width: `${row.pct}%`,
                  background: `linear-gradient(90deg,${C.green},${C.greenMid})`,
                  animation: visible ? `barGrow .8s cubic-bezier(.16,1,.3,1) ${i * 0.06}s both` : "none",
                }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: "#fff" }}>
                    ₮{(row.value / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {[
          {
            v: `₮${(totalRevenue / 1000000).toFixed(1)}M`,
            l: "Нийт орлого",
            c: C.green,
          },
          {
            v: period === "7d" ? "28" : period === "30d" ? "112" : "340",
            l: "Захиалга",
            c: C.orange,
          },
          {
            v: "4.8★",
            l: "Үнэлгээ",
            c: "#f59e0b",
          },
        ].map(s => (
          <div key={s.l} style={{
            borderRadius: 12, padding: "14px 12px", textAlign: "center",
            background: dark ? "rgba(255,255,255,.04)" : "#f8fafc",
            border: `1px solid ${borderCol}`,
          }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: s.c,
              fontFamily: "var(--font-display)" }}>{s.v}</div>
            <div style={{ fontSize: 10, marginTop: 4, fontWeight: 600, color: C.g500 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
