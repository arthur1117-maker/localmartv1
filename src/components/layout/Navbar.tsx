"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme }          from "@/context/ThemeContext";
import { useAuth }           from "@/context/AuthContext";
import { useCart }           from "@/context/CartContext";
import { useNotifications }  from "@/context/NotificationContext";
import { useChat }           from "@/context/ChatContext";
import { NotificationPanel } from "@/components/notifications/NotificationPanel";
import { UserMenu }          from "@/components/auth/UserMenu";
import type { UserOrder }    from "@/lib/types";

export type TabId = "home" | "explore" | "seller" | "orders" | "admin";

interface NavbarProps {
  activeTab:   TabId;
  onTabChange: (t: TabId) => void;
  onCart:      () => void;
  onChat:      () => void;
  onAuth:      () => void;
  onRegister:  () => void;
  orders:      UserOrder[];
}

const NAV = [
  { id: "home"    as TabId, label: "Нүүр" },
  { id: "explore" as TabId, label: "Зах зээл" },
] as const;

const SELLER_NAV = { id: "seller" as TabId, label: "Самбар" };
const ADMIN_NAV  = { id: "admin"  as TabId, label: "Админ" };

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export function Navbar({ activeTab, onTabChange, onCart, onChat, onAuth, onRegister, orders }: NavbarProps) {
  const scrollY              = useScrollY();
  const { dark, toggle }     = useTheme();
  const { user, isLoggedIn } = useAuth();
  const { count: cartCnt }   = useCart();
  const { unreadCount }      = useNotifications();
  const { totalUnread }      = useChat();
  const scrolled = scrollY > 12;
  const onHero   = activeTab === "home" && !scrolled;

  const [showNotif, setShowNotif] = useState(false);
  const [showUser,  setShowUser]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const navBg = scrolled
    ? (dark ? "rgba(2,6,23,.96)" : "rgba(255,255,255,.96)")
    : "transparent";
  const navBorder = scrolled
    ? (dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)")
    : "transparent";
  const navShadow = scrolled
    ? (dark ? "0 4px 24px rgba(0,0,0,.32)" : "0 4px 24px rgba(0,0,0,.06)")
    : "none";
  const textCol  = dark ? "#e2e8f0" : "#0f172a";

  const visibleNav = [
    ...NAV,
    ...(isLoggedIn && user?.role === "seller" ? [SELLER_NAV] : []),
    ...(isLoggedIn && user?.role === "admin"  ? [ADMIN_NAV]  : []),
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[300]"
        style={{
          height: 64,
          background: navBg,
          backdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
          borderBottom: `1px solid ${navBorder}`,
          boxShadow: navShadow,
          transition: "background .28s ease, box-shadow .28s ease, border-color .28s ease",
          display: "flex", alignItems: "center",
          padding: "0 clamp(1rem, 3.5vw, 2rem)",
        }}
      >
        {/* ── Logo ────────────────────────────────────────────────────── */}
        <button
          onClick={() => onTabChange("home")}
          style={{
            display: "flex", alignItems: "center", gap: 10, flexShrink: 0,
            background: "none", border: "none", cursor: "pointer", padding: 0,
          }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
            boxShadow: "0 2px 14px rgba(5,150,105,.32)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, flexShrink: 0,
            transition: "box-shadow .2s ease, transform .2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(5,150,105,.45)";
            (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(5,150,105,.32)";
            (e.currentTarget as HTMLElement).style.transform = "none";
          }}
          >🏪</div>
          <div className="hidden sm:block">
            <div style={{
              fontSize: 14, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1,
              color: textCol, fontFamily: "var(--font-display)",
            }}>
              LocalMart
            </div>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: ".18em",
              color: "#10b981", textTransform: "uppercase", lineHeight: 1, marginTop: 2,
            }}>
              Connected
            </div>
          </div>
        </button>

        {/* ── Center nav — desktop ──────────────────────────────────── */}
        <div className="hidden md:flex items-center" style={{ marginLeft: "auto", marginRight: "auto", gap: 2 }}>
          {visibleNav.map(t => {
            const active = activeTab === t.id;
            return (
              <button key={t.id} onClick={() => onTabChange(t.id)}
                style={{
                  position: "relative", display: "flex", alignItems: "center", gap: 6,
                  padding: "7px 15px", borderRadius: 10, border: "none", cursor: "pointer",
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: active ? 700 : 500,
                  background: active
                    ? (dark ? "rgba(16,185,129,.10)" : "rgba(5,150,105,.07)")
                    : "transparent",
                  color: active ? "#059669" : textCol,
                  transition: "all .18s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  if (!active) (e.currentTarget.style.background = dark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)");
                }}
                onMouseLeave={e => {
                  if (!active) (e.currentTarget.style.background = "transparent");
                }}
              >
                {t.label}
                {active && (
                  <span style={{
                    position: "absolute", bottom: 0, left: "50%",
                    transform: "translateX(-50%)",
                    width: 18, height: 2, borderRadius: 999,
                    background: "linear-gradient(90deg, #059669, #10b981)",
                    boxShadow: "0 1px 6px rgba(5,150,105,.35)",
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Right actions ─────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" }}>

          {/* Dark mode */}
          <NavIconBtn onClick={toggle} dark={dark} title="Горим">
            {dark ? "☀" : "◑"}
          </NavIconBtn>

          {/* Chat */}
          {isLoggedIn && (
            <div style={{ position: "relative" }}>
              <NavIconBtn onClick={onChat} dark={dark} title="Чат">💬</NavIconBtn>
              {totalUnread > 0 && <NavBadge n={totalUnread} color="#0d9488" />}
            </div>
          )}

          {/* Notifications */}
          {isLoggedIn && (
            <div style={{ position: "relative" }}>
              <NavIconBtn
                onClick={() => { setShowNotif(s => !s); setShowUser(false); }}
                dark={dark} active={showNotif} title="Мэдэгдэл"
              >🔔</NavIconBtn>
              {unreadCount > 0 && <NavBadge n={unreadCount} color="#10b981" />}
              {showNotif && <NotificationPanel onClose={() => setShowNotif(false)} />}
            </div>
          )}

          {/* Cart */}
          <div style={{ position: "relative" }}>
            <NavIconBtn onClick={onCart} dark={dark} title="Сагс">◉</NavIconBtn>
            {cartCnt > 0 && <NavBadge n={cartCnt} color="#059669" />}
          </div>

          {/* Auth */}
          {isLoggedIn ? (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => { setShowUser(s => !s); setShowNotif(false); }}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "linear-gradient(135deg, #059669, #0d9488)",
                  border: `2px solid ${showUser ? "#34d399" : "transparent"}`,
                  boxShadow: showUser
                    ? "0 0 0 3px rgba(52,211,153,.22)"
                    : "0 2px 10px rgba(5,150,105,.28)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, cursor: "pointer",
                  transition: "all .22s var(--ease-spring)",
                }}
              >
                {user?.avatar || "👤"}
              </button>
              {showUser && (
                <UserMenu
                  onClose={() => setShowUser(false)}
                  onViewOrders={() => onTabChange("orders")}
                  onSeller={() => onTabChange("seller")}
                  onAdmin={() => onTabChange("admin")}
                  orders={orders}
                />
              )}
            </div>
          ) : (
            <div style={{ display: "flex", gap: 8, marginLeft: 4 }}>
              <button onClick={onAuth}
                className="btn btn-muted btn-sm hidden sm:flex"
                style={{ fontFamily: "var(--font-display)" }}>
                Нэвтрэх
              </button>
              <button onClick={onRegister}
                className="btn btn-primary btn-sm"
                style={{ fontFamily: "var(--font-display)" }}>
                Бүртгүүлэх
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden flex-col gap-1.5 p-2 tap-target"
            style={{
              background: "none", border: "none", cursor: "pointer",
              borderRadius: 8, marginLeft: 2,
            }}
            onClick={() => setMenuOpen(o => !o)}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 18, height: 1.5, borderRadius: 9,
                background: textCol, transition: "all .24s var(--ease-spring)",
                transform: menuOpen
                  ? (i === 0 ? "rotate(45deg) translate(2.5px,2.5px)"
                   : i === 1 ? "scaleX(0)"
                   : "rotate(-45deg) translate(2.5px,-2.5px)")
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[290]"
            style={{ background: "rgba(0,0,0,.45)", backdropFilter: "blur(6px)" }}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="fixed z-[295] top-16 left-0 right-0 animate-slide-up"
            style={{
              background: dark ? "#0f172a" : "#fff",
              borderBottom: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#e2e8f0"}`,
              boxShadow: "0 12px 48px rgba(0,0,0,.18)",
            }}
          >
            {visibleNav.map(t => (
              <button key={t.id} onClick={() => { onTabChange(t.id); setMenuOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  width: "100%", padding: "15px 20px",
                  background: activeTab === t.id ? (dark ? "rgba(16,185,129,.07)" : "#ecfdf5") : "transparent",
                  border: "none", cursor: "pointer",
                  borderLeft: `3px solid ${activeTab === t.id ? "#10b981" : "transparent"}`,
                  fontSize: 14, fontWeight: activeTab === t.id ? 700 : 500,
                  color: activeTab === t.id ? "#059669" : (dark ? "#94a3b8" : "#475569"),
                  fontFamily: "var(--font-display)", textAlign: "left",
                  transition: "all .15s ease",
                }}>
                {t.label}
              </button>
            ))}
            {!isLoggedIn && (
              <div style={{
                display: "flex", gap: 10, padding: "14px 20px",
                borderTop: `1px solid ${dark ? "rgba(255,255,255,.06)" : "#f1f5f9"}`,
              }}>
                <button onClick={() => { onAuth(); setMenuOpen(false); }}
                  className="btn btn-outline btn-md" style={{ flex: 1, fontFamily: "var(--font-display)" }}>
                  Нэвтрэх
                </button>
                <button onClick={() => { onRegister(); setMenuOpen(false); }}
                  className="btn btn-primary btn-md" style={{ flex: 1, fontFamily: "var(--font-display)" }}>
                  Бүртгүүлэх
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Mobile bottom nav */}
      <MobileBottomNav
        tabs={visibleNav}
        activeTab={activeTab}
        onTabChange={onTabChange}
        onCart={onCart}
        cartCnt={cartCnt}
        dark={dark}
      />
    </>
  );
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

function NavIconBtn({ children, onClick, active, dark, title }: {
  children: React.ReactNode; onClick: () => void;
  active?: boolean; dark: boolean; title?: string;
}) {
  return (
    <button onClick={onClick} title={title}
      className="tap-target"
      style={{
        width: 36, height: 36, borderRadius: 9, border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15,
        background: active
          ? (dark ? "rgba(16,185,129,.12)" : "rgba(5,150,105,.08)")
          : "transparent",
        color: dark ? "#94a3b8" : "#64748b",
        transition: "all .18s ease",
        position: "relative",
      }}
      onMouseEnter={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.background = dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.045)";
          (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.transform = "none";
        }
      }}
    >
      {children}
    </button>
  );
}

function NavBadge({ n, color }: { n: number; color: string }) {
  return (
    <div style={{
      position: "absolute", top: -2, right: -2,
      minWidth: 16, height: 16, borderRadius: 999,
      background: color, color: "#fff", fontSize: 9, fontWeight: 800,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "0 3px",
      boxShadow: `0 2px 8px ${color}55`,
      animation: "badgePop .35s var(--ease-spring)",
    }}>
      {n > 9 ? "9+" : n}
    </div>
  );
}

function MobileBottomNav({ tabs, activeTab, onTabChange, onCart, cartCnt, dark }: {
  tabs: readonly { id: TabId; label: string }[];
  activeTab: string; onTabChange: (t: TabId) => void;
  onCart: () => void; cartCnt: number; dark: boolean;
}) {
  const allTabs = [...tabs, { id: "cart" as const, label: "Сагс" }];
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] flex md:hidden safe-bottom"
      style={{
        background: dark ? "rgba(2,6,23,.97)" : "rgba(255,255,255,.97)",
        backdropFilter: "blur(22px) saturate(1.4)",
        WebkitBackdropFilter: "blur(22px) saturate(1.4)",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)"}`,
        boxShadow: "0 -4px 24px rgba(0,0,0,.08)",
      }}
    >
      {allTabs.map(t => {
        const isCart = t.id === "cart";
        const active = !isCart && (activeTab === t.id);
        const icon   = t.id === "home" ? "⌂" : t.id === "explore" ? "◈" : t.id === "seller" ? "⊞" : t.id === "admin" ? "⚙" : "🛒";
        return (
          <button key={t.id}
            onClick={() => isCart ? onCart() : onTabChange(t.id as TabId)}
            style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 4, padding: "10px 0", border: "none",
              background: "transparent", cursor: "pointer", position: "relative",
              minHeight: 56,
              transition: "opacity .15s ease",
            }}
          >
            {active && (
              <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: 24, height: 2.5, borderRadius: 999,
                background: "linear-gradient(90deg, #059669, #10b981)",
                boxShadow: "0 2px 8px rgba(5,150,105,.35)",
              }} />
            )}
            <span style={{
              fontSize: 19, lineHeight: 1,
              transform: active ? "scale(1.1)" : "scale(1)",
              transition: "transform .22s var(--ease-spring)",
              display: "inline-block",
            }}>
              {icon}
            </span>
            <span style={{
              fontSize: 10, fontWeight: active ? 700 : 500,
              color: active ? "#059669" : (dark ? "#64748b" : "#94a3b8"),
              fontFamily: "var(--font-display)",
              transition: "color .18s ease",
            }}>
              {t.label}
            </span>
            {isCart && cartCnt > 0 && <NavBadge n={cartCnt} color="#059669" />}
          </button>
        );
      })}
    </div>
  );
}
