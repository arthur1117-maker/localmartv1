"use client";
import { useState } from "react";
import { useTheme }  from "@/context/ThemeContext";
import { useInView } from "@/lib/hooks";

const FEATURES = [
  { icon: "🔒", title: "Аюулгүй төлбөр",       desc: "SSL шифрлэлт, баталгаат гүйлгээ",         accent: "#10b981" },
  { icon: "✅", title: "Баталгаажсан худалдагч", desc: "Бүх худалдагч бидэнд бүртгэгдсэн",        accent: "#0d9488" },
  { icon: "🚚", title: "Хурдан хүргэлт",         desc: "УБ-д 24ц, аймагт 3-5 хоногт",            accent: "#059669" },
  { icon: "↩️", title: "Буцаалтын баталгаа",     desc: "7 хоногийн дотор буцааж болно",           accent: "#14b8a6" },
  { icon: "🌿", title: "Органик бүтээгдэхүүн",   desc: "Байгалийн аргаар үйлдвэрлэсэн",          accent: "#10b981" },
  { icon: "💬", title: "24/7 Дэмжлэг",           desc: "Хэдийд ч биднэй холбогдоорой",           accent: "#0d9488" },
];

function FeatureCard({ f, i, visible }: { f: typeof FEATURES[0]; i: number; visible: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "26px 20px", borderRadius: 18, textAlign: "center", cursor: "default",
        background: hov ? "rgba(16,185,129,.06)" : "rgba(255,255,255,.04)",
        border: `1px solid ${hov ? "rgba(52,211,153,.22)" : "rgba(255,255,255,.07)"}`,
        boxShadow: hov ? "0 14px 40px rgba(0,0,0,.36)" : "none",
        transform: hov ? "translateY(-5px)" : "none",
        transition: "all .26s var(--ease-spring)",
        position: "relative", overflow: "hidden",
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp .58s cubic-bezier(.16,1,.3,1) ${i * .07}s both` : "none",
      }}
    >
      {/* Top accent line on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${f.accent}80, transparent)`,
        opacity: hov ? 1 : 0, transition: "opacity .28s ease",
        borderRadius: "18px 18px 0 0",
      }} />

      {/* Corner shimmer */}
      {hov && (
        <div style={{
          position: "absolute", top: -40, right: -40, width: 100, height: 100,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${f.accent}10, transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}

      <div style={{
        fontSize: 30, marginBottom: 16,
        transform: hov ? "scale(1.18) rotate(4deg)" : "none",
        transition: "transform .3s var(--ease-spring)",
        filter: hov ? `drop-shadow(0 4px 14px ${f.accent}40)` : "none",
        display: "inline-block",
      }}>
        {f.icon}
      </div>
      <div style={{
        fontSize: 13, fontWeight: 700, color: "#e2e8f0", marginBottom: 8,
        fontFamily: "var(--font-display)", lineHeight: 1.3,
        transition: "color .2s ease",
        ...(hov ? { color: "#f1f5f9" } : {}),
      }}>
        {f.title}
      </div>
      <div style={{
        fontSize: 12, color: "rgba(148,163,184,.62)", lineHeight: 1.6, fontWeight: 400,
        transition: "color .2s ease",
        ...(hov ? { color: "rgba(148,163,184,.8)" } : {}),
      }}>
        {f.desc}
      </div>
    </div>
  );
}

export function TrustBand() {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.06);

  const bg = dark
    ? "linear-gradient(170deg, #020617 0%, #0a1629 50%, #0f172a 100%)"
    : "linear-gradient(170deg, #0a1629 0%, #0f172a 50%, #020617 100%)";

  return (
    <section ref={ref} style={{ background: bg, padding: "88px 24px", position: "relative", overflow: "hidden" }}>

      {/* Ambient orb — soft, not neon */}
      <div style={{
        position: "absolute", top: "-30%", left: "-8%",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,.06), transparent 60%)",
        pointerEvents: "none",
        animation: "orbSlow 22s ease-in-out infinite",
        filter: "blur(80px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", right: "-5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(20,184,166,.04), transparent 60%)",
        pointerEvents: "none",
        animation: "orbSlow 28s ease-in-out 6s infinite reverse",
        filter: "blur(80px)",
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: .22 }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 56,
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .56s ease both" : "none",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "6px 15px", borderRadius: 999, marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
            color: "#34d399", background: "rgba(16,185,129,.09)",
            border: "1px solid rgba(52,211,153,.2)",
            animation: "badgePop .4s var(--ease-spring) .1s both",
          }}>
            🛡️ ЯАГААД LOCALMART?
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800,
            letterSpacing: "-0.026em", lineHeight: 1.15, margin: "0 0 14px",
            color: "#f1f5f9", fontFamily: "var(--font-display)",
          }}>
            Хэрэглэгчдийн итгэл найдвар
          </h2>
          <p style={{
            fontSize: 15, color: "rgba(148,163,184,.65)",
            fontWeight: 400, maxWidth: 420, margin: "0 auto", lineHeight: 1.7,
          }}>
            Монгол орны хамгийн найдвартай онлайн захиалгын платформ
          </p>
        </div>

        {/* Features grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
          gap: 12, marginBottom: 60,
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          padding: "34px 40px", borderRadius: 22, textAlign: "left",
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.08)",
          display: "flex", flexDirection: "row", alignItems: "center",
          justifyContent: "space-between", gap: 24, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp .58s ease .52s both" : "none",
        }}>
          {/* Left accent */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: "linear-gradient(180deg, #10b981, #14b8a6)",
            borderRadius: "22px 0 0 22px",
          }} />

          <div style={{ paddingLeft: 8 }}>
            <div style={{
              fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginBottom: 6,
              fontFamily: "var(--font-display)", letterSpacing: "-0.02em",
            }}>
              Асуулт байна уу?
            </div>
            <div style={{
              fontSize: 14, color: "rgba(148,163,184,.6)", fontWeight: 400, lineHeight: 1.6,
            }}>
              Манай дэмжлэгийн баг таны туслалцаанд 24/7 бэлэн
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn btn-secondary btn-lg"
              style={{ fontFamily: "var(--font-display)", gap: 7, letterSpacing: "-0.01em" }}>
              💬 Чат эхлэх
            </button>
            <button className="btn btn-glass btn-lg"
              style={{ fontFamily: "var(--font-display)", gap: 7, letterSpacing: "-0.01em" }}>
              📞 Залгах
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
