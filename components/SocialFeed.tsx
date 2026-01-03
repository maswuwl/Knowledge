
import React, { useState } from 'react';
import { FeedPost } from '../types';

interface Props {
  posts: FeedPost[];
  onAddPost: (content: string) => void;
  onLike: (id: string) => void;
}

const SocialFeed: React.FC<Props> = ({ posts, onAddPost, onLike }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    onAddPost(input);
    setInput('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-8">
        <div className="glass-card p-6 rounded-[2rem] border-[#d4af37]/10">
          <div className="flex items-start gap-5">
            <img src="https://picsum.photos/seed/khaled/50/50" className="w-14 h-14 rounded-2xl border border-white/10 p-0.5" alt="me" />
            <div className="flex-1 space-y-5">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="شارك فكرة معرفية، تحدي برمجي، أو إلهام ذهبي..." 
                className="w-full bg-white/2 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#d4af37]/40 resize-none h-32 transition-all"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                   <button className="text-gray-500 hover:text-[#d4af37] flex items-center gap-2 text-xs font-bold transition-all"><i className="fas fa-image"></i> ميديا</button>
                   <button className="text-gray-500 hover:text-[#d4af37] flex items-center gap-2 text-xs font-bold transition-all"><i className="fas fa-terminal"></i> كود</button>
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={!input.trim()}
                  className="gold-gradient px-10 py-3 rounded-2xl text-black text-xs font-black shadow-xl shadow-[#d4af37]/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:scale-100"
                >
                  نشر المعرفة
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="glass-card p-8 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all group animate-fade-in border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={post.avatar} className="w-12 h-12 rounded-2xl border border-white/10 object-cover" alt={post.author} />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#050505] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-sm group-hover:gold-text transition-all">{post.author}</h4>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{post.time}</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-xl hover:bg-white/5 text-gray-700 hover:text-white transition-all"><i className="fas fa-ellipsis"></i></button>
              </div>
              <p className="text-sm leading-relaxed text-gray-300 font-medium mb-8 whitespace-pre-wrap">{post.content}</p>
              <div className="flex items-center gap-8 pt-6 border-t border-white/5">
                <button 
                  onClick={() => onLike(post.id)}
                  className="flex items-center gap-3 text-xs text-gray-500 hover:text-red-500 font-black transition-all group/like"
                >
                  <i className={`fa-heart ${post.likes > 0 ? 'fas text-red-500' : 'far'} group-hover/like:scale-125 transition-transform`}></i> 
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-3 text-xs text-gray-500 hover:text-[#d4af37] font-black transition-all">
                  <i className="far fa-comment-dots"></i> 
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-3 text-xs text-gray-500 hover:text-blue-500 font-black transition-all mr-auto">
                  <i className="fas fa-share-nodes"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="glass-card p-8 rounded-[2.5rem] bg-gradient-to-br from-[#d4af37]/15 to-transparent border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/5">
          <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black shadow-lg mb-6">
             <i className="fas fa-bolt-lightning text-xl"></i>
          </div>
          <h3 className="font-black text-lg mb-3">تحدي خالد اليومي</h3>
          <p className="text-xs text-gray-400 mb-8 leading-loose font-bold">قم بنشر تحليل لثلاث مشاريع روبوتات واحصل على <span className="gold-text">2500 نقطة خبرة</span> ولقب "محلل ذهبي".</p>
          <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl text-xs font-black hover:bg-[#d4af37] hover:text-black transition-all uppercase tracking-widest">قبول المهمة</button>
        </div>

        <div className="glass-card p-8 rounded-[2.5rem]">
          <h3 className="font-black text-sm mb-8 flex items-center justify-between">
             الخبراء المتصلون
             <div className="flex items-center gap-1.5 bg-green-500/10 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[9px] text-green-500 font-black">240 نشط</span>
             </div>
          </h3>
          <div className="space-y-6">
            {[
              { n: 'عمر القحطاني', s: 'يبرمج محرك AI', a: 'https://i.pravatar.cc/150?u=1' },
              { n: 'ليلى أحمد', s: 'تصمم واجهة ذهبية', a: 'https://i.pravatar.cc/150?u=2' },
              { n: 'ياسين محمود', s: 'يحلل قلب السمكة', a: 'https://i.pravatar.cc/150?u=3' },
            ].map((u, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="relative">
                  <img src={u.a} className="w-10 h-10 rounded-xl border border-white/5 grayscale group-hover:grayscale-0 transition-all" alt="" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                   <p className="text-xs font-black truncate group-hover:gold-text transition-all">{u.n}</p>
                   <p className="text-[10px] text-gray-600 font-bold truncate">{u.s}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 text-[10px] text-[#d4af37] font-black hover:underline uppercase tracking-widest">استكشاف المجتمع</button>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
