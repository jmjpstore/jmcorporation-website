import React from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Award, Sparkles, Clock, Building2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
  onScrollToForm: () => void;
  onOpenCompanyPage?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onScrollToForm, onOpenCompanyPage }) => {
  const t = translations[lang];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-[#1A365D] to-[#0F2342] text-white py-10 lg:py-16 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#E67E22_0%,transparent_25%)] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#F1C40F_0%,transparent_30%)] opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Text Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Round Yellow Vibrating Button */}
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs sm:text-base px-5 py-2.5 rounded-full shadow-xl border-2 border-yellow-200 animate-vibrate cursor-pointer transition active:scale-95 hover:shadow-yellow-400/50"
              title="無料査定フォームへ移動"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-red-700 fill-red-600 shrink-0" />
              <span>{lang === 'ja' ? '⚡ 最短20秒で完了！無料ネット査定はこちら ＞' : '⚡ Complete in 20s! Free Assessment Form ＞'}</span>
            </button>

            {/* Catchphrase: HUGE Yellow Text with Outline */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-yellow-300 tracking-tight text-stroke-black drop-shadow-md">
                  {t.hero.highValue}
                </span>
                <span className="text-2xl sm:text-4xl font-extrabold text-white">
                  {lang === 'ja' ? '専門！' : 'SPECIALIST!'}
                </span>
              </div>

              {/* Orange Rectangular Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {t.hero.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#E67E22] text-white text-sm sm:text-lg font-black px-3 sm:px-4 py-1.5 rounded-md shadow-md border border-amber-300"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xl sm:text-3xl font-black text-amber-300 leading-tight">
                  {t.hero.suffix}
                </span>
              </div>
            </div>

            {/* Appeals */}
            <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-400/60 rounded-xl p-4 sm:p-5 space-y-2 shadow-xl">
              <div className="flex items-start gap-2.5 text-base sm:text-xl font-bold text-slate-100">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.hero.appeal1}</span>
              </div>
              <div className="flex items-start gap-2.5 text-base sm:text-xl font-bold text-slate-100">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {t.hero.appeal2}
                  <span className="bg-red-600 text-white px-2 py-0.5 rounded ml-1 font-black underline decoration-yellow-300 text-lg sm:text-2xl">
                    {t.hero.cashNow}
                  </span>
                </span>
              </div>
            </div>

            {/* Sub-Trust Tag */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 pt-1 font-medium">
              <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700">
                <Award className="w-4 h-4 text-yellow-400" />
                業界創業20年以上の信頼実績
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700">
                <Clock className="w-4 h-4 text-amber-400" />
                名義変更・書類作成は完全無料
              </span>
              <button
                onClick={onOpenCompanyPage}
                className="flex items-center gap-1.5 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-3 py-1 rounded-full border border-amber-400/50 transition cursor-pointer font-bold"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{lang === 'ja' ? '🏢 会社概要ページを見る ＞' : '🏢 View Company Overview ＞'}</span>
              </button>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/90 rounded-2xl border-2 border-amber-400/40 p-4 shadow-2xl relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="JM Corporation Trucks and Machinery Yard"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover rounded-xl shadow group-hover:scale-105 transition duration-500"
              />
              <div className="mt-3 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 p-3 rounded-lg font-black text-center text-sm shadow">
                富山県射水市 本社ヤードから全国・世界へ発信！
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3 Contact Buttons Area (Requirement Section 2)           */}
        {/* ======================================================== */}
        <div className="mt-10 pt-8 border-t border-slate-700/80">
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-amber-300">
              {lang === 'ja' ? '▼ 今すぐ選べる3つの査定お問合せ方法 ▼' : '▼ 3 Easy Ways to Get Your Free Quote Right Now ▼'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* 1. お電話：黒背景の横長ボタン */}
            <div className="bg-black hover:bg-slate-950 text-white rounded-2xl p-4 border-2 border-slate-700 shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-amber-400 mb-1">
                  <span>【お電話】</span>
                  <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">24時間・年中無休で受付中</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mb-2">
                  スタッフが直通対応！お気軽にお電話ください。
                </div>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <a
                  href="tel:09062771999"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-lg py-2.5 px-3 rounded-xl shadow transition animate-vibrate"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>{lang === 'ja' ? '電話で問い合わせ' : 'Call Inquiry'}</span>
                </a>
                <a
                  href="tel:0766860049"
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-1.5 px-3 rounded-lg transition"
                >
                  <span>固定：076-686-0049</span>
                </a>
              </div>
            </div>

            {/* 2. LINE無料査定：角丸の鮮やかな緑色ボタン（#24CD24） */}
            <div className="bg-[#1f2937] border-2 border-[#24CD24] rounded-2xl p-4 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-[#24CD24] mb-1">
                  <span>【LINE無料査定】</span>
                  <span className="bg-[#24CD24]/20 text-emerald-300 px-2 py-0.5 rounded">年中無休で受付中</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mb-2">
                  お車の写真をLINEに送るだけでスピード概算査定！
                </div>
              </div>
              <a
                href="https://line.me/ti/p/TlDs6Db5eJ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-[#24CD24] hover:bg-[#1eb71e] text-white font-black text-base sm:text-lg py-3.5 px-4 rounded-xl shadow-lg transition"
              >
                <MessageSquare className="w-6 h-6 fill-white text-[#24CD24]" />
                <span>{t.hero.btnLine.text}</span>
              </a>
            </div>

            {/* 3. 無料ネット査定：角丸の鮮やかな青色ボタン（#0066CC） */}
            <div className="bg-[#1f2937] border-2 border-[#0066CC] rounded-2xl p-4 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-blue-400 mb-1">
                  <span>【無料ネット査定】</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">年中無休で受付中</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mb-2">
                  わずか20秒！フォームから簡単に高額査定のお申し込み
                </div>
              </div>
              <button
                onClick={onScrollToForm}
                className="mt-2 flex items-center justify-center gap-2 bg-[#0066CC] hover:bg-[#0052a3] text-white font-black text-base sm:text-lg py-3.5 px-4 rounded-xl shadow-lg transition cursor-pointer"
              >
                <Send className="w-5 h-5 text-white" />
                <span>{t.hero.btnNet.text} ＞</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
