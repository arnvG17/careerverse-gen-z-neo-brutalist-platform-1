"use client";

import { useState } from "react";
import { StudentDashboard } from "@/components/student/StudentDashboard";
import { MicroLearning } from "@/components/student/MicroLearning";
import { CommunityHub } from "@/components/student/CommunityHub";
import { CareerExplorer } from "@/components/student/CareerExplorer";
import { StudentNav } from "@/components/student/StudentNav";
import { AIAssistant } from "@/components/AIAssistant";
import { BrutalistButton } from "@/components/BrutalistButton";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "learn" | "community" | "explore">("dashboard");
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF006E]/5 via-background to-[#00D9FF]/5 pb-20">
      <div className="container mx-auto px-4 py-6">
        {activeTab === "dashboard" && <StudentDashboard />}
        {activeTab === "learn" && <MicroLearning />}
        {activeTab === "community" && <CommunityHub />}
        {activeTab === "explore" && <CareerExplorer />}
      </div>
      
      <StudentNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* AI Assistant FAB */}
      {!isAIOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-24 right-4 z-40"
        >
          <BrutalistButton
            variant="neon-purple"
            size="lg"
            onClick={() => setIsAIOpen(true)}
            className="rounded-full w-16 h-16 p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
          >
            <Bot className="w-8 h-8" />
          </BrutalistButton>
        </motion.div>
      )}
      
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
}