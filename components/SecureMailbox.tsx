
import React from 'react';
import { SecureMail } from '../types';

interface Props { mails: SecureMail[]; }

const SecureMailbox: React.FC<Props> = ({ mails }) => {
  return (
    <div className="flex flex-col lg:flex-row h-full gap-6">
      <div className="w-full lg:w-64 space-y-2">
        <button className="gold-gradient w-full text-black py-3.5 rounded-2xl font-bold text-sm mb-6 shadow-lg shadow-[#d4af37]/10 hover:scale-105 transition-all">
          <i className="fas fa-plus-circle ml-2"></i>
          إنشاء رسالة جديدة
        </button>
        <div className="space-y-1">
          {[
            { l: 'الوارد', i: 'fa-inbox', c: 3 },
            { l: 'المرسل', i: 'fa-paper-plane', c: 0 },
            { l: 'المسودات', i: 'fa-file-lines', c: 1 },
            { l: 'المؤرشف', i: 'fa-box-archive', c: 0 }
          ].map((item, idx) => (
            <button key={idx} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all group ${idx === 0 ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
              <div className="flex items-center gap-3">
                 <i className={`fas ${item.i} text-xs`}></i>
                 {item.l}
              </div>
              {item.c > 0 && <span className="bg-[#d4af37] text-black text-[9px] font-bold px-2 py-0.5 rounded-full">{item.c}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 glass-card rounded-[2rem] overflow-hidden flex flex-col border-white/5">
        <div className="p-5 border-b border-white/5 bg-black/40 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <input type="checkbox" className="w-4 h-4 accent-[#d4af37] cursor-pointer" />
             <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">اختيار الكل</span>
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            <button className="hover:text-red-500 transition-colors"><i className="fas fa-trash-alt"></i></button>
            <button className="hover:text-[#d4af37] transition-colors"><i className="fas fa-envelope-open"></i></button>
            <button className="hover:text-[#d4af37] transition-colors"><i className="fas fa-shield-halved"></i></button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto divide-y divide-white/5">
          {mails.map(mail => (
            <div key={mail.id} className={`p-5 flex items-start gap-5 cursor-pointer hover:bg-white/5 transition-all relative group ${!mail.isRead ? 'bg-[#d4af37]/5' : ''}`}>
              {!mail.isRead && <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#d4af37]"></div>}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] border border-white/5 group-hover:border-[#d4af37]/30 transition-all">
                <i className={`fas ${mail.isEncrypted ? 'fa-shield-lock' : 'fa-envelope-open-text'} text-lg`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`text-sm truncate ${!mail.isRead ? 'font-bold text-white' : 'text-gray-400'}`}>
                    {mail.sender}
                    {mail.isEncrypted && <i className="fas fa-circle-check text-blue-500 text-[8px] mr-2"></i>}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-mono">{mail.date}</span>
                </div>
                <h5 className={`text-xs mb-1 truncate ${!mail.isRead ? 'text-white font-medium' : 'text-gray-400'}`}>{mail.subject}</h5>
                <p className="text-[11px] text-gray-600 truncate leading-relaxed">{mail.body}</p>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="text-gray-600 hover:text-[#d4af37]"><i className="fas fa-star text-[10px]"></i></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecureMailbox;
