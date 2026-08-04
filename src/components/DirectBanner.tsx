import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldAlert, TrendingUp, DollarSign, Sparkles } from 'lucide-react';

interface DirectBannerProps {
  lang: Language;
  onScrollToForm?: () => void;
}

export const DirectBanner: React.FC<DirectBannerProps> = ({ lang, onScrollToForm }) => {
  const t = translations[lang];

  return (
    <section className="bg-[#E67E22] text-white py-12 relative overflow-hidden border-y-4 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-900/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 gap-8 items-center">
            
            {/* Number 01 & Catchphrase */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-8xl font-black text-amber-200 opacity-90 leading-none drop-shadow">
                  {t.direct.number}
                </span>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider">
                    {t.direct.tag}
                  </div>
                  {/* Black Rectangular Banner with Bold White Text */}
                  <div className="mt-1 bg-black text-white text-xl sm:text-3xl font-black px-5 py-2.5 rounded-lg shadow-lg inline-block border-2 border-amber-400">
                    {t.direct.highlight}
                  </div>
                </div>
              </div>

              {/* Text Paragraph */}
              <p className="text-base sm:text-lg text-slate-900 font-bold leading-relaxed bg-white/95 rounded-2xl p-5 sm:p-6 shadow-md border border-amber-200">
                {t.direct.body}
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-black/80 text-amber-300 rounded-xl p-3 flex items-center gap-2.5 font-bold text-xs sm:text-sm shadow">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>外部代理店手数料 0円</span>
                </div>
                <div className="bg-black/80 text-amber-300 rounded-xl p-3 flex items-center gap-2.5 font-bold text-xs sm:text-sm shadow">
                  <DollarSign className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>コスト還元で買取額UP</span>
                </div>
                <div className="bg-black/80 text-amber-300 rounded-xl p-3 flex items-center gap-2.5 font-bold text-xs sm:text-sm shadow">
                  <TrendingUp className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>20年以上の業界信頼</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                {onScrollToForm && (
                  <button
                    onClick={onScrollToForm}
                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-base sm:text-xl px-6 py-3.5 rounded-full shadow-2xl border-2 border-yellow-200 animate-vibrate cursor-pointer transition active:scale-95"
                    title="無料査定フォームへ移動"
                  >
                    <Sparkles className="w-5 h-5 text-red-600 fill-red-600 shrink-0" />
                    <span>{lang === 'ja' ? '⚡ 最短20秒で完了！無料ネット査定 ＞' : '⚡ Complete in 20s! Free Quote Form ＞'}</span>
                  </button>
                )}
                <a
                  href="tel:09062771999"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-xl px-6 py-3.5 rounded-full shadow-2xl border-2 border-red-300 transition active:scale-95 animate-vibrate"
                  title="代表取締役直通電話：090-6277-1999"
                >
                  <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0" />
                  <span>{lang === 'ja' ? '📞 電話で問い合わせ' : '📞 Call Inquiry'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

