"use client";
import { useState } from "react";
import { useInView }   from "@/lib/hooks";
import { useTheme }    from "@/context/ThemeContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart }     from "@/context/CartContext";
import { useAuth }     from "@/context/AuthContext";
import { useToast }    from "@/components/ui";
import { NewBadge, OrganicBadge, VerifiedBadge, StarRating } from "@/components/ui";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  index?:  number;
  onOpen:  (p: Product) => void;
  onAuthRequired?: () => void;
}

export function ProductCard({ product: p, index = 0, onOpen, onAuthRequired }: ProductCardProps) {
  const { dark, C }      = useTheme();
  const { has, toggle }  = useWishlist();
  const { add: addCart } = useCart();
  const { success }      = useToast();
  const { isLoggedIn }   = useAuth();
  const { ref, visible } = useInView(0.04);
  const [hov, setHov]    = useState(false);
  const [dotIdx, setDotIdx]   = useState(0);
  const [added, setAdded]     = useState(false);
  const [wishAnim, setWishAnim] = useState(false);
  const wished = has(p.id);

  const stockLevel = p.id % 3 === 0 ? "low" : p.id % 5 === 0 ? "out" : "good";
  const stockCfg = {
    good: { color: "#10b981", label: "Байна",       dot: "#10b981" },
    low:  { color: "#f59e0b", label: "Бага үлдсэн", dot: "#f59e0b" },
    out:  { color: "#ef4444", label: "Дууссан",     dot: "#ef4444" },
  }[stockLevel];

  const handleMouseEnter = () => {
    setHov(true);
    setDotIdx(d => (d + 1) % p.imageCount);
  };

  const handleAddCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) { onAuthRequired?.(); return; }
    addCart(p, 1);
    setAdded(true);
    success(`"${p.name}" сагсанд нэмэгдлээ! 🛒`);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle(p.id);
    setWishAnim(true);
    setTimeout(() => setWishAnim(false), 650);
  };

  // Premium image bg
  const imgBg = dark
    ? `linear-gradient(145deg, #0a1f18, #0c1d1d)`
    : `linear-gradient(145deg, #ecfdf5, #f0fdfa)`;

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(p)}
      className="card-accent-top"
      style={{
        display: "flex", flexDirection: "column",
        borderRadius: 18, overflow: "hidden", cursor: "pointer",
        background: C.white,
        border: `1.5px solid ${hov
          ? (dark ? "rgba(52,211,153,.25)" : "rgba(16,185,129,.22)")
          : (dark ? "rgba(255,255,255,.07)" : "#e8edf2")}`,
        boxShadow: hov
          ? (dark
              ? "0 24px 60px rgba(0,0,0,.52), 0 4px 14px rgba(0,0,0,.38), 0 0 0 3px rgba(52,211,153,.08)"
              : "0 24px 56px rgba(0,0,0,.09), 0 4px 12px rgba(0,0,0,.05), 0 0 0 3px rgba(16,185,129,.07)")
          : (dark ? "0 2px 10px rgba(0,0,0,.28)" : "0 1px 4px rgba(0,0,0,.04)"),
        transform: hov ? "translateY(-7px) scale(1.009)" : "none",
        transition: "transform .3s var(--ease-spring), box-shadow .3s ease, border-color .22s ease",
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp .55s cubic-bezier(.16,1,.3,1) ${index * 0.065}s both` : "none",
        position: "relative",
        isolation: "isolate",
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: "relative", paddingTop: "72%", background: imgBg, overflow: "hidden" }}>

        {/* Emoji with premium zoom */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "clamp(50px, 7vw, 70px)",
          transform: hov ? "scale(1.18) translateY(-4px)" : "scale(1)",
          transition: "transform .5s cubic-bezier(.4,0,.2,1)",
          filter: hov ? "drop-shadow(0 12px 24px rgba(0,0,0,.14))" : "none",
        }}>
          {p.emoji}
        </div>

        {/* Gradient overlay at bottom — always present but subtle */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(to top, rgba(0,0,0,.06), transparent)",
          pointerEvents: "none",
        }} />

        {/* TL badges */}
        <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 5, flexWrap: "wrap", zIndex: 10 }}>
          {p.isNew     && <NewBadge />}
          {p.isOrganic && <OrganicBadge />}
          {p.verified  && <VerifiedBadge />}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          style={{
            position: "absolute", top: 10, right: 10,
            width: 36, height: 36, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, cursor: "pointer", zIndex: 10,
            background: wished ? "rgba(239,68,68,.12)" : "rgba(255,255,255,.92)",
            backdropFilter: "blur(12px)",
            border: wished ? "1.5px solid rgba(239,68,68,.28)" : "1.5px solid rgba(255,255,255,.7)",
            boxShadow: wished
              ? "0 4px 14px rgba(239,68,68,.18)"
              : "0 2px 12px rgba(0,0,0,.12)",
            animation: wishAnim ? "wishPop .38s cubic-bezier(.16,1,.3,1)" : "none",
            outline: "none",
            transition: "all .2s var(--ease-spring)",
          }}>
          <span style={{
            filter: wished ? "none" : "grayscale(1)",
            transition: "filter .2s, transform .2s",
            transform: wished ? "scale(1)" : "scale(.9)",
            display: "inline-block",
          }}>
            {wished ? "❤️" : "🤍"}
          </span>
        </button>

        {/* Low stock */}
        {stockLevel === "low" && (
          <div style={{
            position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 10,
            display: "flex", alignItems: "center", gap: 4,
            padding: "3px 10px", borderRadius: 999, fontSize: 10, fontWeight: 800,
            color: "#92400e", background: "rgba(254,243,199,.95)", border: "1px solid #fde68a",
            backdropFilter: "blur(6px)",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            Бага үлдсэн
          </div>
        )}

        {/* Image dots */}
        {p.imageCount > 1 && (
          <div style={{
            position: "absolute", bottom: 10, left: 0, right: 0,
            display: "flex", justifyContent: "center", gap: 4, zIndex: 10, pointerEvents: "none",
          }}>
            {Array.from({ length: p.imageCount }).map((_, i) => (
              <div key={i} style={{
                borderRadius: 999, transition: "all .28s var(--ease-spring)",
                width: i === dotIdx ? 16 : 5, height: 5,
                background: i === dotIdx ? "#fff" : "rgba(255,255,255,.45)",
                boxShadow: i === dotIdx ? "0 2px 6px rgba(0,0,0,.2)" : "none",
              }} />
            ))}
          </div>
        )}

        {/* Aimag pill */}
        <div style={{
          position: "absolute", left: 10, bottom: 10, zIndex: 10,
          display: "flex", alignItems: "center", gap: 4,
          padding: "3px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700,
          color: "#fff", backdropFilter: "blur(10px)",
          background: "rgba(5,150,105,.88)",
          border: "1px solid rgba(52,211,153,.22)",
          boxShadow: "0 2px 8px rgba(5,150,105,.25)",
        }}>
          📍 {p.aimag}
        </div>

        {/* Hover action overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 20,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: 10, gap: 7,
          background: "linear-gradient(to top, rgba(2,20,14,.94) 0%, rgba(2,20,14,.40) 55%, transparent 80%)",
          opacity: hov ? 1 : 0,
          transform: hov ? "translateY(0)" : "translateY(8px)",
          transition: "all .3s var(--ease-spring)",
          pointerEvents: hov ? "auto" : "none",
        }}>
          <button
            onClick={e => { e.stopPropagation(); alert(`📞 ${p.phone}`); }}
            style={{
              width: "100%", padding: "9px", borderRadius: 12, border: "none",
              fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
              background: "rgba(255,255,255,.95)", color: "#059669",
              boxShadow: "0 4px 16px rgba(0,0,0,.20)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              transition: "all .18s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.95)"; }}>
            📞 Шууд залгах
          </button>
          <button
            onClick={handleAddCart}
            style={{
              width: "100%", padding: "9px", borderRadius: 12, border: "none",
              fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
              color: "#fff",
              background: added
                ? "linear-gradient(135deg, #047857, #0d9488)"
                : "linear-gradient(135deg, #059669, #0d9488)",
              boxShadow: "0 4px 16px rgba(5,150,105,.35)",
              transform: added ? "scale(.98)" : "scale(1)",
              transition: "all .2s var(--ease-spring)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            }}>
            {added ? (
              <>
                <span style={{ animation: "scaleCheck .28s var(--ease-spring)" }}>✓</span>
                Нэмэгдлээ!
              </>
            ) : "🛒 Сагсанд нэмэх"}
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "14px 15px 15px" }}>

        {/* Category + stock */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
          <div style={{
            fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
            color: "#10b981", textTransform: "uppercase",
            fontFamily: "var(--font-display)",
          }}>
            {p.cat}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: stockCfg.dot, display: "inline-block",
              boxShadow: `0 0 0 2px ${stockCfg.dot}22`,
            }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: stockCfg.color }}>
              {stockCfg.label}
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: 14, fontWeight: 800, lineHeight: 1.35, flex: 1, marginBottom: 7,
          color: C.text, display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
          fontFamily: "var(--font-display)",
          transition: "color .18s ease",
          ...(hov ? { color: dark ? "#f8fafc" : "#020617" } : {}),
        }}>
          {p.name}
        </h3>

        {/* Seller */}
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7 }}>
          <span style={{ fontSize: 13 }}>👨‍🌾</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.g500 }}>
            {p.seller}
            {p.verified && (
              <span style={{
                marginLeft: 6, fontSize: 9, fontWeight: 800, color: "#fff",
                background: "#10b981", borderRadius: 99, padding: "1px 5px",
              }}>✓</span>
            )}
          </span>
        </div>

        <StarRating rating={p.rating} reviews={p.reviews} />

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginTop: 11, marginBottom: 13 }}>
          <span style={{
            fontSize: 21, fontWeight: 900, letterSpacing: "-0.02em",
            color: "#059669", fontFamily: "var(--font-display)",
            transition: "color .18s ease",
            ...(hov ? { color: dark ? "#34d399" : "#047857" } : {}),
          }}>
            ₮{p.price.toLocaleString()}
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.g400 }}>/ {p.unit}</span>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: 11,
          borderTop: `1px solid ${dark ? "rgba(255,255,255,.06)" : "#f1f5f9"}`,
        }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: C.g400 }}>📅 {p.date}</span>
          <div style={{
            padding: "5px 13px", borderRadius: 999, fontSize: 11, fontWeight: 800, cursor: "pointer",
            background: hov
              ? "linear-gradient(135deg, #059669, #0d9488)"
              : (dark ? "rgba(16,185,129,.08)" : "#ecfdf5"),
            color: hov ? "#fff" : "#059669",
            boxShadow: hov ? "0 4px 14px rgba(5,150,105,.28)" : "none",
            border: hov ? "none" : `1px solid ${dark ? "rgba(52,211,153,.12)" : "#a7f3d0"}`,
            transition: "all .22s var(--ease-spring)",
            transform: hov ? "scale(1.04)" : "scale(1)",
          }}>
            Үзэх →
          </div>
        </div>
      </div>
    </div>
  );
}
