"use client";

import { BrutalistCard } from "@/components/BrutalistCard";
import { NeonBadge } from "@/components/NeonBadge";
import { studentMockData } from "@/lib/mockData";
import { Flame, Trophy, Zap, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function StudentDashboard() {
  const { profile, recentActivity } = studentMockData;
  const xpPercentage = (profile.xp / profile.xpToNextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-black">Hey, {profile.name}! 👋</h1>
          <p className="text-lg text-muted-foreground font-semibold">Ready to level up today?</p>
        </div>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={60}
          height={60}
          className="rounded-full border-3 border-black dark:border-white"
        />
      </div>

      {/* Streak Card */}
      <BrutalistCard variant="neon-pink" className="relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-8 h-8 text-[#FF006E]" />
              <span className="text-4xl font-black">{profile.streak}</span>
            </div>
            <p className="text-lg font-bold">Day Streak 🔥</p>
            <p className="text-sm text-muted-foreground">Keep it up! Don't break the chain!</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Flame className="w-24 h-24 text-[#FF006E] opacity-20" />
          </motion.div>
        </div>
      </BrutalistCard>

      {/* XP Progress */}
      <BrutalistCard variant="neon-blue">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#00D9FF]" />
              <span className="text-2xl font-black">Level {profile.level}</span>
            </div>
            <span className="text-sm font-bold">{profile.xp} / {profile.xpToNextLevel} XP</span>
          </div>
          <div className="relative h-6 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white rounded-sm overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${xpPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-[#00D9FF]"
            />
          </div>
          <p className="text-sm font-semibold text-center">
            {profile.xpToNextLevel - profile.xp} XP to next level! 💪
          </p>
        </div>
      </BrutalistCard>

      {/* Badges */}
      <BrutalistCard>
        <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Your Badges
        </h2>
        <div className="flex flex-wrap gap-3">
          {profile.badges.map((badge) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NeonBadge color={badge.color as any} className="text-base px-4 py-2">
                {badge.icon} {badge.name}
              </NeonBadge>
            </motion.div>
          ))}
        </div>
      </BrutalistCard>

      {/* Recent Activity */}
      <BrutalistCard variant="neon-green">
        <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-3 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm"
            >
              <div className="flex-1">
                <p className="font-bold">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <NeonBadge color="green" className="text-sm">
                +{activity.xp} XP
              </NeonBadge>
            </div>
          ))}
        </div>
      </BrutalistCard>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <BrutalistCard variant="neon-yellow" className="text-center p-6 cursor-pointer" hover>
          <div className="text-4xl mb-2">📚</div>
          <p className="font-bold">Continue Learning</p>
        </BrutalistCard>
        <BrutalistCard variant="neon-purple" className="text-center p-6 cursor-pointer" hover>
          <div className="text-4xl mb-2">💬</div>
          <p className="font-bold">Join Discussions</p>
        </BrutalistCard>
      </div>
    </div>
  );
}