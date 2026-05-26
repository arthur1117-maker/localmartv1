"use client";
import { useTheme } from "@/context/ThemeContext";
import { useCallback } from "react";

/** Returns helper functions for consistent design system patterns */
export function useDesign() {
  const { C, dark } = useTheme();

  /** Fade-up animation style with optional delay (seconds) */
  const fadeUp = useCallback((delay = 0, visible = true): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    animation: visible ? `fadeUp .6s cubic-bezier(0.16,1,0.3,1) ${delay}s both` : "none",
  }), []);

  /** Card style with hover handled via inline styles */
  const card = useCallback((hov = false): React.CSSProperties => ({
    background: C.white,
    border: `1.5px solid ${hov ? C.green : C.g100}`,
    boxShadow: hov ? `0 20px 48px rgba(0,0,0,.10), 0 0 0 4px ${C.green}14` : "0 2px 10px rgba(0,0,0,.05)",
    borderRadius: 24,
    transition: "all .28s cubic-bezier(0.4,0,0.2,1)",
    transform: hov ? "translateY(-5px)" : "none",
  }), [C]);

  /** Badge style */
  const badge = useCallback((color: string, bg: string): React.CSSProperties => ({
    color, background: bg,
    border: `1px solid ${color}30`,
    borderRadius: 999,
    padding: "3px 10px",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "0.1em",
  }), []);

  /** Glass effect style */
  const glass = useCallback((opacity = 0.1): React.CSSProperties => ({
    background: `rgba(255,255,255,${opacity})`,
    backdropFilter: "blur(20px) saturate(1.6)",
    border: "1px solid rgba(255,255,255,.22)",
  }), []);

  /** Input field style */
  const input = useCallback((): React.CSSProperties => ({
    border: `1.5px solid ${C.g200}`,
    background: C.g50,
    color: C.text,
    borderRadius: 12,
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 600,
    outline: "none",
    padding: "10px 14px",
    transition: "border-color .2s, box-shadow .2s",
    width: "100%",
  }), [C]);

  return { fadeUp, card, badge, glass, input, C, dark };
}
