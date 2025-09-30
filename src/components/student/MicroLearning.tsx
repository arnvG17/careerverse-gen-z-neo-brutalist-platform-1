"use client";

import { useState } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { BrutalistButton } from "@/components/BrutalistButton";
import { NeonBadge } from "@/components/NeonBadge";
import { lessons } from "@/lib/mockData";
import { Play, Clock, Award, CheckCircle, Filter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function MicroLearning() {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">("all");

  const filteredLessons = lessons.filter((lesson) => {
    if (filter === "completed") return lesson.completed;
    if (filter === "in-progress") return !lesson.completed;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black mb-2">Micro-Learning 📚</h1>
        <p className="text-lg text-muted-foreground font-semibold">
          Bite-sized lessons, massive impact!
        </p>
      </div>

      {/* AI Recommendation */}
      <BrutalistCard variant="neon-purple">
        <div className="flex items-start gap-3">
          <div className="text-3xl">🤖</div>
          <div className="flex-1">
            <h3 className="text-xl font-black mb-1">AI Recommendation</h3>
            <p className="text-sm mb-3">
              Based on your progress, we suggest: <span className="font-bold">Salary Negotiation Tactics</span>
            </p>
            <BrutalistButton variant="neon-purple" size="sm">
              Start Lesson →
            </BrutalistButton>
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
          All Lessons
        </button>
        <button
          onClick={() => setFilter("in-progress")}
          className={`px-4 py-2 text-sm font-bold border-2 border-black dark:border-white rounded-sm whitespace-nowrap ${
            filter === "in-progress" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-card"
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 text-sm font-bold border-2 border-black dark:border-white rounded-sm whitespace-nowrap ${
            filter === "completed" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-card"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Lessons Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredLessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BrutalistCard 
              variant={lesson.completed ? "neon-green" : "default"}
              className="relative overflow-hidden"
            >
              {lesson.completed && (
                <div className="absolute top-3 right-3 z-10">
                  <CheckCircle className="w-6 h-6 text-[#39FF14]" fill="#39FF14" />
                </div>
              )}
              
              <div className="relative h-40 mb-3 rounded-sm overflow-hidden border-2 border-black dark:border-white">
                <Image
                  src={lesson.thumbnail}
                  alt={lesson.title}
                  fill
                  className="object-cover"
                />
                {!lesson.completed && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black leading-tight">{lesson.title}</h3>
                </div>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <NeonBadge color="blue" className="text-xs">
                    {lesson.category}
                  </NeonBadge>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-sm border border-black dark:border-white">
                    {lesson.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-[#FFF500]" />
                      {lesson.xp} XP
                    </span>
                  </div>
                </div>

                <BrutalistButton 
                  variant={lesson.completed ? "neon-green" : "neon-pink"} 
                  size="sm"
                  className="w-full mt-3"
                >
                  {lesson.completed ? "Review ✨" : "Start Learning 🚀"}
                </BrutalistButton>
              </div>
            </BrutalistCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}