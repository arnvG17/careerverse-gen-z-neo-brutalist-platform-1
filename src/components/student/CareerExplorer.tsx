"use client";

import { useState } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { BrutalistButton } from "@/components/BrutalistButton";
import { NeonBadge } from "@/components/NeonBadge";
import { careers } from "@/lib/mockData";
import { TrendingUp, DollarSign, Sparkles, Filter } from "lucide-react";
import { motion } from "framer-motion";

export function CareerExplorer() {
  const [filter, setFilter] = useState<"all" | "conventional" | "unconventional">("all");

  const filteredCareers = careers.filter((career) => {
    if (filter === "all") return true;
    return career.type === filter;
  });

  const demandColors = {
    "very-high": "pink",
    "high": "blue",
    "growing": "green",
  } as const;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black mb-2">Career Explorer 🚀</h1>
        <p className="text-lg text-muted-foreground font-semibold">
          Discover your path - conventional or not!
        </p>
      </div>

      {/* Trending Banner */}
      <BrutalistCard variant="neon-pink">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-[#FF006E]" />
          <div>
            <h3 className="text-xl font-black">🔥 Trending Now</h3>
            <p className="text-sm">Data Scientist, UX Designer, Content Creator</p>
          </div>
        </div>
      </BrutalistCard>

      {/* Filter */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 flex-shrink-0" />
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 text-sm font-bold border-2 border-black dark:border-white rounded-sm whitespace-nowrap ${
            filter === "all" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-card"
          }`}
        >
          All Careers
        </button>
        <button
          onClick={() => setFilter("conventional")}
          className={`px-4 py-2 text-sm font-bold border-2 border-black dark:border-white rounded-sm whitespace-nowrap ${
            filter === "conventional" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-card"
          }`}
        >
          Conventional
        </button>
        <button
          onClick={() => setFilter("unconventional")}
          className={`px-4 py-2 text-sm font-bold border-2 border-black dark:border-white rounded-sm whitespace-nowrap ${
            filter === "unconventional" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-card"
          }`}
        >
          Unconventional
        </button>
      </div>

      {/* Careers Grid */}
      <div className="space-y-4">
        {filteredCareers.map((career, index) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BrutalistCard 
              variant={`neon-${career.color}` as any}
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{career.icon}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-black leading-tight">{career.title}</h3>
                      <p className="text-sm text-muted-foreground font-semibold">{career.description}</p>
                    </div>
                    {career.type === "unconventional" && (
                      <Sparkles className="w-5 h-5 text-[#B537FF] flex-shrink-0" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <NeonBadge color={career.color as any} className="text-xs">
                      {career.category}
                    </NeonBadge>
                    <NeonBadge color={demandColors[career.demand as keyof typeof demandColors]} className="text-xs">
                      {career.demand === "very-high" ? "🔥 Very High Demand" : career.demand === "high" ? "📈 High Demand" : "🌱 Growing"}
                    </NeonBadge>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold">
                    <DollarSign className="w-4 h-4" />
                    <span>{career.salary}</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-bold mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-semibold px-2 py-1 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <BrutalistButton variant="primary" size="sm">
                      Learn More
                    </BrutalistButton>
                    <BrutalistButton variant="outline" size="sm">
                      Find Mentors
                    </BrutalistButton>
                  </div>
                </div>
              </div>
            </BrutalistCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}