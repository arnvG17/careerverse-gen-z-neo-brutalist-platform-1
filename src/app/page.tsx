"use client";

import Link from "next/link";
import { BrutalistButton } from "@/components/BrutalistButton";
import { BrutalistCard } from "@/components/BrutalistCard";
import { NeonBadge } from "@/components/NeonBadge";
import { Sparkles, Flame, Trophy, Users, BookOpen, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF500]/10 via-background to-[#FF006E]/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-block">
            <NeonBadge color="pink" className="text-lg px-6 py-2">
              🚀 Gen Z Career Revolution
            </NeonBadge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Welcome to{" "}
            <span className="inline-block bg-[#FF006E] text-white px-4 py-2 border-4 border-black dark:border-white rotate-[-2deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              CareerVerse
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
            Level up your career game with bite-sized learning, epic community vibes, and mentors who actually get it. 💯
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/student">
              <BrutalistButton variant="neon-pink" size="lg">
                Start Learning 🎓
              </BrutalistButton>
            </Link>
            <Link href="/mentor">
              <BrutalistButton variant="neon-blue" size="lg">
                Become a Mentor 🌟
              </BrutalistButton>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 md:mt-24">
          <BrutalistCard variant="neon-pink" className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#FF006E] rounded-full flex items-center justify-center border-3 border-black dark:border-white">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Gamified Learning</h3>
            <p className="text-base">
              Streaks 🔥, XP points, badges 🏅 - learning has never been this addictive!
            </p>
          </BrutalistCard>

          <BrutalistCard variant="neon-blue" className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#00D9FF] rounded-full flex items-center justify-center border-3 border-black dark:border-white">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold">Community Hub</h3>
            <p className="text-base">
              Reddit-style discussions, AMAs, and a crew that's always got your back 💪
            </p>
          </BrutalistCard>

          <BrutalistCard variant="neon-green" className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#39FF14] rounded-full flex items-center justify-center border-3 border-black dark:border-white">
              <Rocket className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold">Career Explorer</h3>
            <p className="text-base">
              Discover wild career paths you didn't know existed. Think outside the cubicle! 🚀
            </p>
          </BrutalistCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black dark:bg-white text-white dark:text-black py-12 border-y-4 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#FF006E]">12K+</div>
              <div className="text-lg font-semibold mt-2">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#00D9FF]">127</div>
              <div className="text-lg font-semibold mt-2">Micro-Lessons</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#39FF14]">5.6K</div>
              <div className="text-lg font-semibold mt-2">Community Posts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#FFF500]">50+</div>
              <div className="text-lg font-semibold mt-2">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
          Your Journey in 3 Steps
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#FF006E] text-white font-black text-2xl flex items-center justify-center border-3 border-black dark:border-white rounded-sm">
              1
            </div>
            <h3 className="text-2xl font-bold">Choose Your Path</h3>
            <p className="text-lg">
              Student? Mentor? Admin? Pick your role and dive into a world designed for YOU.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#00D9FF] text-black font-black text-2xl flex items-center justify-center border-3 border-black dark:border-white rounded-sm">
              2
            </div>
            <h3 className="text-2xl font-bold">Learn & Engage</h3>
            <p className="text-lg">
              Complete bite-sized lessons, join discussions, and connect with mentors who've been there.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#39FF14] text-black font-black text-2xl flex items-center justify-center border-3 border-black dark:border-white rounded-sm">
              3
            </div>
            <h3 className="text-2xl font-bold">Level Up!</h3>
            <p className="text-lg">
              Earn XP, unlock badges, and watch your career confidence skyrocket 🚀
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <BrutalistCard variant="neon-purple" className="max-w-3xl mx-auto text-center space-y-6 p-8 md:p-12">
          <Sparkles className="w-16 h-16 mx-auto text-[#B537FF]" />
          <h2 className="text-3xl md:text-4xl font-black">
            Ready to Revolutionize Your Career?
          </h2>
          <p className="text-lg md:text-xl">
            Join thousands of Gen Z learners who are building their dream careers, one lesson at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/student">
              <BrutalistButton variant="neon-purple" size="lg">
                Get Started Free ✨
              </BrutalistButton>
            </Link>
            <Link href="/admin">
              <BrutalistButton variant="outline" size="lg">
                Admin Dashboard 📊
              </BrutalistButton>
            </Link>
          </div>
        </BrutalistCard>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black dark:border-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold">
            Built with 💜 for Gen Z by CareerVerse
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2024 CareerVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}