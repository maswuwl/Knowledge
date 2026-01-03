
import React from 'react';
import { Project } from '../types';

interface Props {
  projects: Project[];
  onAddProject: (title: string) => void;
  onDelete: (id: string) => void;
}

const ProjectsManager: React.FC<Props> = ({ projects, onAddProject, onDelete }) => {
  const handleNewProject = () => {
    const title = prompt('أدخل عنوان المشروع المعرفي الجديد:');
    if (title && title.trim()) onAddProject(title);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black mb-2 gold-text">مشاريعك المعرفية</h2>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">تحويل الأفكار إلى أصول رقمية ذهبية</p>
        </div>
        <button 
          onClick={handleNewProject}
          className="gold-gradient text-black px-10 py-4 rounded-[1.5rem] font-black text-sm shadow-2xl shadow-[#d4af37]/30 flex items-center justify-center gap-3 hover:scale-[1.03] transition-all active:scale-95"
        >
          <i className="fas fa-plus-circle text-lg"></i>
          مشروع ذهبي جديد
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {projects.length === 0 ? (
          <div className="glass-card p-24 rounded-[3rem] text-center border-dashed border-2 border-white/5">
             <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-folder-open text-4xl text-gray-800"></i>
             </div>
             <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">لا توجد مشاريع مسجلة حالياً</p>
          </div>
        ) : (
          projects.map(project => (
            <div key={project.id} className="glass-card p-8 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between group animate-fade-in border-white/5 hover:border-[#d4af37]/30">
              <div className="flex items-center gap-8 mb-6 lg:mb-0 w-full lg:w-auto">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-all border border-white/5 group-hover:border-[#d4af37]/20 shadow-inner">
                  <i className={`fas ${project.status === 'published' ? 'fa-rocket' : 'fa-flask'} text-3xl ${project.status === 'published' ? 'gold-text' : 'text-gray-500'}`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-black mb-2 group-hover:text-[#d4af37] transition-all">{project.title}</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`text-[9px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest border ${
                      project.status === 'published' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {project.status === 'published' ? 'منشور عالمياً' : 'مسودة برمجية'}
                    </span>
                    <span className="text-[10px] text-gray-600 font-bold flex items-center gap-2">
                      <i className="fas fa-calendar-day"></i>
                      تحديث: {project.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-10 border-t lg:border-t-0 lg:border-r border-white/5 pt-8 lg:pt-0 lg:pr-12 w-full lg:w-auto">
                <div className="text-center">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter mb-2">الاستثمار</p>
                  <div className="flex items-center gap-2 justify-center">
                    <i className="fas fa-gem text-[#d4af37] text-xs"></i>
                    <p className="font-black text-lg">{project.pointsRequired.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter mb-2">الأرباح</p>
                  <p className="font-black text-green-500 text-lg tracking-widest">${project.earnings.toLocaleString()}</p>
                </div>
                <div className="flex gap-3">
                  <button title="فتح المحرر" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all border border-white/10 group/btn">
                    <i className="fas fa-code text-sm"></i>
                  </button>
                  <button onClick={() => onDelete(project.id)} title="حذف نهائي" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all border border-white/10">
                    <i className="fas fa-trash-can text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsManager;
