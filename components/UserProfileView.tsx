
import React from 'react';
import { UserProfile } from '../types';

interface Props { user: UserProfile; }

const UserProfileView: React.FC<Props> = ({ user }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="glass-card p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative">
          <div className="w-40 h-40 rounded-[2rem] overflow-hidden border-2 border-[#d4af37]/30 p-2 shadow-2xl">
            <img src={user.avatar} alt="Avatar" className="w-full h-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black border border-[#d4af37] px-4 py-1 rounded-full flex items-center gap-2 whitespace-nowrap">
             <i className="fas fa-crown text-[#d4af37] text-[10px]"></i>
             <span className="text-[10px] font-bold gold-text">مستوى {user.level}</span>
          </div>
        </div>
        <div className="flex-1 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
            <h1 className="text-4xl font-extrabold gold-text">{user.name}</h1>
            <i className="fas fa-circle-check text-blue-500 text-xl"></i>
          </div>
          <p className="text-gray-400 mb-6 text-lg">{user.bio}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="bg-white/5 px-6 py-2 rounded-2xl border border-white/10 flex items-center gap-3">
              <i className="fas fa-calendar-alt text-gray-500"></i>
              <span className="text-xs">عضو منذ 2021</span>
            </div>
            <div className="bg-[#d4af37]/10 px-6 py-2 rounded-2xl border border-[#d4af37]/20 flex items-center gap-3">
              <i className="fas fa-trophy text-[#d4af37]"></i>
              <span className="text-xs font-bold text-[#d4af37]">خبير مشاريع ذهبي</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 rounded-3xl col-span-1 md:col-span-2">
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-xl">المحفظة الذهبية</h3>
              <button className="text-xs gold-text font-bold">عرض السجل</button>
           </div>
           <div className="flex items-end gap-2 mb-8">
              <span className="text-5xl font-black">${user.walletBalance.toLocaleString()}</span>
              <span className="text-gray-500 text-sm mb-2 uppercase">USD</span>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <button className="gold-gradient text-black py-4 rounded-2xl font-bold transition-transform hover:scale-[1.02]">إيداع</button>
              <button className="bg-white/5 text-white py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition-all">سحب</button>
           </div>
        </div>

        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
           <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">رصيد النقاط</h3>
                <i className="fas fa-gem text-[#d4af37]"></i>
              </div>
              <p className="text-3xl font-bold mb-4">{user.points.toLocaleString()}</p>
           </div>
           <div className="space-y-4">
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>المستوى التالي</span>
                <span>80%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                 <div className="bg-[#d4af37] h-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" style={{ width: '80%' }}></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
