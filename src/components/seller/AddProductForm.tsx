"use client";
import { useState, useRef } from "react";
import { productApi }   from "@/lib/api";
import { useTheme }     from "@/context/ThemeContext";
import { useToast }     from "@/components/ui";
import { CATEGORIES, AIMAG_NODES } from "@/lib/data";

const EMOJI_OPTIONS = ["🥩","🧶","🍯","🥛","🌾","🐑","🐄","🧀","🍖","🌸","🫐","🌿","🎀","🪣","🧲","🍎","🐓","🐟","🫚","🧄","🥕","🌽","🍅","🫛"];

function Field({ label, required, err, children }: {
  label: string; required?: boolean; err?: string; children: React.ReactNode;
}) {
  const { C } = useTheme();
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-black" style={{ color: C.g500 }}>
        {label} {required && <span style={{ color: "#dc2626" }}>*</span>}
      </label>
      {children}
      {err && (
        <span className="text-[10px] font-bold" style={{ color: "#dc2626" }}>⚠️ {err}</span>
      )}
    </div>
  );
}

export function AddProductForm() {
  const { C, dark } = useTheme();
  const { success, error, loading: showLoading, dismiss } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);

  const [selEmoji, setSelEmoji] = useState("🥩");
  const [img,      setImg]      = useState<string | null>(null);
  const [name,     setName]     = useState("");
  const [price,    setPrice]    = useState("");
  const [qty,      setQty]      = useState("");
  const [phone,    setPhone]    = useState("");
  const [category, setCategory] = useState("");
  const [aimag,    setAimag]    = useState("");
  const [unit,     setUnit]     = useState("");
  const [desc,     setDesc]     = useState("");
  const [isOrg,    setIsOrg]    = useState(false);
  const [submitting, setSub]    = useState(false);
  const [errors,   setErrors]   = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const inp = {
    border: `1.5px solid ${C.g200}`, background: C.g50, color: C.text,
    borderRadius: 12, fontFamily: "inherit", fontSize: 13, fontWeight: 600,
    outline: "none", padding: "11px 14px", width: "100%",
    transition: "border-color .2s, box-shadow .2s", boxSizing: "border-box" as const,
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim())                            e.name     = "Барааны нэр оруулна уу";
    if (!price.trim() || isNaN(+price) || +price <= 0) e.price = "Зөв үнэ оруулна уу";
    if (!category)                               e.category = "Ангилал сонгоно уу";
    if (!aimag)                                  e.aimag    = "Аймаг сонгоно уу";
    if (!unit.trim())                            e.unit     = "Хэмжих нэгж оруулна уу";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const reset = () => {
    setName(""); setPrice(""); setQty(""); setPhone(""); setCategory("");
    setAimag(""); setUnit(""); setDesc(""); setIsOrg(false); setImg(null);
    setSelEmoji("🥩"); setErrors({}); setSubmitted(false);
  };

  const submit = async () => {
    if (!validate()) { error("Заавал талбаруудыг бөглөнө үү"); return; }
    setSub(true);
    const loadId = showLoading("Бараа нэмж байна...");
    try {
      await productApi.create({
        name, price: +price, unit,
        stock: qty ? +qty : undefined,
        category, aimag, story: desc,
        sellerPhone: phone,
        isOrganic: isOrg, emoji: selEmoji,
      });
      dismiss(loadId);
      success("Бараа амжилттай нэмэгдлээ! 🎉");
      setSubmitted(true);
    } catch (e: any) {
      dismiss(loadId);
      error(e?.message ?? "Алдаа гарлаа, дахин оролдоно уу");
    } finally { setSub(false); }
  };

  // Success state
  if (submitted) {
    return (
      <div className="rounded-3xl overflow-hidden text-center py-16 px-8"
        style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
        <div className="text-7xl mb-4" style={{ animation: "bounceIn .5s ease" }}>🎉</div>
        <h3 className="text-2xl font-black display-font mb-2" style={{ color: C.text }}>Амжилттай нэмэгдлээ!</h3>
        <p className="text-sm mb-8" style={{ color: C.g500 }}>Таны бараа платформд нэмэгдлээ. Удахгүй баталгаажна.</p>
        <button onClick={reset}
          className="px-8 py-3.5 rounded-2xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg,#059669,#059669)", boxShadow: "0 6px 20px rgba(22,101,52,.3)" }}>
          ➕ Дахин нэмэх
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* ── Left: Live Preview ── */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        {/* Product preview card */}
        <div className="rounded-3xl overflow-hidden sticky top-24"
          style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
          <div className="px-5 py-3.5 text-sm font-black display-font"
            style={{ borderBottom: `1px solid ${C.g100}`, color: C.text, background: dark ? C.g50 : "#fafafa" }}>
            👁 Урьдчилан харах
          </div>
          <div className="p-5">
            <div className="rounded-2xl mb-4 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg,${C.greenBg},${C.greenSoft})`, paddingBlock: 36 }}>
              <span style={{ fontSize: 72, animation: "float 3s ease-in-out infinite" }}>{selEmoji}</span>
            </div>
            <div className="flex gap-1.5 flex-wrap mb-2">
              {category && (
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                  style={{ background: C.greenBg, color: C.green }}>{category}</span>
              )}
              {isOrg && (
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                  style={{ background: "#f0fdf4", color: "#059669", border: "1px solid #bbf7d0" }}>🌿 Органик</span>
              )}
            </div>
            <div className="text-base font-black mb-1 leading-snug" style={{ color: C.text }}>
              {name || <span style={{ color: C.g300 }}>Барааны нэр...</span>}
            </div>
            <div className="text-xs mb-2" style={{ color: C.g400 }}>
              📍 {aimag || "Аймаг"} · 👨‍🌾 Та
            </div>
            {price ? (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black display-font" style={{ color: C.orange }}>
                  ₮{Number(price).toLocaleString()}
                </span>
                <span className="text-sm" style={{ color: C.g400 }}>/ {unit || "нэгж"}</span>
              </div>
            ) : (
              <div className="text-sm font-semibold" style={{ color: C.g300 }}>Үнэ оруулна уу...</div>
            )}
          </div>
        </div>

        {/* Emoji picker */}
        <div className="rounded-3xl p-5"
          style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
          <div className="text-sm font-black mb-3 display-font" style={{ color: C.text }}>😊 Emoji сонгох</div>
          <div className="grid grid-cols-8 gap-1.5">
            {EMOJI_OPTIONS.map(em => (
              <button key={em} onClick={() => setSelEmoji(em)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-xl transition-all hover:scale-115"
                style={{
                  background:  selEmoji === em ? C.greenBg : C.g50,
                  border:      `1.5px solid ${selEmoji === em ? C.green : C.g200}`,
                  boxShadow:   selEmoji === em ? `0 3px 10px ${C.green}30` : "none",
                  transform:   selEmoji === em ? "scale(1.1)" : "none",
                }}>
                {em}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: Form ── */}
      <div className="lg:col-span-2 rounded-3xl overflow-hidden"
        style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
        {/* Form header */}
        <div className="flex items-center gap-3 px-6 py-5"
          style={{ borderBottom: `1.5px solid ${C.g100}`, background: dark ? C.g50 : "#fafafa" }}>
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
            style={{ background: C.greenBg, border: `1px solid ${C.green}30` }}>
            ➕
          </div>
          <div>
            <div className="text-sm font-black display-font" style={{ color: C.text }}>Шинэ бараа нэмэх</div>
            <div className="text-[10px]" style={{ color: C.g400 }}>* тэмдэгтэй талбар заавал</div>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-4">
          {/* Image upload */}
          <div
            onClick={() => fileRef.current?.click()}
            className="rounded-2xl flex flex-col items-center justify-center py-8 cursor-pointer transition-all border-2 border-dashed hover:opacity-80"
            style={{ borderColor: img ? C.green : C.g200, background: img ? C.greenBg : C.g50 }}>
            <input ref={fileRef} type="file" accept="image/*" className="hidden"
              onChange={e => { if (e.target.files?.[0]) setImg(URL.createObjectURL(e.target.files[0])); }} />
            {img ? (
              <div className="relative">
                <img src={img} alt="preview" className="max-h-32 rounded-xl block mx-auto" />
                <button
                  onClick={e => { e.stopPropagation(); setImg(null); }}
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black"
                  style={{ background: "#dc2626", color: "#fff" }}>
                  ✕
                </button>
              </div>
            ) : (
              <>
                <div className="text-3xl mb-2">📷</div>
                <div className="text-sm font-bold mb-1" style={{ color: C.g600 }}>Зураг оруулах (заавал биш)</div>
                <div className="text-xs" style={{ color: C.g400 }}>JPG, PNG — 5MB хүртэл</div>
              </>
            )}
          </div>

          {/* Name */}
          <Field label="Барааны нэр" required err={errors.name}>
            <input value={name} onChange={e => { setName(e.target.value); setErrors(v => ({ ...v, name: "" })); }}
              placeholder="Жишээ: Ямааны цэвэр ноолуур"
              style={{ ...inp, borderColor: errors.name ? "#dc2626" : C.g200 }}
              onFocus={e => (e.target.style.borderColor = errors.name ? "#dc2626" : C.green)}
              onBlur={e  => (e.target.style.borderColor = errors.name ? "#dc2626" : C.g200)} />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Үнэ (₮)" required err={errors.price}>
              <input value={price} onChange={e => { setPrice(e.target.value); setErrors(v => ({ ...v, price: "" })); }}
                type="number" placeholder="85000"
                style={{ ...inp, borderColor: errors.price ? "#dc2626" : C.g200 }}
                onFocus={e => (e.target.style.borderColor = C.green)}
                onBlur={e  => (e.target.style.borderColor = errors.price ? "#dc2626" : C.g200)} />
            </Field>
            <Field label="Хэмжих нэгж" required err={errors.unit}>
              <input value={unit} onChange={e => { setUnit(e.target.value); setErrors(v => ({ ...v, unit: "" })); }}
                placeholder="кг / литр / ш"
                style={{ ...inp, borderColor: errors.unit ? "#dc2626" : C.g200 }}
                onFocus={e => (e.target.style.borderColor = C.green)}
                onBlur={e  => (e.target.style.borderColor = errors.unit ? "#dc2626" : C.g200)} />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Тоо (үлдэгдэл)">
              <input value={qty} onChange={e => setQty(e.target.value)}
                type="number" placeholder="100" style={inp}
                onFocus={e => (e.target.style.borderColor = C.green)}
                onBlur={e  => (e.target.style.borderColor = C.g200)} />
            </Field>
            <Field label="Утасны дугаар">
              <input value={phone} onChange={e => setPhone(e.target.value)}
                placeholder="9911XXXX" style={inp}
                onFocus={e => (e.target.style.borderColor = C.green)}
                onBlur={e  => (e.target.style.borderColor = C.g200)} />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Ангилал" required err={errors.category}>
              <select value={category} onChange={e => { setCategory(e.target.value); setErrors(v => ({ ...v, category: "" })); }}
                style={{ ...inp, appearance: "none", borderColor: errors.category ? "#dc2626" : C.g200, cursor: "pointer" } as React.CSSProperties}
                onFocus={e => (e.target.style.borderColor = C.green)}
                onBlur={e  => (e.target.style.borderColor = errors.category ? "#dc2626" : C.g200)}>
                <option value="">— Ангилал —</option>
                {CATEGORIES.map(c => <option key={c.label} value={c.label}>{c.icon} {c.label}</option>)}
              </select>
            </Field>
            <Field label="Аймаг / Байршил" required err={errors.aimag}>
              <select value={aimag} onChange={e => { setAimag(e.target.value); setErrors(v => ({ ...v, aimag: "" })); }}
                style={{ ...inp, appearance: "none", borderColor: errors.aimag ? "#dc2626" : C.g200, cursor: "pointer" } as React.CSSProperties}
                onFocus={e => (e.target.style.borderColor = C.green)}
                onBlur={e  => (e.target.style.borderColor = errors.aimag ? "#dc2626" : C.g200)}>
                <option value="">— Аймаг —</option>
                {AIMAG_NODES.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
              </select>
            </Field>
          </div>

          <Field label="Тайлбар / Гарал үүсэл">
            <textarea value={desc} onChange={e => setDesc(e.target.value)}
              placeholder="Барааны тухай дэлгэрэнгүй мэдээлэл, гарал үүсэл..."
              rows={3}
              style={{ ...inp, resize: "vertical", lineHeight: 1.6 } as React.CSSProperties}
              onFocus={e => (e.target.style.borderColor = C.green)}
              onBlur={e  => (e.target.style.borderColor = C.g200)} />
          </Field>

          {/* Organic toggle */}
          <button
            onClick={() => setIsOrg(o => !o)}
            className="flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all text-left"
            style={{ background: isOrg ? C.greenBg : C.g50, border: `1.5px solid ${isOrg ? C.green + "40" : C.g200}` }}
          >
            <div className="relative w-12 h-6 rounded-full transition-all flex-shrink-0"
              style={{ background: isOrg ? C.green : C.g300 }}>
              <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200"
                style={{ left: isOrg ? "calc(100% - 22px)" : "2px" }} />
            </div>
            <div>
              <div className="text-sm font-black" style={{ color: isOrg ? C.green : C.g600 }}>
                🌿 Органик бүтээгдэхүүн
              </div>
              <div className="text-[11px] mt-0.5" style={{ color: C.g400 }}>
                Байгалийн аргаар үйлдвэрлэсэн бол тэмдэглэнэ
              </div>
            </div>
          </button>

          {/* Submit */}
          <button
            onClick={submit}
            disabled={submitting}
            className="w-full py-4 rounded-2xl text-base font-black text-white font-sans transition-all hover:-translate-y-0.5 active:scale-[.98] disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2.5 mt-1"
            style={{
              background: "linear-gradient(135deg,#059669,#059669)",
              boxShadow:  submitting ? "none" : "0 8px 24px rgba(22,101,52,.35)",
            }}
          >
            {submitting ? (
              <>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ animation: "spin .8s linear infinite" }}>
                  <circle cx="9" cy="9" r="7" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2.5"/>
                  <path d="M9 2 A7 7 0 0 1 16 9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                Нэмж байна...
              </>
            ) : "✅ Бараа нэмэх"}
          </button>

          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      </div>
    </div>
  );
}
