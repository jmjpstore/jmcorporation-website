import React from 'react';
import { Banknote, CheckCircle, FileCheck2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AssuranceSystemProps {
  lang: Language;
}

export const AssuranceSystem: React.FC<AssuranceSystemProps> = ({ lang }) => {
  const t = translations[lang];

  const systemList = [
    {
      icon: <Banknote className="w-9 h-9 text-emerald-600" />,
      title: t.system.p1.title,
      desc: t.system.p1.desc,
      color: 'border-emerald-500/30 bg-emerald-50/50',
      badgeBg: 'bg-emerald-600',
    },
    {
      icon: <CheckCircle className="w-9 h-9 text-blue-600" />,
      title: t.system.p2.title,
      desc: t.system.p2.desc,
      color: 'border-blue-500/30 bg-blue-50/50',
      badgeBg: 'bg-blue-600',
    },
    {
      icon: <FileCheck2 className="w-9 h-9 text-amber-600" />,
      title: t.system.p3.title,
      desc: t.system.p3.desc,
      color: 'border-amber-500/30 bg-amber-50/50',
      badgeBg: 'bg-amber-600',
    },
  ];

  return (
    <section id="system" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-[#1A365D] tracking-widest uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-300">
            {t.system.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A365D] mt-3">
            {t.system.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#1A365D] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systemList.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 border-2 ${item.color} shadow-lg relative flex flex-col justify-between hover:-translate-y-1 transition duration-300`}
            >
              <div className={`absolute -top-3.5 left-6 ${item.badgeBg} text-white text-xs font-black px-3 py-1 rounded-full shadow`}>
                PROMISE 0{idx + 1}
              </div>

              <div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 mt-2">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#1A365D] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>安心・安全・スピード対応約束</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
