import React, { useEffect } from 'react';
import { Building2, User, Phone, MapPin, Clock, Globe, Printer, Calendar, ArrowLeft, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import jmCorpLogo from '../assets/images/jm_corp_logo_1785380043206.jpg';

interface CompanyOverviewPageProps {
  lang: Language;
  onBackToHome: () => void;
  onGoToAssessment: () => void;
}

export const CompanyOverviewPage: React.FC<CompanyOverviewPageProps> = ({
  lang,
  onBackToHome,
  onGoToAssessment,
}) => {
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-[#1A365D] text-white py-3 px-4 shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg border border-white/20 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ja' ? 'TOP（ホーム）へ戻る' : 'Back to Home'}</span>
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-amber-300 font-extrabold flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              {lang === 'ja' ? '株式会社JMコーポレーション 会社概要ページ' : 'JM Corp. Company Overview Page'}
            </span>
          </div>

          <button
            onClick={onGoToAssessment}
            className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full shadow border border-yellow-200 animate-vibrate cursor-pointer transition active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-red-600 fill-red-600" />
            <span>{lang === 'ja' ? '⚡ 無料ネット査定フォームへ進む ＞' : '⚡ Go to Free Quote Form ＞'}</span>
          </button>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-[#1A365D] to-slate-800 text-white py-12 sm:py-16 px-4 border-b-4 border-amber-400">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ja' ? '専用ページ ｜ CORPORATE PROFILE' : 'DEDICATED PAGE ｜ CORPORATE PROFILE'}</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <img
              src={jmCorpLogo}
              alt="JM CORP. Logo"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-16 w-auto object-contain bg-white p-1.5 rounded-lg shadow-md"
            />
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              {t.company.title}
            </h1>
          </div>

          <p className="text-slate-200 font-bold text-sm sm:text-lg max-w-3xl mx-auto">
            {t.company.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-4 text-xs sm:text-sm font-bold">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              ✓ {lang === 'ja' ? '創業：1999年 (元会社設立)' : 'Founded: 1999'}
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              ✓ {lang === 'ja' ? '法人設立：2017年12月26日' : 'Incorporated: Dec 26, 2017'}
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              ✓ {lang === 'ja' ? '富山県射水市 本社＆直営ヤード' : 'Imizu City, Toyama HQ'}
            </span>
            <span className="bg-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-400/40">
              ✓ {lang === 'ja' ? '24時間・年中無休受付' : '24/7 Open'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* CEO Message & Corporate Philosophy */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <span className="text-xs font-black text-amber-600 tracking-wider uppercase block">
                {lang === 'ja' ? 'REPRESENTATIVE GREETING & PHILOSOPHY' : 'REPRESENTATIVE GREETING & PHILOSOPHY'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#1A365D]">
                {lang === 'ja' ? '代表取締役ご挨拶・経営理念' : 'Message from Representative Director'}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            <p className="font-bold text-slate-900 text-base sm:text-lg">
              {lang === 'ja'
                ? '「どんな車両・重機にも真の価値を。誠実で迅速な買取と輸出を通じて、世界との架け橋へ」'
                : '‘Bringing True Value to Every Vehicle and Machinery through Sincere, Rapid Appraisals and Global Export’'}
            </p>
            <p>
              {lang === 'ja'
                ? '当社は1999年の元会社設立・創業以来、長年にわたり乗用車・中古車から重機・建機・トラック・バスに至るまで、幅広い車両の高価買取と海外輸出事業を培ってまいりました。2017年12月26日の法人設立（株式会社JMコーポレーション）を経て、富山県射水市を拠点に日本全国のお客様、そして世界各地のパートナー様と厚い信頼関係を築いております。'
                : 'Since our original establishment in 1999, we have developed extensive expertise in purchasing and worldwide export of automobiles, heavy machinery, construction equipment, trucks, and buses. Following our formal incorporation as JM Corporation Co., Ltd. on December 26, 2017, we have built strong, trusted relationships with customers across Japan and partners around the globe from our base in Imizu, Toyama.'}
            </p>
            <p>
              {lang === 'ja'
                ? '「中間業者を介さない自社直営ヤード」と「世界100カ国以上の直接販路」を強みに、他社では値がつかない低年式・過走行車両や故障車、不動重機であっても適正かつ最高値で評価いたします。代表取締役の私が直接お客様のお声に向き合い、迅速な査定と現金即日お支払いをお約束します。'
                : 'With our direct-operated yards and direct sales channels to over 100 countries worldwide, we eliminate middlemen margins to provide the highest appraisals—even for older models, high-mileage vehicles, or non-operational heavy machinery. As Representative Director, I personally ensure rapid appraisals and immediate cash payment.'}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs text-slate-500 font-bold">{lang === 'ja' ? '代表取締役 (Representative Director)' : 'Representative Director (CEO)'}</div>
              <div className="text-lg sm:text-xl font-black text-[#1A365D] mt-0.5">
                {t.company.values.rep}
              </div>
            </div>
            <a
              href="tel:09062771999"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm sm:text-base px-5 py-2.5 rounded-xl shadow-md transition active:scale-95 animate-vibrate"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>{lang === 'ja' ? '代表取締役 直通電話：090-6277-1999' : 'Direct Call: 090-6277-1999'}</span>
            </a>
          </div>
        </div>

        {/* Full Corporate Profile Table */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xl">
          <div className="bg-[#1A365D] text-white p-5 sm:p-6 flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-lg sm:text-xl font-black flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-amber-400" />
              <span>{lang === 'ja' ? '会社概要詳細一覧' : 'Detailed Company Profile'}</span>
            </h3>
            <span className="text-xs bg-amber-400 text-slate-950 font-extrabold px-3 py-1 rounded-full">
              {lang === 'ja' ? '2017年12月26日 設立' : 'Established Dec 26, 2017'}
            </span>
          </div>

          <div className="divide-y divide-slate-200 text-sm sm:text-base">
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Building2 className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.name}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-900 text-lg">
                {t.company.values.name}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-slate-50">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <User className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.rep}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.rep}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.founded}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.founded}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-slate-50">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.established}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.established}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Phone className="w-5 h-5 text-red-600" />
                <span>{t.company.table.phoneMobile}</span>
              </div>
              <div className="md:col-span-3 font-bold text-red-700 text-lg flex flex-wrap items-center gap-3">
                <a href="tel:09062771999" className="hover:underline bg-red-50 px-3.5 py-1.5 rounded-lg border border-red-200">
                  {t.company.values.phoneMobile}
                </a>
                <span className="text-xs font-semibold text-slate-500">※24時間・年中無休受付</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-slate-50">
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

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Printer className="w-5 h-5 text-slate-700" />
                <span>{t.company.table.fax}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.fax}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-slate-50">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.headquarters}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.headquarters}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.branch}</span>
              </div>
              <div className="md:col-span-3 font-bold text-slate-800">
                {t.company.values.branch}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-slate-50">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Globe className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.business}</span>
              </div>
              <div className="md:col-span-3 font-medium text-slate-700 leading-relaxed">
                {t.company.values.business}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 sm:p-6 items-center bg-white">
              <div className="font-black text-[#1A365D] flex items-center gap-2 mb-1 md:mb-0">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>{t.company.table.hours}</span>
              </div>
              <div className="md:col-span-3 font-black text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-md border border-emerald-200 w-fit">
                {t.company.values.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Locations / Yard Guide Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1A365D]">
                {lang === 'ja' ? '拠点・ヤード所在地案内' : 'Locations & Direct Yard Guide'}
              </h3>
              <p className="text-xs text-slate-500 font-bold">
                {lang === 'ja' ? '富山県射水市より全国対応・海外直輸出' : 'HQ & Yard in Imizu City, Toyama'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-[#1A365D] text-white text-xs font-bold px-3 py-1 rounded-full">
                <span>{lang === 'ja' ? '本 社 所在地' : 'Headquarters'}</span>
              </div>
              <div className="text-base font-black text-slate-900">
                〒939-0303 富山県射水市大江 1339
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {lang === 'ja'
                  ? '乗用車から重機・トラック・バスまで幅広い車両の受け入れ・管理を行う本社拠点です。'
                  : 'Our main headquarters and reception center handling cars, heavy machinery, trucks, and buses.'}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                <span>{lang === 'ja' ? '事務所・ヤード' : 'Office & Yard'}</span>
              </div>
              <div className="text-base font-black text-slate-900">
                富山県射水市草岡町 事務所・ヤード
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {lang === 'ja'
                  ? '輸出前の整備・解体およびコンテナ・RO-RO船への輸出出荷準備・ヤード保管施設です。'
                  : 'Our dedicated office and yard facility for dismantling, maintenance, and overseas export shipping.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action Box */}
        <div className="bg-gradient-to-r from-[#1A365D] via-slate-900 to-[#1A365D] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border-2 border-amber-400">
          <span className="inline-block bg-amber-400 text-slate-950 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full">
            {lang === 'ja' ? '年中無休・24時間受付中' : '24/7 OPEN ALL YEAR'}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">
            {lang === 'ja'
              ? '「どんな車や重機でも、まずは一度ご相談ください」'
              : '‘Feel free to contact us anytime for any vehicle or machinery’'}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            {lang === 'ja'
              ? 'フォーム入力が面倒な方は、今すぐ直接お電話ください！スタッフが迅速に対応します。出張査定は完全無料・キャンセル料も一切不要です。'
              : 'Prefer to speak directly? Call right now! Our staff will respond rapidly. Free on-site assessment with zero cancellation fees.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:09062771999"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl transition active:scale-95 animate-vibrate"
            >
              <Phone className="w-6 h-6 fill-white" />
              <span>{lang === 'ja' ? '電話でお問合せ 090-6277-1999' : 'Call: 090-6277-1999'}</span>
            </a>

            <button
              onClick={onGoToAssessment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl transition active:scale-95 border-2 border-yellow-200 cursor-pointer"
            >
              <Sparkles className="w-6 h-6 text-red-600 fill-red-600" />
              <span>{lang === 'ja' ? '⚡ 無料ネット査定フォームへ行く' : '⚡ Go to Free Quote Form'}</span>
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 font-bold text-sm hover:underline cursor-pointer transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'ja' ? 'TOP（ホームページ）へ戻る' : 'Back to Home Page'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
