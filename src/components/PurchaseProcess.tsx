import React from 'react';
import { PhoneCall, Truck, Banknote, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PurchaseProcessProps {
  lang: Language;
  onScrollToForm?: () => void;
}

export const PurchaseProcess: React.FC<PurchaseProcessProps> = ({ lang, onScrollToForm }) => {
  const t = translations[lang];

  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8 text-red-600" />,
      num: t.process.step1.num,
      title: t.process.step1.title,
      desc: t.process.step1.desc,
      badge: null,
    },
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      num: t.process.step2.num,
      title: t.process.step2.title,
      desc: t.process.step2.desc,
      badge: '無料出張',
    },
    {
      icon: <Banknote className="w-8 h-8 text-red-600" />,
      num: t.process.step3.num,
      title: t.process.step3.title,
      desc: t.process.step3.desc,
      badge: t.process.step3.badge,
    },
    {
      icon: <FileCheck className="w-8 h-8 text-red-600" />,
      num: t.process.step4.num,
      title: t.process.step4.title,
      desc: t.process.step4.desc,
      badge: t.process.step4.badge,
    },
  ];

  return (
    <section id="process" className="py-16 bg-[#FFF9E6] border-t-4 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-slate-900 tracking-widest uppercase bg-amber-300 px-3.5 py-1.5 rounded-full shadow-sm">
            SIMPLE & FAST PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A365D] mt-3">
            {t.process.title}
          </h2>
          <p className="text-slate-700 font-bold mt-2 text-sm sm:text-base">
            {t.process.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 relative flex flex-col justify-between hover:shadow-2xl transition duration-300"
            >
              {/* Red Circular Step Number Badge */}
              <div className="flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-md">
                  {step.num}
                </div>
                {step.badge && (
                  <span className="bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-md border border-red-200">
                    {step.badge}
                  </span>
                )}
              </div>

              <div>
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 border border-red-100 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black text-[#1A365D] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-amber-600">
                <span>JM Step 0{idx + 1}</span>
                {idx < 3 && <ArrowRight className="w-4 h-4 text-slate-400 hidden lg:block" />}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        {onScrollToForm && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-base sm:text-xl px-8 py-4 rounded-full shadow-2xl border-2 border-yellow-200 animate-vibrate cursor-pointer transition active:scale-95"
              title="無料査定フォームへ移動"
            >
              <Sparkles className="w-6 h-6 text-red-600 fill-red-600 shrink-0" />
              <span>{lang === 'ja' ? '⚡ 最短20秒で完了！無料ネット査定はこちら ＞' : '⚡ Complete in 20s! Free Quote Form ＞'}</span>
            </button>
            <a
              href="tel:09062771999"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-xl px-8 py-4 rounded-full shadow-2xl border-2 border-red-300 transition active:scale-95 animate-vibrate"
              title="代表取締役直通電話：090-6277-1999"
            >
              <Sparkles className="w-6 h-6 text-amber-300 fill-amber-300 shrink-0" />
              <span>{lang === 'ja' ? '📞 電話で問い合わせ' : '📞 Call Inquiry'}</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
