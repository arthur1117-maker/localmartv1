"use client";
import { useState } from "react";
import { useTheme }         from "@/context/ThemeContext";
import { useCart }          from "@/context/CartContext";
import { useAuth }          from "@/context/AuthContext";
import { useNotifications } from "@/context/NotificationContext";
import { orderApi }         from "@/lib/api";
import { useToast }         from "@/components/ui";
import type { UserOrder }   from "@/lib/types";

interface CheckoutModalProps {
  onClose:       () => void;
  onOrderPlaced: (order: UserOrder) => void;
}

const PAYMENT_OPTS = [
  { id: "card",       icon: "💳", label: "Банкны карт",  desc: "Visa · Mastercard" },
  { id: "qpay",       icon: "📱", label: "QPay",          desc: "QR скан хийх" },
  { id: "socialpay",  icon: "🟢", label: "SocialPay",     desc: "Хурдан, аюулгүй" },
  { id: "cash",       icon: "💵", label: "Бэлэн мөнгө",  desc: "Хүргэлтэнд төлнө" },
];

const AIMAGS = [
  "Улаанбаатар", "Дархан-Уул", "Орхон", "Сэлэнгэ", "Төв", "Булган",
  "Архангай", "Өвөрхангай", "Хангай", "Хөвсгөл", "Завхан", "Говь-Алтай",
  "Увс", "Баян-Өлгий", "Хэнтий", "Дорнод", "Сүхбаатар", "Дорноговь",
  "Дундговь", "Өмнөговь", "Говьсүмбэр",
];

const DISTRICTS: Record<string, string[]> = {
  "Улаанбаатар": ["Баянзүрх", "Сүхбаатар", "Чингэлтэй", "Хан-Уул", "Баянгол", "Сонгинохайрхан", "Налайх", "Багануур", "Багахангай"],
};

const STEPS = [
  { num: 1, label: "Хүргэлт",    icon: "📍" },
  { num: 2, label: "Төлбөр",     icon: "💳" },
  { num: 3, label: "Баталгаа",   icon: "✅" },
];

export function CheckoutModal({ onClose, onOrderPlaced }: CheckoutModalProps) {
  const { C, dark }           = useTheme();
  const { items, total, clear } = useCart();
  const { user }              = useAuth();
  const { add: addNotif }     = useNotifications();
  const { success, error, loading: showLoad, dismiss } = useToast();

  const [step,    setStep]    = useState<1 | 2 | 3>(1);
  const [aimag,   setAimag]   = useState("Улаанбаатар");
  const [district, setDistrict] = useState("");
  const [addr,    setAddr]    = useState("");
  const [phone,   setPhone]   = useState(user?.phone || "");
  const [note,    setNote]    = useState("");
  const [paymt,   setPaymt]   = useState("qpay");
  const [loading, setLoading] = useState(false);

  const districts = DISTRICTS[aimag] || [];
  const fullAddress = [aimag, district, addr].filter(Boolean).join(", ");

  const step1Valid = addr.trim().length > 3 && phone.trim().length >= 8;

  const inp: React.CSSProperties = {
    border: `1.5px solid ${dark ? "rgba(255,255,255,.1)" : "#e2e8f0"}`,
    background: dark ? "rgba(255,255,255,.04)" : "#f8fafc",
    color: C.text, borderRadius: 12,
    fontFamily: "inherit", fontSize: 14, fontWeight: 500,
    outline: "none", padding: "12px 16px", width: "100%",
    boxSizing: "border-box" as const, transition: "border-color .2s",
  };

  const selStyle: React.CSSProperties = {
    ...inp, cursor: "pointer",
    appearance: "none" as any,
    WebkitAppearance: "none" as any,
  };

  const focusGreen = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#059669";
    e.target.style.background = dark ? "rgba(16,185,129,.06)" : "#f0fdf4";
  };
  const blurReset  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = dark ? "rgba(255,255,255,.1)" : "#e2e8f0";
    e.target.style.background  = dark ? "rgba(255,255,255,.04)" : "#f8fafc";
  };

  const placeOrder = async () => {
    setLoading(true);
    const tid = showLoad("Захиалга боловсруулж байна...");
    try {
      const dto = await orderApi.create({
        items: items.map(i => ({ productId: i.product.id, quantity: i.qty })),
        deliveryAddress: fullAddress,
        buyerPhone:      phone,
        paymentMethod:   paymt,
      });
      const order: UserOrder = {
        id:     dto.orderNumber,
        items:  [...items],
        total:  dto.totalAmount,
        status: "БАТАЛГААЖСАН",
        createdAt: new Date(dto.createdAt).toLocaleDateString("mn-MN"),
        address: dto.deliveryAddress,
        seller:  dto.seller,
        trackingSteps: [
          { label: "Захиалга баталгаажлаа",   done: true,  time: "Яг одоо" },
          { label: "Худалдагч бэлтгэж байна", done: false },
          { label: "Хүргэлтэнд гарлаа",       done: false },
          { label: "Хүргэгдлээ",              done: false },
        ],
      };
      clear();
      dismiss(tid);
      success("Захиалга амжилттай хийгдлээ! 🎉");
      addNotif({ type: "order", icon: "📦", title: "Захиалга баталгаажлаа",
        body: `${order.id} дугаартай захиалга амжилттай үүслээ!` });
      onOrderPlaced(order);
    } catch (e: unknown) {
      dismiss(tid);
      const msg = e instanceof Error ? e.message : "Алдаа гарлаа";
      error(msg.includes("stock") ? "Бараа нөөц хүрэлцэхгүй байна" : "Захиалга хийхэд алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[600] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,.58)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl overflow-hidden animate-scale-in flex flex-col"
        style={{
          background: C.white,
          boxShadow: "0 32px 90px rgba(0,0,0,.38), 0 8px 24px rgba(0,0,0,.14)",
          maxHeight: "92vh",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header with animated step indicator ── */}
        <div style={{
          padding: "20px 24px 16px",
          borderBottom: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#f1f5f9"}`,
          background: dark ? "rgba(255,255,255,.02)" : "#fafafa",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: C.text, margin: 0,
                fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Захиалга хийх
              </h2>
              <p style={{ fontSize: 12, color: C.g400, margin: "3px 0 0", fontWeight: 500 }}>
                {STEPS[step - 1].icon} {STEPS[step - 1].label}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 36, height: 36, borderRadius: "50%", border: "none",
                background: dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
                color: C.g500, cursor: "pointer", fontSize: 15, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>

          {/* Step progress bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {STEPS.map((s, i) => {
              const done    = step > s.num;
              const active  = step === s.num;
              const pct     = done ? "100%" : active ? "50%" : "0%";
              return (
                <div key={s.num} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? "none" : 0 }}>
                  {/* Step circle */}
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: done ? 13 : 12, fontWeight: 800,
                    background: done || active ? "#059669" : (dark ? "rgba(255,255,255,.10)" : "#e2e8f0"),
                    color: done || active ? "#fff" : C.g400,
                    transition: "all .3s var(--ease-spring)",
                    boxShadow: active ? "0 0 0 4px rgba(5,150,105,.18)" : "none",
                  }}>
                    {done ? "✓" : s.num}
                  </div>

                  {/* Connector bar */}
                  {i < STEPS.length - 1 && (
                    <div style={{
                      flex: 1, height: 3, borderRadius: 999, margin: "0 6px",
                      background: dark ? "rgba(255,255,255,.08)" : "#e2e8f0",
                      position: "relative", overflow: "hidden", width: 60,
                    }}>
                      <div style={{
                        position: "absolute", top: 0, left: 0, height: "100%",
                        borderRadius: 999, background: "#059669",
                        width: done ? "100%" : "0%",
                        transition: "width .4s var(--ease-smooth)",
                      }} />
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ marginLeft: "auto", fontSize: 11, color: C.g400, fontWeight: 600 }}>
              {step} / {STEPS.length}
            </div>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div style={{ overflowY: "auto", flex: 1 }}>

          {/* ──── STEP 1: Delivery ──── */}
          {step === 1 && (
            <div style={{ padding: "20px 24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>

                {/* Aimag selector */}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700,
                    color: C.g500, marginBottom: 6, letterSpacing: ".04em" }}>
                    📍 АЙМАГ / ХОТА *
                  </label>
                  <div style={{ position: "relative" }}>
                    <select value={aimag} onChange={e => { setAimag(e.target.value); setDistrict(""); }}
                      style={selStyle} onFocus={focusGreen} onBlur={blurReset}>
                      {AIMAGS.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                    <span style={{ position: "absolute", right: 14, top: "50%",
                      transform: "translateY(-50%)", pointerEvents: "none", fontSize: 11, color: C.g400 }}>
                      ▾
                    </span>
                  </div>
                </div>

                {/* District selector (UB only) */}
                {districts.length > 0 && (
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700,
                      color: C.g500, marginBottom: 6, letterSpacing: ".04em" }}>
                      🏘️ ДҮҮРЭГ
                    </label>
                    <div style={{ position: "relative" }}>
                      <select value={district} onChange={e => setDistrict(e.target.value)}
                        style={selStyle} onFocus={focusGreen} onBlur={blurReset}>
                        <option value="">— Сонгоно уу —</option>
                        {districts.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: 14, top: "50%",
                        transform: "translateY(-50%)", pointerEvents: "none", fontSize: 11, color: C.g400 }}>
                        ▾
                      </span>
                    </div>
                  </div>
                )}

                {/* Address detail */}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700,
                    color: C.g500, marginBottom: 6, letterSpacing: ".04em" }}>
                    🏠 ДЭЛГЭРЭНГҮЙ ХАЯГ *
                  </label>
                  <input
                    value={addr}
                    onChange={e => setAddr(e.target.value)}
                    placeholder="Байр, тоот, хороо..."
                    style={inp}
                    onFocus={focusGreen}
                    onBlur={blurReset}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700,
                    color: C.g500, marginBottom: 6, letterSpacing: ".04em" }}>
                    📞 УТАС *
                  </label>
                  <input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    type="tel"
                    placeholder="9911-2233"
                    style={inp}
                    onFocus={focusGreen}
                    onBlur={blurReset}
                  />
                </div>

                {/* Note */}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700,
                    color: C.g500, marginBottom: 6, letterSpacing: ".04em" }}>
                    📝 НЭМЭЛТ ТЭМДЭГЛЭЛ
                  </label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder="Хаалганы дугаар, онцгой заавар..."
                    style={{ ...inp, resize: "none" } as any}
                    onFocus={focusGreen}
                    onBlur={blurReset}
                  />
                </div>
              </div>

              {/* Order mini-summary */}
              <div style={{
                borderRadius: 14, padding: "14px 16px", marginBottom: 16,
                background: dark ? "rgba(255,255,255,.03)" : "#f8fafc",
                border: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#e2e8f0"}`,
              }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: C.g400,
                  letterSpacing: ".1em", marginBottom: 10 }}>
                  ЗАХИАЛГЫН ХУРААНГУЙ
                </p>
                {items.map(({ product: p, qty }) => (
                  <div key={p.id} style={{
                    display: "flex", justifyContent: "space-between", marginBottom: 8,
                  }}>
                    <span style={{ fontSize: 13, color: C.text }}>
                      {p.emoji} {p.name} ×{qty}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.orange }}>
                      ₮{(p.price * qty).toLocaleString()}
                    </span>
                  </div>
                ))}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  paddingTop: 10, marginTop: 6,
                  borderTop: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#e2e8f0"}`,
                }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: C.text }}>Нийт</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: C.orange,
                    fontFamily: "var(--font-display)" }}>
                    ₮{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => step1Valid && setStep(2)}
                style={{
                  width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
                  fontSize: 14, fontWeight: 700, fontFamily: "inherit",
                  cursor: step1Valid ? "pointer" : "not-allowed",
                  color: "#fff",
                  background: step1Valid
                    ? "linear-gradient(135deg,#059669,#0d9488)"
                    : (dark ? "#1e293b" : "#e2e8f0"),
                  boxShadow: step1Valid ? "0 5px 18px rgba(5,150,105,.28)" : "none",
                  transition: "all .22s",
                }}
              >
                {step1Valid ? "Үргэлжлүүлэх →" : "Хаяг болон утасаа оруулна уу"}
              </button>
            </div>
          )}

          {/* ──── STEP 2: Payment ──── */}
          {step === 2 && (
            <div style={{ padding: "20px 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                {PAYMENT_OPTS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setPaymt(opt.id)}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "flex-start",
                      gap: 4, padding: "14px 16px", borderRadius: 14, border: "none",
                      cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                      background: paymt === opt.id
                        ? (dark ? "rgba(16,185,129,.10)" : "#f0fdf4")
                        : (dark ? "rgba(255,255,255,.03)" : "#f8fafc"),
                      border: `2px solid ${paymt === opt.id ? "#059669" : (dark ? "rgba(255,255,255,.08)" : "#e2e8f0")}`,
                      transition: "all .18s",
                      boxShadow: paymt === opt.id ? "0 4px 16px rgba(5,150,105,.14)" : "none",
                    } as React.CSSProperties}
                  >
                    <span style={{ fontSize: 24 }}>{opt.icon}</span>
                    <span style={{
                      fontSize: 13, fontWeight: 700,
                      color: paymt === opt.id ? "#059669" : C.text,
                    }}>
                      {opt.label}
                    </span>
                    <span style={{ fontSize: 11, color: C.g400 }}>{opt.desc}</span>
                  </button>
                ))}
              </div>

              {/* QPay QR mockup */}
              {paymt === "qpay" && (
                <div style={{
                  textAlign: "center", padding: "20px 16px", borderRadius: 14,
                  background: dark ? "rgba(16,185,129,.06)" : "#f0fdf4",
                  border: "1px solid rgba(5,150,105,.2)", marginBottom: 20,
                }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>📱</div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", marginBottom: 4 }}>
                    QPay QR код
                  </p>
                  <p style={{ fontSize: 12, color: C.g400, marginBottom: 14 }}>
                    Банкны аппаар скан хийж төлнө
                  </p>
                  <div style={{
                    width: 100, height: 100, margin: "0 auto",
                    borderRadius: 14, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 42,
                    background: "#fff", border: "2px dashed #059669",
                  }}>
                    🔲
                  </div>
                  <p style={{ fontSize: 10, color: C.g400, marginTop: 10 }}>
                    ₮{total.toLocaleString()} — Захиалга #{Math.floor(Math.random() * 90000 + 10000)}
                  </p>
                </div>
              )}

              {/* Security note */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", borderRadius: 12, marginBottom: 16,
                background: dark ? "rgba(255,255,255,.03)" : "#f8fafc",
                border: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#e2e8f0"}`,
              }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>🔒</span>
                <p style={{ fontSize: 11, color: C.g400, margin: 0, lineHeight: 1.5 }}>
                  Таны төлбөрийн мэдээлэл шифрлэгдсэн бөгөөд аюулгүй байна.
                </p>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: "13px 20px", borderRadius: 14, border: "none",
                    background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                    color: C.g500, fontSize: 13, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  ← Буцах
                </button>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    flex: 1, padding: "13px 0", borderRadius: 14, border: "none",
                    background: "linear-gradient(135deg,#059669,#0d9488)",
                    color: "#fff", fontSize: 14, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit",
                    boxShadow: "0 5px 18px rgba(5,150,105,.28)",
                  }}
                >
                  Үргэлжлүүлэх →
                </button>
              </div>
            </div>
          )}

          {/* ──── STEP 3: Confirm ──── */}
          {step === 3 && (
            <div style={{ padding: "20px 24px" }}>
              {/* Success banner */}
              <div style={{
                textAlign: "center", padding: "20px 16px", borderRadius: 16,
                background: dark ? "rgba(16,185,129,.08)" : "#f0fdf4",
                border: "1px solid rgba(5,150,105,.2)", marginBottom: 20,
              }}>
                <div style={{ fontSize: 44, marginBottom: 8 }}>✅</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#059669",
                  fontFamily: "var(--font-display)", margin: "0 0 4px" }}>
                  Баталгаажуулах
                </h3>
                <p style={{ fontSize: 12, color: C.g400, margin: 0 }}>
                  Доорх мэдээллийг шалгаад захиалга хийнэ үү
                </p>
              </div>

              {/* Summary rows */}
              <div style={{
                borderRadius: 14, overflow: "hidden",
                border: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#e2e8f0"}`,
                marginBottom: 20,
              }}>
                {[
                  { icon: "📍", label: "Хүргэлтийн хаяг", value: fullAddress },
                  { icon: "📞", label: "Утас",             value: phone },
                  { icon: "💳", label: "Төлбөрийн хэлбэр", value: PAYMENT_OPTS.find(o => o.id === paymt)?.label || "" },
                  { icon: "🚚", label: "Хүргэлтийн хугацаа", value: "3–5 хоног" },
                  { icon: "💰", label: "Нийт төлбөр",      value: `₮${total.toLocaleString()}` },
                ].map(({ icon, label, value }, i, arr) => (
                  <div
                    key={label}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                      padding: "12px 16px", gap: 12,
                      borderBottom: i < arr.length - 1
                        ? `1px solid ${dark ? "rgba(255,255,255,.07)" : "#f1f5f9"}`
                        : "none",
                      background: i === arr.length - 1
                        ? (dark ? "rgba(16,185,129,.06)" : "#f0fdf4")
                        : "transparent",
                    }}
                  >
                    <span style={{ fontSize: 12, color: C.g400, fontWeight: 500, flexShrink: 0 }}>
                      {icon} {label}
                    </span>
                    <span style={{
                      fontSize: 13, fontWeight: 700, color: C.text,
                      textAlign: "right", wordBreak: "break-word",
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: "13px 20px", borderRadius: 14, border: "none",
                    background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                    color: C.g500, fontSize: 13, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  ← Буцах
                </button>
                <button
                  onClick={placeOrder}
                  disabled={loading}
                  style={{
                    flex: 1, padding: "13px 0", borderRadius: 14, border: "none",
                    background: loading
                      ? (dark ? "#1e293b" : "#e2e8f0")
                      : "linear-gradient(135deg,#f59e0b,#d97706)",
                    color: loading ? C.g400 : "#fff",
                    fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "inherit",
                    boxShadow: loading ? "none" : "0 5px 18px rgba(245,158,11,.32)",
                    transition: "all .22s",
                  }}
                >
                  {loading ? "⏳ Боловсруулж байна..." : "🎉 Захиалга баталгаажуулах"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
