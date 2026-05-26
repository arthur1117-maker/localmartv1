"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/lib/hooks";

const LINKS = {
  "Бараа":    ["Мах, Загас", "Ноос, Ноолуур", "Сүүн бүтээгдэхүүн", "Ногоо, Жимс", "Гар урлал"],
  "Компани":  ["Тухай бид", "Карьер", "Мэдээ", "Нэгдэх", "Холбогдох"],
  "Дэмжлэг": ["Тусламж", "Нэвтрэх", "Бүртгүүлэх", "Тохиргоо", "Нууцлал"],
};

const TECH = ["Next.js 14", "TypeScript", "Tailwind", "Spring Boot", "MySQL", "JWT Auth"];

export function Footer() {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.05);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const bg     = dark ? "#020617" : "#0a1220";
  const border = "rgba(255,255,255,.07)";
  const text   = "rgba(148,163,184,.5)";
  const textHov = "#34d399";
  const head   = "rgba(241,245,249,.85)";

  const handleSubscribe = () => {
    if (email) { setSubscribed(true); }
  };

  const show = (delay = 0): React.CSSProperties => visible
    ? { animation: `fadeUp .54s ease ${delay}s both`, opacity: 1 }
    : { opacity: 0 };

  return (
    <footer ref={ref} style={{ background: bg, position: "relative", overflow: "hidden" }}>

      {/* Ambient orb */}
      <div style={{
        position: "absolute", top: "-20%", left: "-5%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,.05), transparent 60%)",
        pointerEvents: "none", filter: "blur(80px)",
        animation: "orbSlow 26s ease-in-out infinite",
      }} />

      {/* Fine grid lines */}
      <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: .3 }} />

      {/* ── Newsletter strip ─────────────────────────────────────── */}
      <div style={{ borderBottom: `1px solid ${border}`, padding: "44px 24px" }}>
        <div style={{
          maxWidth: 1152, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, flexWrap: "wrap", ...show(0.04),
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: "#34d399", marginBottom: 6,
              letterSpacing: ".08em", textTransform: "uppercase",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
              📧 Мэдэгдэл авах
            </div>
            <div style={{
              fontSize: 20, fontWeight: 800, color: head,
              fontFamily: "var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1.2,
            }}>
              Шинэ бараа, хямдрал — имэйлээр авах
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {subscribed ? (
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 18px", borderRadius: 10,
                background: "rgba(16,185,129,.1)", border: "1px solid rgba(52,211,153,.2)",
                fontSize: 13, fontWeight: 700, color: "#34d399",
                animation: "bounceIn .4s var(--ease-spring)",
              }}>
                ✓ Бүртгэгдлээ!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                  placeholder="you@example.mn"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.09)",
                    borderRadius: 10, padding: "10px 16px",
                    fontSize: 13, fontWeight: 500, color: "#f1f5f9",
                    fontFamily: "inherit", outline: "none", width: 230,
                    transition: "border-color .18s ease, box-shadow .18s ease",
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = "rgba(52,211,153,.35)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,.1)";
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = "rgba(255,255,255,.09)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  className="btn btn-primary btn-md"
                  style={{ fontFamily: "var(--font-display)", flexShrink: 0, letterSpacing: "-0.01em" }}
                >
                  Бүртгүүлэх
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div style={{ padding: "60px 24px 44px", borderBottom: `1px solid ${border}` }}>
        <div style={{
          maxWidth: 1152, margin: "0 auto",
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 44,
          ...show(0.08),
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 11,
                background: "linear-gradient(135deg, #059669, #0d9488)",
                boxShadow: "0 4px 16px rgba(5,150,105,.30)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 17, transition: "box-shadow .2s ease",
              }}>🏪</div>
              <div>
                <div style={{
                  fontSize: 15, fontWeight: 800, color: head,
                  fontFamily: "var(--font-display)", letterSpacing: "-0.022em",
                }}>LocalMart</div>
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: ".2em",
                  color: "#10b981", textTransform: "uppercase",
                }}>Connected</div>
              </div>
            </div>
            <p style={{
              fontSize: 13, lineHeight: 1.75, color: text,
              maxWidth: 260, marginBottom: 22, fontWeight: 400,
            }}>
              Монголын малчид, фермерүүдийн шинэхэн бүтээгдэхүүнийг шууд захиалж,
              гэртээ хүргүүлээрэй.
            </p>

            {/* Social buttons */}
            <div style={{ display: "flex", gap: 8 }}>
              {["𝕏", "in", "f", "▶"].map((s, i) => (
                <button key={i} style={{
                  width: 34, height: 34, borderRadius: 9,
                  border: `1px solid ${border}`,
                  background: "rgba(255,255,255,.04)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, color: text, fontFamily: "inherit",
                  transition: "all .2s var(--ease-spring)",
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(16,185,129,.1)";
                    el.style.color = "#34d399";
                    el.style.borderColor = "rgba(52,211,153,.2)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,.04)";
                    el.style.color = text;
                    el.style.borderColor = border;
                    el.style.transform = "none";
                  }}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: ".12em",
                color: "rgba(241,245,249,.45)", textTransform: "uppercase",
                marginBottom: 18,
              }}>
                {title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <button style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: 13, fontWeight: 400, color: text,
                      fontFamily: "inherit", padding: 0,
                      transition: "color .16s ease, transform .16s ease",
                      textAlign: "left", display: "block",
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = textHov;
                        (e.currentTarget as HTMLElement).style.transform = "translateX(3px)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = text;
                        (e.currentTarget as HTMLElement).style.transform = "none";
                      }}
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div style={{ padding: "22px 24px" }}>
        <div style={{
          maxWidth: 1152, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 14, ...show(0.16),
        }}>
          <div style={{ fontSize: 12, color: text }}>
            © 2025 LocalMart Connected · Дипломийн ажил
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {TECH.map(t => (
              <span key={t} style={{
                fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 999,
                background: "rgba(255,255,255,.04)",
                border: `1px solid ${border}`,
                color: text,
                transition: "all .18s ease",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,.08)";
                  (e.currentTarget as HTMLElement).style.color = "#34d399";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,.18)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
                  (e.currentTarget as HTMLElement).style.color = text;
                  (e.currentTarget as HTMLElement).style.borderColor = border;
                }}
              >{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
