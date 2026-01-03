
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'ai', text: 'أهلاً بك يا خالد في مركز الذكاء الاصطناعي الخاص بـ "المعرفة". كيف يمكنني مساعدتك في بناء مشروعك اليوم؟', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFishHeartMode, setIsFishHeartMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const aiResponse = await geminiService.generateResponse(input, isFishHeartMode ? 'fish_heart' : 'normal');
    
    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0d0d] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-white/5 bg-black/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
          <h3 className="font-bold gold-text">المساعد الذكي (المعرفة AI)</h3>
        </div>
        <button 
          onClick={() => setIsFishHeartMode(!isFishHeartMode)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            isFishHeartMode 
            ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
            : 'bg-white/5 text-[#d4af37] border border-[#d4af37]/30'
          }`}
        >
          <i className="fas fa-heart-pulse"></i>
          وضع قلب السمكة
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              msg.sender === 'user' 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#f3f4f6]'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <span className="text-[10px] text-gray-500 mt-2 block opacity-60">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-end">
            <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-2xl p-4 w-32 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-black/40 border-t border-white/5">
        <div className="relative flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اكتب فكرتك هنا لتطويرها..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]/50 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="w-12 h-12 gold-gradient rounded-xl text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
