"use client";
import { useTheme } from "@/context/ThemeContext";
import { useCart  } from "@/context/CartContext";
import { useChat  } from "@/context/ChatContext";
import type { TabId } from "./Navbar";

interface MobileBottomNavProps {
  activeTab:   TabId;
  onTabChange: (t: TabId) => void;
  onCart:      () => void;
}

const TABS = [
  { id: "home"    as TabId, icon: "🏠", label: "Нүүр"    },
  { id: "explore" as TabId, icon: "🔍", label: "Хайлт"   },
  { id: "cart"    as "cart", icon: "🛒", label: "Сагс"    },
  { id: "orders"  as TabId, icon: "📦", label: "Захиалга" },
  { id: "chat"    as "chat", icon: "💬", label: "Мессеж"  },
] as const;

export function MobileBottomNav({ activeTab, onTabChange, onCart }: MobileBottomNavProps) {
  const { dark, C } = useTheme();
  const { count: cartCount } = useCart();
  const { totalUnread }      = useChat();

  const navBg = dark
    ? "rgba(2,6,23,.97)"
    : "rgba(255,255,255,.97)";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[290] md:hidden"
      style={{
        background: navBg,
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
        boxShadow: dark
          ? "0 -4px 24px rgba(0,0,0,.40)"
          : "0 -4px 24px rgba(0,0,0,.07)",
        display: "flex",
        // Safe area inset for iPhone notch
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {TABS.map(tab => {
        const isActive = tab.id === activeTab || (tab.id === "cart" && false);
        const badge = tab.id === "cart" ? cartCount : tab.id === "chat" ? totalUnread : 0;

        const handleTap = () => {
          if (tab.id === "cart") { onCart(); return; }
          if (tab.id === "chat") { return; } // handled by parent if needed
          onTabChange(tab.id as TabId);
        };

        return (
          <button
            key={tab.id}
            onClick={handleTap}
            style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 3, padding: "10px 4px 8px",
              background: "none", border: "none", cursor: "pointer",
              position: "relative",
              // Active state: subtle bg highlight
              borderTop: `2px solid ${isActive ? "#059669" : "transparent"}`,
              transition: "border-color .2s",
            }}
          >
            {/* Icon */}
            <span style={{
              fontSize: 22,
              filter: isActive ? "none" : "grayscale(0.3) opacity(0.6)",
              transform: isActive ? "scale(1.12)" : "scale(1)",
              transition: "all .2s var(--ease-spring)",
              display: "block",
              lineHeight: 1,
            }}>
              {tab.icon}
            </span>

            {/* Label */}
            <span style={{
              fontSize: 9, fontWeight: isActive ? 700 : 500,
              color: isActive ? "#059669" : (dark ? "#64748b" : "#94a3b8"),
              letterSpacing: ".02em",
              fontFamily: "var(--font-display)",
              transition: "color .2s",
            }}>
              {tab.label}
            </span>

            {/* Badge */}
            {badge > 0 && (
              <span style={{
                position: "absolute", top: 6, left: "50%",
                transform: "translateX(2px)",
                minWidth: 16, height: 16, borderRadius: 999,
                background: "#ef4444", color: "#fff",
                fontSize: 9, fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "0 4px",
                border: `2px solid ${dark ? "rgba(2,6,23,.97)" : "rgba(255,255,255,.97)"}`,
                animation: "badgePop .35s cubic-bezier(.16,1,.3,1) both",
              }}>
                {badge > 99 ? "99+" : badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
