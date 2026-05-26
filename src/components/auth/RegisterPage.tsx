"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth }  from "@/context/AuthContext";
import { useToast } from "@/components/ui";
import type { UserRole } from "@/lib/types";
import { AIMAG_NODES } from "@/lib/data";

interface RegisterPageProps {
  onSuccess:  () => void;
  onLogin:    () => void;
  onClose:    () => void;
}

type Step = 1 | 2 | 3;

export function RegisterPage({ onSuccess, onLogin, onClose }: RegisterPageProps) {
  const { C }          = useTheme();
  const { register }   = useAuth();
  const { success, error: showErr, loading: showLoad, dismiss } = useToast();

  // Step 1
  const [role, setRole] = useState<UserRole>("buyer");
  // Step 2
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [pw,    setPw]    = useState("");
  const [pw2,   setPw2]   = useState("");
  // Step 3
  const [phone, setPhone] = useState("");
  const [aimag, setAimag] = useState("");

  const [step, setStep] = useState<Step>(1);
  const [err,  setErr]  = useState("");
  const [busy, setBusy] = useState(false);

  const inp = {
    border: `1.5px solid ${C.g200}`, background: C.g50, color: C.text,
    borderRadius: 12, fontFamily: "inherit", fontSize: 14, fontWeight: 600,
    outline: "none", padding: "12px 16px", width: "100%",
    boxSizing: "border-box" as const, transition: "border-color .2s",
  };

  const nextStep = () => {
    setErr("");
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!name.trim())          return setErr("Нэрээ оруулна уу");
      if (!email.trim())         return setErr("И-мэйл хаяг оруулна уу");
      if (!/\S+@\S+\.\S+/.test(email)) return setErr("И-мэйл хаяг буруу байна");
      if (pw.length < 6)         return setErr("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой");
      if (pw !== pw2)            return setErr("Нууц үг таарахгүй байна");
      setStep(3);
    }
  };

  const submit = async () => {
    setErr("");
    if (!phone.trim()) return setErr("Утасны дугаар оруулна уу");
    setBusy(true);
    const tid = showLoad("Бүртгэж байна...");
    try {
      const ok = await register({ name, email, password: pw, role: role ?? "buyer", phone, aimag });
      dismiss(tid);
      if (ok) {
        success("Бүртгэл амжилттай! LocalMart-д тавтай морил 🎉");
        onSuccess();
      } else {
        setErr("Энэ и-мэйл хаяг аль хэдийн бүртгэлтэй байна");
        showErr("Бүртгэл амжилтгүй боллоо");
      }
    } catch {
      dismiss(tid);
      showErr("Сервертэй холбогдоход алдаа гарлаа");
    } finally {
      setBusy(false);
    }
  };

  const STEPS = ["Дүр сонгох", "Мэдээлэл", "Холбоо барих"];

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ background: `linear-gradient(135deg,${C.greenBg},${C.g50})` }}>
      <div className="w-full max-w-md rounded-3xl overflow-hidden"
        style={{ background: C.white, boxShadow: "0 24px 60px rgba(0,0,0,.15)" }}>

        {/* Header */}
        <div className="px-8 pt-7 pb-5" style={{ background: "linear-gradient(135deg,#052e16,#059669)" }}>
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏪</span>
              <div>
                <div className="text-[10px] font-extrabold tracking-widest" style={{ color: "#4ade80" }}>LOCALMART</div>
                <div className="text-lg font-black text-white">Бүртгүүлэх</div>
              </div>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-all"
              style={{ color: "rgba(255,255,255,.7)", fontSize: 16 }}>✕</button>
          </div>
          {/* Progress */}
          <div className="flex gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1">
                <div className="h-1 rounded-full mb-1.5"
                  style={{ background: i < step ? "#4ade80" : "rgba(255,255,255,.2)" }} />
                <div className="text-[10px] font-bold"
                  style={{ color: i < step ? "#4ade80" : "rgba(255,255,255,.4)" }}>
                  {i + 1}. {s}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">

          {/* STEP 1 — Role */}
          {step === 1 && (
            <div>
              <h3 className="text-base font-extrabold mb-4" style={{ color: C.text }}>
                Та хэрхэн ашиглах вэ?
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                {([
                  { r: "buyer",  icon: "🛒", title: "Худалдан авагч",  desc: "Орон нутгийн бараа захиалах" },
                  { r: "seller", icon: "🏪", title: "Худалдагч / Малчин", desc: "Бараагаа зарж борлуулах" },
                ] as { r: UserRole; icon: string; title: string; desc: string }[]).map(opt => (
                  <button key={opt.r} onClick={() => setRole(opt.r)}
                    className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all font-sans"
                    style={{
                      border:     `2px solid ${role === opt.r ? C.green : C.g200}`,
                      background: role === opt.r ? C.greenBg : C.white,
                    }}>
                    <span className="text-3xl">{opt.icon}</span>
                    <div>
                      <div className="font-extrabold text-sm" style={{ color: C.text }}>{opt.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: C.g500 }}>{opt.desc}</div>
                    </div>
                    {role === opt.r && (
                      <span className="ml-auto text-xl">✅</span>
                    )}
                  </button>
                ))}
              </div>
              <button onClick={nextStep}
                className="w-full py-3.5 rounded-2xl font-extrabold text-white font-sans transition-all hover:-translate-y-0.5"
                style={{ background: C.green, boxShadow: "0 4px 14px rgba(22,101,52,.3)" }}>
                Дараах →
              </button>
            </div>
          )}

          {/* STEP 2 — Info */}
          {step === 2 && (
            <div>
              <h3 className="text-base font-extrabold mb-4" style={{ color: C.text }}>Дансны мэдээлэл</h3>
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <label className="block text-xs font-bold mb-1" style={{ color: C.g600 }}>Бүтэн нэр</label>
                  <input value={name} onChange={e => setName(e.target.value)}
                    placeholder="Б. Нэр Овог" style={inp}
                    onFocus={e => (e.target.style.borderColor = C.green)}
                    onBlur={e  => (e.target.style.borderColor = C.g200)} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1" style={{ color: C.g600 }}>И-мэйл хаяг</label>
                  <input value={email} onChange={e => setEmail(e.target.value)}
                    type="email" placeholder="example@gmail.com" style={inp}
                    onFocus={e => (e.target.style.borderColor = C.green)}
                    onBlur={e  => (e.target.style.borderColor = C.g200)} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1" style={{ color: C.g600 }}>Нууц үг</label>
                  <input value={pw} onChange={e => setPw(e.target.value)}
                    type="password" placeholder="••••••  (6+ тэмдэгт)" style={inp}
                    onFocus={e => (e.target.style.borderColor = C.green)}
                    onBlur={e  => (e.target.style.borderColor = C.g200)} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1" style={{ color: C.g600 }}>Нууц үг давтах</label>
                  <input value={pw2} onChange={e => setPw2(e.target.value)}
                    type="password" placeholder="••••••" style={inp}
                    onFocus={e => (e.target.style.borderColor = C.green)}
                    onBlur={e  => (e.target.style.borderColor = C.g200)}
                    onKeyDown={e => e.key === "Enter" && nextStep()} />
                </div>
              </div>
              {err && (
                <div className="rounded-xl px-4 py-2.5 mb-4 text-sm font-semibold"
                  style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
                  ⚠️ {err}
                </div>
              )}
              <div className="flex gap-3">
                <button onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-2xl font-extrabold font-sans"
                  style={{ background: C.g100, color: C.g600 }}>← Буцах</button>
                <button onClick={nextStep}
                  className="flex-1 py-3 rounded-2xl font-extrabold text-white font-sans hover:-translate-y-0.5 transition-all"
                  style={{ background: C.green, boxShadow: "0 4px 14px rgba(22,101,52,.3)" }}>
                  Дараах →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — Contact */}
          {step === 3 && (
            <div>
              <h3 className="text-base font-extrabold mb-4" style={{ color: C.text }}>Холбоо барих мэдээлэл</h3>
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <label className="block text-xs font-bold mb-1" style={{ color: C.g600 }}>
                    Утасны дугаар <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input value={phone} onChange={e => setPhone(e.target.value)}
                    type="tel" placeholder="9911XXXX" style={inp}
                    onFocus={e => (e.target.style.borderColor = C.green)}
                    onBlur={e  => (e.target.style.borderColor = C.g200)} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1" style={{ color: C.g600 }}>Аймаг / Хот</label>
                  <select value={aimag} onChange={e => setAimag(e.target.value)}
                    style={{ ...inp, cursor: "pointer" }}>
                    <option value="">— Аймаг сонгох —</option>
                    <option value="Улаанбаатар">Улаанбаатар</option>
                    {AIMAG_NODES.map(a => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              {err && (
                <div className="rounded-xl px-4 py-2.5 mb-4 text-sm font-semibold"
                  style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
                  ⚠️ {err}
                </div>
              )}
              <div className="flex gap-3">
                <button onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-2xl font-extrabold font-sans"
                  style={{ background: C.g100, color: C.g600 }}>← Буцах</button>
                <button onClick={submit} disabled={busy}
                  className="flex-1 py-3 rounded-2xl font-extrabold text-white font-sans hover:-translate-y-0.5 transition-all"
                  style={{
                    background: busy ? "#9ca3af" : C.green,
                    boxShadow: busy ? "none" : "0 4px 14px rgba(22,101,52,.3)",
                  }}>
                  {busy ? "⏳ Бүртгэж байна..." : "✅ Бүртгүүлэх"}
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-5 text-sm" style={{ color: C.g500 }}>
            Данс байна уу?{" "}
            <button onClick={onLogin} className="font-extrabold font-sans" style={{ color: C.green }}>
              Нэвтрэх →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
