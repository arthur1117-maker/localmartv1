"use client";
import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { useTheme }  from "@/context/ThemeContext";
import { AIMAG_NODES } from "@/lib/data";

interface MongoliaMapProps {
  onExplore: (aimagName: string) => void;
}

export function MongoliaMap({ onExplore }: MongoliaMapProps) {
  const { dark, C }         = useTheme();
  const { ref, visible }    = useInView(0.08);
  const [hovered, setHov]   = useState<string | null>(null);
  const [selected, setSel]  = useState<string | null>(null);
  const selData             = AIMAG_NODES.find(a => a.id === selected);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(32px)" }}
    >
      {/* Heading */}
      <div className="text-center mb-9">
        <span
          className="inline-block text-[11px] font-extrabold rounded-full px-4 py-1 mb-3.5 tracking-widest uppercase"
          style={{ color: C.green, background: C.greenSoft }}
        >
          🗺 ИНТЕРАКТИВ ГАЗРЫН ЗУРАГ
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: C.text }}>
          Аймгаасаа бараа хайх
        </h2>
        <p className="text-base mt-2" style={{ color: C.g500 }}>
          Аймаг дэр дараад тухайн нутгийн барааг үзнэ үү
        </p>
      </div>

      {/* Map card */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{ background: C.white, border: `1px solid ${C.g200}`, boxShadow: `0 4px 24px rgba(0,0,0,.07)` }}
      >
        {/* SVG */}
        <div
          className="relative w-full"
          style={{ paddingTop: "42%", background: dark ? "#0a1f0e" : "#e8f5e9" }}
        >
          <svg
            viewBox="0 0 100 42"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Mongolia outline */}
            <path
              d="M5,13 Q9,8 14,9 Q20,7 26,8 Q32,6 38,8 Q44,7 50,8 Q58,6 64,7 Q72,5 78,8 Q85,7 91,10 Q96,13 97,18 Q97,24 95,28 Q92,32 88,34 Q83,36 78,38 Q72,39 66,38 Q60,40 54,41 Q48,42 42,41 Q36,42 30,40 Q24,38 18,36 Q12,33 8,29 Q5,25 5,19 Z"
              fill={dark ? "#0d2818" : "#c8e6c9"}
              stroke={dark ? "#1a4a2a" : "#81c784"}
              strokeWidth=".3"
            />
            {/* Gobi desert */}
            <ellipse cx="53" cy="64" rx="26" ry="8"
              fill={dark ? "#1a1206" : "#fff8e1"} opacity=".55" />

            {/* Aimag dots */}
            {AIMAG_NODES.map(a => {
              const isH = hovered  === a.id;
              const isS = selected === a.id;
              return (
                <g
                  key={a.id}
                  onMouseEnter={() => setHov(a.id)}
                  onMouseLeave={() => setHov(null)}
                  onClick={() => setSel(isS ? null : a.id)}
                  style={{ cursor: "pointer" }}
                >
                  {(isH || isS) && (
                    <circle cx={a.x} cy={a.y} r={4}
                      fill="none"
                      stroke={isS ? "#14b8a6" : "#059669"}
                      strokeWidth=".7" opacity=".5"
                      style={{ animation: "pulse 1.5s ease infinite" }}
                    />
                  )}
                  <circle
                    cx={a.x} cy={a.y}
                    r={isS ? 2.4 : isH ? 2.1 : 1.7}
                    fill={isS ? "#14b8a6" : isH ? "#059669" : (dark ? "#4ade80" : "#059669")}
                    style={{ transition: "all .2s" }}
                  />
                  {(isH || isS) && (
                    <text
                      x={a.x} y={a.y - 3.2}
                      textAnchor="middle"
                      fontSize="2.3" fontWeight="700"
                      fill={dark ? "#f0f6fc" : "#1f2937"}
                      style={{ pointerEvents: "none", fontFamily: "inherit" }}
                    >
                      {a.name}
                    </text>
                  )}
                  {isS && (
                    <>
                      <rect x={a.x - 5.5} y={a.y + 2.5} width={11} height={5} rx={2.5} fill="#14b8a6" />
                      <text
                        x={a.x} y={a.y + 6.3}
                        textAnchor="middle" fontSize="2" fontWeight="800" fill="#fff"
                        style={{ pointerEvents: "none" }}
                      >
                        {a.count} бараа
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Info panel */}
        <div
          className="px-6 py-4 flex items-center gap-4 flex-wrap min-h-[72px]"
          style={{ borderTop: `1px solid ${C.g200}` }}
        >
          {selData ? (
            <>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: C.greenBg, border: `1px solid ${C.greenSoft}` }}
              >
                📍
              </div>
              <div className="flex-1">
                <div className="text-lg font-extrabold" style={{ color: C.text }}>{selData.name} аймаг</div>
                <div className="text-sm mt-0.5" style={{ color: C.g500 }}>
                  <span className="font-bold" style={{ color: C.orange }}>{selData.count} бараа</span> бэлэн байна
                </div>
              </div>
              <button
                onClick={() => onExplore(selData.name)}
                className="px-6 py-2.5 rounded-2xl text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 font-sans"
                style={{ background: C.green, boxShadow: "0 4px 14px rgba(22,101,52,.28)" }}
              >
                Бараа харах →
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2.5 text-sm" style={{ color: C.g400 }}>
              <span className="text-2xl">👆</span>
              Аймаг дэр дараад барааг харна уу
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
