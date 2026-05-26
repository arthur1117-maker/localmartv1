"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/components/ui";
import { useCart  } from "@/context/CartContext";
import { useAuth  } from "@/context/AuthContext";
import { useInView } from "@/lib/hooks";

interface CartDrawerProps {
  onClose:    () => void;
  onCheckout: () => void;
}

export function CartDrawer({ onClose, onCheckout }: CartDrawerProps) {
  const { C, dark }                             = useTheme();
  const { items, remove, update, total, clear } = useCart();
  const { success }                             = useToast();
  const { isLoggedIn }                          = useAuth();
  const [removing, setRemoving]                 = useState<number | null>(null);

  const handleRemove = (id: number, name: string) => {
    setRemoving(id);
    setTimeout(() => {
      remove(id);
      setRemoving(null);
      success(`"${name}" сагснаас хасагдлаа`);
    }, 280);
  };

  const delivery = total > 50000 ? 0 : 5000;
  const grandTotal = total + delivery;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[500]"
        style={{ background: "rgba(0,0,0,.55)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 bottom-0 z-[501] w-full max-w-md flex flex-col"
        style={{
          background: C.white,
          boxShadow: "-12px 0 60px rgba(0,0,0,.20)",
          animation: "slideInRight .32s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center justify-between px-6 py-5 flex-shrink-0"
          style={{ borderBottom: `1.5px solid ${C.g100}` }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
              style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", border: `1px solid ${C.green}30` }}>
              🛒
            </div>
            <div>
              <h2 className="text-base font-black display-font" style={{ color: C.text }}>
                Миний сагс
              </h2>
              <p className="text-[11px] font-semibold mt-0.5" style={{ color: C.g400 }}>
                {items.length > 0 ? `${items.length} бараа · ₮${total.toLocaleString()}` : "Хоосон байна"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={() => { clear(); success("Сагс цэвэрлэгдлээ"); }}
                className="text-[11px] font-black px-3 py-1.5 rounded-xl transition-all hover:opacity-80 font-sans"
                style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}
              >
                Бүгдийг хасах
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all hover:scale-110"
              style={{ background: C.g50, color: C.g500, border: `1px solid ${C.g200}` }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* ── Free shipping progress ── */}
        {total > 0 && total < 50000 && (
          <div className="px-5 py-3 flex-shrink-0" style={{ background: C.greenBg, borderBottom: `1px solid ${C.green}20` }}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[11px] font-bold" style={{ color: C.green }}>
                🚚 ₮{(50000 - total).toLocaleString()} нэмбэл үнэгүй хүргэлт!
              </span>
              <span className="text-[11px] font-black" style={{ color: C.green }}>
                {Math.round((total / 50000) * 100)}%
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${C.green}20` }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(total / 50000) * 100}%`, background: `linear-gradient(90deg,${C.green},#4ade80)` }}
              />
            </div>
          </div>
        )}

        {total >= 50000 && (
          <div className="px-5 py-2.5 flex items-center gap-2 flex-shrink-0"
            style={{ background: C.greenBg, borderBottom: `1px solid ${C.green}20` }}>
            <span className="text-lg">🎉</span>
            <span className="text-[11px] font-black" style={{ color: C.green }}>
              Үнэгүй хүргэлт авлаа!
            </span>
          </div>
        )}

        {/* ── Items list ── */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 gap-5">
              <div className="text-7xl" style={{ animation: "float 3s ease-in-out infinite" }}>🛒</div>
              <div className="text-center">
                <div className="text-base font-black mb-1 display-font" style={{ color: C.text }}>
                  Сагс хоосон байна
                </div>
                <div className="text-sm" style={{ color: C.g400 }}>
                  Зах зээлд орж бараа нэмнэ үү
                </div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-2xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#059669,#059669)", boxShadow: "0 6px 20px rgba(22,101,52,.3)" }}
              >
                Зах зээл үзэх →
              </button>
            </div>
          ) : (
            items.map((item, i) => (
              <div
                key={item.product.id}
                className="flex gap-3 p-3.5 rounded-2xl transition-all duration-300"
                style={{
                  background: C.g50,
                  border: `1.5px solid ${C.g100}`,
                  opacity: removing === item.product.id ? 0 : 1,
                  transform: removing === item.product.id ? "translateX(60px) scale(.95)" : "none",
                  animation: `fadeUp .4s cubic-bezier(.16,1,.3,1) ${i * 0.06}s both`,
                }}
              >
                {/* Emoji image */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", border: `1px solid ${C.green}15` }}
                >
                  {item.product.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-black leading-snug line-clamp-1 mb-0.5" style={{ color: C.text }}>
                    {item.product.name}
                  </div>
                  <div className="text-[11px] mb-2" style={{ color: C.g400 }}>
                    📍 {item.product.aimag} · {item.product.seller}
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 rounded-xl overflow-hidden"
                      style={{ border: `1.5px solid ${C.g200}`, background: C.white }}>
                      <button
                        onClick={() => item.qty > 1 ? update(item.product.id, item.qty - 1) : handleRemove(item.product.id, item.product.name)}
                        className="w-8 h-8 flex items-center justify-center text-base font-black transition-all hover:bg-red-50 hover:text-red-500"
                        style={{ color: C.g500 }}
                      >
                        {item.qty === 1 ? "🗑" : "−"}
                      </button>
                      <span className="text-sm font-black px-2 min-w-[24px] text-center" style={{ color: C.text }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => update(item.product.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-base font-black transition-all hover:bg-green-50"
                        style={{ color: C.green }}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-black display-font" style={{ color: C.orange }}>
                        ₮{(item.product.price * item.qty).toLocaleString()}
                      </div>
                      <div className="text-[10px]" style={{ color: C.g400 }}>
                        ₮{item.product.price.toLocaleString()} / {item.product.unit}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── Footer summary & checkout ── */}
        {items.length > 0 && (
          <div
            className="px-5 py-5 flex-shrink-0"
            style={{ borderTop: `1.5px solid ${C.g100}`, background: dark ? C.g50 : "#fafafa" }}
          >
            {/* Price breakdown */}
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between text-sm" style={{ color: C.g500 }}>
                <span className="font-semibold">Барааны дүн</span>
                <span className="font-bold">₮{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm" style={{ color: delivery === 0 ? C.green : C.g500 }}>
                <span className="font-semibold">Хүргэлт</span>
                <span className="font-bold">{delivery === 0 ? "🎉 Үнэгүй!" : `₮${delivery.toLocaleString()}`}</span>
              </div>
              <div
                className="flex justify-between pt-2.5 mt-0.5"
                style={{ borderTop: `1.5px solid ${C.g100}` }}
              >
                <span className="text-base font-black" style={{ color: C.text }}>Нийт дүн</span>
                <span className="text-xl font-black display-font" style={{ color: C.green }}>
                  ₮{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* CTA */}
            {isLoggedIn ? (
              <button
                onClick={onCheckout}
                className="w-full py-4 rounded-2xl text-base font-black text-white font-sans transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg,#059669,#14b8a6)",
                  boxShadow: "0 8px 28px rgba(20,184,166,.40)",
                }}
              >
                💳 Захиалга хийх ({items.length})
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="text-center text-xs font-semibold py-2 rounded-xl"
                  style={{ background: "#fffbeb", color: "#92400e", border: "1px solid #fde68a" }}>
                  ⚠️ Захиалга хийхийн тулд нэвтэрнэ үү
                </div>
                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-2xl text-sm font-black text-white font-sans"
                  style={{ background: "linear-gradient(135deg,#059669,#059669)", boxShadow: "0 6px 20px rgba(22,101,52,.3)" }}
                >
                  🔑 Нэвтрэх
                </button>
              </div>
            )}

            {/* Security badges */}
            <div className="flex items-center justify-center gap-4 mt-4">
              {["🔒 Аюулгүй", "✅ Баталгаатай", "↩️ Буцаалт"].map(b => (
                <span key={b} className="text-[10px] font-bold" style={{ color: C.g400 }}>{b}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
