"use client";
import { useTheme } from "@/context/ThemeContext";

export interface FilterTag { label: string; onRemove: () => void; }

interface FilterTagsProps {
  tags:    FilterTag[];
  count:   number;
  onClear: () => void;
  dark?:   boolean;
}

export function FilterTags({ tags, count, onClear, dark: darkProp = false }: FilterTagsProps) {
  const { C } = useTheme();
  if (tags.length === 0) return null;

  const tagBg     = darkProp ? "rgba(74,222,128,.15)"  : C.greenBg;
  const tagColor  = darkProp ? "#4ade80"                : C.green;
  const tagBorder = darkProp ? "rgba(74,222,128,.3)"   : C.greenSoft;
  const txtColor  = darkProp ? "rgba(255,255,255,.65)"  : C.g600;
  const emphColor = darkProp ? "#fff"                   : C.text;

  return (
    <div className="flex items-center gap-2 flex-wrap mb-4 px-1">
      <span className="text-sm font-bold" style={{ color: txtColor }}>
        <span className="text-base font-black" style={{ color: emphColor }}>{count}</span> бараа
      </span>
      <span style={{ color: darkProp ? "rgba(255,255,255,.25)" : C.g300 }}>·</span>

      {tags.map((tag, i) => (
        <span key={i}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all hover:opacity-80"
          style={{ background: tagBg, color: tagColor, border: `1px solid ${tagBorder}` }}>
          {tag.label}
          <button onClick={tag.onRemove}
            className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] font-black leading-none"
            style={{ background: tagColor, color: "#fff", flexShrink: 0 }}>
            ✕
          </button>
        </span>
      ))}

      {tags.length > 1 && (
        <button onClick={onClear}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all hover:opacity-80 font-sans"
          style={{
            background: darkProp ? "rgba(239,68,68,.15)" : "#fef2f2",
            color:      darkProp ? "#f87171"             : "#dc2626",
            border:     `1px solid ${darkProp ? "rgba(239,68,68,.3)" : "#fecaca"}`,
          }}>
          ✕ Бүгдийг арилгах
        </button>
      )}
    </div>
  );
}
