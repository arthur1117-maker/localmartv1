"use client";
import React, { useState } from "react";
import { useTheme  } from "@/context/ThemeContext";
import { useAuth   } from "@/context/AuthContext";
import { useInView } from "@/lib/hooks";
import { DashboardStats } from "./DashboardStats";
import { OrdersList     } from "./OrdersList";
import { MyProductsList } from "./MyProductsList";
import { AddProductForm } from "./AddProductForm";
import { SalesChart     } from "./SalesChart";


/* ── Low Stock Alert Banner ─────────────────────────────────────────────────── */
const LOW_STOCK_ITEMS = [
  { name: "Ямааны ноолуур 1кг", qty: 2, emoji: "🧶" },
  { name: "Зэрлэг зөгийн бал",  qty: 1, emoji: "🍯" },
];

function LowStockAlert({ dark, cardBg, border, text, muted }: {
  dark: boolean; cardBg: string; border: string; text: string; muted: string;
}) {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed || LOW_STOCK_ITEMS.length === 0) return null;
  return (
    <div style={{
      margin: "0 0 20px",
      padding: "14px 18px",
      borderRadius: 14,
      background: dark ? "rgba(245,158,11,.08)" : "#fffbeb",
      border: "1.5px solid rgba(245,158,11,.3)",
      display: "flex", alignItems: "flex-start", gap: 12,
    }}>
      <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#b45309", marginBottom: 6 }}>
          Нөөц дуусч байна — {LOW_STOCK_ITEMS.length} бараа
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {LOW_STOCK_ITEMS.map(item => (
            <span key={item.name} style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              padding: "3px 10px", borderRadius: 999,
              background: "rgba(245,158,11,.12)", color: "#92400e",
              fontSize: 11, fontWeight: 600,
            }}>
              {item.emoji} {item.name} — {item.qty} ш үлдсэн
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "#b45309", fontSize: 16, fontWeight: 700, flexShrink: 0, padding: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}

type SubTab = "overview" | "orders" | "products" | "add";

const TABS: { id: SubTab; label: string; icon: string }[] = [
  { id: "overview",  label: "Тойм",      icon: "◈" },
  { id: "orders",    label: "Захиалга",   icon: "📬" },
  { id: "products",  label: "Бараанууд",  icon: "📦" },
  { id: "add",       label: "Нэмэх",      icon: "+" },
];

export function SellerDashboard() {
  const { dark }         = useTheme();
  const { user }         = useAuth();
  const [tab, setTab]    = useState<SubTab>("overview");
  const { ref, visible } = useInView(0.04);

  const bg      = dark ? "#020617" : "#f8fafc";
  const cardBg  = dark ? "#0f172a" : "#ffffff";
  const border  = dark ? "rgba(255,255,255,.07)" : "rgba(148,163,184,.15)";
  const text    = dark ? "#f1f5f9" : "#0f172a";
  const muted   = dark ? "#64748b" : "#94a3b8";

  return (
    <div ref={ref} style={{
      background: bg, minHeight: "100vh",
      opacity: visible ? 1 : 0,
      animation: visible ? "fadeUp .55s ease both" : "none",
    }}>
      {/* ── Header ── */}
      <div style={{
        background: dark
          ? "linear-gradient(170deg,#020617,#0f172a)"
          : "linear-gradient(170deg,#0f172a,#0a1628)",
        paddingTop: 72,
        position: "relative", overflow: "hidden",
      }}>
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: .2 }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: "-30%", right: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(16,185,129,.08),transparent 60%)",
          pointerEvents: "none", filter: "blur(60px)",
        }} />

        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "32px 24px 0", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "4px 12px", borderRadius: 999, marginBottom: 12,
                fontSize: 10, fontWeight: 700, letterSpacing: ".1em",
                color: "#34d399", background: "rgba(16,185,129,.1)",
                border: "1px solid rgba(52,211,153,.18)",
              }}>
                🏪 SELLER DASHBOARD
              </div>
              <h1 style={{
                fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#f1f5f9",
                letterSpacing: "-0.022em", fontFamily: "var(--font-display)",
                margin: "0 0 6px",
              }}>
                Сайн байна уу, {user?.name?.split(" ")[0] || "Худалдагч"}! 👋
              </h1>
              <p style={{ fontSize: 13, color: "rgba(148,163,184,.65)", fontWeight: 400 }}>
                4 шинэ захиалга · 1,240 үзэлт энэ долоо хоногт
              </p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setTab("add")}
                className="btn btn-primary btn-md"
                style={{ fontFamily: "var(--font-display)", gap: 6 }}>
                + Бараа нэмэх
              </button>
              <button
                className="btn btn-glass btn-md"
                style={{ fontFamily: "var(--font-display)" }}>
                📤 Тайлан
              </button>
            </div>
          </div>

          {/* KPI strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 28 }}>
            {[
              { icon: "💰", label: "Орлого",   value: "₮2.4M", delta: "+18%", up: true  },
              { icon: "📦", label: "Захиалга", value: "47",    delta: "+12%", up: true  },
              { icon: "👁", label: "Үзэлт",   value: "1,240", delta: "-3%",  up: false },
              { icon: "⭐", label: "Үнэлгээ", value: "4.8",   delta: "+0.2", up: true  },
            ].map(s => (
              <div key={s.label} style={{
                padding: "14px 16px", borderRadius: 14,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 18 }}>{s.icon}</span>
                  <span style={{
                    fontSize: 9, fontWeight: 800, padding: "2px 7px", borderRadius: 999,
                    background: s.up ? "rgba(16,185,129,.15)" : "rgba(239,68,68,.15)",
                    color: s.up ? "#34d399" : "#f87171",
                  }}>{s.delta}</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#f1f5f9",
                  fontFamily: "var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "rgba(148,163,184,.55)", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tab bar */}
          <div style={{ display: "flex", gap: 2 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "11px 18px", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-display)", fontSize: 13,
                  fontWeight: tab === t.id ? 700 : 500,
                  color: tab === t.id ? "#fff" : "rgba(148,163,184,.65)",
                  borderBottom: `2px solid ${tab === t.id ? "#10b981" : "transparent"}`,
                  background: tab === t.id ? "rgba(255,255,255,.07)" : "transparent",
                  borderRadius: "10px 10px 0 0",
                  transition: "all .18s ease",
                }}>
                <span style={{ fontSize: 14 }}>{t.icon}</span>
                <span className="hidden sm:block">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "32px 24px" }}>
        {tab === "overview" && (

          <div>
            <LowStockAlert dark={dark} cardBg={cardBg} border={border} text={text} muted={muted} />
            <DashboardStats />
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginTop: 20 }}>
              <div style={{ background: cardBg, border: `1px solid ${border}`,
                borderRadius: 18, boxShadow: dark ? "0 4px 20px rgba(0,0,0,.35)" : "var(--shadow-sm)" }}>
                <div style={{ padding: "20px 24px 16px", borderBottom: `1px solid ${border}` }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: text,
                    fontFamily: "var(--font-display)" }}>📊 Борлуулалтын график</div>
                </div>
                <div style={{ padding: 24 }}><SalesChart /></div>
              </div>
              <div style={{ background: cardBg, border: `1px solid ${border}`,
                borderRadius: 18, boxShadow: dark ? "0 4px 20px rgba(0,0,0,.35)" : "var(--shadow-sm)" }}>
                <div style={{ padding: "20px 24px 16px", borderBottom: `1px solid ${border}` }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: text,
                    fontFamily: "var(--font-display)" }}>🔔 Сүүлийн үйлдлүүд</div>
                </div>
                <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { icon: "📦", msg: "Шинэ захиалга: Ямааны ноолуур", time: "2 мин",  color: "#10b981" },
                    { icon: "💬", msg: "Шинэ чат: Б. Тэмүүжин",         time: "15 мин", color: "#06b6d4" },
                    { icon: "⭐", msg: "Шинэ үнэлгээ: 5 одтой",         time: "1 цаг",  color: "#f59e0b" },
                    { icon: "✅", msg: "Захиалга баталгаажлаа #847",     time: "3 цаг",  color: "#059669" },
                  ].map((a, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px",
                      borderRadius: 10, background: dark ? "rgba(255,255,255,.03)" : "#f8fafc",
                      border: `1px solid ${border}`,
                    }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 15, background: `${a.color}12`,
                      }}>{a.icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: text,
                          overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{a.msg}</div>
                        <div style={{ fontSize: 10, color: muted, marginTop: 2, fontWeight: 500 }}>{a.time} өмнө</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "orders"   && <OrdersList />}
        {tab === "products" && <MyProductsList />}
        {tab === "add"      && <AddProductForm />}
      </div>
    </div>
  );
}
