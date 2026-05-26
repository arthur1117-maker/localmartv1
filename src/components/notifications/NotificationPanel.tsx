"use client";
import { useRef, useEffect } from "react";
import { useTheme }         from "@/context/ThemeContext";
import { useNotifications } from "@/context/NotificationContext";

const TYPE_COLOR: Record<string, string> = {
  order:"#059669", chat:"#06b6d4", promo:"#14b8a6", system:"#6b7280"
};

interface NotificationPanelProps { onClose: () => void; }

export function NotificationPanel({ onClose }: NotificationPanelProps) {
  const { C }                               = useTheme();
  const { notifications, markRead, markAllRead } = useNotifications();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    setTimeout(() => document.addEventListener("mousedown", handler), 50);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div ref={ref}
      className="absolute right-0 top-12 w-80 rounded-2xl overflow-hidden animate-scale-in z-50"
      style={{ background:C.white, border:`1px solid ${C.g200}`, boxShadow:"0 16px 48px rgba(0,0,0,.18)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5"
        style={{ borderBottom:`1px solid ${C.g100}` }}>
        <span className="text-sm font-extrabold" style={{ color:C.text }}>🔔 Мэдэгдэл</span>
        <button onClick={markAllRead}
          className="text-[11px] font-bold transition-opacity hover:opacity-70 font-sans"
          style={{ color:C.green }}>
          Бүгдийг уншсан
        </button>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.map(n => (
          <div key={n.id} onClick={() => markRead(n.id)}
            className="flex gap-3 px-4 py-3 cursor-pointer transition-colors"
            style={{ background:n.isRead ? "transparent" : `${TYPE_COLOR[n.type]}08`,
                     borderBottom:`1px solid ${C.g100}` }}>
            {/* Icon bubble */}
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{ background:`${TYPE_COLOR[n.type]}15` }}>
              {n.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <span className="text-xs font-extrabold leading-snug" style={{ color:C.text }}>
                  {n.title}
                </span>
                {!n.isRead && (
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                    style={{ background:TYPE_COLOR[n.type] }} />
                )}
              </div>
              <p className="text-[11px] mt-0.5 leading-relaxed" style={{ color:C.g500 }}>{n.body}</p>
              <p className="text-[10px] mt-1 font-semibold" style={{ color:C.g400 }}>{new Date(n.createdAt).toLocaleDateString("mn-MN")}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 text-center" style={{ borderTop:`1px solid ${C.g100}` }}>
        <button className="text-xs font-bold transition-opacity hover:opacity-70 font-sans"
          style={{ color:C.green }}>
          Бүх мэдэгдэл харах →
        </button>
      </div>
    </div>
  );
}
