
import React from 'react';

interface Props {
  projectsCount: number;
  points: number;
}

const AdminDashboard: React.FC<Props> = ({ projectsCount, points }) => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black mb-2">نظرة عامة على النظام</h2>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">إدارة الأداء والبيانات المعرفية</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            <i className="fas fa-file-export"></i> تقرير شامل
          </button>
          <button className="gold-gradient text-black px-8 py-3 rounded-2xl text-xs font-black shadow-xl shadow-[#d4af37]/20">
            تحديث الأنظمة
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'مشاريعك', val: projectsCount, delta: '+2 الجديد', icon: 'fa-microchip', color: '#d4af37' },
          { label: 'نقاط الخبرة', val: points.toLocaleString(), delta: 'مستوى ذهبي', icon: 'fa-gem', color: '#3b82f6' },
          { label: 'المستخدمين', val: '14,250', delta: '+12%', icon: 'fa-users-gear', color: '#10b981' },
          { label: 'إيرادات المتجر', val: '$240K', delta: '+22%', icon: 'fa-sack-dollar', color: '#f59e0b' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 text-xl" style={{ color: stat.color }}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-3 py-1 rounded-full">{stat.delta}</span>
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-[2.5rem] p-8">
          <h3 className="text-lg font-black mb-8 flex items-center gap-3">
            <i className="fas fa-chart-line text-[#d4af37]"></i>
            تحليل النشاط المعرفي
          </h3>
          <div className="space-y-6">
            {[
              { t: 'استجابة الذكاء الاصطناعي', p: 98, c: '#d4af37' },
              { t: 'تحميل البيانات المشفرة', p: 92, c: '#3b82f6' },
              { t: 'كفاءة الروبوتات', p: 85, c: '#10b981' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-3 font-bold">
                  <span className="text-gray-300">{item.t}</span>
                  <span style={{ color: item.c }}>{item.p}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full shadow-[0_0_8px] transition-all duration-1000" 
                       style={{ width: `${item.p}%`, backgroundColor: item.c, boxShadow: `0 0 10px ${item.c}66` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8">
          <h3 className="text-lg font-black mb-8 flex items-center gap-3">
            <i className="fas fa-shield-halved text-[#d4af37]"></i>
            سجل الأمان والعمليات
          </h3>
          <div className="space-y-4">
            {[
              { m: 'تم تشفير قاعدة بيانات المشاريع', t: 'منذ دقيقتين', i: 'fa-lock' },
              { m: 'دخول ناجح من جهاز جديد', t: 'منذ ساعة', i: 'fa-shield-check' },
              { m: 'تحديث بروتوكول قلب السمكة', t: 'منذ 3 ساعات', i: 'fa-code-compare' },
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                  <i className={`fas ${log.i} text-xs`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold">{log.m}</p>
                  <p className="text-[10px] text-gray-600 uppercase mt-1">{log.t}</p>
                </div>
                <i className="fas fa-arrow-left text-[10px] text-gray-800"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
