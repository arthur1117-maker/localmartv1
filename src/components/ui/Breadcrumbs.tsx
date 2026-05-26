"use client";
import { useTheme } from "@/context/ThemeContext";

export interface Crumb {
  label:   string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  dark?:  boolean;  // light text for dark backgrounds
}

export function Breadcrumbs({ crumbs, dark: darkProp = false }: BreadcrumbsProps) {
  const { C, dark: themeDark } = useTheme();
  const onDark = darkProp;

  return (
    <nav className="flex items-center gap-1.5 text-[12px] font-semibold flex-wrap" aria-label="breadcrumb">
      {crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span style={{ color: onDark ? "rgba(255,255,255,.35)" : C.g300 }}>›</span>
            )}
            {isLast ? (
              <span className="font-black px-2 py-0.5 rounded-lg"
                style={{
                  color:       onDark ? "#4ade80" : C.green,
                  background:  onDark ? "rgba(74,222,128,.15)" : C.greenBg,
                  border:      `1px solid ${onDark ? "rgba(74,222,128,.25)" : C.green + "25"}`,
                }}>
                {c.label}
              </span>
            ) : (
              <button
                onClick={c.onClick}
                className="transition-colors hover:opacity-80 font-sans"
                style={{
                  color:  onDark ? "rgba(255,255,255,.55)" : C.g500,
                  background: "none", border: "none",
                  cursor: c.onClick ? "pointer" : "default",
                }}
              >
                {c.label}
              </button>
            )}
          </span>
        );
      })}
    </nav>
  );
}
