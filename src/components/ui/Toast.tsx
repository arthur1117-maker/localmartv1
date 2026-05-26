"use client";
import { useEffect, useState, createContext, useContext, useCallback, ReactNode, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export type ToastType = "success" | "error" | "loading" | "info" | "warning";

interface ToastItem {
  id:       string;
  type:     ToastType;
  message:  string;
  duration?: number;
}

interface ToastCtx {
  toast:   (message: string, type?: ToastType, duration?: number) => string;
  success: (message: string) => void;
  error:   (message: string) => void;
  warning: (message: string) => void;
  loading: (message: string) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastCtx>({
  toast: () => "", success: () => {}, error: () => {},
  warning: () => {}, loading: () => "", dismiss: () => {},
});

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) =>
    setItems(prev => prev.filter(t => t.id !== id)), []);

  const toast = useCallback((message: string, type: ToastType = "info", duration = 3500): string => {
    const id = `t-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setItems(prev => {
      // Max 4 toasts at a time
      const capped = prev.length >= 4 ? prev.slice(1) : prev;
      return [...capped, { id, type, message, duration }];
    });
    if (type !== "loading") {
      setTimeout(() => dismiss(id), duration);
    }
    return id;
  }, [dismiss]);

  const success = useCallback((m: string) => { toast(m, "success"); },       [toast]);
  const error   = useCallback((m: string) => { toast(m, "error",   4500); }, [toast]);
  const warning = useCallback((m: string) => { toast(m, "warning", 4000); }, [toast]);
  const loading = useCallback((m: string) => toast(m, "loading", 99999),     [toast]);

  return (
    <ToastContext.Provider value={{ toast, success, error, warning, loading, dismiss }}>
      {children}
      <ToastContainer items={items} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ items, onDismiss }: { items: ToastItem[]; onDismiss: (id: string) => void }) {
  if (items.length === 0) return null;
  return (
    <div
      className="fixed z-[1000] flex flex-col gap-2.5 items-center"
      style={{
        bottom: "clamp(80px, 12vw, 28px)",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        width: "min(460px, calc(100vw - 2rem))",
      }}
    >
      {items.map((item, i) => (
        <ToastChip key={item.id} item={item} onDismiss={onDismiss} index={i} total={items.length} />
      ))}
    </div>
  );
}

function ToastChip({
  item, onDismiss, index, total
}: {
  item: ToastItem; onDismiss: (id: string) => void; index: number; total: number;
}) {
  const { C, dark } = useTheme();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    // Entrance
    const t = setTimeout(() => setVisible(true), 16);

    // Progress bar countdown
    if (item.type !== "loading" && item.duration && item.duration < 99999) {
      const tick = 50;
      const steps = (item.duration - 300) / tick;
      let step = 0;
      intervalRef.current = setInterval(() => {
        step++;
        setProgress(Math.max(0, 100 - (step / steps) * 100));
        if (step >= steps) clearInterval(intervalRef.current);
      }, tick);
    }

    return () => {
      clearTimeout(t);
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    clearInterval(intervalRef.current);
    setTimeout(() => onDismiss(item.id), 250);
  };

  const CONFIGS: Record<ToastType, { bg: string; border: string; iconBg: string; color: string; icon: string; bar: string }> = {
    success: { bg: dark ? "#052e16" : "#f0fdf4", border: dark ? "#059669" : "#bbf7d0", iconBg: "#dcfce7", color: "#059669", icon: "✅", bar: "#22c55e" },
    error:   { bg: dark ? "#450a0a" : "#fef2f2", border: dark ? "#dc2626" : "#fecaca", iconBg: "#fee2e2", color: "#dc2626", icon: "❌", bar: "#ef4444" },
    warning: { bg: dark ? "#422006" : "#fffbeb", border: dark ? "#d97706" : "#fde68a", iconBg: "#fef3c7", color: "#d97706", icon: "⚠️", bar: "#f59e0b" },
    loading: { bg: dark ? C.white   : C.white,   border: C.g200,                       iconBg: C.greenBg,  color: C.green,   icon: "⏳", bar: C.green },
    info:    { bg: dark ? "#0c1a3a" : "#eff6ff", border: dark ? "#0e7490" : "#bfdbfe", iconBg: "#dbeafe",  color: "#0e7490", icon: "ℹ️", bar: "#3b82f6" },
  };

  const cfg = CONFIGS[item.type];

  return (
    <div
      onClick={handleDismiss}
      role="status"
      aria-live="polite"
      className="w-full flex items-center gap-3 cursor-pointer overflow-hidden relative"
      style={{
        background:   cfg.bg,
        border:       `1.5px solid ${cfg.border}`,
        borderRadius: 16,
        boxShadow:    "0 8px 36px rgba(0,0,0,.16), 0 2px 8px rgba(0,0,0,.08)",
        pointerEvents: "auto",
        opacity:       visible ? 1 : 0,
        transform:     visible
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(.94)",
        transition:    "opacity .25s cubic-bezier(.16,1,.3,1), transform .25s cubic-bezier(.16,1,.3,1)",
        padding:       "12px 14px",
      }}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: cfg.iconBg }}>
        {item.type === "loading" ? (
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ animation: "spin .8s linear infinite" }}>
            <circle cx="10" cy="10" r="7.5" fill="none" stroke={dark ? C.g200 : "#e5e7eb"} strokeWidth="2.5"/>
            <path d="M10 2.5 A7.5 7.5 0 0 1 17.5 10" fill="none" stroke={cfg.color} strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <span>{cfg.icon}</span>
        )}
      </div>

      {/* Text */}
      <span className="text-sm font-semibold flex-1 leading-snug" style={{ color: cfg.color }}>
        {item.message}
      </span>

      {/* Close */}
      <button
        onClick={e => { e.stopPropagation(); handleDismiss(); }}
        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs transition-all hover:scale-110 flex-shrink-0"
        style={{ background: `${cfg.border}60`, color: cfg.color, opacity: 0.7 }}
      >
        ✕
      </button>

      {/* Progress bar */}
      {item.type !== "loading" && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl overflow-hidden">
          <div
            className="h-full transition-all"
            style={{
              width: `${progress}%`,
              background: cfg.bar,
              transition: "width 50ms linear",
            }}
          />
        </div>
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
