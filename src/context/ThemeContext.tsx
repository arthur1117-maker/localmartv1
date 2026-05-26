"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/lib/types/tokens";
import type { ThemeTokens } from "@/lib/types";

interface ThemeCtx {
  dark: boolean;
  toggle: () => void;
  C: ThemeTokens;      // current token set (Light or Dark)
}

const ThemeContext = createContext<ThemeCtx>({
  dark: false,
  toggle: () => {},
  C: LIGHT_TOKENS,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  // Tailwind "dark" class-ийг <html> дээр нэмж/хаснэ
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.body.style.background = dark ? DARK_TOKENS.beige : LIGHT_TOKENS.beige;
    document.body.style.color      = dark ? DARK_TOKENS.text  : LIGHT_TOKENS.text;
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{ dark, toggle: () => setDark(d => !d), C: dark ? DARK_TOKENS : LIGHT_TOKENS }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
