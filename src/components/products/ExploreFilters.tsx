"use client";
import { useState } from "react";
import { useTheme }   from "@/context/ThemeContext";
import { CATEGORIES, AIMAG_NODES } from "@/lib/data";

export type SortKey = "newest" | "price-asc" | "price-desc" | "rating";

export interface FilterState {
  search:       string;
  aimag:        string;
  category:     string;
  maxPrice:     number;
  minRating:    number;
  onlyVerified: boolean;
  sort:         SortKey;
}

export const DEFAULT_FILTERS: FilterState = {
  search:       "",
  aimag:        "Бүх аймаг",
  category:     "Бүх төрөл",
  maxPrice:     300000,
  minRating:    0,
  onlyVerified: false,
  sort:         "newest",
};

function isFiltered(f: FilterState): boolean {
  return (
    f.search !== "" || f.aimag !== "Бүх аймаг" || f.category !== "Бүх төрөл" ||
    f.maxPrice < 300000 || f.minRating > 0 || f.onlyVerified || f.sort !== "newest"
  );
}

interface ExploreFiltersProps {
  filters:     FilterState;
  onChange:    (f: Partial<FilterState>) => void;
  onReset:     () => void;
  resultCount: number;
}

const SORT_OPTIONS: { key: SortKey; label: string; icon: string }[] = [
  { key: "newest",     label: "Шинэ эхэлж",  icon: "🆕" },
  { key: "price-asc",  label: "Үнэ ↑",       icon: "💸" },
  { key: "price-desc", label: "Үнэ ↓",       icon: "💰" },
  { key: "rating",     label: "Үнэлгээ",      icon: "⭐" },
];

export function ExploreFilters({ filters, onChange, onReset, resultCount }: ExploreFiltersProps) {
  const { dark, C } = useTheme();
  const [openSection, setOpenSection] = useState<string | null>("main");
  const active = isFiltered(filters);

  const inputStyle = {
    border:     `1.5px solid ${C.g200}`,
    background: C.g50,
    color:      C.text,
    borderRadius: 12,
    fontFamily: "inherit",
    fontSize:   13,
    fontWeight: 600,
    outline:    "none",
    padding:    "10px 14px",
    width:      "100%",
    transition: "border-color .2s",
  } as const;

  const toggle = (section: string) =>
    setOpenSection(p => p === section ? null : section);

  return (
    <aside
      className="rounded-3xl overflow-hidden sticky top-20 self-start"
      style={{
        background: C.white,
        border: `1.5px solid ${C.g100}`,
        boxShadow: "0 8px 32px rgba(0,0,0,.07)",
        minWidth: 240,
      }}
    >
      {/* ── Filter Header ── */}
      <div className="px-5 py-4 flex items-center justify-between"
        style={{ borderBottom: `1.5px solid ${C.g100}`, background: dark ? C.g50 : "#fafafa" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
            style={{ background: C.greenBg, border: `1px solid ${C.green}30` }}>
            🔧
          </div>
          <div>
            <div className="text-sm font-black display-font" style={{ color: C.text }}>Шүүлтүүр</div>
            <div className="text-[10px] font-semibold" style={{ color: C.g400 }}>{resultCount} бараа</div>
          </div>
        </div>
        {active && (
          <button onClick={onReset}
            className="text-[11px] font-black px-3 py-1.5 rounded-xl transition-all hover:scale-105 font-sans"
            style={{ color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca" }}>
            ✕ Цэвэрлэх
          </button>
        )}
      </div>

      <div className="p-4 flex flex-col gap-4">

        {/* ── Search ── */}
        <div>
          <label className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: C.g400 }}>
            🔍 Хайх
          </label>
          <div className="relative">
            <input
              style={inputStyle}
              placeholder="Бараа хайх..."
              value={filters.search}
              onChange={e => onChange({ search: e.target.value })}
            />
            {filters.search && (
              <button onClick={() => onChange({ search: "" })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ── Category pills ── */}
        <div>
          <label className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: C.g400 }}>
            📦 Ангилал
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onChange({ category: "Бүх төрөл" })}
              className="px-3 py-1.5 rounded-xl text-[11px] font-black transition-all font-sans"
              style={{
                background: filters.category === "Бүх төрөл" ? C.green : C.g50,
                color: filters.category === "Бүх төрөл" ? "#fff" : C.g500,
                border: `1.5px solid ${filters.category === "Бүх төрөл" ? C.green : C.g200}`,
              }}>
              Бүгд
            </button>
            {CATEGORIES.map(cat => (
              <button key={cat.label}
                onClick={() => onChange({ category: cat.label })}
                className="px-3 py-1.5 rounded-xl text-[11px] font-black transition-all font-sans flex items-center gap-1"
                style={{
                  background: filters.category === cat.label ? cat.color : C.g50,
                  color: filters.category === cat.label ? "#fff" : C.g600,
                  border: `1.5px solid ${filters.category === cat.label ? cat.color : C.g200}`,
                  transform: filters.category === cat.label ? "scale(1.04)" : "none",
                }}>
                <span className="text-xs">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Aimag ── */}
        <div>
          <label className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: C.g400 }}>
            📍 Аймаг
          </label>
          <select
            style={{ ...inputStyle, cursor: "pointer" }}
            value={filters.aimag}
            onChange={e => onChange({ aimag: e.target.value })}
          >
            <option>Бүх аймаг</option>
            {AIMAG_NODES.map(a => <option key={a.id}>{a.name}</option>)}
          </select>
        </div>

        {/* ── Price slider ── */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-[10px] font-black tracking-widest uppercase" style={{ color: C.g400 }}>
              💰 Дээд үнэ
            </label>
            <span className="text-xs font-black" style={{ color: C.orange }}>
              ₮{filters.maxPrice.toLocaleString()}
            </span>
          </div>
          <div className="relative pt-1">
            <input
              type="range"
              min={5000}
              max={300000}
              step={5000}
              value={filters.maxPrice}
              onChange={e => onChange({ maxPrice: Number(e.target.value) })}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${C.green} 0%, ${C.green} ${(filters.maxPrice - 5000) / (300000 - 5000) * 100}%, ${C.g200} ${(filters.maxPrice - 5000) / (300000 - 5000) * 100}%, ${C.g200} 100%)`,
                outline: "none",
              }}
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px]" style={{ color: C.g400 }}>₮5K</span>
              <span className="text-[10px]" style={{ color: C.g400 }}>₮300K</span>
            </div>
          </div>
        </div>

        {/* ── Min rating ── */}
        <div>
          <label className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: C.g400 }}>
            ⭐ Үнэлгээ
          </label>
          <div className="flex gap-1.5">
            {[0, 3, 4, 4.5].map(r => (
              <button key={r}
                onClick={() => onChange({ minRating: r })}
                className="flex-1 py-2 rounded-xl text-[11px] font-black transition-all font-sans"
                style={{
                  background: filters.minRating === r ? C.orange : C.g50,
                  color: filters.minRating === r ? "#fff" : C.g500,
                  border: `1.5px solid ${filters.minRating === r ? C.orange : C.g200}`,
                }}>
                {r === 0 ? "Бүгд" : `${r}+`}
              </button>
            ))}
          </div>
        </div>

        {/* ── Verified only ── */}
        <button
          onClick={() => onChange({ onlyVerified: !filters.onlyVerified })}
          className="flex items-center gap-3 p-3.5 rounded-2xl transition-all group"
          style={{
            background: filters.onlyVerified ? C.greenBg : C.g50,
            border: `1.5px solid ${filters.onlyVerified ? C.green : C.g200}`,
          }}>
          <div className="w-5 h-5 rounded-md flex items-center justify-center transition-all flex-shrink-0"
            style={{
              background: filters.onlyVerified ? C.green : "transparent",
              border: `2px solid ${filters.onlyVerified ? C.green : C.g300}`,
            }}>
            {filters.onlyVerified && <span className="text-white text-xs font-black">✓</span>}
          </div>
          <div className="text-left">
            <div className="text-[12px] font-black" style={{ color: C.text }}>✅ Баталгаажсан</div>
            <div className="text-[10px]" style={{ color: C.g400 }}>Зөвхөн бат. худалдагч</div>
          </div>
        </button>

        {/* ── Sort ── */}
        <div>
          <label className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: C.g400 }}>
            ↕️ Эрэмбэлэх
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {SORT_OPTIONS.map(opt => (
              <button key={opt.key}
                onClick={() => onChange({ sort: opt.key })}
                className="py-2.5 rounded-xl text-[11px] font-black transition-all font-sans flex items-center justify-center gap-1"
                style={{
                  background: filters.sort === opt.key ? C.green : C.g50,
                  color: filters.sort === opt.key ? "#fff" : C.g500,
                  border: `1.5px solid ${filters.sort === opt.key ? C.green : C.g200}`,
                }}>
                {opt.icon} {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Apply button ── */}
        <button className="w-full py-3.5 rounded-2xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg,#059669,#059669)", boxShadow: "0 6px 20px rgba(22,101,52,.3)" }}>
          🔍 Хайх ({resultCount})
        </button>
      </div>
    </aside>
  );
}
