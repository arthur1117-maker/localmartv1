"use client";
import { useState, useEffect, useRef } from "react";

// ─── useInView ────────────────────────────────────────────────────────────────
// IntersectionObserver ашиглан элемент viewport-д орсон эсэхийг хянана
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── useScrollY ───────────────────────────────────────────────────────────────
// Window scroll Y байрлалыг хянана (navbar glassmorphism-д хэрэглэнэ)
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

// ─── useCounter ───────────────────────────────────────────────────────────────
// Тоо анимэйшнтайгаар өсөх (stats section-д хэрэглэнэ)
export function useCounter(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(current);
      if (current >= target) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [active, target]);
  return value;
}

// ─── useLocalStorage ──────────────────────────────────────────────────────────
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch { return defaultValue; }
  });

  const set = (val: T) => {
    setValue(val);
    if (typeof window !== "undefined") {
      try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
    }
  };
  return [value, set] as const;
}

// ─── useDebounce ──────────────────────────────────────────────────────────────
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// ─── useHover ─────────────────────────────────────────────────────────────────
export function useHover() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => setHovered(true);
    const off = () => setHovered(false);
    el.addEventListener("mouseenter", on);
    el.addEventListener("mouseleave", off);
    return () => { el.removeEventListener("mouseenter", on); el.removeEventListener("mouseleave", off); };
  }, []);
  return { ref, hovered };
}

// ─── useMediaQuery ────────────────────────────────────────────────────────────
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
