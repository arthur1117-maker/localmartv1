"use client";
import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/lib/hooks";

interface PageHeaderProps {
  title:      string;
  subtitle?:  string;
  badge?:     string;
  actions?:   React.ReactNode;
  gradient?:  string;
  compact?:   boolean;
}

export function PageHeader({ title, subtitle, badge, actions, gradient, compact = false }: PageHeaderProps) {
  const { dark } = useTheme();
  const { ref, visible } = useInView(0.01);

  const bg = gradient ?? (dark
    ? "linear-gradient(145deg, #020617 0%, #071a10 40%, #0d2535 100%)"
    : "linear-gradient(145deg, #052e16 0%, #14532d 50%, #059669 100%)");

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ background: bg, paddingTop: 72 }}>

      {/* Fine grid */}
      <div className="absolute inset-0 pointer-events-none line-grid" style={{ opacity: .25 }} />

      {/* Spotlight orbs */}
      <div style={{
        position: "absolute", top: "-30%", right: "-8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(52,211,153,.10), transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
        animation: "orbSlow 18s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "-40%", left: "20%",
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(20,184,166,.07), transparent 65%)",
        filter: "blur(50px)", pointerEvents: "none",
        animation: "orbSlow 24s ease-in-out 4s infinite reverse",
      }} />

      <div className={`relative max-w-7xl mx-auto px-5 md:px-8 ${compact ? "py-6" : "py-12"} flex items-center justify-between gap-4 flex-wrap`}>
        <div>
          {badge && (
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest mb-3 uppercase"
              style={{
                color: "#34d399",
                background: "rgba(52,211,153,.10)",
                border: "1px solid rgba(52,211,153,.22)",
                opacity: visible ? 1 : 0,
                animation: visible ? "badgePop .4s var(--ease-spring) both" : "none",
              }}
            >
              {badge}
            </div>
          )}
          <h1
            className={`font-black text-white tracking-tight display-font ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl lg:text-4xl"}`}
            style={{
              letterSpacing: "-0.028em", lineHeight: 1.1,
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp .58s cubic-bezier(.16,1,.3,1) .06s both" : "none",
              textShadow: "0 2px 20px rgba(0,0,0,.15)",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-sm md:text-base mt-2"
              style={{
                color: "rgba(255,255,255,.52)",
                opacity: visible ? 1 : 0,
                animation: visible ? "fadeUp .56s ease .14s both" : "none",
                fontWeight: 400, lineHeight: 1.65,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {actions && (
          <div style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp .56s ease .2s both" : "none",
          }}>
            {actions}
          </div>
        )}
      </div>

      {/* Bottom separator — gradient fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(52,211,153,.25), transparent)",
      }} />
    </div>
  );
}
