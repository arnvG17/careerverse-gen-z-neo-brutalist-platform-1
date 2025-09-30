import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "neon-pink" | "neon-blue" | "neon-green" | "neon-yellow" | "neon-purple" | "neon-orange";
  hover?: boolean;
}

export function BrutalistCard({ 
  children, 
  className, 
  variant = "default",
  hover = true 
}: BrutalistCardProps) {
  const variantStyles = {
    "default": "bg-white dark:bg-card",
    "neon-pink": "bg-[#FF006E]/10 border-[#FF006E]",
    "neon-blue": "bg-[#00D9FF]/10 border-[#00D9FF]",
    "neon-green": "bg-[#39FF14]/10 border-[#39FF14]",
    "neon-yellow": "bg-[#FFF500]/10 border-[#FFF500]",
    "neon-purple": "bg-[#B537FF]/10 border-[#B537FF]",
    "neon-orange": "bg-[#FF6B00]/10 border-[#FF6B00]",
  };

  return (
    <div
      className={cn(
        "border-3 border-black dark:border-white rounded-sm p-4",
        "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
        hover && "transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}