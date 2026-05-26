"use client";
import { useTheme } from "@/context/ThemeContext";
import type { ThemeTokens } from "@/lib/types";

type Preset = "search" | "orders" | "cart" | "wishlist" | "notifications";

const PRESETS: Record<Preset, { emoji: string; title: string; sub: string }> = {
  search:        { emoji: "🔍", title: "Бараа олдсонгүй",      sub: "Шүүлтүүрийг өөрчлөөд дахин хайна уу" },
  orders:        { emoji: "📦", title: "Захиалга байхгүй",     sub: "Зах зээлд орж анхны захиалгаа хийнэ үү" },
  cart:          { emoji: "🛒", title: "Сагс хоосон байна",    sub: "Зах зээлд орж бараа нэмнэ үү" },
  wishlist:      { emoji: "❤️",  title: "Дуртай бараа байхгүй",sub: "Бараануудад дурлаад нэмэж үзээрэй" },
  notifications: { emoji: "🔔", title: "Мэдэгдэл байхгүй",    sub: "Шинэ мэдэгдэл ирэхэд энд харагдана" },
};

interface EmptyStateProps {
  type?:     Preset;
  title?:    string;
  sub?:      string;
  emoji?:    string;
  onReset?:  () => void;
  resetLabel?: string;
}

export function EmptyState({ type, title, sub, emoji, onReset, resetLabel }: EmptyStateProps) {
  const { dark } = useTheme();
  const preset = type ? PRESETS[type] : null;
  const ic    = emoji ?? preset?.emoji   ?? "📭";
  const ttl   = title ?? preset?.title   ?? "Хоосон байна";
  const sb    = sub   ?? preset?.sub     ?? "";
  const rl    = resetLabel ?? "Шүүлтүүр арилгах";

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      padding: "64px 24px",
    }}>
      <div style={{ fontSize: 52, marginBottom: 18, animation: "float 3.5s ease-in-out infinite" }}>{ic}</div>
      <div style={{
        fontSize: 16, fontWeight: 700, color: dark ? "#e2e8f0" : "#0f172a",
        fontFamily: "var(--font-display)", marginBottom: 8, letterSpacing: "-0.015em",
      }}>{ttl}</div>
      <p style={{ fontSize: 13, color: dark ? "#64748b" : "#94a3b8", maxWidth: 280, lineHeight: 1.65, fontWeight: 400 }}>
        {sb}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="btn btn-ghost btn-md"
          style={{ marginTop: 20, fontFamily: "var(--font-display)" }}
        >
          {rl}
        </button>
      )}
    </div>
  );
}
