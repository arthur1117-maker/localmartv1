"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { Navbar, MobileBottomNav } from "@/components/layout";
import { HomeView, ExploreView, SellerView } from "@/components/home";
import { OrdersView }          from "@/components/orders/OrdersView";
import { AdminView }           from "@/components/admin/AdminView";
import { AuthModal }           from "@/components/auth/AuthModal";
import { RegisterPage }        from "@/components/auth/RegisterPage";
import { CartDrawer }          from "@/components/cart/CartDrawer";
import { CheckoutModal }       from "@/components/cart/CheckoutModal";
import { ChatPanel }           from "@/components/chat/ChatPanel";
import { OrderTrackingModal }  from "@/components/orders/OrderTrackingModal";
import type { TabId }          from "@/components/layout/Navbar";
import type { UserOrder }      from "@/lib/types";

type View = "app" | "register";

/* ── Page transition wrapper ──────────────────────────────────────────────── */
function PageTransition({ children, tabKey }: { children: React.ReactNode; tabKey: string }) {
  const [visible, setVisible] = useState(false);
  const prevKey = useRef(tabKey);

  useEffect(() => {
    if (prevKey.current !== tabKey) {
      setVisible(false);
      const id = setTimeout(() => { setVisible(true); prevKey.current = tabKey; }, 80);
      return () => clearTimeout(id);
    } else {
      setVisible(true);
    }
  }, [tabKey]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(8px)",
      transition: "opacity .35s var(--ease-smooth), transform .35s var(--ease-smooth)",
    }}>
      {children}
    </div>
  );
}

export default function Page() {
  const [view, setView]         = useState<View>("app");
  const [tab,  setTab]          = useState<TabId>("home");
  const [mapAimag,    setMapAimag]    = useState<string | undefined>();
  const [heroQuery,   setHeroQuery]   = useState<string | undefined>();

  const [showAuth,     setShowAuth]     = useState(false);
  const [showCart,     setShowCart]     = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showChat,     setShowChat]     = useState(false);
  const [trackOrder,   setTrackOrder]   = useState<UserOrder | null>(null);

  const [orders, setOrders] = useState<UserOrder[]>([]);

  const handleMapAimag = useCallback((name: string) => {
    setMapAimag(name);
    setHeroQuery(undefined);
    setTab("explore");
  }, []);

  // Called from HeroSection when user submits a search query
  const handleHeroSearch = useCallback((query: string, aimag?: string, cat?: string) => {
    setHeroQuery(query);
    if (aimag) setMapAimag(aimag);
    setTab("explore");
  }, []);

  const handleTabChange = (t: TabId) => {
    if (t !== "explore") { setMapAimag(undefined); setHeroQuery(undefined); }
    setTab(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderPlaced = (order: UserOrder) => {
    setOrders(prev => [order, ...prev]);
    setShowCheckout(false);
    setShowCart(false);
    setTrackOrder(order);
  };

  const goHome = () => { setView("app"); setTab("home"); };

  if (view === "register") {
    return (
      <RegisterPage
        onSuccess={goHome}
        onLogin={() => { setView("app"); setShowAuth(true); }}
        onClose={goHome}
      />
    );
  }

  return (
    <>
      <Navbar
        activeTab={tab}
        onTabChange={handleTabChange}
        onCart={() => setShowCart(true)}
        onChat={() => setShowChat(s => !s)}
        onAuth={() => setShowAuth(true)}
        onRegister={() => setView("register")}
        orders={orders}
      />

      {/* Main content — extra bottom padding on mobile for bottom nav */}
      <main className="pt-16 pb-20 md:pb-0" style={{ minHeight: "100vh" }}>
        <PageTransition tabKey={tab}>
          {tab === "home" && (
            <HomeView
              onExplore={() => handleTabChange("explore")}
              onSell={() => handleTabChange("seller")}
              onMapAimag={handleMapAimag}
              onHeroSearch={handleHeroSearch}
              onAuthRequired={() => setShowAuth(true)}
            />
          )}
          {tab === "explore" && (
            <ExploreView
              initAimag={mapAimag}
              initQuery={heroQuery}
              onGoHome={() => handleTabChange("home")}
              onAuthRequired={() => setShowAuth(true)}
            />
          )}
          {tab === "seller"  && <SellerView />}
          {tab === "orders"  && <OrdersView orders={orders} />}
          {tab === "admin"   && <AdminView />}
        </PageTransition>
      </main>

      {/* Mobile bottom navigation */}
      <MobileBottomNav
        activeTab={tab}
        onTabChange={handleTabChange}
        onCart={() => setShowCart(true)}
      />

      {/* Overlays */}
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onRegister={() => { setShowAuth(false); setView("register"); }}
        />
      )}
      {showCart && (
        <CartDrawer
          onClose={() => setShowCart(false)}
          onCheckout={() => { setShowCart(false); setShowCheckout(true); }}
        />
      )}
      {showCheckout && (
        <CheckoutModal
          onClose={() => setShowCheckout(false)}
          onOrderPlaced={handleOrderPlaced}
        />
      )}
      {showChat && <ChatPanel onClose={() => setShowChat(false)} />}
      {trackOrder && (
        <OrderTrackingModal order={trackOrder} onClose={() => setTrackOrder(null)} />
      )}
    </>
  );
}
