"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme }   from "@/context/ThemeContext";
import { useCart }    from "@/context/CartContext";
import { useAuth }    from "@/context/AuthContext";
import { useChat }    from "@/context/ChatContext";
import { useToast }   from "@/components/ui";
import { REVIEWS }    from "@/lib/data";
import { NewBadge, OrganicBadge, VerifiedBadge, StarRating } from "@/components/ui";
import type { Product } from "@/lib/types";

interface ProductModalProps {
  product:         Product;
  onClose:         () => void;
  onAuthRequired?: () => void;
}

// ── Delivery estimate based on aimag distance from UB ──────────────────────
const DELIVERY_DAYS: Record<string, number> = {
  "Улаанбаатар": 1, "Дархан-Уул": 2, "Орхон": 2, "Сэлэнгэ": 3,
  "Төв": 3, "Булган": 3, "Өвөрхангай": 4, "Архангай": 4, "Хангай": 4,
  "Хөвсгөл": 5, "Завхан": 5, "Говь-Алтай": 6, "Увс": 6,
  "Баян-Өлгий": 7, "Хэнтий": 4, "Дорнод": 5, "Сүхбаатар": 5,
  "Дорноговь": 4, "Дундговь": 4, "Өмнөговь": 5, "Говьсүмбэр": 3,
};

function getDelivery(aimag: string): string {
  const days = DELIVERY_DAYS[aimag] ?? 5;
  const min  = days;
  const max  = days + 2;
  return `${min}–${max} хоногт хүргэнэ`;
}

// ── Stock level helpers ─────────────────────────────────────────────────────
function getStock(p: Product) {
  if (p.id % 5 === 0) return { level: "out",  qty: 0,  label: "Дууссан",        color: "#ef4444" };
  if (p.id % 3 === 0) return { level: "low",  qty: 3,  label: "3 ширхэг үлдсэн", color: "#f59e0b" };
  return               { level: "good", qty: 12, label: "Нөөц байна",           color: "#10b981" };
}

// ── Image "gallery" using emoji as placeholder ──────────────────────────────
const IMG_LABELS = ["Гол зураг", "Дэлгэрэнгүй", "Баглаа", "Баталгаа"];

// ── Report menu ─────────────────────────────────────────────────────────────
function ReportMenu({ onClose, dark }: { onClose: () => void; dark: boolean }) {
  const menuBg = dark ? "#1e293b" : "#fff";
  const menuBorder = dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)";
  const textCol = dark ? "#f1f5f9" : "#0f172a";
  const mutedCol = dark ? "#64748b" : "#94a3b8";
  return (
    <div
      style={{
        position: "absolute", top: 52, right: 0, zIndex: 30,
        background: menuBg, border: `1px solid ${menuBorder}`,
        borderRadius: 14, padding: "6px 0", minWidth: 180,
        boxShadow: "0 16px 48px rgba(0,0,0,.22), 0 4px 12px rgba(0,0,0,.10)",
        animation: "scaleInSm .2s cubic-bezier(.16,1,.3,1) both",
      }}
      onClick={e => e.stopPropagation()}
    >
      {[
        { icon: "🚨", label: "Бараа мэдэгдэх" },
        { icon: "⚠️", label: "Худалдагч мэдэгдэх" },
        { icon: "📋", label: "Хуулах холбоос" },
      ].map(item => (
        <button
          key={item.label}
          onClick={() => { alert(`${item.label} илгээгдлээ`); onClose(); }}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            width: "100%", padding: "10px 16px", background: "none",
            border: "none", cursor: "pointer", textAlign: "left",
            fontSize: 13, fontWeight: 600, color: textCol, fontFamily: "inherit",
            transition: "background .15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}
        >
          <span style={{ fontSize: 15 }}>{item.icon}</span>
          {item.label}
        </button>
      ))}
      <div style={{ margin: "4px 12px", height: 1, background: dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)" }} />
      <button
        onClick={onClose}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          width: "100%", padding: "10px 16px", background: "none",
          border: "none", cursor: "pointer", textAlign: "left",
          fontSize: 13, fontWeight: 600, color: mutedCol, fontFamily: "inherit",
        }}
      >
        ✕ Хаах
      </button>
    </div>
  );
}

// ── Buyer protection modal ──────────────────────────────────────────────────
function BuyerProtectionModal({ onClose, dark, C }: { onClose: () => void; dark: boolean; C: any }) {
  return (
    <div
      className="fixed inset-0 z-[700] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,.55)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: C.white, borderRadius: 22, padding: "32px 28px",
          maxWidth: 380, width: "100%",
          boxShadow: "0 24px 80px rgba(0,0,0,.30)",
          animation: "scaleIn .25s cubic-bezier(.16,1,.3,1) both",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 16, textAlign: "center" }}>🛡️</div>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, textAlign: "center",
          marginBottom: 8, fontFamily: "var(--font-display)" }}>
          Худалдан авагчийн хамгаалалт
        </h3>
        <p style={{ fontSize: 13, color: C.g500, textAlign: "center", marginBottom: 24, lineHeight: 1.6 }}>
          LocalMart Connected нь бүх гүйлгээг хамгаалдаг.
        </p>
        {[
          { icon: "💸", title: "7 хоногийн буцаалт", body: "Бараа тань хүрсэнээс 7 хоногийн дотор буцаах боломжтой." },
          { icon: "🔒", title: "Аюулгүй төлбөр", body: "QPay болон банкны картаар аюулгүй төлнө." },
          { icon: "📦", title: "Хүргэлтийн баталгаа", body: "Хүргэлт хийгдэхгүй бол бүрэн эргэн төлөлт хийгдэнэ." },
        ].map(item => (
          <div key={item.title} style={{
            display: "flex", gap: 14, marginBottom: 14, padding: "14px 16px",
            borderRadius: 14, background: C.g50, border: `1px solid ${C.g100}`,
          }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 3 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: C.g500, lineHeight: 1.5 }}>{item.body}</div>
            </div>
          </div>
        ))}
        <button
          onClick={onClose}
          style={{
            width: "100%", marginTop: 8, padding: "13px 0", borderRadius: 14,
            background: "linear-gradient(135deg,#059669,#14b8a6)",
            border: "none", color: "#fff", fontSize: 14, fontWeight: 700,
            cursor: "pointer", fontFamily: "inherit",
          }}
        >
          Ойлголоо ✓
        </button>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export function ProductModal({ product: p, onClose, onAuthRequired }: ProductModalProps) {
  const { C, dark }        = useTheme();
  const { add: addCart }   = useCart();
  const { isLoggedIn }     = useAuth();
  const { openThread }     = useChat();
  const { success }        = useToast();

  const [thumb, setThumb]       = useState(0);
  const [qty,   setQty]         = useState(1);
  const [added, setAdded]       = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "reviews" | "seller">("info");
  const [wished, setWished]     = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showProtection, setShowProtection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const stock = getStock(p);
  const delivery = getDelivery(p.aimag);
  const DOTS = Array.from({ length: p.imageCount });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleCart = () => {
    if (stock.level === "out") return;
    if (!isLoggedIn) { onClose(); onAuthRequired?.(); return; }
    addCart(p, qty);
    setAdded(true);
    success(`${qty}× "${p.name}" сагсанд нэмэгдлээ! 🛒`);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleChat = () => {
    if (!isLoggedIn) { onClose(); onAuthRequired?.(); return; }
    openThread(p.seller);
    onClose();
  };

  // Mobile: slide-up sheet; Desktop: centered modal
  const modalStyle: React.CSSProperties = isMobile ? {
    position: "fixed", bottom: 0, left: 0, right: 0,
    borderRadius: "24px 24px 0 0",
    maxHeight: "92vh", height: "92vh",
    background: C.white,
    boxShadow: "0 -24px 80px rgba(0,0,0,.28)",
    animation: "slideUp .38s cubic-bezier(.16,1,.3,1) both",
    display: "flex", flexDirection: "column", overflow: "hidden",
  } : {
    position: "relative", borderRadius: 26,
    maxWidth: 840, width: "100%", maxHeight: "92vh",
    background: C.white,
    boxShadow: "0 32px 100px rgba(0,0,0,.32), 0 8px 32px rgba(0,0,0,.14)",
    animation: "scaleIn .28s cubic-bezier(.16,1,.3,1) both",
    display: "flex", flexDirection: "column", overflow: "hidden",
  };

  const tabLabels = { info: "📝 Мэдээлэл", reviews: `⭐ Сэтгэгдэл (${REVIEWS.length})`, seller: "🏪 Худалдагч" };

  return (
    <>
      <div
        className="fixed inset-0 z-[600]"
        style={{
          background: isMobile ? "rgba(0,0,0,.45)" : "rgba(0,0,0,.65)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: isMobile ? "flex-end" : "center",
          justifyContent: "center", padding: isMobile ? 0 : "1rem 1rem",
        }}
        onClick={onClose}
      >
        <div style={modalStyle} onClick={e => e.stopPropagation()}>

          {/* ── Mobile drag handle ─────────────────────────────── */}
          {isMobile && (
            <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px", flexShrink: 0 }}>
              <div style={{ width: 40, height: 4, borderRadius: 9999,
                background: dark ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.12)" }} />
            </div>
          )}

          {/* ── Top action bar ─────────────────────────────────── */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "flex-end",
            padding: isMobile ? "0 16px 4px" : "14px 16px 0",
            gap: 8, flexShrink: 0, position: "relative",
          }}>
            {/* Wishlist */}
            <button
              onClick={() => setWished(w => !w)}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: wished ? "rgba(239,68,68,.12)" : (dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)"),
                border: "none", cursor: "pointer", fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all .2s",
                animation: wished ? "wishPop .38s cubic-bezier(.16,1,.3,1)" : "none",
              }}
            >
              {wished ? "❤️" : "🤍"}
            </button>

            {/* 3-dot report menu */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowReport(s => !s)}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
                  border: "none", cursor: "pointer", fontSize: 18,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: dark ? "#94a3b8" : "#64748b",
                }}
              >
                ⋯
              </button>
              {showReport && <ReportMenu onClose={() => setShowReport(false)} dark={dark} />}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
                border: "none", cursor: "pointer", fontSize: 16, fontWeight: 900,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: dark ? "#e2e8f0" : "#334155", transition: "all .18s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,.12)"; (e.currentTarget as HTMLElement).style.color = "#ef4444"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)"; (e.currentTarget as HTMLElement).style.color = dark ? "#e2e8f0" : "#334155"; }}
            >
              ✕
            </button>
          </div>

          {/* ── Scrollable body ───────────────────────────────────── */}
          <div style={{ overflowY: "auto", flex: 1 }}>

            {/* ── Top grid ── */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>

              {/* Left: Image panel */}
              <div style={{
                background: `linear-gradient(145deg,${C.greenBg},${C.greenSoft})`,
                minHeight: isMobile ? 220 : 300, position: "relative",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                {/* Main emoji image */}
                <div style={{
                  fontSize: isMobile ? 100 : 120,
                  animation: "float 4s ease-in-out infinite",
                  filter: "drop-shadow(0 24px 40px rgba(0,0,0,.14))",
                }}>
                  {p.emoji}
                </div>

                {/* Badges */}
                <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.isNew     && <NewBadge />}
                  {p.isOrganic && <OrganicBadge />}
                  {p.verified  && <VerifiedBadge />}
                </div>

                {/* Aimag badge */}
                <div style={{
                  position: "absolute", bottom: isMobile ? 14 : 48, left: 14,
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "6px 12px", borderRadius: 999,
                  background: "rgba(14,71,34,.82)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(74,222,128,.2)",
                  fontSize: 12, fontWeight: 700, color: "#fff",
                }}>
                  📍 {p.aimag}
                </div>

                {/* Thumbnail navigation strip */}
                <div style={{
                  position: "absolute", bottom: 14, left: 0, right: 0,
                  display: "flex", justifyContent: "center", gap: 6,
                }}>
                  {DOTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setThumb(i)}
                      title={IMG_LABELS[i]}
                      style={{
                        borderRadius: 999, border: "none", cursor: "pointer", padding: 0,
                        width: thumb === i ? 24 : 8, height: 8,
                        background: thumb === i ? C.green : "rgba(255,255,255,.55)",
                        transition: "all .25s var(--ease-spring)",
                        boxShadow: thumb === i ? "0 2px 8px rgba(5,150,105,.4)" : "none",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Product info */}
              <div style={{
                padding: isMobile ? "20px 20px" : "28px 28px",
                background: C.white, display: "flex", flexDirection: "column",
              }}>
                {/* Category */}
                <div style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: ".12em",
                  textTransform: "uppercase", color: C.g400, marginBottom: 6,
                }}>
                  {p.cat}
                </div>

                {/* Product name */}
                <h2 style={{
                  fontSize: isMobile ? 20 : 24, fontWeight: 800,
                  color: C.text, margin: "0 0 10px",
                  lineHeight: 1.2, fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}>
                  {p.name}
                </h2>

                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <StarRating rating={p.rating} reviews={p.reviews} size="md" />
                  {p.verified && (
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 999,
                      background: "#f0fdf4", color: "#059669", border: "1px solid #bbf7d0",
                    }}>
                      ✅ Баталгаажсан
                    </span>
                  )}
                </div>

                {/* Price */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
                  <span style={{
                    fontSize: isMobile ? 28 : 34, fontWeight: 900, color: C.orange,
                    fontFamily: "var(--font-display)", letterSpacing: "-0.03em",
                  }}>
                    ₮{p.price.toLocaleString()}
                  </span>
                  <span style={{ fontSize: 13, color: C.g400, fontWeight: 500 }}>/ {p.unit}</span>
                </div>

                {/* Stock status */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 14,
                  padding: "8px 14px", borderRadius: 12,
                  background: stock.level === "out"
                    ? "rgba(239,68,68,.06)"
                    : stock.level === "low"
                    ? "rgba(245,158,11,.06)"
                    : "rgba(16,185,129,.06)",
                  border: `1px solid ${stock.color}22`,
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                    background: stock.color,
                    boxShadow: `0 0 0 3px ${stock.color}30`,
                    animation: stock.level === "good" ? "pulseDot 2s ease-in-out infinite" : "none",
                  }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: stock.color }}>{stock.label}</span>
                  {stock.level === "low" && (
                    <span style={{ fontSize: 11, color: C.g400, marginLeft: "auto" }}>
                      ⚡ Хурдан захиал!
                    </span>
                  )}
                </div>

                {/* Delivery estimate */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 16,
                  padding: "8px 14px", borderRadius: 12,
                  background: C.g50, border: `1px solid ${C.g100}`,
                }}>
                  <span style={{ fontSize: 16 }}>🚚</span>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{delivery}</span>
                    <span style={{ fontSize: 11, color: C.g400, display: "block" }}>
                      {p.aimag}аас хүргэнэ
                    </span>
                  </div>
                </div>

                {/* Seller card */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 12, marginBottom: 18,
                  padding: "12px 14px", borderRadius: 14,
                  background: C.g50, border: `1px solid ${C.g100}`,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, fontSize: 22,
                    background: C.greenBg, display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    👨‍🌾
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text, display: "flex", alignItems: "center", gap: 6 }}>
                      {p.seller}
                      {p.verified && <span style={{ fontSize: 10, color: "#059669" }}>✅</span>}
                    </div>
                    <div style={{ fontSize: 11, color: C.g400 }}>📍 {p.aimag} · {p.date}</div>
                  </div>
                  <button
                    onClick={handleChat}
                    style={{
                      padding: "7px 14px", borderRadius: 10, border: "none",
                      background: C.blue, color: "#fff", fontSize: 12, fontWeight: 700,
                      cursor: "pointer", fontFamily: "inherit", flexShrink: 0,
                      boxShadow: "0 3px 10px rgba(3,105,161,.28)",
                    }}
                  >
                    💬 Чат
                  </button>
                </div>

                {/* Qty stepper */}
                {stock.level !== "out" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.g400, letterSpacing: ".08em", textTransform: "uppercase" }}>
                      Тоо:
                    </span>
                    <div style={{
                      display: "flex", alignItems: "center",
                      border: `2px solid ${C.g200}`, borderRadius: 14, overflow: "hidden",
                    }}>
                      <button
                        onClick={() => setQty(q => Math.max(1, q - 1))}
                        style={{
                          width: 44, height: 44, background: "none", border: "none",
                          cursor: "pointer", fontSize: 20, fontWeight: 700,
                          color: C.g500, transition: "all .15s",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,.08)"; (e.currentTarget as HTMLElement).style.color = "#ef4444"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = C.g500; }}
                      >
                        −
                      </button>
                      <span style={{ width: 36, textAlign: "center", fontSize: 16, fontWeight: 800, color: C.text }}>
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(q => Math.min(stock.qty, q + 1))}
                        style={{
                          width: 44, height: 44, background: "none", border: "none",
                          cursor: "pointer", fontSize: 20, fontWeight: 700,
                          color: C.green, transition: "all .15s",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,.08)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; }}
                      >
                        +
                      </button>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 800, color: C.orange }}>
                      = ₮{(p.price * qty).toLocaleString()}
                    </span>
                  </div>
                )}

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <button
                    onClick={() => alert(`📞 ${p.phone}`)}
                    style={{
                      flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
                      background: C.green, color: "#fff", fontSize: 14, fontWeight: 700,
                      cursor: "pointer", fontFamily: "inherit",
                      boxShadow: "0 5px 16px rgba(22,101,52,.28)",
                      transition: "all .2s", display: "flex", alignItems: "center",
                      justifyContent: "center", gap: 6,
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "none"}
                  >
                    📞 Залгах
                  </button>
                  <button
                    onClick={handleChat}
                    style={{
                      padding: "14px 18px", borderRadius: 14, border: "none",
                      background: C.blue, color: "#fff", fontSize: 18,
                      cursor: "pointer", fontFamily: "inherit",
                      boxShadow: "0 5px 16px rgba(3,105,161,.24)",
                      transition: "all .2s", display: "flex", alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "none"}
                  >
                    💬
                  </button>
                </div>

                <button
                  onClick={handleCart}
                  disabled={stock.level === "out"}
                  style={{
                    width: "100%", padding: "15px 0", borderRadius: 14, border: "none",
                    fontSize: 14, fontWeight: 700, fontFamily: "inherit",
                    cursor: stock.level === "out" ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "all .25s var(--ease-spring)",
                    background: stock.level === "out"
                      ? (dark ? "#1e293b" : "#f1f5f9")
                      : added
                      ? "linear-gradient(135deg,#059669,#059669)"
                      : "linear-gradient(135deg,#059669,#14b8a6)",
                    color: stock.level === "out" ? C.g400 : "#fff",
                    boxShadow: stock.level === "out" ? "none"
                      : added ? "0 6px 20px rgba(22,101,52,.35)"
                      : "0 6px 20px rgba(20,184,166,.38)",
                    transform: added ? "scale(.99)" : "none",
                  }}
                >
                  {stock.level === "out"
                    ? "⛔ Нөөц дууссан"
                    : added
                    ? `✓ ${qty} ш нэмэгдлээ!`
                    : `🛒 Сагсанд нэмэх (×${qty})`}
                </button>

                {/* Trust micro row */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 16, marginTop: 14, flexWrap: "wrap",
                }}>
                  {[
                    { icon: "🔒", label: "Аюулгүй", key: "lock" },
                    { icon: "✅", label: "7 хоног буцаалт", key: "return" },
                    { icon: "🚚", label: "Хүргэлт баталгаат", key: "delivery" },
                  ].map(t => (
                    <button
                      key={t.key}
                      onClick={() => setShowProtection(true)}
                      style={{
                        display: "flex", alignItems: "center", gap: 4,
                        background: "none", border: "none", cursor: "pointer",
                        fontSize: 11, fontWeight: 600, color: C.g400,
                        padding: "4px 6px", borderRadius: 8,
                        transition: "color .15s",
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.green}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.g400}
                    >
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Tabs ─────────────────────────────────────────────── */}
            <div style={{ borderTop: `1.5px solid ${C.g100}` }}>
              {/* Tab bar */}
              <div style={{ display: "flex", borderBottom: `1px solid ${C.g100}` }}>
                {(["info", "reviews", "seller"] as const).map(tab => (
                  <button key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      flex: 1, padding: "14px 8px",
                      fontSize: isMobile ? 11 : 13, fontWeight: 700,
                      fontFamily: "inherit", border: "none", cursor: "pointer",
                      color: activeTab === tab ? C.green : C.g400,
                      borderBottom: `2.5px solid ${activeTab === tab ? C.green : "transparent"}`,
                      background: activeTab === tab ? C.greenBg : "transparent",
                      transition: "all .18s",
                    }}
                  >
                    {tabLabels[tab]}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div style={{ padding: isMobile ? "20px 20px" : "24px 28px" }}>
                {activeTab === "info" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {/* Story */}
                    <div style={{
                      padding: "16px 18px", borderRadius: 14,
                      background: C.greenBg, border: `1px solid ${C.green}25`,
                    }}>
                      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".12em",
                        textTransform: "uppercase", color: C.green, marginBottom: 8 }}>
                        🌿 Гарал үүсэл
                      </div>
                      <p style={{ fontSize: 13, lineHeight: 1.7, color: C.text, margin: 0 }}>{p.story}</p>
                    </div>

                    {/* Return policy */}
                    <div style={{
                      padding: "14px 16px", borderRadius: 14,
                      background: dark ? "rgba(16,185,129,.06)" : "#f0fdf4",
                      border: "1px solid rgba(16,185,129,.15)",
                      display: "flex", alignItems: "flex-start", gap: 12,
                    }}>
                      <span style={{ fontSize: 20, flexShrink: 0 }}>🛡️</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: C.green, marginBottom: 4 }}>
                          Буцаалтын бодлого
                        </div>
                        <p style={{ fontSize: 12, color: C.g500, margin: 0, lineHeight: 1.6 }}>
                          Хүргэлт хийгдсэнээс хойш 7 хоногийн дотор буцааж болно. Бараа гэмтэлгүй, анхны байдлаараа байх ёстой.
                        </p>
                      </div>
                    </div>

                    {/* Specs grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {[
                        { icon: "📍", label: "Аймаг",      value: p.aimag },
                        { icon: "📦", label: "Ангилал",    value: p.cat },
                        { icon: "🗓", label: "Огноо",      value: p.date },
                        { icon: "📏", label: "Нэгж",       value: p.unit },
                        { icon: "👨‍🌾", label: "Худалдагч", value: p.seller },
                        { icon: "📞", label: "Холбоо",     value: p.phone },
                      ].map(spec => (
                        <div key={spec.label} style={{
                          padding: "12px 14px", borderRadius: 12,
                          background: C.g50, border: `1px solid ${C.g100}`,
                        }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: C.g400, marginBottom: 4 }}>
                            {spec.icon} {spec.label}
                          </div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {/* Rating summary */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: 20,
                      padding: "16px 18px", borderRadius: 14,
                      background: C.g50, border: `1px solid ${C.g100}`,
                      marginBottom: 4,
                    }}>
                      <div style={{ textAlign: "center", flexShrink: 0 }}>
                        <div style={{ fontSize: 40, fontWeight: 900, color: "#f59e0b",
                          fontFamily: "var(--font-display)", lineHeight: 1 }}>
                          {p.rating}
                        </div>
                        <div style={{ display: "flex", gap: 2, justifyContent: "center", margin: "6px 0" }}>
                          {"★★★★★".split("").map((s, i) => (
                            <span key={i} style={{ color: i < Math.floor(p.rating) ? "#f59e0b" : C.g200, fontSize: 13 }}>{s}</span>
                          ))}
                        </div>
                        <div style={{ fontSize: 10, color: C.g400 }}>{p.reviews} сэтгэгдэл</div>
                      </div>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                        {[5,4,3,2,1].map(star => (
                          <div key={star} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: C.g400, width: 8 }}>{star}</span>
                            <div style={{ flex: 1, height: 5, borderRadius: 999, background: C.g100, overflow: "hidden" }}>
                              <div style={{
                                height: "100%", borderRadius: 999, background: "#f59e0b",
                                width: `${star === 5 ? 70 : star === 4 ? 18 : star === 3 ? 7 : 3}%`,
                              }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {REVIEWS.map((r, i) => (
                      <div key={i} style={{
                        padding: "16px 18px", borderRadius: 14,
                        background: C.g50, border: `1px solid ${C.g100}`,
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ fontSize: 26 }}>{r.avatar}</span>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{r.name}</div>
                              <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                                {"★★★★★".split("").map((s, j) => (
                                  <span key={j} style={{ color: j < r.rating ? "#f59e0b" : C.g200, fontSize: 11 }}>{s}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <span style={{ fontSize: 11, color: C.g400 }}>{r.date}</span>
                        </div>
                        <p style={{ fontSize: 13, lineHeight: 1.6, color: C.g600, margin: 0 }}>{r.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "seller" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {/* Seller profile */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "18px 20px", borderRadius: 16,
                      background: C.greenBg, border: `1px solid ${C.green}25`,
                    }}>
                      <div style={{
                        width: 64, height: 64, borderRadius: 18, fontSize: 36,
                        background: C.white, border: `1.5px solid ${C.green}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        👨‍🌾
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 16, fontWeight: 800, color: C.text,
                          fontFamily: "var(--font-display)", display: "flex", alignItems: "center", gap: 8,
                          marginBottom: 3,
                        }}>
                          {p.seller}
                          {p.verified && (
                            <span style={{
                              fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999,
                              background: "#f0fdf4", color: "#059669", border: "1px solid #bbf7d0",
                            }}>
                              ✅ Баталгаажсан
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: 12, color: C.g500 }}>📍 {p.aimag}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
                          {"★★★★★".split("").map((s, i) => (
                            <span key={i} style={{ color: "#f59e0b", fontSize: 12 }}>{s}</span>
                          ))}
                          <span style={{ fontSize: 11, color: C.g400, marginLeft: 4 }}>4.9 дундаж</span>
                          <span style={{
                            marginLeft: 8, fontSize: 10, fontWeight: 700,
                            padding: "2px 7px", borderRadius: 999,
                            background: "rgba(16,185,129,.1)", color: "#059669",
                          }}>
                            ● Онлайн
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                      {[
                        { icon: "📦", label: "Бараа",    value: "24+" },
                        { icon: "⭐", label: "Үнэлгээ",  value: "4.9" },
                        { icon: "✅", label: "Захиалга", value: "340+" },
                      ].map(s => (
                        <div key={s.label} style={{
                          padding: "16px 12px", borderRadius: 14, textAlign: "center",
                          background: C.g50, border: `1px solid ${C.g100}`,
                        }}>
                          <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                          <div style={{ fontSize: 18, fontWeight: 800, color: C.green,
                            fontFamily: "var(--font-display)", marginBottom: 2 }}>
                            {s.value}
                          </div>
                          <div style={{ fontSize: 10, color: C.g400 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Response rate */}
                    <div style={{
                      padding: "12px 16px", borderRadius: 12,
                      background: C.g50, border: `1px solid ${C.g100}`,
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <span style={{ fontSize: 12, color: C.g500 }}>⚡ Хариу өгөх хугацаа</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: C.green }}>1 цагийн дотор</span>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 10 }}>
                      <button onClick={handleChat} style={{
                        flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
                        background: C.blue, color: "#fff", fontSize: 14, fontWeight: 700,
                        cursor: "pointer", fontFamily: "inherit",
                        boxShadow: "0 5px 16px rgba(3,105,161,.28)",
                        transition: "all .2s",
                      }}>
                        💬 Чат эхлэх
                      </button>
                      <button onClick={() => alert(`📞 ${p.phone}`)} style={{
                        flex: 1, padding: "14px 0", borderRadius: 14, border: "none",
                        background: C.green, color: "#fff", fontSize: 14, fontWeight: 700,
                        cursor: "pointer", fontFamily: "inherit",
                        boxShadow: "0 5px 16px rgba(22,101,52,.28)",
                        transition: "all .2s",
                      }}>
                        📞 Залгах
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buyer protection modal */}
      {showProtection && (
        <BuyerProtectionModal onClose={() => setShowProtection(false)} dark={dark} C={C} />
      )}
    </>
  );
}
