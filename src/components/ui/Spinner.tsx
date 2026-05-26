"use client";
import { useTheme } from "@/context/ThemeContext";

interface SpinnerProps { size?: number; color?: string; }

export function Spinner({ size = 20, color }: SpinnerProps) {
  const { C } = useTheme();
  const c = color ?? C.green;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ animation: "spin .8s linear infinite", flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8" fill="none" stroke={C.g200} strokeWidth="2.5"/>
      <path d="M10 2 A8 8 0 0 1 18 10" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </svg>
  );
}

// Full-page loading overlay
export function PageLoader({ message = "Уншиж байна..." }: { message?: string }) {
  const { C } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <Spinner size={36} />
      <p className="text-sm font-semibold" style={{ color: C.g500 }}>{message}</p>
    </div>
  );
}

// Inline button spinner
export function BtnSpinner() {
  return <Spinner size={16} color="currentColor" />;
}
