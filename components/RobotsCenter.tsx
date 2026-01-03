
import React, { useState } from 'react';
import { MOCK_ROBOTS } from '../constants';

const RobotsCenter: React.FC = () => {
  const [robots, setRobots] = useState(MOCK_ROBOTS);

  const toggleBotStatus = (id: string) => {
    setRobots(prev => prev.map(bot => {
      if(bot.id === id) {
        const nextStatus = bot.status === 'active' ? 'idle' : 'active';
        return { ...bot, status: nextStatus as any };
      }
      return bot;
    }));
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black mb-2 gold-text">مختبر الروبوتات المعرفية</h2>
          <p className="text-sm text-gray-500 font-bold tracking-widest uppercase">برمج، حلل، ونفذ بذكاء آلي</p>
        </div>
        <button className="gold-gradient text-black px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#d4af37]/20 flex items-center gap-3">
          <i className="fas fa-bolt-lightning"></i>
          بناء روبوت جديد
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 rounded-[2rem] border-r-4 border-r-blue-500">
          <p className="text-gray-500 text-[10px] font-black uppercase mb-2">الوحدات النشطة</p>
          <div className="flex items-end justify-between">
            <p className="text-4xl font-black">12</p>
            <i className="fas fa-microchip text-blue-500/20 text-4xl"></i>
          </div>
        </div>
        <div className="glass-card p-8 rounded-[2rem] border-r-4 border-r-[#d4af37]">
          <p className="text-gray-500 text-[10px] font-black uppercase mb-2">العمليات المنجزة</p>
          <div className="flex items-end justify-between">
            <p className="text-4xl font-black">1.4M</p>
            <i className="fas fa-gears text-[#d4af37]/20 text-4xl"></i>
          </div>
        </div>
        <div className="glass-card p-8 rounded-[2rem] border-r-4 border-r-green-500">
          <p className="text-gray-500 text-[10px] font-black uppercase mb-2">دقة التنبؤ</p>
          <div className="flex items-end justify-between">
            <p className="text-4xl font-black">98.9%</p>
            <i className="fas fa-brain text-green-500/20 text-4xl"></i>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] overflow-hidden border-white/5">
        <div className="p-8 border-b border-white/5 bg-white/2 flex justify-between items-center">
          <h3 className="font-black text-lg">قائمة الروبوتات المثبتة</h3>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-8 py-5">المعالج الذكي</th>
                <th className="px-8 py-5">التخصص الرقمي</th>
                <th className="px-8 py-5">الحالة التشغيلية</th>
                <th className="px-8 py-5">معدل التعلم</th>
                <th className="px-8 py-5 text-left">التحكم</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {robots.map(bot => (
                <tr key={bot.id} className="hover:bg-white/5 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#d4af37] border border-white/5 group-hover:border-[#d4af37]/40 transition-all">
                        <i className={`fas fa-robot text-xl`}></i>
                      </div>
                      <div>
                        <span className="text-sm font-black block">{bot.name}</span>
                        <span className="text-[9px] text-gray-500 font-mono">ID: {bot.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-bold text-gray-400">{bot.specialty}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider ${
                      bot.status === 'active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                      bot.status === 'learning' ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20' : 'bg-gray-800 text-gray-500 border border-white/5'
                    }`}>
                      {bot.status === 'active' ? 'نشط' : bot.status === 'learning' ? 'قيد التطوير' : 'خامل'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                       <div className="w-24 bg-white/5 h-1.5 rounded-full overflow-hidden">
                         <div className="bg-[#d4af37] h-full shadow-[0_0_8px_#d4af37aa]" style={{ width: `${bot.accuracy}%` }}></div>
                       </div>
                       <span className="text-[10px] font-black font-mono text-gray-500">{bot.accuracy}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-left">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => toggleBotStatus(bot.id)} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${bot.status === 'active' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'} hover:scale-110`}>
                        <i className={`fas ${bot.status === 'active' ? 'fa-pause' : 'fa-play'} text-xs`}></i>
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-white/5 text-gray-500 flex items-center justify-center hover:text-white transition-all">
                        <i className="fas fa-sliders text-xs"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RobotsCenter;
