import React from 'react';
import { Building2, User, Phone, MapPin, Clock, Globe, Printer, Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CompanyOverviewProps {
  lang: Language;
  onOpenCompanyPage?: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ lang, onOpenCompanyPage }) => {
  const t = translations[lang];

  return (
    <section id="company" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Notice & Button for Separate Dedicated Company Overview Page */}
        <div className="bg-gradient-to-r from-[#1A365D] via-slate-900 to-[#1A365D] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-amber-400 mb-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full shadow">
            <Building2 className="w-4 h-4 text-slate-950" />
            <span>{lang === 'ja' ? 'ご案内：会社概要は専用の別ページにて詳しくご案内しています' : 'Notice: Detailed Company Profile is Available on a Separate Dedicated Page'}</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
            {lang === 'ja' ? '株式会社JMコーポレーション 会社概要（専用ページのご案内）' : 'JM Corp. Dedicated Company Overview Page'}
          </h3>
          
          <p className="text-slate-300 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            {lang === 'ja'
              ? '「1999年創業・2017年12月設立の信頼と実績」「代表取締役 アハメド アヤアズ（ボビー）からのご挨拶・経営理念」「富山県射水市 本社および草岡町ヤード所在地・アクセス」など、詳しい会社情報は専用の別ページにて公開しております。'
              : 'We have prepared a separate dedicated page featuring our CEO message, founding history (est. 1999 / inc. 2017), office & yard locations in Toyama, and complete corporate details.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold pt-1">
            <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              ✓ {lang === 'ja' ? '創業：1999年 (元会社設立)' : 'Founded: 1999'}
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              ✓ {lang === 'ja' ? '法人設立：2017年12月26日' : 'Incorporated: Dec 26, 2017'}
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              ✓ {lang === 'ja' ? '代表取締役：アハメド アヤアズ（ボビー）' : 'CEO: Ahmed Ayaz (Bobby)'}
            </span>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenCompanyPage}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm sm:text-lg px-8 py-4 rounded-2xl shadow-xl border-2 border-yellow-200 cursor-pointer transition active:scale-95 animate-vibrate"
            >
              <Building2 className="w-5 h-5 text-red-600 shrink-0" />
              <span>{lang === 'ja' ? '🏢 株式会社JMコーポレーション 会社概要ページを見る（別ページへ進む） ＞' : '🏢 View JM Corp. Company Overview Page ＞'}</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-[#1A365D] tracking-widest uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-300">
            CORPORATE INFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A365D] mt-3">
            {t.company.title}
          </h2>
          <p className="text-slate-600 font-bold mt-2 text-sm sm:text-base">
            {t.company.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#1A365D] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Company Details Table */}
        <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 overflow-hidden shadow-xl">
          <div className="divide-y divide-slate-200 text-sm sm:text-base">
            
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Building2 className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.name}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-900 text-lg">
                {t.company.values.name}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <User className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.rep}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.rep}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.founded}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.founded}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.established}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.established}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Phone className="w-5 h-5 text-red-600" />
                <span>{t.company.table.phoneMobile}</span>
              </div>
              <div className="md:col-span-3 font-bold text-red-700 text-lg flex flex-wrap items-center gap-3">
                <a href="tel:09062771999" className="hover:underline bg-red-50 px-3 py-1 rounded-lg border border-red-200">
                  {t.company.values.phoneMobile}
                </a>
                <span className="text-xs font-semibold text-slate-500">※24時間・年中無休受付</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Phone className="w-5 h-5 text-slate-700" />
                <span>{t.company.table.phoneFixed}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                <a href="tel:0766860049" className="hover:underline">
                  {t.company.values.phoneFixed}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Printer className="w-5 h-5 text-slate-700" />
                <span>{t.company.table.fax}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.fax}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.headquarters}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.headquarters}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.branch}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.branch}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Globe className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.business}</span>
              </div>
              <div className="md:col-span-3 font-medium text-slate-700 leading-relaxed">
                {t.company.values.business}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-5 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.hours}</span>
              </div>
              <div className="md:col-span-3 font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 w-fit">
                {t.company.values.hours}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
