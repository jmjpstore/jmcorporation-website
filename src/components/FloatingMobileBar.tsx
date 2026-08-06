import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { Language } from '../types';

interface FloatingMobileBarProps {
  lang: Language;
  onScrollToForm: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ lang, onScrollToForm }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t-2 border-amber-400 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
        
        {/* Phone Call Button */}
        <a
          href="tel:09062771999"
          className="bg-red-600 hover:bg-red-700 text-white py-2.5 px-1 rounded-xl flex flex-col items-center justify-center shadow transition active:scale-95 animate-vibrate"
        >
          <Phone className="w-4 h-4 mb-0.5 fill-white" />
          <span>お電話</span>
        </a>

        {/* LINE Button */}
        <a
          href="https://line.me/ti/p/TlDs6Db5eJ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#24CD24] hover:bg-[#1eb71e] text-white py-2.5 px-1 rounded-xl flex flex-col items-center justify-center shadow transition active:scale-95"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 fill-white" />
          <span>LINE査定</span>
        </a>

        {/* Net Form Button */}
        <button
          onClick={onScrollToForm}
          className="bg-[#0066CC] hover:bg-[#0052a3] text-white py-2.5 px-1 rounded-xl flex flex-col items-center justify-center shadow transition active:scale-95 cursor-pointer"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>ネット査定</span>
        </button>

      </div>
    </div>
  );
};
