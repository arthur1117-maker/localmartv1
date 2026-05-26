"use client";
import { useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth  } from "@/context/AuthContext";
import type { UserOrder } from "@/lib/types";

interface UserMenuProps {
  onClose:      () => void;
  onViewOrders: () => void;
  onSeller:     () => void;
  onAdmin:      () => void;
  orders:       UserOrder[];
}

export function UserMenu({ onClose, onViewOrders, onSeller, onAdmin, orders }: UserMenuProps) {
  const { C }            = useTheme();
  const { user, logout } = useAuth();
  const ref              = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    setTimeout(() => document.addEventListener("mousedown", h), 50);
    return () => document.removeEventListener("mousedown", h);
  }, [onClose]);

  if (!user) return null;

  const items = [
    ...(user.role === "seller"
      ? [{ icon: "🏪", label: "Худалдагчийн самбар", action: () => { onSeller(); onClose(); } }]
      : []),
    ...(user.role === "admin"
      ? [{ icon: "⚙️", label: "Админ самбар",         action: () => { onAdmin();  onClose(); } }]
      : []),
    { icon: "📦", label: `Захиалгууд (${orders.length})`, action: () => { onViewOrders(); onClose(); } },
    { icon: "❤️", label: "Хадгалсан бараа",               action: () => onClose() },
    { icon: "⚙️", label: "Тохиргоо",                      action: () => onClose() },
  ];

  const roleLabel =
    user.role === "seller" ? "🏪 Худалдагч" :
    user.role === "admin"  ? "⚙️ Систем Админ" :
    "🛒 Худалдан авагч";

  return (
    <div ref={ref}
      className="absolute right-0 top-12 w-64 rounded-2xl overflow-hidden animate-scale-in z-50"
      style={{ background: C.white, border: `1px solid ${C.g200}`, boxShadow: "0 16px 48px rgba(0,0,0,.18)" }}>

      {/* Header */}
      <div className="px-4 py-4" style={{ background: "linear-gradient(135deg,#052e16,#059669)" }}>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl"
            style={{ background: "rgba(255,255,255,.2)" }}>
            {user.avatar}
          </div>
          <div>
            <p className="text-sm font-extrabold text-white">{user.name}</p>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,.6)" }}>{user.email}</p>
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold"
              style={{ background: "rgba(255,255,255,.15)", color: "#4ade80" }}>
              {roleLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="py-1.5">
        {items.map(item => (
          <button key={item.label} onClick={item.action}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50 font-sans text-left"
            style={{ color: C.g600 }}>
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="py-1.5" style={{ borderTop: `1px solid ${C.g100}` }}>
        <button onClick={() => { logout(); onClose(); }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-red-50 font-sans"
          style={{ color: "#dc2626" }}>
          <span className="text-base">🚪</span>
          Гарах
        </button>
      </div>
    </div>
  );
}
