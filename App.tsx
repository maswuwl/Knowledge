
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AIChat from './components/AIChat';
import SocialFeed from './components/SocialFeed';
import SecureMailbox from './components/SecureMailbox';
import AppStore from './components/AppStore';
import RobotsCenter from './components/RobotsCenter';
import AdminDashboard from './components/AdminDashboard';
import ProjectsManager from './components/ProjectsManager';
import UserProfileView from './components/UserProfileView';
import { ModuleType, UserProfile, FeedPost, Project, SecureMail } from './types';
import { MOCK_FEED, MOCK_PROJECTS, MOCK_MAILS } from './constants';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>(ModuleType.AI);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Persistence States
  const [posts, setPosts] = useState<FeedPost[]>(() => {
    const saved = localStorage.getItem('gk_posts');
    return saved ? JSON.parse(saved) : MOCK_FEED;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('gk_projects');
    return saved ? JSON.parse(saved) : MOCK_PROJECTS;
  });

  const [mails, setMails] = useState<SecureMail[]>(() => {
    const saved = localStorage.getItem('gk_mails');
    return saved ? JSON.parse(saved) : MOCK_MAILS;
  });

  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('gk_user');
    return saved ? JSON.parse(saved) : {
      name: 'خالد بن محمد',
      level: 42,
      points: 15450,
      walletBalance: 2450.75,
      isVerified: true,
      avatar: 'https://picsum.photos/seed/khaled/100/100',
      bio: 'مطور معماري ومؤسس منصة المعرفة. أسعى لتحويل المعرفة إلى قيمة رقمية.'
    };
  });

  // Sync to LocalStorage
  useEffect(() => localStorage.setItem('gk_posts', JSON.stringify(posts)), [posts]);
  useEffect(() => localStorage.setItem('gk_projects', JSON.stringify(projects)), [projects]);
  useEffect(() => localStorage.setItem('gk_mails', JSON.stringify(mails)), [mails]);
  useEffect(() => localStorage.setItem('gk_user', JSON.stringify(user)), [user]);

  const handleAddPost = (content: string) => {
    const newPost: FeedPost = {
      id: Date.now().toString(),
      author: user.name,
      avatar: user.avatar,
      content,
      likes: 0,
      comments: 0,
      time: 'الآن'
    };
    setPosts([newPost, ...posts]);
    setUser(prev => ({ ...prev, points: prev.points + 15 }));
  };

  const handleLikePost = (postId: string) => {
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleAddProject = (title: string) => {
    const newProj: Project = {
      id: 'p' + Date.now(),
      title,
      status: 'draft',
      pointsRequired: 500,
      earnings: 0,
      lastUpdated: 'الآن'
    };
    setProjects([newProj, ...projects]);
    setUser(prev => ({ ...prev, points: prev.points + 50 }));
  };

  const handleDeleteProject = (id: string) => {
    if(confirm('هل أنت متأكد من حذف هذا المشروع المعرفي؟')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const renderContent = () => {
    switch (activeModule) {
      case ModuleType.AI: return <AIChat />;
      case ModuleType.SOCIAL: return <SocialFeed posts={posts} onAddPost={handleAddPost} onLike={handleLikePost} />;
      case ModuleType.MAIL: return <SecureMailbox mails={mails} />;
      case ModuleType.APPSTORE: return <AppStore />;
      case ModuleType.PROJECTS: return <ProjectsManager projects={projects} onAddProject={handleAddProject} onDelete={handleDeleteProject} />;
      case ModuleType.ROBOTS: return <RobotsCenter />;
      case ModuleType.USER: return <UserProfileView user={user} />;
      case ModuleType.ADMIN: return <AdminDashboard projectsCount={projects.length} points={user.points} />;
      default: return <AIChat />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex overflow-hidden">
      {/* Sidebar - Persistent with mobile handling */}
      <Sidebar activeModule={activeModule} onSelectModule={setActiveModule} isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'mr-64' : 'mr-0'} flex flex-col h-screen overflow-hidden`}>
        {/* Header */}
        <header className="h-20 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between shrink-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-[#d4af37] lg:hidden">
              <i className="fas fa-bars"></i>
            </button>
            <div>
              <h2 className="text-xl font-black tracking-tight gold-text">
                {activeModule === ModuleType.AI && "مركز الذكاء الاصطناعي"}
                {activeModule === ModuleType.SOCIAL && "موقع التواصل الاجتماعي"}
                {activeModule === ModuleType.MAIL && "البريد المشفر"}
                {activeModule === ModuleType.APPSTORE && "المتجر الذهبي"}
                {activeModule === ModuleType.PROJECTS && "إدارة المشاريع"}
                {activeModule === ModuleType.ROBOTS && "مختبر الروبوتات"}
                {activeModule === ModuleType.USER && "الملف الشخصي"}
                {activeModule === ModuleType.ADMIN && "لوحة التحكم"}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">رصيد المعرفة</span>
              <div className="flex items-center gap-2">
                <i className="fas fa-gem text-[#d4af37] text-xs"></i>
                <span className="font-black text-lg">{user.points.toLocaleString()}</span>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <img src={user.avatar} className="w-10 h-10 rounded-xl border border-[#d4af37]/40 p-0.5" alt="Avatar" />
              <div className="hidden sm:block">
                <p className="text-xs font-black">{user.name}</p>
                <p className="text-[9px] text-green-500 flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-ping"></span> نشط حالياً
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto h-full animate-fade-in">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
