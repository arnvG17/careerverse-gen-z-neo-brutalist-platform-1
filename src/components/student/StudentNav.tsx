"use client";

import { Home, BookOpen, MessageSquare, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface StudentNavProps {
  activeTab: "dashboard" | "learn" | "community" | "explore";
  onTabChange: (tab: "dashboard" | "learn" | "community" | "explore") => void;
}

export function StudentNav({ activeTab, onTabChange }: StudentNavProps) {
  const tabs = [
    { id: "dashboard", label: "Home", icon: Home, color: "#FF006E" },
    { id: "learn", label: "Learn", icon: BookOpen, color: "#00D9FF" },
    { id: "community", label: "Hub", icon: MessageSquare, color: "#39FF14" },
    { id: "explore", label: "Explore", icon: Compass, color: "#B537FF" },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-card border-t-4 border-black dark:border-white z-50">
      <div className="container mx-auto px-2">
        <div className="flex justify-around items-center py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-sm transition-all",
                  isActive && "border-2 border-black dark:border-white"
                )}
                style={{
                  backgroundColor: isActive ? `${tab.color}20` : "transparent",
                }}
              >
                <Icon 
                  className="w-6 h-6" 
                  style={{ color: isActive ? tab.color : "currentColor" }}
                />
                <span className={cn(
                  "text-xs font-bold",
                  isActive && "text-black dark:text-white"
                )}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}