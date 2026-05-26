"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { chatApi, type ChatMessageDto } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

interface ChatCtx {
  activeThread:   string | null;
  messages:       ChatMessageDto[];
  threads:        string[];
  totalUnread:    number;
  loadingMsgs:    boolean;
  openThread:     (partnerId: string) => void;
  sendMessage:    (partnerId: string, content: string, productId?: number) => Promise<void>;
  refreshUnread:  () => void;
}

const ChatContext = createContext<ChatCtx>({
  activeThread: null, messages: [], threads: [], totalUnread: 0, loadingMsgs: false,
  openThread: () => {}, sendMessage: async () => {}, refreshUnread: () => {},
});

export function ChatProvider({ children }: { children: ReactNode }) {
  const { isLoggedIn, user } = useAuth();
  const [activeThread,  setActiveThread]  = useState<string | null>(null);
  const [messages,      setMessages]      = useState<ChatMessageDto[]>([]);
  const [threads,       setThreads]       = useState<string[]>([]);
  const [totalUnread,   setTotalUnread]   = useState(0);
  const [loadingMsgs,   setLoadingMsgs]   = useState(false);

  const refreshUnread = useCallback(async () => {
    if (!isLoggedIn) return;
    try {
      const count = await chatApi.unreadCount();
      setTotalUnread(count);
    } catch { /* ignore */ }
  }, [isLoggedIn]);

  const openThread = async (partnerId: string) => {
    setActiveThread(partnerId);
    if (!threads.includes(partnerId)) setThreads(prev => [partnerId, ...prev]);
    setLoadingMsgs(true);
    try {
      const msgs = await chatApi.conversation(partnerId);
      setMessages(msgs);
      await chatApi.markRead(partnerId).catch(() => {});
      refreshUnread();
    } catch {
      setMessages([]);
    } finally {
      setLoadingMsgs(false);
    }
  };

  const sendMessage = async (partnerId: string, content: string, productId?: number) => {
    try {
      const msg = await chatApi.send({ receiverId: partnerId, content, productId });
      setMessages(prev => [...prev, msg]);
    } catch { /* ignore */ }
  };

  return (
    <ChatContext.Provider value={{
      activeThread, messages, threads, totalUnread, loadingMsgs,
      openThread, sendMessage, refreshUnread,
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
