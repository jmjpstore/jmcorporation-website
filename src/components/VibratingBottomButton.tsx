import React from 'react';
import { Zap, Send, ArrowDownCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface VibratingBottomButtonProps {
  lang: Language;
  onScrollToForm: () => void;
}

export const VibratingBottomButton: React.FC<VibratingBottomButtonProps> = ({ lang, onScrollToForm }) => {
  const t = translations[lang];

  return (
    <div className="bg-[#0F2342] py-10 px-4 border-t-4 border-amber-400 text-center relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#E67E22_0%,transparent_60%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full shadow">
          <Zap className="w-4 h-4 text-red-600 fill-red-600" />
          <span>24時間受付・今すぐ概算買取額をチェック</span>
        </div>

        {/* Vibrating Animated Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          <button
            onClick={onScrollToForm}
            className="animate-vibrate w-full sm:w-auto flex-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 hover:from-red-700 hover:to-red-700 text-yellow-300 font-black text-lg sm:text-2xl py-4 sm:py-5 px-6 rounded-2xl shadow-2xl border-4 border-yellow-300 transition duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-6 h-6 text-yellow-300 shrink-0" />
            <span className="drop-shadow-md tracking-tight">
              {t.vibratingBtn.text}
            </span>
            <ArrowDownCircle className="w-6 h-6 text-yellow-300 shrink-0" />
          </button>

          <a
            href="tel:09062771999"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-lg sm:text-2xl py-4 sm:py-5 px-6 rounded-2xl shadow-2xl border-4 border-red-300 transition duration-300 flex items-center justify-center gap-2 animate-vibrate"
            title="直通電話：090-6277-1999"
          >
            <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300 shrink-0" />
            <span className="drop-shadow-md tracking-tight">
              {lang === 'ja' ? '📞 電話で問い合わせ' : '📞 Call Inquiry'}
            </span>
          </a>
        </div>

        <p className="text-xs text-amber-200 font-bold">
          {t.vibratingBtn.sub}
        </p>
      </div>
    </div>
  );
};
