
export enum ModuleType {
  SOCIAL = 'SOCIAL',
  MAIL = 'MAIL',
  APPSTORE = 'APPSTORE',
  PROJECTS = 'PROJECTS',
  ROBOTS = 'ROBOTS',
  ADMIN = 'ADMIN',
  USER = 'USER',
  AI = 'AI'
}

export interface UserProfile {
  name: string;
  level: number;
  points: number;
  walletBalance: number;
  isVerified: boolean;
  avatar: string;
  bio?: string;
}

export interface AppItem {
  id: string;
  name: string;
  description: string;
  rating: number;
  developer: string;
  category: string;
  icon: string;
  price?: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'other';
  text: string;
  timestamp: Date;
  senderName?: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'draft' | 'published';
  pointsRequired: number;
  earnings: number;
  lastUpdated: string;
}

export interface FeedPost {
  id: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
}

export interface SecureMail {
  id: string;
  subject: string;
  body: string;
  sender: string;
  date: string;
  isRead: boolean;
  isEncrypted: boolean;
}

export interface CognitiveRobot {
  id: string;
  name: string;
  specialty: string;
  status: 'active' | 'learning' | 'idle';
  accuracy: number;
}
