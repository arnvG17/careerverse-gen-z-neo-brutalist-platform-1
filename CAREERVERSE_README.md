# 🚀 CareerVerse - Gen Z HR EdTech Platform

A modern, highly engaging, mobile-first career development platform built with Next.js 15, featuring Neo-Brutalist design principles tailored for Gen Z users.

## ✨ Features Overview

### 🎨 Design System
- **Neo-Brutalist UI**: Bold shapes, sharp lines, vibrant neon colors
- **Custom Components**: BrutalistCard, BrutalistButton, NeonBadge
- **Typography**: Space Grotesk & Poppins for modern, readable text
- **Color Palette**: 
  - Neon Pink (#FF006E)
  - Neon Blue (#00D9FF)
  - Neon Green (#39FF14)
  - Neon Yellow (#FFF500)
  - Neon Purple (#B537FF)
  - Neon Orange (#FF6B00)

### 👨‍🎓 Student Interface (`/student`)
1. **Dashboard**
   - 🔥 Streak tracker with animated flame icon
   - ⚡ XP progress bar with level system
   - 🏅 Badge collection display
   - 📊 Recent activity feed
   - Quick action cards

2. **Micro-Learning Module**
   - Bite-sized lesson cards with thumbnails
   - Filter by: All, In Progress, Completed
   - AI-powered lesson recommendations
   - XP rewards and difficulty levels
   - Completion tracking

3. **Community Hub**
   - Reddit-style discussion feed
   - Category filters (Success Stories, AMA, Career Discussions, Real Talk)
   - Top contributors showcase
   - Upvote and comment system
   - Mentor badges for verified mentors
   - Post creation button

4. **Career Explorer**
   - Interactive career cards
   - Filter: All Careers, Conventional, Unconventional
   - Demand indicators (🔥 Very High, 📈 High, 🌱 Growing)
   - Salary ranges and required skills
   - Trending careers banner
   - Connect with mentors

### 👑 Mentor Interface (`/mentor`)
- **Profile Management**
  - Professional photo with mentor crown badge
  - Expertise tags
  - Bio and credentials
  - Edit profile functionality

- **Stats Dashboard**
  - ⭐ Rating display
  - 👥 Total sessions completed
  - 📈 Engagement score
  - 💬 Post count

- **Quick Actions**
  - Host AMA sessions
  - Reply to discussions
  - View mentees

- **Activity Feed**
  - Recent posts and AMAs
  - Engagement metrics
  - Category badges

- **Availability Management**
  - Status toggle (Available/Limited/Unavailable)
  - Visibility to students

### 📊 Admin/TPO Interface (`/admin`)
- **Analytics Dashboard**
  - 📈 Total users (12K+)
  - 📚 Total lessons (127)
  - 💬 Community posts (5.6K)
  - 🔥 Average streak length

- **Top Users Leaderboard**
  - Ranked by XP and streak
  - User avatars and stats
  - Recognition badges

- **Moderation Tools**
  - Flagged posts review
  - Severity indicators (High/Medium)
  - Approve/Remove/Review actions
  - Community activity monitoring

- **Announcement Panel**
  - Post platform-wide announcements
  - Preview functionality
  - Megaphone icon indicator

- **Quick Actions**
  - Manage lessons
  - Manage users
  - View detailed analytics

### 🤖 AI Assistant (Chatbot)
- **Features**
  - Floating action button (purple bot icon)
  - Full-screen chat interface
  - Quick prompt suggestions
  - Smart responses based on keywords:
    - Resume advice
    - Interview tips
    - Salary negotiation
    - Career path guidance
  - Typing indicator animation
  - Message history
  - Beautiful Neo-Brutalist design

## 🎯 Design Principles

### Neo-Brutalism
- **Bold Borders**: 2-3px solid black/white borders
- **Drop Shadows**: Offset shadows (6px-8px) for depth
- **Flat Colors**: Vibrant neon accents with minimal gradients
- **Sharp Corners**: Small border radius (0.25rem)
- **High Contrast**: Black text on white, clear hierarchy
- **Hover Effects**: Transform and shadow changes

### Mobile-First
- Responsive navigation (bottom tab bar on mobile)
- Touch-friendly buttons (min 44x44px)
- Optimized for small screens
- Horizontal scrolling for filters
- Stacked layouts on mobile, grid on desktop

### Gamification
- 🔥 Streak tracking
- ⚡ XP points system
- 🏅 Badge collection
- 📊 Progress bars
- 🏆 Leaderboards
- Level progression

## 📱 Pages & Routes

- **/** - Landing page with hero, features, stats
- **/student** - Student dashboard with 4 tabs
- **/mentor** - Mentor dashboard and profile
- **/admin** - Admin analytics and moderation

## 🎨 Components

### Shared
- `BrutalistCard` - Card with Neo-Brutalist styling
- `BrutalistButton` - Animated button with variants
- `NeonBadge` - Colorful badge component
- `AIAssistant` - Floating chatbot

### Student
- `StudentDashboard` - Main dashboard
- `StudentNav` - Bottom navigation
- `MicroLearning` - Lesson browser
- `CommunityHub` - Discussion feed
- `CareerExplorer` - Career discovery

## 🎭 Animations

All powered by **Framer Motion**:
- Fade in on mount
- Staggered list animations
- Hover scale effects
- Progress bar fills
- Typing indicators
- Page transitions
- Button press effects

## 📊 Mock Data

Comprehensive mock data in `src/lib/mockData.ts`:
- Student profiles with XP, streaks, badges
- 6 micro-learning lessons
- 4 community posts
- 6 career paths
- 3 mentors
- Admin statistics

## 🚀 Getting Started

```bash
# The project is already set up and running!
# All components are built and integrated

# View the interfaces:
# Landing: http://localhost:3000
# Student: http://localhost:3000/student
# Mentor: http://localhost:3000/mentor
# Admin: http://localhost:3000/admin
```

## 🎨 Color System

```css
/* Neon Colors */
--neon-pink: #FF006E;
--neon-blue: #00D9FF;
--neon-green: #39FF14;
--neon-yellow: #FFF500;
--neon-purple: #B537FF;
--neon-orange: #FF6B00;
```

## 💡 Key Features

✅ **Neo-Brutalist Design** - Bold, modern, Gen Z-focused
✅ **Mobile-First** - Optimized for all devices
✅ **Gamification** - Streaks, XP, badges, levels
✅ **Community** - Reddit-style discussions
✅ **AI Assistant** - Career guidance chatbot
✅ **Career Explorer** - Conventional & unconventional paths
✅ **Mentor System** - Connect with industry professionals
✅ **Admin Tools** - Analytics and moderation
✅ **Micro-Learning** - Bite-sized lessons
✅ **Responsive** - Works on mobile, tablet, desktop

## 🎯 User Experience

### For Students
1. Track daily learning streaks 🔥
2. Earn XP and unlock badges 🏅
3. Complete micro-lessons 📚
4. Join community discussions 💬
5. Explore career paths 🚀
6. Get AI career advice 🤖

### For Mentors
1. Manage professional profile 👔
2. Host AMA sessions 💡
3. Reply to student questions 💬
4. Track engagement metrics 📊
5. Set availability status ✓

### For Admins
1. Monitor platform analytics 📈
2. Moderate community posts 🛡️
3. Manage users and content 👥
4. Post announcements 📢
5. View top performers 🏆

## 🌟 Visual Highlights

- **Vibrant Colors**: Eye-catching neon accents
- **Bold Typography**: Clear hierarchy with Poppins
- **Playful Emojis**: Gen Z-friendly communication
- **Micro-Animations**: Smooth, delightful interactions
- **High Contrast**: Excellent readability
- **Consistent Spacing**: Clean, organized layouts

---

Built with 💜 for Gen Z by CareerVerse