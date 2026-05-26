"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import type { ChatMessage } from "@/lib/types";

interface ChatWidgetProps {
  seller:  string;
  onClose: () => void;
}

export function ChatWidget({ seller, onClose }: ChatWidgetProps) {
  const { C } = useTheme();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "0", from: "seller", text: `Сайн байна уу! Би ${seller}. Юу асуух вэ?`, time: "14:32", read: true },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const now  = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMessages(m => [...m, { id: Date.now().toString(), from: "user", text: input, time, read: false }]);
    setInput("");
    // Auto-reply
    setTimeout(() => {
      setMessages(m => [...m, {
        id: (Date.now() + 1).toString(),
        from: "seller",
        text: "Баярлалаа! Бараа бэлэн байна, захиалга хийх боломжтой.",
        time,
        read: false,
      }]);
    }, 1000);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[600] w-80 rounded-2xl overflow-hidden animate-scale-in"
      style={{ background: C.white, border: `1px solid ${C.g200}`, boxShadow: "0 24px 60px rgba(0,0,0,.25)" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3.5 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg,#059669,#059669)" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
            style={{ background: "rgba(255,255,255,.2)" }}
          >
            👤
          </div>
          <div>
            <div className="text-sm font-extrabold text-white">{seller}</div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px #4ade80" }} />
              Онлайн
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 text-sm font-bold transition-colors hover:bg-white/20"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="h-56 overflow-y-auto px-3.5 py-3 flex flex-col gap-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[78%] px-3 py-2 rounded-2xl text-[13px] leading-relaxed"
              style={{
                background:           m.from === "user" ? C.green : C.g100,
                color:                m.from === "user" ? "#fff"  : C.text,
                borderBottomRightRadius: m.from === "user" ? 4 : 16,
                borderBottomLeftRadius:  m.from === "seller" ? 4 : 16,
              }}
            >
              <div>{m.text}</div>
              <div
                className="text-[10px] mt-0.5 text-right"
                style={{ color: m.from === "user" ? "rgba(255,255,255,.55)" : C.g400 }}
              >
                {m.time}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="px-3.5 py-2.5 flex gap-2"
        style={{ borderTop: `1px solid ${C.g100}` }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") send(); }}
          placeholder="Мессеж бичих..."
          className="flex-1 text-sm rounded-xl px-3 py-2 outline-none font-sans font-semibold"
          style={{ border: `1.5px solid ${C.g200}`, background: C.g50, color: C.text }}
          onFocus={e => (e.target.style.borderColor = C.green)}
          onBlur={e  => (e.target.style.borderColor = C.g200)}
        />
        <button
          onClick={send}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-base font-bold transition-opacity hover:opacity-80"
          style={{ background: C.green }}
        >
          ↑
        </button>
      </div>
    </div>
  );
}
