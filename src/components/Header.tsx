import React from 'react';
import { Phone, Globe, ShieldCheck, MessageSquare, Sparkles, Building2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import jmCorpLogo from '../assets/images/jm_corp_logo_1785380043206.jpg';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onScrollToForm: () => void;
  onOpenCompanyPage?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onScrollToForm, onOpenCompanyPage }) => {
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      {/* Top Notification Bar */}
      <div className="bg-[#1A365D] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow border border-yellow-200 animate-vibrate cursor-pointer transition active:scale-95"
            title="無料査定フォームへ移動"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-600 fill-red-600 shrink-0" />
            <span>{lang === 'ja' ? '⚡ 最短20秒で完了！無料ネット査定はこちら ＞' : '⚡ Complete in 20s! Free Quote Form ＞'}</span>
          </button>
          <div className="hidden md:flex items-center gap-6 text-slate-200">
            <span>射水本社ヤード：富山県射水市大江 1339</span>
            <span>直通ダイヤル：<a href="tel:09062771999" className="text-yellow-300 font-bold hover:underline">090-6277-1999</a></span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
        {/* Logo & Company Name */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-3.5 group shrink-0 min-w-0">
          <img
            src={jmCorpLogo}
            alt="JM CORP. Cars and machinery"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-12 md:h-14 w-auto object-contain hover:opacity-95 transition shrink-0"
          />
          <div className="flex flex-col justify-center min-w-0">
            <div className="text-[9px] sm:text-xs text-amber-600 font-bold tracking-wide truncate">
              {lang === 'ja' ? '中古車・重機買取＆海外輸出' : 'USED CAR & HEAVY MACHINERY EXPORT'}
            </div>
            <h1 className="text-xs sm:text-lg md:text-xl font-black text-[#1A365D] tracking-tight whitespace-nowrap">
              株式会社JMコーポレーション
            </h1>
            <div className="hidden sm:block text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider">
              JM CORPORATION CO., LTD.
            </div>
          </div>
        </a>

        {/* Right Action Bar */}
        <div className="flex flex-col items-end gap-1.5 shrink-0 max-w-full">
          {/* Row 1: Contact & Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2.5 flex-wrap justify-end max-w-full">
            {/* Direct Phone Call Button */}
            <a 
              href="tel:09062771999" 
              className="flex items-center gap-1 sm:gap-1.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md shadow-md transition active:scale-95 shrink-0 animate-vibrate"
              title="お電話でお問合せ：090-6277-1999"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0 animate-pulse" />
              <span className="font-extrabold tracking-tight">{lang === 'ja' ? '電話でお問合せ' : 'Inquiry'}</span>
            </a>

            {/* Fixed Phone (Desktop) */}
            <a 
              href="tel:0766860049" 
              className="hidden xl:inline-flex items-center text-xs font-bold text-slate-700 hover:text-[#1A365D] bg-slate-100 px-2.5 py-2 rounded border border-slate-300 transition shrink-0"
              title="固定電話：076-686-0049"
            >
              固定: 076-686-0049
            </a>

            {/* LINE Button */}
            <a
              href="https://line.me/ti/p/TlDs6Db5eJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md shadow transition active:scale-95 cursor-pointer shrink-0"
              title="LINE査定"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white shrink-0" />
              <span className="whitespace-nowrap">{lang === 'ja' ? 'LINE査定' : 'LINE'}</span>
            </a>
          </div>

          {/* Row 2: Quick Form Button & Language Switch Button (二段目に配置) */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2 flex-wrap max-w-full">
            {/* Quick Form Yellow Button (2段目に移動) */}
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-[11px] sm:text-xs md:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md shadow border border-yellow-300 animate-vibrate cursor-pointer transition active:scale-95 shrink-0"
              title="無料査定フォームへ移動"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-600 fill-red-600 shrink-0" />
              <span className="whitespace-nowrap">{lang === 'ja' ? '最短20秒！無料査定' : '20s Assessment'}</span>
            </button>

            {/* Company Overview Separate Page Button */}
            <button
              onClick={onOpenCompanyPage}
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-100 hover:bg-[#1A365D] text-[#1A365D] hover:text-white font-black text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-slate-300 shadow-sm transition cursor-pointer shrink-0"
              title="会社概要専用ページへ移動"
            >
              <Building2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="whitespace-nowrap">{lang === 'ja' ? '🏢 会社概要' : '🏢 Company'}</span>
            </button>

            {/* Language Switch Button */}
            <button
              onClick={onToggleLang}
              id="lang-toggle-btn"
              className="flex items-center gap-1 sm:gap-1.5 bg-[#1A365D] text-white hover:bg-amber-500 hover:text-slate-900 font-bold text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-amber-400 shadow-sm transition cursor-pointer shrink-0"
              title="Switch Language / 言語切り替え"
            >
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
              <span className="whitespace-nowrap">{t.header.langBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Notice Bar Making It Obvious That Company Overview is on a Separate Page */}
      <div className="bg-amber-50 border-t border-amber-200 py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-extrabold text-[#1A365D] flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] sm:text-xs shrink-0">
              {lang === 'ja' ? '別ページご案内' : 'DEDICATED PAGE'}
            </span>
            <span className="truncate">
              {lang === 'ja'
                ? '株式会社JMコーポレーションの「会社概要（代表挨拶・創業1999年・設立2017年）」は専用の別ページをご用意しております'
                : 'JM Corp. Company Overview (est. 1999/inc. 2017) is available on a separate dedicated page'}
            </span>
          </div>
          <button
            onClick={onOpenCompanyPage}
            className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-black hover:underline cursor-pointer shrink-0"
          >
            <span>{lang === 'ja' ? '🏢 会社概要ページを見る ＞' : '🏢 View Company Overview Page ＞'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

