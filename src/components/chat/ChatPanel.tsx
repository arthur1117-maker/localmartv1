"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useToast } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";
import { useChat  } from "@/context/ChatContext";

interface ChatPanelProps { onClose: () => void; }

const PARTNERS: Record<string, { name: string; emoji: string; product: string; online: boolean }> = {
  "seller1": { name: "Б. Мөнхбаяр", emoji: "👨‍🌾", product: "Ямааны ноолуур", online: true  },
  "seller2": { name: "Д. Эрдэнэ",   emoji: "🧑‍🌾", product: "Хонины мах",    online: false },
  "seller3": { name: "Т. Болормаа", emoji: "👩‍🌾", product: "Зөгийн бал",    online: true  },
};
const DEFAULT_PARTNER = { name: "Худалдагч", emoji: "👤", product: "Бараа", online: false };
const QUICK_REPLIES = ["Бараа байна уу?", "Үнэ хэд вэ?", "Хэзээ хүргэх вэ?", "Баярлалаа!"];

// Relative time formatter (Mongolian)
function relTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1)   return "Яг одоо";
  if (mins < 60)  return `${mins} мин өмнө`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return `${hrs} цаг өмнө`;
  return `Өчигдөр`;
}

// Typing indicator dots
function TypingBubble({ dark, C }: { dark: boolean; C: any }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 4,
      padding: "10px 14px", borderRadius: "18px 18px 18px 4px",
      background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
      width: "fit-content", maxWidth: 72,
    }}>
      {[0, 0.2, 0.4].map((delay, i) => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: "50%",
          background: dark ? "#64748b" : "#94a3b8",
          display: "inline-block",
          animation: `typingDot 1.2s ease-in-out ${delay}s infinite`,
        }} />
      ))}
    </div>
  );
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  const { C, dark }                                                               = useTheme();
  const { threads, activeThread, openThread, messages, sendMessage, loadingMsgs } = useChat();
  const { error }                                                                 = useToast();
  const [input, setInput]       = useState("");
  const [localView, setLocalView] = useState<"list" | "chat">(activeThread ? "chat" : "list");
  const [isTyping, setIsTyping]  = useState(false);
  const bottomRef                = useRef<HTMLDivElement>(null);
  const inputRef                 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isTyping]);

  useEffect(() => {
    if (activeThread) { setLocalView("chat"); setTimeout(() => inputRef.current?.focus(), 300); }
  }, [activeThread]);

  const send = useCallback(() => {
    if (!input.trim()) return;
    if (!activeThread) { error("Яриа сонгоно уу"); return; }
    sendMessage(activeThread, input.trim());
    setInput("");
    // Show typing indicator for 1.2s then it auto-resolves via ChatContext
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1600);
  }, [input, activeThread, sendMessage, error]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const partner = activeThread ? (PARTNERS[activeThread] || DEFAULT_PARTNER) : null;
  const displayThreads = threads.length > 0 ? threads : ["seller1", "seller2", "seller3"];

  const borderColor = dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)";

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[490]" onClick={onClose} />

      <div
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[500] rounded-3xl overflow-hidden animate-scale-in flex flex-col"
        style={{
          width: "calc(100vw - 2rem)", maxWidth: 360,
          background: C.white,
          border: `1.5px solid ${borderColor}`,
          boxShadow: "0 24px 80px rgba(0,0,0,.24), 0 8px 32px rgba(0,0,0,.10)",
          height: 500,
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            background: "linear-gradient(135deg,#059669 0%,#0d9488 100%)",
            padding: "14px 16px", flexShrink: 0,
            display: "flex", alignItems: "center", gap: 10,
          }}
        >
          {localView === "chat" && partner ? (
            <>
              <button
                onClick={() => setLocalView("list")}
                style={{
                  background: "rgba(255,255,255,.15)", border: "none",
                  borderRadius: 8, width: 32, height: 32, cursor: "pointer",
                  color: "#fff", fontSize: 16, display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                ←
              </button>

              {/* Avatar with online dot */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", fontSize: 22,
                  background: "rgba(255,255,255,.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {partner.emoji}
                </div>
                <span style={{
                  position: "absolute", bottom: 0, right: 0,
                  width: 11, height: 11, borderRadius: "50%",
                  background: partner.online ? "#4ade80" : "#94a3b8",
                  border: "2px solid #059669",
                  animation: partner.online ? "pulseDot 2s ease-in-out infinite" : "none",
                }} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{partner.name}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.65)", marginTop: 2 }}>
                  {partner.online ? "● Онлайн" : "● Офлайн"} · {partner.product}
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{
                width: 36, height: 36, borderRadius: 10, fontSize: 18,
                background: "rgba(255,255,255,.2)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                💬
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Мессеж</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.65)" }}>
                  {displayThreads.length} яриа
                </div>
              </div>
            </>
          )}

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,.15)", border: "none",
              borderRadius: 8, width: 32, height: 32, cursor: "pointer",
              color: "#fff", fontSize: 15, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Thread list ── */}
        {localView === "list" && (
          <div style={{ flex: 1, overflowY: "auto" }}>
            {displayThreads.map((tid, i) => {
              const pt = PARTNERS[tid] || DEFAULT_PARTNER;
              const unread = i === 0 ? 2 : i === 2 ? 1 : 0;
              return (
                <button
                  key={tid}
                  onClick={() => openThread(tid)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    width: "100%", padding: "12px 16px", background: "none",
                    border: "none", borderBottom: `1px solid ${borderColor}`,
                    cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                    transition: "background .15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = dark ? "rgba(255,255,255,.04)" : "#f8fafc")}
                  onMouseLeave={e => (e.currentTarget.style.background = "none")}
                >
                  {/* Avatar + online */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%", fontSize: 24,
                      background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {pt.emoji}
                    </div>
                    <span style={{
                      position: "absolute", bottom: 0, right: 0,
                      width: 11, height: 11, borderRadius: "50%",
                      background: pt.online ? "#10b981" : "#94a3b8",
                      border: `2px solid ${C.white}`,
                    }} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      marginBottom: 3,
                    }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{pt.name}</span>
                      <span style={{ fontSize: 10, color: C.g400 }}>2 цаг өмнө</span>
                    </div>
                    <div style={{
                      fontSize: 12, color: unread > 0 ? C.text : C.g400,
                      fontWeight: unread > 0 ? 600 : 400,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {pt.product} талаар асуусан
                    </div>
                  </div>

                  {/* Unread badge */}
                  {unread > 0 && (
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: "#059669", color: "#fff",
                      fontSize: 10, fontWeight: 800,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {unread}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* ── Chat view ── */}
        {localView === "chat" && (
          <>
            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 8px" }}>
              {loadingMsgs ? (
                <div style={{ display: "flex", justifyContent: "center", padding: "20px 0", color: C.g400, fontSize: 12 }}>
                  Татаж байна...
                </div>
              ) : messages.length === 0 ? (
                <div style={{ textAlign: "center", padding: "24px 16px" }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>👋</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 6 }}>
                    {partner?.name}тай яриа эхлэх
                  </div>
                  <div style={{ fontSize: 11, color: C.g400 }}>Дор байгаа хурдан хариулт ашиглана уу</div>
                </div>
              ) : (
                messages.map(msg => {
                  const isUser = msg.from === "user";
                  return (
                    <div key={msg.id} style={{
                      display: "flex", justifyContent: isUser ? "flex-end" : "flex-start",
                      marginBottom: 10,
                    }}>
                      <div style={{ maxWidth: "78%" }}>
                        <div style={{
                          padding: "9px 13px",
                          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                          background: isUser
                            ? "linear-gradient(135deg,#059669,#0d9488)"
                            : (dark ? "rgba(255,255,255,.08)" : "#f1f5f9"),
                          color: isUser ? "#fff" : C.text,
                          fontSize: 13, lineHeight: 1.5, fontWeight: 500,
                        }}>
                          {msg.text}
                        </div>
                        <div style={{
                          fontSize: 9, color: C.g400, marginTop: 3,
                          textAlign: isUser ? "right" : "left",
                          paddingLeft: isUser ? 0 : 4,
                          paddingRight: isUser ? 4 : 0,
                        }}>
                          {relTime(msg.time || new Date().toISOString())}
                          {isUser && <span style={{ marginLeft: 4 }}>{msg.read ? " ✓✓" : " ✓"}</span>}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 10 }}>
                  <TypingBubble dark={dark} C={C} />
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div style={{
              display: "flex", gap: 6, padding: "4px 12px",
              overflowX: "auto", flexShrink: 0, borderTop: `1px solid ${borderColor}`,
            }}>
              {QUICK_REPLIES.map(q => (
                <button
                  key={q}
                  onClick={() => { setInput(q); inputRef.current?.focus(); }}
                  style={{
                    flexShrink: 0, padding: "5px 12px", borderRadius: 999,
                    fontSize: 11, fontWeight: 600, cursor: "pointer",
                    background: dark ? "rgba(16,185,129,.07)" : "#f0fdf4",
                    color: dark ? "#34d399" : "#059669",
                    border: `1px solid ${dark ? "rgba(52,211,153,.15)" : "rgba(5,150,105,.15)"}`,
                    fontFamily: "inherit", transition: "all .15s",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 12px", borderTop: `1px solid ${borderColor}`,
              flexShrink: 0,
            }}>
              {/* Image placeholder */}
              <button style={{
                width: 36, height: 36, borderRadius: 10, border: "none",
                background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                cursor: "pointer", fontSize: 16, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.g400,
              }}
                title="Зураг илгээх"
              >
                📷
              </button>

              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Мессеж бичих..."
                style={{
                  flex: 1, background: dark ? "rgba(255,255,255,.07)" : "#f8fafc",
                  border: `1.5px solid ${dark ? "rgba(255,255,255,.10)" : "#e2e8f0"}`,
                  borderRadius: 12, padding: "9px 14px", fontSize: 13, fontWeight: 500,
                  color: C.text, fontFamily: "inherit", outline: "none",
                  transition: "border-color .2s",
                }}
                onFocus={e => (e.target.style.borderColor = "#059669")}
                onBlur={e => (e.target.style.borderColor = dark ? "rgba(255,255,255,.10)" : "#e2e8f0")}
              />

              <button
                onClick={send}
                disabled={!input.trim()}
                style={{
                  width: 36, height: 36, borderRadius: 10, border: "none",
                  background: input.trim() ? "linear-gradient(135deg,#059669,#0d9488)" : (dark ? "rgba(255,255,255,.08)" : "#f1f5f9"),
                  cursor: input.trim() ? "pointer" : "not-allowed",
                  color: input.trim() ? "#fff" : C.g400,
                  fontSize: 16, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all .2s",
                  boxShadow: input.trim() ? "0 3px 10px rgba(5,150,105,.28)" : "none",
                }}
              >
                ➤
              </button>
            </div>
          </>
        )}
      </div>

      {/* Inject typing dot animation */}
      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
