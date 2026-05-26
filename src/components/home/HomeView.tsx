"use client";
import { useState } from "react";
import { useTheme  } from "@/context/ThemeContext";
import { useInView } from "@/lib/hooks";
import { HeroSection, CategoryGrid, StatBand, TrustBand } from "@/components/home";
import { MongoliaMap } from "@/components/map";
import { ProductCard  } from "@/components/products/ProductCard";
import { ProductModal } from "@/components/products/ProductModal";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { Footer       } from "@/components/layout";
import { PRODUCTS     } from "@/lib/data";
import type { Product } from "@/lib/types";

interface HomeViewProps {
  onExplore:       () => void;
  onSell:          () => void;
  onMapAimag:      (name: string) => void;
  onHeroSearch?:   (query: string, aimag?: string, cat?: string) => void;
  onAuthRequired?: () => void;
}

/* ── Shared section header ─────────────────────────────────────────────────── */
function SectionHeader({
  label, title, sub, action, onAction, visible,
}: {
  label: string; title: string; sub?: string;
  action?: string; onAction?: () => void; visible: boolean;
}) {
  const { dark } = useTheme();
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-end",
      flexWrap: "wrap", gap: 16, marginBottom: 36,
      opacity: visible ? 1 : 0,
      animation: visible ? "fadeUp .52s ease both" : "none",
    }}>
      <div>
        <div className="section-label">{label}</div>
        <h2 style={{
          fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800,
          letterSpacing: "-0.022em", lineHeight: 1.18, margin: "0 0 6px",
          color: dark ? "#f1f5f9" : "#0f172a",
          fontFamily: "var(--font-display)",
        }}>{title}</h2>
        {sub && <p style={{ fontSize: 13, color: dark ? "#64748b" : "#94a3b8", fontWeight: 400 }}>{sub}</p>}
      </div>
      {action && onAction && (
        <button onClick={onAction}
          className="btn btn-ghost btn-md"
          style={{ fontFamily: "var(--font-display)", gap: 6 }}>
          {action} →
        </button>
      )}
    </div>
  );
}

/* ── Flash sale strip ──────────────────────────────────────────────────────── */
function FlashSale({ onExplore }: { onExplore: () => void }) {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.06);
  const [hovIdx, setHovIdx] = useState<number | null>(null);
  const ITEMS = [
    { emoji: "🐑", name: "Хонины ноос 1кг",    orig: 25000, sale: 17500, aimag: "Говь-Алтай", tag: "Bestseller" },
    { emoji: "🧀", name: "Ааруул 500гр",        orig: 18000, sale: 12600, aimag: "Архангай",   tag: null },
    { emoji: "🍖", name: "Адууны мах 2кг",      orig: 68000, sale: 47600, aimag: "Увс",        tag: "Limited" },
    { emoji: "🌸", name: "Хандгай жимс 200гр",  orig: 22000, sale: 15400, aimag: "Хэнтий",     tag: null },
  ];

  return (
    <section ref={ref} style={{
      padding: "72px 24px",
      background: dark ? "#020617" : "#f8fafc",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div style={{
          borderRadius: 18, overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg, #1a0a0a 0%, #3b0f0f 50%, #1a0a0a 100%)"
            : "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)",
          padding: "28px 32px",
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .52s ease both" : "none",
        }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16, marginBottom: 24,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ fontSize: 32, animation: "float 2.5s ease-in-out infinite" }}>⚡</div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em",
                  color: "rgba(254,202,202,.65)", marginBottom: 4, textTransform: "uppercase" }}>
                  Хязгаарлагдмал хугацаа
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff",
                  fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                  Flash Sale — 30% хүртэл хямдрал
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {["08", "45", "22"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{
                    background: "rgba(0,0,0,.3)", borderRadius: 8,
                    padding: "8px 12px", textAlign: "center",
                  }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#fff",
                      fontFamily: "var(--font-display)", lineHeight: 1 }}>{t}</div>
                    <div style={{ fontSize: 9, color: "rgba(254,202,202,.6)", fontWeight: 600, marginTop: 2 }}>
                      {["Цаг","Мин","Сек"][i]}
                    </div>
                  </div>
                  {i < 2 && <div style={{ color: "rgba(255,255,255,.4)", fontSize: 18, fontWeight: 700 }}>:</div>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {ITEMS.map((item, i) => {
              const isHov = hovIdx === i;
              const disc = Math.round((1 - item.sale / item.orig) * 100);
              return (
                <button key={i} onClick={onExplore}
                  onMouseEnter={() => setHovIdx(i)}
                  onMouseLeave={() => setHovIdx(null)}
                  style={{
                    padding: "18px 14px", borderRadius: 16, textAlign: "center",
                    background: isHov ? "rgba(255,255,255,.13)" : "rgba(255,255,255,.07)",
                    border: `1px solid ${isHov ? "rgba(255,255,255,.22)" : "rgba(255,255,255,.09)"}`,
                    cursor: "pointer", fontFamily: "inherit",
                    transform: isHov ? "translateY(-5px) scale(1.02)" : "none",
                    boxShadow: isHov ? "0 16px 36px rgba(0,0,0,.30)" : "none",
                    transition: "all .26s var(--ease-spring)",
                    position: "relative", overflow: "hidden",
                    opacity: visible ? 1 : 0,
                    animation: visible ? `fadeUp .5s cubic-bezier(.16,1,.3,1) ${i * .08}s both` : "none",
                  }}
                >
                  {isHov && (
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 2,
                      background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                      borderRadius: "16px 16px 0 0",
                    }} />
                  )}
                  {item.tag && (
                    <div style={{
                      position: "absolute", top: 10, right: 10,
                      fontSize: 8, fontWeight: 800, padding: "2px 7px", borderRadius: 999,
                      background: "rgba(251,191,36,.2)", color: "#fbbf24",
                      border: "1px solid rgba(251,191,36,.25)", letterSpacing: ".06em",
                    }}>
                      {item.tag.toUpperCase()}
                    </div>
                  )}
                  <div style={{
                    fontSize: 34, marginBottom: 12,
                    transform: isHov ? "scale(1.14) translateY(-2px)" : "none",
                    transition: "transform .3s var(--ease-spring)",
                    display: "inline-block",
                  }}>{item.emoji}</div>
                  <div style={{
                    fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 5,
                    fontFamily: "var(--font-display)", lineHeight: 1.3,
                  }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: "rgba(254,202,202,.55)", marginBottom: 10 }}>
                    📍 {item.aimag}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 7 }}>
                    <span style={{ fontSize: 16, fontWeight: 900, color: "#fde68a",
                      fontFamily: "var(--font-display)" }}>
                      ₮{item.sale.toLocaleString()}
                    </span>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,.3)", textDecoration: "line-through" }}>
                      ₮{item.orig.toLocaleString()}
                    </span>
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 3,
                    fontSize: 9, fontWeight: 800, padding: "2px 9px", borderRadius: 999,
                    background: "rgba(239,68,68,.28)", color: "#fca5a5",
                    border: "1px solid rgba(239,68,68,.22)",
                  }}>
                    ↓ -{disc}% хямдрал
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Product section ───────────────────────────────────────────────────────── */
function ProductSection({
  label, title, sub, products, onOpen, onMore, onAuthRequired
}: {
  label: string; title: string; sub?: string;
  products: Product[]; onOpen: (p: Product) => void;
  onMore: () => void; onAuthRequired?: () => void;
}) {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.06);

  return (
    <section ref={ref} style={{
      padding: "80px 24px",
      background: dark ? "#0f172a" : "#ffffff",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16,185,129,.03), transparent)"
          : "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16,185,129,.025), transparent)",
      }} />
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader label={label} title={title} sub={sub} action="Бүгдийг үзэх" onAction={onMore} visible={visible} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: 14,
        }} className="stagger">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onOpen={onOpen} onAuthRequired={onAuthRequired} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main HomeView ─────────────────────────────────────────────────────────── */
export function HomeView({ onExplore, onSell, onMapAimag, onHeroSearch, onAuthRequired }: HomeViewProps) {
  const { dark } = useTheme();
  const [modal, setModal] = useState<Product | null>(null);

  return (
    <div style={{ background: dark ? "#020617" : "#ffffff" }}>
      <HeroSection
        onExplore={onExplore}
        onSell={onSell}
        onSearch={onHeroSearch}
      />

      <StatBand />
      <CategoryGrid onExplore={onExplore} />
      <FlashSale onExplore={onExplore} />

      <ProductSection
        label="🔥 Эрэлттэй бараа"
        title="Онцлох бараанууд"
        sub="Хамгийн олон захиалагдаж буй бүтээгдэхүүнүүд"
        products={PRODUCTS.slice(0, 4)}
        onOpen={setModal}
        onMore={onExplore}
        onAuthRequired={onAuthRequired}
      />

      <section style={{
        padding: "80px 24px",
        background: dark ? "#020617" : "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: dark
            ? "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,.04), transparent)"
            : "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,.03), transparent)",
        }} />
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">🗺️ Аймгаар хайх</div>
            <h2 style={{
              fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800,
              letterSpacing: "-0.022em", color: dark ? "#f1f5f9" : "#0f172a",
              fontFamily: "var(--font-display)", margin: 0,
            }}>Монгол орны зах зээл</h2>
            <p style={{ fontSize: 13, color: dark ? "#64748b" : "#94a3b8", marginTop: 8, fontWeight: 400 }}>
              Дурын аймгийг дарж, тэр нутгийн бараануудыг харна уу
            </p>
          </div>
          <MongoliaMap onExplore={onMapAimag} />
        </div>
      </section>

      <ProductSection
        label="✨ Санал болгох"
        title="Танд тохирох бараанууд"
        sub="Таны хайлтын дагуу сонголт"
        products={PRODUCTS.slice(4, 8)}
        onOpen={setModal}
        onMore={onExplore}
        onAuthRequired={onAuthRequired}
      />

      <TrustBand />
      <Footer />

      {modal && (
        <ProductModal product={modal} onClose={() => setModal(null)} onAuthRequired={onAuthRequired} />
      )}
    </div>
  );
}
