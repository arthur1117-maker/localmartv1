"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { notifApi, type NotificationDto } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

interface NotifCtx {
  notifications: NotificationDto[];
  unreadCount:   number;
  loading:       boolean;
  markRead:      (id: number) => void;
  markAllRead:   () => void;
  refresh:       () => void;
  add:           (n: { type:string; icon:string; title:string; body:string }) => void;
}

const NotifContext = createContext<NotifCtx>({
  notifications: [], unreadCount: 0, loading: false,
  markRead: () => {}, markAllRead: () => {}, refresh: () => {}, add: () => {},
});

export function NotificationProvider({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  const [notifications, setNotifs] = useState<NotificationDto[]>([]);
  const [loading, setLoading]      = useState(false);

  const load = useCallback(async () => {
    if (!isLoggedIn) return;
    setLoading(true);
    try {
      const data = await notifApi.all();
      setNotifs(data);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  }, [isLoggedIn]);

  useEffect(() => { load(); }, [load]);

  // Poll every 30 seconds
  useEffect(() => {
    if (!isLoggedIn) return;
    const id = setInterval(load, 30_000);
    return () => clearInterval(id);
  }, [isLoggedIn, load]);

  const markRead = async (id: number) => {
    await notifApi.markRead(id).catch(() => {});
    setNotifs(ns => ns.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllRead = async () => {
    await notifApi.markAllRead().catch(() => {});
    setNotifs(ns => ns.map(n => ({ ...n, isRead: true })));
  };

  // Local-only add (optimistic, e.g. from checkout)
  const add = (n: { type:string; icon:string; title:string; body:string }) => {
    const local: NotificationDto = {
      id: Date.now(), type: n.type, icon: n.icon,
      title: n.title, body: n.body, isRead: false,
      createdAt: new Date().toISOString(),
    };
    setNotifs(prev => [local, ...prev]);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <NotifContext.Provider value={{ notifications, unreadCount, loading, markRead, markAllRead, refresh: load, add }}>
      {children}
    </NotifContext.Provider>
  );
}

export const useNotifications = () => useContext(NotifContext);
