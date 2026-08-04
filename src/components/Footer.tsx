import React from 'react';
import { ShieldCheck, MapPin, Phone, Building2, Mail } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import jmCorpLogo from '../assets/images/jm_corp_logo_1785380043206.jpg';

interface FooterProps {
  lang: Language;
  onOpenCompanyPage?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenCompanyPage }) => {
  const t = translations[lang];

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Footer info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800 text-slate-300">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={jmCorpLogo}
                alt="JM CORP. Cars and machinery"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain bg-white p-1 rounded-md"
              />
              <div>
                <span className="text-base font-black text-white block">株式会社JMコーポレーション</span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider block">JM CORPORATION CO., LTD.</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              日本の中古車・重機・トラック・バスの高価買取および世界各国への輸出専門商社。自社直営ヤードにて迅速・誠実に対応いたします。
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenCompanyPage}
                className="inline-flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-3 py-1.5 rounded-lg border border-amber-400/40 transition cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ja' ? '🏢 株式会社JMコーポレーション 会社概要ページを見る ＞' : '🏢 View Dedicated Company Overview Page ＞'}</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-black text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>事業所所在地</span>
            </h4>
            <div className="text-xs text-slate-400 space-y-1">
              <p>【本社/ヤード】富山県射水市大江 1339</p>
              <p>【事務所/ヤード】富山県射水市草岡町</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-black text-white flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ja' ? 'お問合せ・代表取締役' : 'Inquiries / Representative Director'}</span>
            </h4>
            <div className="text-xs text-slate-400 space-y-1 font-medium">
              <p>{lang === 'ja' ? '代表取締役直通：' : 'Representative Director Direct: '}<a href="tel:09062771999" className="text-amber-300 font-bold hover:underline">090-6277-1999</a></p>
              <p>固定電話：<a href="tel:0766860049" className="text-slate-300 hover:underline">076-686-0049</a></p>
              <p>FAX番号：<span className="text-slate-300 font-bold">076-675-8204</span></p>
              <p className="text-emerald-400 font-bold">営業時間：24時間・年中無休で受付中</p>
              <p className="pt-0.5">
                <span className="text-slate-300 font-bold">{lang === 'ja' ? 'メールアドレス：' : 'Email: '}</span>
                <a href="mailto:jmcoporation55@gmail.com" className="text-amber-300 font-bold hover:underline break-all">jmcoporation55@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Email Inquiry Banner in Footer */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-300 font-bold">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{lang === 'ja' ? 'メールでのお問い合わせ・査定資料・写真の送付先アドレス：' : 'Inquiries & Assessment Document/Photo Submission Email:'}</span>
          </div>
          <a
            href="mailto:jmcoporation55@gmail.com"
            className="text-amber-300 font-black hover:underline text-sm sm:text-base bg-slate-950 px-4 py-2 rounded-xl border border-amber-400/40 transition break-all"
          >
            jmcoporation55@gmail.com
          </a>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>【免責事項 / Legal Disclaimer】</span>
          </div>
          
          <div className="space-y-2 text-[11px] leading-relaxed text-slate-400 font-normal">
            <p className="border-l-2 border-amber-500/60 pl-3">
              <span className="font-bold text-slate-300">【日本語】</span> {t.footer.disclaimer}
            </p>
            <p className="border-l-2 border-slate-600 pl-3">
              <span className="font-bold text-slate-300">【English】</span> {translations.en.footer.disclaimer}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 text-[11px] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} JM Corporation Co., Ltd. (株式会社JMコーポレーション) All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
