
import React from 'react';
import { MOCK_APPS } from '../constants';

const AppStore: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold gold-text">المتجر المعرفي</h2>
          <p className="text-sm text-gray-400">اكتشف تطبيقات تم بناؤها بواسطة مجتمع المعرفة.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input type="text" placeholder="ابحث عن تطبيق..." className="bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#d4af37]" />
           </div>
           <button className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-[#d4af37]"><i className="fas fa-sliders"></i></button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {['الكل', 'أدوات', 'ذكاء اصطناعي', 'تصميم', 'إنتاجية'].map((cat, i) => (
          <button key={i} className={`whitespace-nowrap px-6 py-2 rounded-xl text-xs font-bold transition-all ${i === 0 ? 'gold-gradient text-black' : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_APPS.map(app => (
          <div key={app.id} className="glass-card p-6 rounded-3xl group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${app.icon} gold-text`}></i>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex text-yellow-500 text-[10px] mb-1">
                   {[1, 2, 3, 4, 5].map(star => <i key={star} className="fas fa-star"></i>)}
                </div>
                <span className="text-[10px] text-gray-500">{app.rating} تقييم</span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 group-hover:text-[#d4af37] transition-colors">{app.name}</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-1">{app.description}</p>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-[10px]">
                   <i className="fas fa-code"></i>
                </div>
                <span className="text-xs font-medium text-gray-300">{app.developer}</span>
              </div>
              <button className="bg-white/5 hover:bg-[#d4af37] hover:text-black border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold transition-all">
                فتح التطبيق
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppStore;
