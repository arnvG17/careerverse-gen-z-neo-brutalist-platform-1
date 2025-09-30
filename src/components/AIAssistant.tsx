"use client";

import { useState, useRef, useEffect } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { BrutalistButton } from "@/components/BrutalistButton";
import { X, Send, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickPrompts = [
  "How do I write a better resume? 📝",
  "Tips for job interviews? 💼",
  "How to negotiate salary? 💰",
  "Best career paths for me? 🚀",
];

const aiResponses: Record<string, string> = {
  default: "Hey! I'm your AI career assistant. I can help with resumes, interview prep, career advice, and more. What would you like to know?",
  resume: "Great question! For a standout resume: 1) Use action verbs (led, built, achieved), 2) Quantify results (increased sales by 30%), 3) Keep it to 1 page for early career, 4) Tailor it to each job. Want me to review a specific section?",
  interview: "Interview prep tips: 1) Research the company thoroughly, 2) Practice STAR method answers (Situation, Task, Action, Result), 3) Prepare 2-3 questions to ask them, 4) Do mock interviews with friends. What role are you interviewing for?",
  salary: "Salary negotiation 101: 1) Research market rates on Glassdoor/Levels.fyi, 2) Wait for them to give a number first, 3) Ask for 10-20% above your target, 4) Consider the full package (benefits, equity, WFH). What's your target role?",
  career: "Finding your career path: 1) Take our Career Explorer quiz, 2) Try informational interviews with professionals, 3) Consider your interests + skills + market demand, 4) Start with internships or projects. What industries interest you?",
};

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: aiResponses.default,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
      return aiResponses.resume;
    } else if (lowerMessage.includes("interview")) {
      return aiResponses.interview;
    } else if (lowerMessage.includes("salary") || lowerMessage.includes("negotiate")) {
      return aiResponses.salary;
    } else if (lowerMessage.includes("career") || lowerMessage.includes("path") || lowerMessage.includes("job")) {
      return aiResponses.career;
    }
    
    return "That's an interesting question! While I'm focused on career advice, feel free to ask me about resumes, interviews, salary negotiation, or career planning. What would you like help with?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-4 right-4 w-[90vw] md:w-[400px] z-50"
          >
            <BrutalistCard variant="neon-purple" className="p-0 overflow-hidden flex flex-col h-[600px] max-h-[80vh]">
              {/* Header */}
              <div className="bg-[#B537FF] text-white p-4 border-b-3 border-black dark:border-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-[#B537FF]" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">AI Career Assistant</h3>
                    <p className="text-xs opacity-90">Always here to help! 🚀</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-card">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-sm p-3 border-2 border-black dark:border-white ${
                        message.sender === "user"
                          ? "bg-[#B537FF] text-white ml-auto"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <p className="text-sm font-semibold whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-sm p-3 border-2 border-black dark:border-white">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-2 h-2 bg-[#B537FF] rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-[#B537FF] rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-[#B537FF] rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts */}
              {messages.length === 1 && (
                <div className="p-3 border-t-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                  <p className="text-xs font-bold mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Quick Questions:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleQuickPrompt(prompt)}
                        className="text-xs font-semibold p-2 bg-white dark:bg-card border-2 border-black dark:border-white rounded-sm hover:bg-[#B537FF]/10 transition-colors text-left"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t-3 border-black dark:border-white bg-white dark:bg-card">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 border-2 border-black dark:border-white rounded-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#B537FF]"
                  />
                  <BrutalistButton
                    variant="neon-purple"
                    size="sm"
                    onClick={handleSend}
                    disabled={!input.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </BrutalistButton>
                </div>
              </div>
            </BrutalistCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}