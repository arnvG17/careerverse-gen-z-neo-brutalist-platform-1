"use client";

import { cn } from "@/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface BrutalistButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "neon-pink" | "neon-blue" | "neon-green" | "neon-yellow" | "neon-purple" | "outline";
  size?: "sm" | "md" | "lg";
}

export function BrutalistButton({ 
  children, 
  className,
  variant = "primary",
  size = "md",
  ...props
}: BrutalistButtonProps) {
  const variantStyles = {
    "primary": "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white",
    "neon-pink": "bg-[#FF006E] text-white border-[#FF006E] hover:shadow-[0_0_20px_rgba(255,0,110,0.6)]",
    "neon-blue": "bg-[#00D9FF] text-black border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]",
    "neon-green": "bg-[#39FF14] text-black border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]",
    "neon-yellow": "bg-[#FFF500] text-black border-[#FFF500] hover:shadow-[0_0_20px_rgba(255,245,0,0.6)]",
    "neon-purple": "bg-[#B537FF] text-white border-[#B537FF] hover:shadow-[0_0_20px_rgba(181,55,255,0.6)]",
    "outline": "bg-transparent border-black dark:border-white text-black dark:text-white",
  };

  const sizeStyles = {
    "sm": "px-4 py-2 text-sm",
    "md": "px-6 py-3 text-base",
    "lg": "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "font-bold border-3 rounded-sm",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
        "transition-all duration-200",
        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
        "hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
        "active:translate-x-[2px] active:translate-y-[2px]",
        "active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}