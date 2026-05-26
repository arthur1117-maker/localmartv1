"use client";
import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";
import { BtnSpinner } from "./Spinner";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "glass" | "danger";
type Size    = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children:   ReactNode;
  onClick?:   () => void;
  variant?:   Variant;
  size?:      Size;
  loading?:   boolean;
  disabled?:  boolean;
  fullWidth?: boolean;
  type?:      "button" | "submit";
  className?: string;
  icon?:      string;
}

const SIZES: Record<Size, string> = {
  xs: "px-3 py-1.5 text-[11px] rounded-xl gap-1",
  sm: "px-4 py-2 text-xs rounded-xl gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-2xl gap-2",
  lg: "px-7 py-3.5 text-[15px] rounded-2xl gap-2",
  xl: "px-9 py-4 text-base rounded-2xl gap-2.5",
};

// Maps variant to CSS class from globals.css btn system
const VARIANT_CLASS: Record<Variant, string> = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  outline:   "btn-outline",
  ghost:     "btn-ghost",
  glass:     "btn-glass",
  danger:    "",  // inline for danger to keep it simple
};

const DANGER_STYLE: React.CSSProperties = {
  background: "#fef2f2",
  color: "#dc2626",
  border: "1.5px solid #fecaca",
};

export function Button({
  children, onClick, variant = "primary", size = "md",
  loading = false, disabled = false, fullWidth = false,
  type = "button", className = "", icon,
}: ButtonProps) {
  const { dark } = useTheme();
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={!isDisabled ? onClick : undefined}
      className={`
        btn font-black font-sans display-font
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50 !cursor-not-allowed !transform-none" : ""}
        ${VARIANT_CLASS[variant]}
        ${SIZES[size]}
        ${className}
      `}
      style={variant === "danger" ? DANGER_STYLE : undefined}
    >
      {loading && <BtnSpinner />}
      {!loading && icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
