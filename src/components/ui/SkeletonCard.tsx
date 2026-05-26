"use client";
import { useTheme } from "@/context/ThemeContext";

export function SkeletonCard() {
  const { dark } = useTheme();
  const bg   = dark ? "#0f172a" : "#ffffff";
  const bdr  = dark ? "rgba(255,255,255,.06)" : "rgba(148,163,184,.12)";
  return (
    <div style={{ background: bg, border: `1px solid ${bdr}`, borderRadius: 16, overflow: "hidden" }}>
      <div className="skeleton" style={{ height: 180 }} />
      <div style={{ padding: "14px 14px 16px" }}>
        <div className="skeleton" style={{ height: 10, width: "45%", borderRadius: 999, marginBottom: 10 }} />
        <div className="skeleton" style={{ height: 14, width: "80%", borderRadius: 8, marginBottom: 6 }} />
        <div className="skeleton" style={{ height: 14, width: "55%", borderRadius: 8, marginBottom: 12 }} />
        <div className="skeleton" style={{ height: 10, width: "60%", borderRadius: 999, marginBottom: 14 }} />
        <div className="skeleton" style={{ height: 20, width: "50%", borderRadius: 8, marginBottom: 12 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="skeleton" style={{ height: 9, width: "30%", borderRadius: 999 }} />
          <div className="skeleton" style={{ height: 26, width: "28%", borderRadius: 999 }} />
        </div>
      </div>
    </div>
  );
}

export function SkeletonList({ count = 4 }: { count?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton" style={{ height: 64, borderRadius: 12 }} />
      ))}
    </div>
  );
}

export function SkeletonPage() {
  return (
    <div style={{ maxWidth: 1152, margin: "0 auto", padding: "40px 24px" }}>
      <div className="skeleton" style={{ height: 36, width: 200, borderRadius: 10, marginBottom: 28 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 }}>
        {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </div>
  );
}
