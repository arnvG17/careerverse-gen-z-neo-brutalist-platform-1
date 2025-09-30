"use client";

import { useState } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { BrutalistButton } from "@/components/BrutalistButton";
import { NeonBadge } from "@/components/NeonBadge";
import { communityPosts } from "@/lib/mockData";
import { ArrowBigUp, MessageSquare, Crown, Plus, Filter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CommunityHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Success Stories", "AMA", "Career Discussions", "Real Talk"];

  const filteredPosts = selectedCategory === "all" 
    ? communityPosts 
    : communityPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Community Hub 💬</h1>
          <p className="text-lg text-muted-foreground font-semibold">
            Connect, share, and grow together!
          </p>
        </div>
        <BrutalistButton variant="neon-pink" size="sm">
          <Plus className="w-4 h-4" />
        </BrutalistButton>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 flex-shrink-0" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-bold border-2 border-black dark:border-white rounded-sm whitespace-nowrap ${
              selectedCategory === category 
                ? "bg-black dark:bg-white text-white dark:text-black" 
                : "bg-white dark:bg-card"
            }`}
          >
            {category === "all" ? "All Posts" : category}
          </button>
        ))}
      </div>

      {/* Top Contributors */}
      <BrutalistCard variant="neon-yellow">
        <h3 className="text-xl font-black mb-3 flex items-center gap-2">
          <Crown className="w-5 h-5 text-[#FFF500]" />
          Top Contributors This Week
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {["Sarah Chen", "David Kim", "Priya Sharma"].map((name, i) => (
            <div key={name} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="relative">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1494790108377-be9c29b29330' : i === 1 ? '1506794778202-cad84cf45f1d' : '1534528741775-53994a69daeb'}?w=80&h=80&fit=crop`}
                  alt={name}
                  width={60}
                  height={60}
                  className="rounded-full border-3 border-black dark:border-white"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FFF500] rounded-full border-2 border-black dark:border-white flex items-center justify-center text-xs font-black">
                  {i + 1}
                </div>
              </div>
              <p className="text-xs font-bold text-center">{name.split(' ')[0]}</p>
            </div>
          ))}
        </div>
      </BrutalistCard>

      {/* Posts Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BrutalistCard className="space-y-4">
              {/* Author */}
              <div className="flex items-start gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-black dark:border-white"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-black">{post.author.name}</h4>
                    {post.author.isMentor && (
                      <NeonBadge color="purple" className="text-xs">
                        👑 Mentor
                      </NeonBadge>
                    )}
                    {!post.author.isMentor && (
                      <span className="text-xs font-bold px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-sm border border-black dark:border-white">
                        Lvl {post.author.level}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{post.time}</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-black leading-tight">{post.title}</h3>
                <p className="text-sm">{post.content}</p>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <NeonBadge color="blue" className="text-xs">
                    {post.category}
                  </NeonBadge>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-sm border border-black dark:border-white"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-2 border-t-2 border-black dark:border-white">
                <button className="flex items-center gap-2 font-bold hover:text-[#FF006E] transition-colors">
                  <ArrowBigUp className="w-5 h-5" />
                  {post.upvotes}
                </button>
                <button className="flex items-center gap-2 font-bold hover:text-[#00D9FF] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  {post.comments}
                </button>
              </div>
            </BrutalistCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}