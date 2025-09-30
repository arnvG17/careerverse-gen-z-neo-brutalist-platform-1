"use client";

import { BrutalistCard } from "@/components/BrutalistCard";
import { BrutalistButton } from "@/components/BrutalistButton";
import { NeonBadge } from "@/components/NeonBadge";
import { mentors, communityPosts } from "@/lib/mockData";
import { Crown, Star, Calendar, MessageSquare, Users, TrendingUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MentorPage() {
  const mentor = mentors[0];
  const mentorPosts = communityPosts.filter(post => post.author.isMentor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B537FF]/5 via-background to-[#00D9FF]/5">
      {/* Header */}
      <div className="bg-white dark:bg-card border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black flex items-center gap-2">
            <Crown className="w-6 h-6 text-[#B537FF]" />
            Mentor Dashboard
          </h1>
          <Link href="/">
            <BrutalistButton variant="outline" size="sm">
              <Home className="w-4 h-4" />
            </BrutalistButton>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <BrutalistCard variant="neon-purple" className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="relative">
              <Image
                src={mentor.avatar}
                alt={mentor.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-black dark:border-white"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#B537FF] text-white rounded-full w-12 h-12 flex items-center justify-center border-3 border-black dark:border-white">
                <Crown className="w-6 h-6" />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h2 className="text-3xl font-black">{mentor.name}</h2>
                  <NeonBadge color="purple">👑 Mentor</NeonBadge>
                </div>
                <p className="text-lg font-bold text-muted-foreground">
                  {mentor.title} at {mentor.company}
                </p>
              </div>

              <p className="text-sm">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-bold px-3 py-1 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <BrutalistButton variant="neon-purple" size="sm">
                  Edit Profile
                </BrutalistButton>
                <BrutalistButton variant="outline" size="sm">
                  View Public Profile
                </BrutalistButton>
              </div>
            </div>
          </div>
        </BrutalistCard>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BrutalistCard variant="neon-pink" className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-[#FF006E]" />
            </div>
            <div className="text-3xl font-black text-[#FF006E]">{mentor.rating}</div>
            <p className="text-sm font-bold mt-1">Rating</p>
          </BrutalistCard>

          <BrutalistCard variant="neon-blue" className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-[#00D9FF]" />
            </div>
            <div className="text-3xl font-black text-[#00D9FF]">{mentor.totalSessions}</div>
            <p className="text-sm font-bold mt-1">Sessions</p>
          </BrutalistCard>

          <BrutalistCard variant="neon-green" className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-[#39FF14]" />
            </div>
            <div className="text-3xl font-black text-[#39FF14]">{mentor.engagementScore}</div>
            <p className="text-sm font-bold mt-1">Engagement</p>
          </BrutalistCard>

          <BrutalistCard variant="neon-yellow" className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageSquare className="w-6 h-6 text-[#FFF500]" />
            </div>
            <div className="text-3xl font-black text-[#FFF500]">{mentorPosts.length}</div>
            <p className="text-sm font-bold mt-1">Posts</p>
          </BrutalistCard>
        </div>

        {/* Quick Actions */}
        <BrutalistCard>
          <h2 className="text-2xl font-black mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <BrutalistButton variant="neon-purple" className="w-full py-6">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="w-6 h-6" />
                <span>Host AMA Session</span>
              </div>
            </BrutalistButton>
            <BrutalistButton variant="neon-blue" className="w-full py-6">
              <div className="flex flex-col items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                <span>Reply to Discussions</span>
              </div>
            </BrutalistButton>
            <BrutalistButton variant="neon-green" className="w-full py-6">
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6" />
                <span>View Mentees</span>
              </div>
            </BrutalistButton>
          </div>
        </BrutalistCard>

        {/* My Posts & AMAs */}
        <BrutalistCard variant="neon-blue">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            My Recent Posts & AMAs
          </h2>
          <div className="space-y-4">
            {mentorPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-black">{post.title}</h3>
                      {post.category === "AMA" && (
                        <NeonBadge color="purple" className="text-xs">AMA</NeonBadge>
                      )}
                    </div>
                    <p className="text-sm mb-2">{post.content}</p>
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
                </div>
                <div className="flex items-center justify-between pt-2 border-t-2 border-black dark:border-white">
                  <div className="flex items-center gap-4 text-sm font-bold">
                    <span>{post.upvotes} upvotes</span>
                    <span>{post.comments} comments</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </BrutalistCard>

        {/* Availability */}
        <BrutalistCard variant="neon-green">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Availability Status
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">Current Status:</p>
                <p className="text-sm text-muted-foreground">Visible to students looking for mentorship</p>
              </div>
              <NeonBadge color="green" className="text-lg px-4 py-2">
                ✓ Available
              </NeonBadge>
            </div>
            <BrutalistButton variant="outline" size="sm">
              Update Availability
            </BrutalistButton>
          </div>
        </BrutalistCard>

        {/* Mentor Tips */}
        <BrutalistCard variant="neon-yellow">
          <h2 className="text-2xl font-black mb-3">💡 Mentor Tips</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>Respond to student questions within 24 hours for better engagement</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>Host at least one AMA per month to stay visible</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>Share your real experiences - vulnerability builds trust!</span>
            </li>
          </ul>
        </BrutalistCard>
      </div>
    </div>
  );
}