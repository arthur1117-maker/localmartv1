"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth  } from "@/context/AuthContext";
import { useToast } from "@/components/ui";

interface AuthModalProps { onClose: () => void; onRegister: () => void; }

const DEMO = [
  { label: "Buyer",  desc: "Худалдан авагч", email: "buyer@test.mn",      pw: "1234",      accent: "#059669" },
  { label: "Seller", desc: "Худалдагч",      email: "seller@test.mn",    pw: "1234",      accent: "#0d9488" },
  { label: "Admin",  desc: "Администратор",  email: "admin@localmart.mn", pw: "admin1234", accent: "#6366f1" },
];

export function AuthModal({ onClose, onRegister }: AuthModalProps) {
  const { dark }    = useTheme();
  const { login }   = useAuth();
  const { success, error: showErr, loading: showLoad, dismiss } = useToast();

  const [email,   setEmail]   = useState("");
  const [pw,      setPw]      = useState("");
  const [showPw,  setShowPw]  = useState(false);
  const [err,     setErr]     = useState("");
  const [busy,    setBusy]    = useState(false);

  const cardBg = dark ? "#0f172a" : "#ffffff";
  const bg     = dark ? "rgba(2,6,23,.85)" : "rgba(248,250,252,.85)";
  const border = dark ? "rgba(255,255,255,.08)" : "rgba(148,163,184,.2)";
  const text   = dark ? "#f1f5f9" : "#0f172a";
  const muted  = dark ? "#64748b" : "#94a3b8";
  const subBg  = dark ? "rgba(255,255,255,.04)" : "#f8fafc";

  const inp: React.CSSProperties = {
    width: "100%", background: dark ? "rgba(30,41,59,.6)" : "#f8fafc",
    border: `1.5px solid ${dark ? "rgba(255,255,255,.09)" : "#e2e8f0"}`,
    borderRadius: 10, padding: "11px 14px",
    fontSize: 13, fontWeight: 500, color: text, fontFamily: "inherit",
    outline: "none", boxSizing: "border-box",
    transition: "border-color .18s",
  };

  const doLogin = async (e?: string, p?: string) => {
    const em = (e ?? email).trim();
    const pw2 = (p ?? pw).trim();
    if (!em || !pw2) { setErr("И-мэйл болон нууц үгээ оруулна уу"); return; }
    setErr(""); setBusy(true);
    const tid = showLoad("Нэвтэрч байна...");
    const ok = await login(em, pw2);
    dismiss(tid); setBusy(false);
    if (ok) { success("Амжилттай нэвтэрлээ! 👋"); onClose(); }
    else { setErr("И-мэйл эсвэл нууц үг буруу"); showErr("Нэвтрэлт амжилтгүй"); }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 700,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
        background: "rgba(2,6,23,.65)",
        backdropFilter: "blur(14px) saturate(1.2)",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="animate-scale-in"
        style={{
          width: "100%", maxWidth: 420, borderRadius: 20, overflow: "hidden",
          background: cardBg,
          border: `1px solid ${border}`,
          boxShadow: dark
            ? "0 32px 80px rgba(0,0,0,.7), 0 8px 24px rgba(0,0,0,.5)"
            : "0 32px 80px rgba(0,0,0,.14), 0 8px 24px rgba(0,0,0,.08)",
        }}
      >
        {/* Top gradient band */}
        <div style={{
          height: 4,
          background: "linear-gradient(90deg, #059669, #0d9488, #06b6d4)",
        }} />

        <div style={{ padding: "32px 32px 28px" }}>
          {/* Header */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, marginBottom: 16,
                  background: "linear-gradient(135deg,#059669,#0d9488)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, boxShadow: "0 4px 16px rgba(5,150,105,.35)",
                }}>🔐</div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: text, margin: "0 0 4px",
                  letterSpacing: "-0.02em", fontFamily: "var(--font-display)" }}>
                  Нэвтрэх
                </h2>
                <p style={{ fontSize: 13, color: muted, fontWeight: 400 }}>LocalMart тавтай морил</p>
              </div>
              <button onClick={onClose}
                style={{
                  width: 28, height: 28, borderRadius: 8, border: `1px solid ${border}`,
                  background: subBg, cursor: "pointer", fontSize: 12, color: muted,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "inherit",
                }}>✕</button>
            </div>
          </div>

          {/* Demo quick-login */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: muted, letterSpacing: ".1em",
              textTransform: "uppercase", marginBottom: 10 }}>
              Демо данс
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {DEMO.map(d => (
                <button key={d.label} onClick={() => doLogin(d.email, d.pw)}
                  style={{
                    padding: "10px 8px", borderRadius: 10, border: `1px solid ${border}`,
                    background: subBg, cursor: "pointer", fontFamily: "inherit",
                    transition: "all .18s ease", textAlign: "center",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = d.accent + "50";
                    (e.currentTarget as HTMLElement).style.background = d.accent + "08";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = border;
                    (e.currentTarget as HTMLElement).style.background = subBg;
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700, color: d.accent,
                    fontFamily: "var(--font-display)", marginBottom: 2 }}>{d.label}</div>
                  <div style={{ fontSize: 10, color: muted, fontWeight: 400 }}>{d.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: border }} />
            <span style={{ fontSize: 11, color: muted, fontWeight: 500 }}>эсвэл и-мэйлээр</span>
            <div style={{ flex: 1, height: 1, background: border }} />
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: muted, display: "block", marginBottom: 6,
                letterSpacing: ".04em" }}>И-мэйл</label>
              <input
                style={inp} type="email" placeholder="you@example.mn"
                value={email} onChange={e => { setEmail(e.target.value); setErr(""); }}
                onKeyDown={e => e.key === "Enter" && doLogin()}
                onFocus={e => (e.target.style.borderColor = "#10b981")}
                onBlur={e  => (e.target.style.borderColor = dark ? "rgba(255,255,255,.09)" : "#e2e8f0")}
                autoComplete="email"
              />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: muted, display: "block", marginBottom: 6,
                letterSpacing: ".04em" }}>Нууц үг</label>
              <div style={{ position: "relative" }}>
                <input
                  style={{ ...inp, paddingRight: 42 }}
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={pw} onChange={e => { setPw(e.target.value); setErr(""); }}
                  onKeyDown={e => e.key === "Enter" && doLogin()}
                  onFocus={e => (e.target.style.borderColor = "#10b981")}
                  onBlur={e  => (e.target.style.borderColor = dark ? "rgba(255,255,255,.09)" : "#e2e8f0")}
                  autoComplete="current-password"
                />
                <button onClick={() => setShowPw(s => !s)}
                  style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 14, color: muted, padding: 0, display: "flex",
                  }}
                >{showPw ? "🙈" : "👁"}</button>
              </div>
            </div>

            {err && (
              <div className="animate-shake" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "9px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                background: "#fef2f2", color: "#dc2626",
                border: "1px solid #fecaca",
              }}>
                ⚠️ {err}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={() => doLogin()} disabled={busy}
            className="btn btn-primary"
            style={{
              width: "100%", height: 44, fontSize: 14, fontWeight: 700,
              fontFamily: "var(--font-display)", borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
            {busy ? (
              <>
                <svg style={{ width: 16, height: 16, animation: "spin .75s linear infinite" }} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="3"/>
                  <path d="M12 2 A10 10 0 0 1 22 12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                Нэвтэрч байна...
              </>
            ) : "Нэвтрэх"}
          </button>

          <p style={{ fontSize: 12, textAlign: "center", color: muted, marginTop: 16, fontWeight: 400 }}>
            Данс байхгүй юу?{" "}
            <button onClick={onRegister}
              style={{ background: "none", border: "none", cursor: "pointer",
                fontSize: 12, fontWeight: 700, color: "#059669", fontFamily: "inherit", padding: 0 }}>
              Бүртгүүлэх →
            </button>
          </p>
        </div>

        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );
}
