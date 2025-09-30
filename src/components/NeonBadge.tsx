import { cn } from "@/lib/utils";

interface NeonBadgeProps {
  children: React.ReactNode;
  color: "pink" | "blue" | "green" | "yellow" | "purple" | "orange";
  className?: string;
}

export function NeonBadge({ children, color, className }: NeonBadgeProps) {
  const colorStyles = {
    pink: "bg-[#FF006E] border-[#FF006E] shadow-[0_0_10px_rgba(255,0,110,0.5)]",
    blue: "bg-[#00D9FF] border-[#00D9FF] shadow-[0_0_10px_rgba(0,217,255,0.5)]",
    green: "bg-[#39FF14] border-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.5)]",
    yellow: "bg-[#FFF500] border-[#FFF500] shadow-[0_0_10px_rgba(255,245,0,0.5)]",
    purple: "bg-[#B537FF] border-[#B537FF] shadow-[0_0_10px_rgba(181,55,255,0.5)]",
    orange: "bg-[#FF6B00] border-[#FF6B00] shadow-[0_0_10px_rgba(255,107,0,0.5)]",
  };

  const textColor = color === "blue" || color === "green" || color === "yellow" ? "text-black" : "text-white";

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-bold border-2 rounded-sm",
        colorStyles[color],
        textColor,
        className
      )}
    >
      {children}
    </span>
  );
}