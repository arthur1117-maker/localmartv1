"use client";
import { useState, useEffect, useRef } from "react";
import { useInView }  from "@/lib/hooks";
import { useTheme }   from "@/context/ThemeContext";
import { AIMAG_NODES, CATEGORIES } from "@/lib/data";

interface HeroSectionProps { onExplore: () => void; onSell: () => void; onSearch?: (q: string, aimag?: string, cat?: string) => void; }

const SHOWCASE = [
  { emoji: "🧶", name: "Ямааны цэвэр ноолуур", price: "₮85,000", aimag: "Увс",         verified: true,  tag: "Шилдэг", rating: 4.9, reviews: 142 },
  { emoji: "🥩", name: "Хонины органик мах",   price: "₮42,000", aimag: "Архангай",    verified: true,  tag: null,      rating: 4.8, reviews: 89  },
  { emoji: "🍯", name: "Зэрлэг зөгийн бал",    price: "₮45,000", aimag: "Баян-Өлгий", verified: false, tag: "Organic", rating: 5.0, reviews: 63  },
  { emoji: "🥛", name: "Үнээний цэвэр сүү",    price: "₮8,000",  aimag: "Хөвсгөл",    verified: true,  tag: null,      rating: 4.7, reviews: 211 },
];

const STATS = [
  { value: "2,840+", label: "Нийт бараа",         icon: "📦" },
  { value: "340+",   label: "Баталгаат худалдагч", icon: "✓"  },
  { value: "21",     label: "Аймаг",               icon: "📍" },
  { value: "98%",    label: "Сэтгэл ханамж",       icon: "⭐" },
];

const TRUST = [
  { icon: "🔒", label: "Аюулгүй" },
  { icon: "🚚", label: "Хурдан хүргэлт" },
  { icon: "✅", label: "Баталгаат чанар" },
];

export function HeroSection({ onExplore, onSell, onSearch }: HeroSectionProps) {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.01);
  const [card, setCard]   = useState(0);
  const [query, setQuery] = useState("");
  const [aimag, setAimag] = useState("");
  const [cat,   setCat]   = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [cardAnim, setCardAnim] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (onSearch && (query || aimag || cat)) {
      onSearch(query, aimag || undefined, cat || undefined);
    } else {
      onExplore();
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCardAnim(true);
      setTimeout(() => {
        setCard(n => (n + 1) % SHOWCASE.length);
        setCardAnim(false);
      }, 200);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const show = (delay = 0): React.CSSProperties =>
    visible
      ? { animation: `fadeUp .65s cubic-bezier(.16,1,.3,1) ${delay}s both`, opacity: 1 }
      : { opacity: 0 };

  const heroBg = dark
    ? "linear-gradient(160deg, #020617 0%, #0d1829 45%, #071220 100%)"
    : "linear-gradient(160deg, #ffffff 0%, #f9fafb 50%, #f0fdf8 85%, #ecfdf5 100%)";

  const textPrimary   = dark ? "#f1f5f9"  : "#0f172a";
  const textSecondary = dark ? "#64748b"  : "#64748b";
  const cardBg        = dark ? "rgba(13,20,36,.92)"    : "rgba(255,255,255,.97)";
  const cardBorder    = dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.055)";
  const cardShadow    = dark
    ? "0 24px 64px rgba(0,0,0,.60), 0 4px 20px rgba(0,0,0,.40), inset 0 1px 0 rgba(255,255,255,.05)"
    : "0 24px 64px rgba(0,0,0,.07), 0 4px 16px rgba(0,0,0,.04), inset 0 1px 0 rgba(255,255,255,.9)";
  const priceColor    = dark ? "#34d399" : "#059669";
  const separatorColor = dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.055)";

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: heroBg }}>

      {/* ── Layered cinematic background system ─────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Primary spotlight — top-left bloom */}
        <div className="spotlight spotlight-primary" style={{ top: "-20%", left: "-14%" }} />

        {/* Secondary — bottom-right bloom */}
        <div className="spotlight spotlight-secondary" style={{ bottom: "-18%", right: "-12%" }} />

        {/* Tertiary accent — center depth */}
        <div className="spotlight" style={{
          width: 500, height: 500, top: "30%", left: "40%",
          background: dark
            ? "radial-gradient(circle, rgba(20,184,166,.04) 0%, transparent 60%)"
            : "radial-gradient(circle, rgba(20,184,166,.035) 0%, transparent 60%)",
          animation: "orbSlow 28s ease-in-out 8s infinite",
        }} />

        {/* Noise grain texture overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: dark ? 0.025 : 0.018,
          mixBlendMode: "multiply",
        }} />
      </div>

      {/* ── Dot grid ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: dark ? .55 : .35 }} />

      {/* ── Subtle top rule ───────────────────────────────────────────────── */}
      <div className="absolute top-16 left-0 right-0 h-px pointer-events-none separator" />

      {/* ═══ Main Content ══════════════════════════════════════════════════ */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-32 pb-64">

        {/* ─── LEFT: Copy ───────────────────────────────────────────────── */}
        <div className="z-10">

          {/* Live pill */}
          <div style={{
            ...show(0.04),
            display: "inline-flex", alignItems: "center", gap: 8,
            borderRadius: 999, padding: "6px 14px", marginBottom: 30,
            background: dark ? "rgba(16,185,129,.09)" : "rgba(5,150,105,.06)",
            border: `1px solid ${dark ? "rgba(52,211,153,.2)" : "rgba(5,150,105,.15)"}`,
            boxShadow: dark ? "0 0 20px rgba(16,185,129,.06)" : "0 2px 12px rgba(5,150,105,.06)",
          }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-pulse-dot"
                style={{ background: "#10b981" }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#10b981" }} />
            </span>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
              color: dark ? "#34d399" : "#047857",
              fontFamily: "var(--font-display)",
            }}>
              21 АЙМГИЙН БАРАА · НЭГ ДОРООС
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            ...show(0.12),
            fontSize: "clamp(2.3rem,5.4vw,4rem)",
            fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.033em",
            color: textPrimary, marginBottom: 22,
            fontFamily: "var(--font-display)",
          }}>
            Нутаг бүрийн<br />
            <span className="text-gradient-hero">шинэлэг бараа</span><br />
            <span style={{ fontWeight: 800, color: textPrimary }}>нэг дороос</span>
          </h1>

          {/* Subhead */}
          <p style={{
            ...show(0.24),
            fontSize: 16, lineHeight: 1.8, color: textSecondary,
            maxWidth: 440, marginBottom: 38, fontWeight: 400,
          }}>
            Монголын малчид, фермерүүдийн шинэхэн бүтээгдэхүүнийг шууд
            захиалж, гэртээ хүргүүлээрэй.{" "}
            <strong style={{ color: dark ? "#34d399" : "#047857", fontWeight: 600 }}>
              Баталгаат чанар.
            </strong>
          </p>

          {/* CTAs */}
          <div style={{ ...show(0.34), display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 46 }}>
            <button onClick={onExplore}
              className="btn btn-primary btn-xl group"
              style={{ gap: 8, fontFamily: "var(--font-display)", letterSpacing: "-0.015em" }}>
              Зах зээл үзэх
              <svg style={{ width: 16, height: 16, transition: "transform .22s var(--ease-spring)" }}
                className="group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button onClick={onSell}
              className="btn btn-outline btn-xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.015em" }}>
              Худалдагч болох
            </button>
          </div>

          {/* Stats — inline, tight */}
          <div style={{
            ...show(0.44),
            display: "flex", gap: 0, flexWrap: "wrap", marginBottom: 30,
            borderRadius: 14, overflow: "hidden",
            border: `1px solid ${dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)"}`,
            background: dark ? "rgba(15,23,42,.5)" : "rgba(248,250,252,.7)",
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                flex: "1 1 0", padding: "16px 18px", textAlign: "center",
                borderRight: i < STATS.length - 1
                  ? `1px solid ${dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"}`
                  : "none",
              }}>
                <div style={{
                  fontSize: 19, fontWeight: 900, letterSpacing: "-0.025em",
                  color: textPrimary, fontFamily: "var(--font-display)", lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 10, color: textSecondary, marginTop: 5, fontWeight: 600, letterSpacing: ".04em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div style={{ ...show(0.52), display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TRUST.map(t => (
              <span key={t.label} style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "5px 12px", borderRadius: 999,
                fontSize: 11, fontWeight: 600,
                color: dark ? "#64748b" : "#64748b",
                background: dark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.025)",
                border: `1px solid ${dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)"}`,
              }}>
                <span style={{ fontSize: 12 }}>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: Product Showcase Cards ──────────────────────────── */}
        <div className="hidden lg:flex flex-col gap-3 z-10" style={show(0.18)}>

          {/* Main featured card */}
          <div style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: cardShadow,
            borderRadius: 22, padding: "22px 22px 18px",
            position: "relative", overflow: "hidden",
            transition: "all .3s ease",
          }}>
            {/* Accent top gradient line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, #059669, #14b8a6, #06b6d4)",
              borderRadius: "22px 22px 0 0",
            }} />

            {/* Corner ambient */}
            <div style={{
              position: "absolute", top: -60, right: -60, width: 160, height: 160, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(16,185,129,.07), transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{
              display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18,
              opacity: cardAnim ? 0 : 1,
              transform: cardAnim ? "translateY(6px)" : "none",
              transition: "all .22s ease",
            }}>
              {/* Product emoji */}
              <div className="animate-float" style={{
                width: 60, height: 60, borderRadius: 16, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, background: dark ? "rgba(16,185,129,.09)" : "#ecfdf5",
                border: `1.5px solid ${dark ? "rgba(52,211,153,.14)" : "#d1fae5"}`,
                boxShadow: "0 4px 16px rgba(16,185,129,.12)",
              }}>
                {SHOWCASE[card].emoji}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {SHOWCASE[card].tag && (
                  <div style={{
                    display: "inline-flex", fontSize: 9, fontWeight: 800,
                    letterSpacing: ".1em", color: "#047857", background: "#ecfdf5",
                    border: "1px solid #a7f3d0", borderRadius: 999,
                    padding: "2px 8px", marginBottom: 7, textTransform: "uppercase",
                    animation: "badgePop .3s var(--ease-spring)",
                  }}>{SHOWCASE[card].tag}</div>
                )}
                <div style={{
                  fontSize: 14, fontWeight: 800, color: textPrimary,
                  lineHeight: 1.25, fontFamily: "var(--font-display)", marginBottom: 6,
                }}>
                  {SHOWCASE[card].name}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 11, color: textSecondary, fontWeight: 500 }}>
                    📍 {SHOWCASE[card].aimag}
                  </span>
                  {SHOWCASE[card].verified && (
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: "#059669",
                      background: "#ecfdf5", border: "1px solid #a7f3d0",
                      borderRadius: 999, padding: "1px 7px",
                    }}>✓ Баталгаажсан</span>
                  )}
                </div>
              </div>

              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{
                  fontSize: 20, fontWeight: 900, color: priceColor,
                  letterSpacing: "-0.025em", fontFamily: "var(--font-display)",
                }}>
                  {SHOWCASE[card].price}
                </div>
                <div style={{ fontSize: 10, color: textSecondary, marginTop: 2 }}>/ кг</div>
              </div>
            </div>

            {/* Star rating */}
            <div style={{
              display: "flex", alignItems: "center", gap: 6, marginBottom: 14,
              opacity: cardAnim ? 0 : 1,
              transition: "opacity .22s ease",
            }}>
              <div style={{ display: "flex", gap: 1 }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: 11 }}>{s}</span>
                ))}
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: priceColor }}>
                {SHOWCASE[card].rating}
              </span>
              <span style={{ fontSize: 10, color: textSecondary }}>
                ({SHOWCASE[card].reviews} үнэлгээ)
              </span>
            </div>

            {/* Dot nav */}
            <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
              {SHOWCASE.map((_, i) => (
                <button key={i} onClick={() => setCard(i)} style={{
                  borderRadius: 999, border: "none", cursor: "pointer", padding: 0,
                  width: i === card ? 20 : 6, height: 6,
                  background: i === card
                    ? "linear-gradient(90deg, #10b981, #14b8a6)"
                    : (dark ? "rgba(255,255,255,.14)" : "#cbd5e1"),
                  transition: "all .28s var(--ease-spring)",
                  boxShadow: i === card ? "0 2px 8px rgba(16,185,129,.3)" : "none",
                }} />
              ))}
            </div>
          </div>

          {/* 3 mini cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
            {[
              { emoji: "🧀", name: "Ааруул",        sub: "Цагаан идээ", count: "240+" },
              { emoji: "🌾", name: "Улаанбуудай",   sub: "Тариалан",    count: "180+" },
              { emoji: "🌿", name: "Эмийн ургамал", sub: "Байгаль",     count: "120+" },
            ].map((c, i) => (
              <div key={i}
                style={{
                  background: cardBg, border: `1px solid ${cardBorder}`,
                  boxShadow: dark ? "0 4px 18px rgba(0,0,0,.38)" : "0 2px 12px rgba(0,0,0,.045)",
                  borderRadius: 16, padding: "16px 10px", textAlign: "center", cursor: "pointer",
                  transition: "transform .24s var(--ease-spring), box-shadow .24s ease, border-color .2s ease",
                  position: "relative", overflow: "hidden",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px) scale(1.02)";
                  el.style.boxShadow = dark ? "0 16px 36px rgba(0,0,0,.50)" : "0 12px 32px rgba(0,0,0,.09)";
                  el.style.borderColor = dark ? "rgba(52,211,153,.20)" : "rgba(16,185,129,.20)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = dark ? "0 4px 18px rgba(0,0,0,.38)" : "0 2px 12px rgba(0,0,0,.045)";
                  el.style.borderColor = cardBorder;
                }}
              >
                <div style={{
                  fontSize: 26, marginBottom: 8,
                  animation: `float ${3.6 + i * 0.9}s ease-in-out ${i * 0.4}s infinite`,
                }}>
                  {c.emoji}
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: textPrimary,
                  lineHeight: 1.3, fontFamily: "var(--font-display)", marginBottom: 4,
                }}>
                  {c.name}
                </div>
                <div className="badge badge-em" style={{ fontSize: 9 }}>{c.sub}</div>
                <div style={{ fontSize: 9, color: textSecondary, marginTop: 5, fontWeight: 600 }}>
                  {c.count} бараа
                </div>
              </div>
            ))}
          </div>

          {/* Social proof strip */}
          <div style={{
            background: cardBg, border: `1px solid ${cardBorder}`,
            boxShadow: dark ? "0 4px 16px rgba(0,0,0,.32)" : "0 2px 10px rgba(0,0,0,.04)",
            borderRadius: 16, padding: "13px 18px",
            display: "flex", alignItems: "center", gap: 14,
            position: "relative", overflow: "hidden",
          }}>
            {/* Subtle left accent */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
              background: "linear-gradient(180deg, #10b981, #14b8a6)",
              borderRadius: "16px 0 0 16px",
            }} />

            <div style={{ display: "flex", flexShrink: 0, paddingLeft: 6 }}>
              {["👩‍🌾","👨‍🌾","🧑‍🌾","👩","👨"].map((av, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: `2.5px solid ${dark ? "#0d1829" : "#fff"}`,
                  background: `hsl(${i*55+150},35%,${dark?24:78}%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, marginLeft: i > 0 ? -9 : 0, zIndex: 5 - i,
                  boxShadow: "0 2px 6px rgba(0,0,0,.12)",
                }}>{av}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: textPrimary, fontFamily: "var(--font-display)" }}>
                340+ худалдагч нэгдсэн
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 2 }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: 10 }}>{s}</span>
                ))}
                <span style={{ fontSize: 10, color: textSecondary, marginLeft: 4, fontWeight: 600 }}>
                  4.9 дундаж
                </span>
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div className="badge badge-live" style={{ fontSize: 10, gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
                Онлайн
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Floating Search Bar ═══════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 px-4 md:px-0">
        <div style={{
          maxWidth: 820, margin: "0 auto",
          borderRadius: "18px 18px 0 0",
          boxShadow: dark
            ? "0 -12px 50px rgba(0,0,0,.50), 0 -2px 10px rgba(0,0,0,.35)"
            : "0 -12px 50px rgba(0,0,0,.07), 0 -2px 10px rgba(0,0,0,.04)",
          background: dark ? "rgba(10,17,30,.98)" : "rgba(255,255,255,1)",
          border: `1px solid ${dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)"}`,
          borderBottom: "none",
          backdropFilter: "blur(28px) saturate(1.5)",
          WebkitBackdropFilter: "blur(28px) saturate(1.5)",
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .7s cubic-bezier(.16,1,.3,1) .95s both" : "none",
          position: "relative", overflow: "hidden",
        }}>
          {/* Top accent gradient line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1.5,
            background: searchFocused
              ? "linear-gradient(90deg, #059669, #14b8a6, #06b6d4)"
              : "transparent",
            transition: "background .35s ease",
          }} />

          {/* Input row */}
          <div style={{
            display: "flex",
            borderBottom: `1px solid ${separatorColor}`,
          }}>
            {/* Aimag */}
            <div style={{
              display: "flex", alignItems: "center", padding: "0 16px",
              borderRight: `1px solid ${separatorColor}`, flexShrink: 0,
            }}>
              <span style={{ marginRight: 7, fontSize: 14, opacity: .7 }}>📍</span>
              <select
                value={aimag} onChange={e => setAimag(e.target.value)}
                style={{
                  background: "transparent", outline: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 600, color: dark ? "#94a3b8" : "#475569",
                  padding: "16px 0", minWidth: 110, fontFamily: "inherit",
                  border: "none",
                }}>
                <option value="">Бүх аймаг</option>
                {AIMAG_NODES.map(a => <option key={a.id}>{a.name}</option>)}
              </select>
            </div>

            {/* Category */}
            <div style={{
              display: "flex", alignItems: "center", padding: "0 16px",
              borderRight: `1px solid ${separatorColor}`, flexShrink: 0,
            }}>
              <span style={{ marginRight: 7, fontSize: 14, opacity: .7 }}>📦</span>
              <select
                value={cat} onChange={e => setCat(e.target.value)}
                style={{
                  background: "transparent", outline: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 600, color: dark ? "#94a3b8" : "#475569",
                  padding: "16px 0", minWidth: 110, fontFamily: "inherit",
                  border: "none",
                }}>
                <option value="">Бүх төрөл</option>
                {CATEGORIES.map(c => <option key={c.label}>{c.label}</option>)}
              </select>
            </div>

            {/* Search input */}
            <div style={{ flex: 1, display: "flex" }}>
              <input
                ref={searchRef}
                value={query} onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Хайх — ноолуур, мах, бал..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  padding: "16px 18px", fontSize: 13, fontWeight: 500,
                  color: dark ? "#f1f5f9" : "#0f172a", fontFamily: "inherit", minWidth: 0,
                  transition: "all .2s ease",
                }}
              />
              <button onClick={handleSearch}
                className="btn btn-primary"
                style={{
                  borderRadius: 0, padding: "0 24px", fontFamily: "inherit",
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                  letterSpacing: "-0.01em",
                }}>
                Хайх
              </button>
            </div>
          </div>

          {/* Quick pills */}
          <div className="no-scrollbar" style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 16px", overflowX: "auto",
          }}>
            <span style={{
              fontSize: 10, fontWeight: 700, color: dark ? "#475569" : "#94a3b8",
              flexShrink: 0, letterSpacing: ".06em", textTransform: "uppercase",
            }}>
              Хурдан:
            </span>
            {["🥩 Мах", "🧶 Ноолуур", "🍯 Бал", "🥛 Сүү", "🌾 Тариалан", "🧀 Цагаан идээ"].map(q => (
              <button key={q} onClick={onExplore}
                style={{
                  flexShrink: 0, padding: "5px 12px", borderRadius: 999,
                  fontSize: 11, fontWeight: 600, cursor: "pointer", border: "none",
                  background: dark ? "rgba(16,185,129,.07)" : "#f0fdf4",
                  color: dark ? "#34d399" : "#059669",
                  fontFamily: "inherit",
                  transition: "all .18s var(--ease-spring)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.background = dark ? "rgba(16,185,129,.14)" : "#dcfce7";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.background = dark ? "rgba(16,185,129,.07)" : "#f0fdf4";
                  el.style.transform = "none";
                }}
              >{q}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
