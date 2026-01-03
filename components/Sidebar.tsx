
import React from 'react';
import { PLATFORM_MODULES } from '../constants';
import { ModuleType } from '../types';

interface SidebarProps {
  activeModule: ModuleType;
  onSelectModule: (module: ModuleType) => void;
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onSelectModule, isOpen }) => {
  return (
    <aside className={`fixed top-0 right-0 h-full w-64 bg-[#080808] border-l border-white/5 flex flex-col z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
      <div className="p-8 flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-black shadow-lg shadow-[#d4af37]/20">
          <i className="fas fa-crown text-2xl"></i>
        </div>
        <div>
          <h1 className="text-lg font-black gold-text leading-tight">المعرفة</h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase">الإصدار الذهبي</p>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 space-y-2 no-scrollbar">
        {PLATFORM_MODULES.map((module) => (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
              activeModule === module.id 
              ? 'bg-[#d4af37]/10 text-[#d4af37] active-glow border border-[#d4af37]/20' 
              : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${activeModule === module.id ? 'bg-[#d4af37]/20' : 'bg-transparent'}`}>
              <i className={`fas ${module.icon} text-lg transition-transform group-hover:scale-110`}></i>
            </div>
            <span className="font-bold text-sm tracking-wide">{module.name}</span>
            {activeModule === module.id && <div className="mr-auto w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_#d4af37]"></div>}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5 mt-auto">
        <div className="p-4 glass-card rounded-[1.5rem] flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-green-500/50 p-0.5 relative">
            <img src="https://picsum.photos/seed/khaled/100/100" className="rounded-full w-full h-full" alt="X" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></div>
          </div>
          <div>
            <p className="text-xs font-black">نظام خالد</p>
            <p className="text-[10px] text-[#d4af37] font-bold">V 4.0.0 Stable</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
