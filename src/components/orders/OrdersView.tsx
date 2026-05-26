"use client";
import { useState, useEffect } from "react";
import { useTheme }            from "@/context/ThemeContext";
import { useAuth }             from "@/context/AuthContext";
import { useInView }           from "@/lib/hooks";
import { PageHeader }          from "@/components/layout";
import { EmptyState, PageLoader } from "@/components/ui";
import { OrderTrackingModal }  from "./OrderTrackingModal";
import { orderApi, type OrderDto } from "@/lib/api";
import type { UserOrder, OrderStatus } from "@/lib/types";

const STATUS_CONFIG: Record<string, { bg: string; color: string; dot: string; icon: string; label: string }> = {
  CONFIRMED:  { bg: "#dcfce7", color: "#059669", dot: "#22c55e", icon: "✅", label: "БАТАЛГААЖСАН" },
  PREPARING:  { bg: "#fef9c3", color: "#854d0e", dot: "#eab308", icon: "📦", label: "БЭЛТГЭЖ БАЙНА" },
  SHIPPED:    { bg: "#dbeafe", color: "#0e7490", dot: "#3b82f6", icon: "🚚", label: "ХҮРГЭЛТЭНД" },
  DELIVERED:  { bg: "#f0fdf4", color: "#059669", dot: "#4ade80", icon: "🎉", label: "ХҮРГЭГДСЭН"  },
  CANCELLED:  { bg: "#fee2e2", color: "#dc2626", dot: "#ef4444", icon: "❌", label: "ЦУЦЛАСАН"    },
};

const STATUS_TRANSLATE: Record<string, string> = {
  CONFIRMED: "БАТАЛГААЖСАН", PREPARING: "БЭЛТГЭЖ_БАЙНА",
  SHIPPED: "ХҮРГЭЛТЭНД", DELIVERED: "ХҮРГЭГДСЭН", CANCELLED: "ЦУЦЛАСАН",
};

function toUserOrder(d: OrderDto): UserOrder {
  return {
    id:      String(d.id),
    status:  (STATUS_TRANSLATE[d.status] ?? d.status) as OrderStatus,
    address: d.deliveryAddress,
    seller:  d.seller,
    createdAt: new Date(d.createdAt).toLocaleDateString("mn-MN"),
    total:   d.items.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
    trackingSteps: [
      { label: "Баталгаажсан",    done: true },
      { label: "Бэлтгэж байна",   done: ["PREPARING","SHIPPED","DELIVERED"].includes(d.status) },
      { label: "Хүргэлтэнд гарсан", done: ["SHIPPED","DELIVERED"].includes(d.status) },
      { label: "Хүргэгдсэн",      done: d.status === "DELIVERED" },
    ],
    items:   d.items.map(i => ({
      product: {
        id: 0, name: i.productName, price: i.unitPrice,
        unit: "кг", emoji: i.productEmoji ?? "📦",
        cat: "", aimag: "", seller: d.seller,
        story: "", phone: "", rating: 5, reviews: 0,
        verified: true, isNew: false, isOrganic: false, imageCount: 1,
        date: new Date(d.createdAt).toLocaleDateString("mn-MN"),
      },
      qty: i.quantity,
    })),
  };
}

interface OrdersViewProps {
  orders?: UserOrder[];
}

export function OrdersView({ orders: propOrders = [] }: OrdersViewProps) {
  const { C, dark }            = useTheme();
  const { isLoggedIn }         = useAuth();
  const { ref, visible }       = useInView(0.04);
  const [apiOrders, setApi]    = useState<UserOrder[]>([]);
  const [loading, setLoading]  = useState(false);
  const [tracking, setTracking] = useState<UserOrder | null>(null);
  const [filterStatus, setFilter] = useState("Бүгд");

  useEffect(() => {
    if (!isLoggedIn) return;
    setLoading(true);
    orderApi.myOrders()
      .then(res => setApi(Array.isArray(res) ? res.map(toUserOrder) : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [isLoggedIn]);

  const allOrders = [...propOrders, ...apiOrders];

  const STATUS_FILTERS = ["Бүгд", "БАТАЛГААЖСАН", "ХҮРГЭЛТЭНД", "ХҮРГЭГДСЭН", "ЦУЦЛАСАН"];

  const filtered = filterStatus === "Бүгд"
    ? allOrders
    : allOrders.filter(o => o.status === filterStatus);

  return (
    <>
      <PageHeader
        title="📦 Миний захиалгууд"
        subtitle={`${allOrders.length} захиалга`}
        badge="📬 Захиалгын түүх"
      />

      <div
        ref={ref}
        className="max-w-4xl mx-auto px-4 md:px-8 py-8"
        style={{ opacity: visible ? 1 : 0, animation: visible ? "fadeUp .6s ease both" : "none" }}
      >
        {loading ? (
          <PageLoader message="Захиалгууд ачааллаж байна..." />
        ) : allOrders.length === 0 ? (
          <div className="rounded-3xl overflow-hidden" style={{ background: C.white, border: `1.5px solid ${C.g100}` }}>
            <EmptyState type="orders" />
          </div>
        ) : (
          <>
            {/* ── Status filter pills ── */}
            <div className="flex gap-2 flex-wrap mb-6">
              {STATUS_FILTERS.map(st => {
                const cfg = st === "Бүгд" ? null : Object.values(STATUS_CONFIG).find(c => c.label.replace(" ", "_") === st || c.label === st);
                const active = filterStatus === st;
                return (
                  <button key={st}
                    onClick={() => setFilter(st)}
                    className="px-4 py-2 rounded-xl text-xs font-black transition-all hover:-translate-y-0.5 font-sans"
                    style={{
                      background: active ? (cfg?.color ?? C.green)     : C.g50,
                      color:      active ? "#fff"                        : C.g500,
                      border:     `1.5px solid ${active ? (cfg?.color ?? C.green) + "40" : C.g200}`,
                      boxShadow:  active ? `0 4px 12px ${(cfg?.color ?? C.green)}30` : "none",
                    }}>
                    {cfg ? `${cfg.icon} ${st}` : `📋 ${st}`}
                  </button>
                );
              })}
            </div>

            {/* ── Orders list ── */}
            <div className="flex flex-col gap-4">
              {filtered.length === 0 ? (
                <div className="rounded-3xl p-12 text-center"
                  style={{ background: C.white, border: `1.5px solid ${C.g100}` }}>
                  <div className="text-5xl mb-3">📭</div>
                  <div className="text-base font-black" style={{ color: C.text }}>Энэ төлөвт захиалга байхгүй</div>
                </div>
              ) : (
                filtered.map((order, i) => {
                  // Look up by translated status
                  const cfgKey = Object.entries(STATUS_TRANSLATE).find(([, v]) => v === order.status)?.[0] ?? "";
                  const cfg = STATUS_CONFIG[cfgKey] ?? { bg: C.g100, color: C.g500, dot: C.g400, icon: "📦", label: order.status };
                  const total = order.items.reduce((s, it) => s + it.product.price * it.qty, 0);

                  return (
                    <div
                      key={order.id}
                      className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group"
                      style={{
                        background: C.white,
                        border: `1.5px solid ${C.g100}`,
                        boxShadow: "0 2px 12px rgba(0,0,0,.05)",
                        animation: `fadeUp .5s cubic-bezier(.16,1,.3,1) ${i * 0.07}s both`,
                      }}
                      onClick={() => setTracking(order)}
                    >
                      {/* Status bar */}
                      <div className="flex items-center justify-between px-5 py-3"
                        style={{ background: cfg.bg, borderBottom: `1px solid ${cfg.color}20` }}>
                        <div className="flex items-center gap-2">
                          <span>{cfg.icon}</span>
                          <span className="text-xs font-black" style={{ color: cfg.color }}>{cfg.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold" style={{ color: cfg.color }}>
                            📅 {order.createdAt}
                          </span>
                          <span className="text-lg transition-transform group-hover:translate-x-1 duration-200"
                            style={{ color: cfg.color }}>→</span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="px-5 py-4">
                        <div className="flex items-start justify-between gap-4">
                          {/* Order info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg"
                                style={{ background: C.g100, color: C.g600 }}>
                                #{order.id.slice(-8).toUpperCase()}
                              </span>
                              <span className="text-xs font-semibold" style={{ color: C.g400 }}>
                                🏪 {order.seller}
                              </span>
                            </div>

                            {/* Items preview */}
                            <div className="flex gap-2 flex-wrap mt-2">
                              {order.items.slice(0, 3).map((item, j) => (
                                <div key={j}
                                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold"
                                  style={{ background: C.g50, border: `1px solid ${C.g100}` }}>
                                  <span className="text-base">{item.product.emoji}</span>
                                  <span style={{ color: C.text }}>{item.product.name}</span>
                                  <span className="font-bold" style={{ color: C.g400 }}>×{item.qty}</span>
                                </div>
                              ))}
                              {order.items.length > 3 && (
                                <div className="px-2.5 py-1.5 rounded-xl text-xs font-bold"
                                  style={{ background: C.g50, color: C.g400 }}>
                                  +{order.items.length - 3} дахь
                                </div>
                              )}
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-semibold"
                              style={{ color: C.g400 }}>
                              <span>📍</span>
                              <span className="line-clamp-1">{order.address}</span>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="text-right flex-shrink-0">
                            <div className="text-xl font-black display-font" style={{ color: C.orange }}>
                              ₮{total.toLocaleString()}
                            </div>
                            <div className="text-[10px] mt-0.5" style={{ color: C.g400 }}>
                              {order.items.length} бараа
                            </div>
                            <button
                              className="mt-2 px-3 py-1.5 rounded-xl text-[11px] font-black text-white font-sans transition-all hover:scale-105"
                              style={{ background: `linear-gradient(135deg,${cfg.color},${cfg.color}cc)` }}>
                              Дэлгэрэнгүй →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>

      {tracking && <OrderTrackingModal order={tracking} onClose={() => setTracking(null)} />}
    </>
  );
}
