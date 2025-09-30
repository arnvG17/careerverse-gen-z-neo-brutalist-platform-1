"use client";

import { BrutalistCard } from "@/components/BrutalistCard";
import { BrutalistButton } from "@/components/BrutalistButton";
import { NeonBadge } from "@/components/NeonBadge";
import { adminStats, communityPosts } from "@/lib/mockData";
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  Flag, 
  CheckCircle, 
  XCircle,
  Pin,
  Home,
  Megaphone,
  BarChart3
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00D9FF]/5 via-background to-[#39FF14]/5">
      {/* Header */}
      <div className="bg-black dark:bg-white text-white dark:text-black border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Admin Dashboard
          </h1>
          <Link href="/">
            <BrutalistButton variant="outline" size="sm">
              <Home className="w-4 h-4" />
            </BrutalistButton>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BrutalistCard variant="neon-pink" className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-[#FF006E]" />
            <div className="text-3xl font-black text-[#FF006E]">
              {adminStats.overview.totalUsers.toLocaleString()}
            </div>
            <p className="text-sm font-bold mt-1">Total Users</p>
            <p className="text-xs text-muted-foreground mt-1">
              {adminStats.overview.activeToday.toLocaleString()} active today
            </p>
          </BrutalistCard>

          <BrutalistCard variant="neon-blue" className="text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-[#00D9FF]" />
            <div className="text-3xl font-black text-[#00D9FF]">
              {adminStats.overview.totalLessons}
            </div>
            <p className="text-sm font-bold mt-1">Total Lessons</p>
            <p className="text-xs text-muted-foreground mt-1">
              {adminStats.engagement.lessonsCompletedToday} completed today
            </p>
          </BrutalistCard>

          <BrutalistCard variant="neon-green" className="text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-[#39FF14]" />
            <div className="text-3xl font-black text-[#39FF14]">
              {adminStats.overview.totalPosts.toLocaleString()}
            </div>
            <p className="text-sm font-bold mt-1">Community Posts</p>
            <p className="text-xs text-muted-foreground mt-1">
              {adminStats.engagement.postsToday} posts today
            </p>
          </BrutalistCard>

          <BrutalistCard variant="neon-yellow" className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#FFF500]" />
            <div className="text-3xl font-black text-[#FFF500]">
              {adminStats.engagement.avgStreakLength}
            </div>
            <p className="text-sm font-bold mt-1">Avg Streak</p>
            <p className="text-xs text-muted-foreground mt-1">
              {adminStats.engagement.activeDiscussions} active discussions
            </p>
          </BrutalistCard>
        </div>

        {/* Top Users */}
        <BrutalistCard variant="neon-purple">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            🏆 Top Users This Month
          </h2>
          <div className="space-y-3">
            {adminStats.topUsers.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-3 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm"
              >
                <div className="relative">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-black dark:border-white"
                  />
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-[#FFF500] rounded-full border-2 border-black dark:border-white flex items-center justify-center text-xs font-black">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-black">{user.name}</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      🔥 {user.streak} days
                    </span>
                    <span className="flex items-center gap-1">
                      ⚡ {user.xp.toLocaleString()} XP
                    </span>
                  </div>
                </div>
                <NeonBadge color="purple">
                  Top {index + 1}
                </NeonBadge>
              </motion.div>
            ))}
          </div>
        </BrutalistCard>

        {/* Moderation Tools */}
        <BrutalistCard variant="neon-pink">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            <Flag className="w-6 h-6" />
            Flagged Posts & Moderation
          </h2>
          
          {adminStats.flaggedPosts.length > 0 ? (
            <div className="space-y-3">
              {adminStats.flaggedPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-black">{post.title}</h3>
                        <NeonBadge 
                          color={post.severity === "high" ? "pink" : "yellow"}
                          className="text-xs"
                        >
                          {post.severity === "high" ? "🚨 High" : "⚠️ Medium"}
                        </NeonBadge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        By {post.author} • {post.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <BrutalistButton variant="neon-green" size="sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </BrutalistButton>
                    <BrutalistButton variant="neon-pink" size="sm">
                      <XCircle className="w-4 h-4 mr-1" />
                      Remove
                    </BrutalistButton>
                    <BrutalistButton variant="outline" size="sm">
                      <Flag className="w-4 h-4 mr-1" />
                      Review
                    </BrutalistButton>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg font-bold">No flagged posts! 🎉</p>
              <p className="text-sm text-muted-foreground">Community is clean and safe.</p>
            </div>
          )}
        </BrutalistCard>

        {/* Recent Community Posts */}
        <BrutalistCard variant="neon-blue">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Recent Community Activity
          </h2>
          <div className="space-y-3">
            {communityPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="p-4 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm space-y-3"
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black dark:border-white"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-black">{post.author.name}</h4>
                      {post.author.isMentor && (
                        <NeonBadge color="purple" className="text-xs">
                          Mentor
                        </NeonBadge>
                      )}
                    </div>
                    <h3 className="text-base font-bold mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.time}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2 border-t-2 border-black dark:border-white">
                  <BrutalistButton variant="neon-blue" size="sm">
                    <Pin className="w-4 h-4 mr-1" />
                    Pin
                  </BrutalistButton>
                  <BrutalistButton variant="outline" size="sm">
                    View Details
                  </BrutalistButton>
                </div>
              </div>
            ))}
          </div>
        </BrutalistCard>

        {/* Announcement Panel */}
        <BrutalistCard variant="neon-green">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            <Megaphone className="w-6 h-6" />
            Post Announcement
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Announcement Title</label>
              <input
                type="text"
                placeholder="e.g., New Feature Launch! 🚀"
                className="w-full px-4 py-3 border-3 border-black dark:border-white rounded-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                placeholder="Share important updates with the community..."
                rows={4}
                className="w-full px-4 py-3 border-3 border-black dark:border-white rounded-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              />
            </div>
            <div className="flex gap-2">
              <BrutalistButton variant="neon-green" size="md">
                <Megaphone className="w-4 h-4 mr-2" />
                Post Announcement
              </BrutalistButton>
              <BrutalistButton variant="outline" size="md">
                Preview
              </BrutalistButton>
            </div>
          </div>
        </BrutalistCard>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <BrutalistButton variant="neon-yellow" className="w-full py-6">
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <span>Manage Lessons</span>
            </div>
          </BrutalistButton>
          <BrutalistButton variant="neon-purple" className="w-full py-6">
            <div className="flex flex-col items-center gap-2">
              <Users className="w-6 h-6" />
              <span>Manage Users</span>
            </div>
          </BrutalistButton>
          <BrutalistButton variant="neon-blue" className="w-full py-6">
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span>View Analytics</span>
            </div>
          </BrutalistButton>
        </div>
      </div>
    </div>
  );
}