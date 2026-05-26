"use client";
import { useTheme }  from "@/context/ThemeContext";
import type { UserOrder } from "@/lib/types";

interface Props {
  order:   UserOrder;
  onClose: () => void;
}

const STATUS_CONFIG: Record<string, { color: string; bg: string; icon: string }> = {
  БАТАЛГААЖСАН: { color: "#059669", bg: "#f0fdf4", icon: "✅" },
  БЭЛТГЭЖ_БАЙНА: { color: "#d97706", bg: "#fffbeb", icon: "📦" },
  ХҮРГЭЛТЭНД:  { color: "#0e7490", bg: "#eff6ff", icon: "🚚" },
  ХҮРГЭГДСЭН:  { color: "#059669", bg: "#f0fdf4", icon: "🎉" },
  ЦУЦЛАСАН:    { color: "#dc2626", bg: "#fef2f2", icon: "❌" },
};

export function OrderTrackingModal({ order, onClose }: Props) {
  const { C } = useTheme();
  const cfg = STATUS_CONFIG[order.status] || { color: C.green, bg: C.greenBg, icon: "📦" };
  const total = order.items.reduce((s, i) => s + i.product.price * i.qty, 0);

  const STEPS = [
    { key: "БАТАЛГААЖСАН",  label: "Захиалга баталгаажсан", icon: "✅", desc: "Таны захиалгыг хүлээн авлаа" },
    { key: "БЭЛТГЭЖ_БАЙНА", label: "Бэлтгэж байна",         icon: "📦", desc: "Худалдагч бараагаа бэлдэж байна" },
    { key: "ХҮРГЭЛТЭНД",    label: "Хүргэлтэнд гарсан",     icon: "🚚", desc: "Таны хаяг руу хүргэж явна" },
    { key: "ХҮРГЭГДСЭН",    label: "Амжилттай хүргэгдсэн",  icon: "🎉", desc: "Бараа хүргэгдлээ" },
  ];

  const statuses = ["БАТАЛГААЖСАН","БЭЛТГЭЖ_БАЙНА","ХҮРГЭЛТЭНД","ХҮРГЭГДСЭН"];
  const currentIdx = statuses.indexOf(order.status);

  return (
    <div className="fixed inset-0 z-[800] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden animate-scale-in"
        style={{ background: C.white, boxShadow: "0 32px 80px rgba(0,0,0,.25)", maxHeight: "90vh", overflow: "auto" }}
      >
        {/* ── Header ── */}
        <div className="relative overflow-hidden px-6 pt-7 pb-6"
          style={{ background: `linear-gradient(135deg,${cfg.color},${cfg.color}cc)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-all hover:bg-white/30">
            ✕
          </button>
          <div className="text-4xl mb-3">{cfg.icon}</div>
          <div className="text-[11px] text-white/60 font-bold tracking-widest uppercase mb-1">Захиалгын дугаар</div>
          <div className="text-xl font-black text-white display-font mb-1">{order.id}</div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-white/70">📅 {order.createdAt}</span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-white/70">🏪 {order.seller}</span>
            <span className="text-white/40">·</span>
            <span className="text-xs font-black text-white">₮{total.toLocaleString()}</span>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-5">
          {/* ── Progress track ── */}
          {order.status !== "ЦУЦЛАСАН" && (
            <div>
              <h3 className="text-sm font-black mb-4 display-font" style={{ color: C.text }}>📍 Хүргэлтийн явц</h3>
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-5 top-5 bottom-5 w-0.5"
                  style={{ background: C.g100, zIndex: 0 }} />
                <div className="absolute left-5 top-5 w-0.5 transition-all duration-1000"
                  style={{
                    background: `linear-gradient(to bottom,${cfg.color},${cfg.color})`,
                    height: `${Math.max(0, (currentIdx / (STEPS.length - 1)) * 100)}%`,
                    zIndex: 1,
                  }} />

                <div className="flex flex-col gap-5 relative z-10">
                  {STEPS.map((step, i) => {
                    const done = i <= currentIdx;
                    const current = i === currentIdx;
                    return (
                      <div key={step.key} className="flex items-start gap-4">
                        {/* Step dot */}
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 transition-all duration-500"
                          style={{
                            background: done ? cfg.color : C.g100,
                            boxShadow: current ? `0 0 0 6px ${cfg.color}25` : "none",
                            transform: current ? "scale(1.1)" : "none",
                          }}>
                          {done ? step.icon : <span style={{ color: C.g300, fontSize: 12 }}>○</span>}
                        </div>
                        {/* Step info */}
                        <div className="flex-1 pt-2">
                          <div className="text-sm font-black" style={{ color: done ? C.text : C.g300 }}>
                            {step.label}
                          </div>
                          <div className="text-[11px] mt-0.5" style={{ color: done ? C.g500 : C.g300 }}>
                            {done ? step.desc : "—"}
                          </div>
                          {current && (
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: cfg.color }} />
                              <span className="text-[11px] font-black" style={{ color: cfg.color }}>Одоогийн байдал</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Cancelled state */}
          {order.status === "ЦУЦЛАСАН" && (
            <div className="p-4 rounded-2xl text-center"
              style={{ background: "#fef2f2", border: "1.5px solid #fecaca" }}>
              <div className="text-4xl mb-2">😔</div>
              <div className="text-sm font-black text-red-700 mb-1">Захиалга цуцлагдсан</div>
              <div className="text-xs text-red-500">Та дахин захиалга хийх боломжтой</div>
            </div>
          )}

          {/* ── Order items ── */}
          <div>
            <h3 className="text-sm font-black mb-3 display-font" style={{ color: C.text }}>🛍 Захиалгын бараанууд</h3>
            <div className="flex flex-col gap-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl"
                  style={{ background: C.g50, border: `1px solid ${C.g100}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: C.greenBg }}>
                    {item.product.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate" style={{ color: C.text }}>{item.product.name}</div>
                    <div className="text-xs" style={{ color: C.g400 }}>
                      ₮{item.product.price.toLocaleString()} × {item.qty} {item.product.unit}
                    </div>
                  </div>
                  <div className="text-sm font-black flex-shrink-0" style={{ color: C.orange }}>
                    ₮{(item.product.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Delivery info ── */}
          <div className="p-4 rounded-2xl" style={{ background: C.g50, border: `1px solid ${C.g100}` }}>
            <div className="flex items-center gap-2 mb-1">
              <span>📍</span>
              <span className="text-xs font-black" style={{ color: C.text }}>Хүргэлтийн хаяг</span>
            </div>
            <div className="text-sm font-semibold" style={{ color: C.g600 }}>{order.address}</div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between px-4 py-3.5 rounded-2xl"
            style={{ background: C.greenBg, border: `1.5px solid ${C.green}30` }}>
            <span className="text-sm font-bold" style={{ color: C.green }}>Нийт дүн</span>
            <span className="text-xl font-black display-font" style={{ color: C.green }}>
              ₮{total.toLocaleString()}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {order.status !== "ХҮРГЭГДСЭН" && order.status !== "ЦУЦЛАСАН" && (
              <button className="flex-1 py-3 rounded-2xl text-sm font-black font-sans border transition-all hover:scale-[1.02]"
                style={{ color: C.g600, borderColor: C.g200, background: "transparent" }}>
                📞 Дэмжлэг авах
              </button>
            )}
            <button onClick={onClose}
              className="flex-1 py-3 rounded-2xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#059669,#059669)", boxShadow: "0 6px 20px rgba(22,101,52,.3)" }}>
              ✓ Хаах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
