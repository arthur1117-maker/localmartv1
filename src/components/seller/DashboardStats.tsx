"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/lib/hooks";
import { sellerApi, type SellerStats } from "@/lib/api";
import { PageLoader } from "@/components/ui";

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const isFloat = target % 1 !== 0;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(isFloat ? Math.round(start * 10) / 10 : Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return val;
}

function KpiCard({
  icon, label, rawValue, displayValue, change, changeUp, color, bg, active, index
}: {
  icon: string; label: string; rawValue: number; displayValue: string;
  change?: string; changeUp?: boolean; color: string; bg: string; active: boolean; index: number;
}) {
  const { C } = useTheme();
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-3xl p-5 transition-all duration-300 cursor-default"
      style={{
        background: hov ? bg : C.white,
        border: `1.5px solid ${hov ? color + "40" : C.g100}`,
        boxShadow: hov ? `0 16px 42px rgba(0,0,0,.08), 0 0 0 4px ${color}12` : "0 2px 10px rgba(0,0,0,.04)",
        transform: hov ? "translateY(-4px)" : "none",
        opacity: active ? 1 : 0,
        animation: active ? `fadeUp .55s cubic-bezier(.16,1,.3,1) ${index * 0.08}s both` : "none",
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300"
          style={{ background: bg, transform: hov ? "scale(1.1) rotate(5deg)" : "none" }}>
          {icon}
        </div>
        {change && (
          <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl ${changeUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
            {changeUp ? "↑" : "↓"} {change}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="text-2xl md:text-3xl font-black display-font mb-1" style={{ color }}>
        {displayValue}
      </div>
      <div className="text-xs font-semibold" style={{ color: C.g500 }}>{label}</div>

      {/* Mini progress bar */}
      <div className="mt-3 rounded-full overflow-hidden h-1" style={{ background: C.g100 }}>
        <div className="h-full rounded-full progress-fill"
          style={{ width: `${Math.min(100, (rawValue / 1000) * 100)}%`, background: color, "--progress-w": `${Math.min(100, (rawValue / 1000) * 100)}%` } as React.CSSProperties} />
      </div>
    </div>
  );
}

export function DashboardStats() {
  const { C }               = useTheme();
  const { ref, visible }    = useInView(0.06);
  const [stats, setStats]   = useState<SellerStats | null>(null);
  const [loading, setLoad]  = useState(true);

  useEffect(() => {
    sellerApi.stats()
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoad(false));
  }, []);

  if (loading) return <PageLoader message="Статистик ачааллаж байна..." />;
  if (!stats)  return null;

  const cards = [
    { icon:"💰", label:"Нийт орлого",    rawValue: stats.totalRevenue / 1000,  displayValue:`₮${(stats.totalRevenue/1000).toFixed(0)}K`, change:"18%", changeUp:true,  color:"#059669", bg:"#ecfdf5" },
    { icon:"📦", label:"Захиалга",        rawValue: stats.orderCount,            displayValue:String(stats.orderCount),                     change:"12%", changeUp:true,  color:"#14b8a6", bg:"#f0fdfa" },
    { icon:"🛍", label:"Идэвхтэй бараа", rawValue: stats.productCount,          displayValue:String(stats.productCount),                   change:"3%",  changeUp:false, color:"#06b6d4", bg:"#ecfeff" },
    { icon:"⭐", label:"Дундаж үнэлгээ", rawValue: stats.avgRating * 100,       displayValue:`${stats.avgRating.toFixed(1)} / 5.0`,        change:"0.2", changeUp:true,  color:"#f59e0b", bg:"#fffbeb" },
  ];

  return (
    <div ref={ref}>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cards.map((card, i) => (
          <KpiCard key={card.label} {...card} active={visible} index={i} />
        ))}
      </div>

      {/* Weekly revenue chart */}
      <div className="rounded-3xl p-6 mb-6"
        style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-black display-font" style={{ color: C.text }}>📊 7 хоногийн борлуулалт</h3>
            <p className="text-xs mt-0.5" style={{ color: C.g400 }}>Өдөр тус бүрийн орлого</p>
          </div>
          <div className="flex items-center gap-2">
            {[["#059669","Орлого"],["#14b8a6","Захиалга"]].map(([c,l]) => (
              <div key={l} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                <span className="text-[10px] font-bold" style={{ color: C.g500 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end gap-3 h-36">
          {stats.weeklyRevenue.map((row, i) => (
            <div key={row.day} className="flex-1 flex flex-col items-center gap-1.5 group">
              {/* Bar */}
              <div className="relative w-full rounded-t-xl overflow-hidden cursor-pointer"
                style={{ height: `${Math.max(4, row.pct)}%`, minHeight: 8 }}>
                <div className="absolute inset-0 rounded-xl transition-all duration-200 group-hover:opacity-80"
                  style={{
                    background: `linear-gradient(to top, #059669, #34d399)`,
                    animation: `barGrow .8s cubic-bezier(.16,1,.3,1) ${i * 0.07}s both`,
                  }} />
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  ₮{(row.revenue/1000).toFixed(0)}K
                </div>
              </div>
              {/* Day label */}
              <div className="text-[10px] font-bold" style={{ color: C.g400 }}>{row.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional metrics row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top categories */}
        <div className="rounded-3xl p-5"
          style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 2px 10px rgba(0,0,0,.04)" }}>
          <h3 className="text-sm font-black mb-4 display-font" style={{ color: C.text }}>🏆 Шилдэг ангиллууд</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "Мах, сүүн бүтээгдэхүүн", pct: 42, color: "#059669" },
              { name: "Ноос, ноолуур", pct: 28, color: "#14b8a6" },
              { name: "Хонь малын бүтээгдэхүүн", pct: 18, color: "#06b6d4" },
              { name: "Бусад", pct: 12, color: "#8b5cf6" },
            ].map((cat, i) => (
              <div key={cat.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-semibold" style={{ color: C.g600 }}>{cat.name}</span>
                  <span className="text-[11px] font-black" style={{ color: cat.color }}>{cat.pct}%</span>
                </div>
                <div className="rounded-full overflow-hidden h-1.5" style={{ background: C.g100 }}>
                  <div className="h-full rounded-full"
                    style={{
                      width: `${cat.pct}%`,
                      background: cat.color,
                      animation: `barGrow .8s cubic-bezier(.16,1,.3,1) ${i * 0.1}s both`,
                    }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer satisfaction */}
        <div className="rounded-3xl p-5"
          style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 2px 10px rgba(0,0,0,.04)" }}>
          <h3 className="text-sm font-black mb-4 display-font" style={{ color: C.text }}>😊 Хэрэглэгчийн сэтгэл</h3>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "⭐⭐⭐⭐⭐ (5 од)", count: 72, color: "#f59e0b" },
              { label: "⭐⭐⭐⭐ (4 од)", count: 18, color: "#22c55e" },
              { label: "⭐⭐⭐ (3 од)", count: 6, color: "#06b6d4" },
              { label: "⭐⭐ (2 од хүртэл)", count: 4, color: "#ef4444" },
            ].map((r, i) => (
              <div key={r.label} className="flex items-center gap-2">
                <div className="text-[10px] font-semibold w-32 flex-shrink-0" style={{ color: C.g600 }}>{r.label}</div>
                <div className="flex-1 rounded-full overflow-hidden h-2" style={{ background: C.g100 }}>
                  <div className="h-full rounded-full"
                    style={{ width: `${r.count}%`, background: r.color, animation: `barGrow .8s ease ${i * 0.08}s both` }} />
                </div>
                <span className="text-[10px] font-black w-7 text-right" style={{ color: C.g500 }}>{r.count}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-3xl p-5"
          style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 2px 10px rgba(0,0,0,.04)" }}>
          <h3 className="text-sm font-black mb-4 display-font" style={{ color: C.text }}>⚡ Хурдан үйлдэл</h3>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "➕", label: "Бараа нэмэх", color: "#059669", bg: "#f0fdf4" },
              { icon: "📊", label: "Тайлан татах", color: "#06b6d4", bg: "#eff6ff" },
              { icon: "💬", label: "Чат харах", color: "#14b8a6", bg: "#fff7ed" },
              { icon: "⚙️", label: "Тохиргоо", color: "#8b5cf6", bg: "#f5f3ff" },
            ].map(a => (
              <button key={a.label}
                className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] text-left font-sans"
                style={{ background: a.bg, border: `1px solid ${a.color}25` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{ background: `${a.color}15` }}>
                  {a.icon}
                </div>
                <span className="text-sm font-bold" style={{ color: a.color }}>{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
