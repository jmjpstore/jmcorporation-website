import React from 'react';
import { Users, FileText, ShieldCheck, Globe2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FourStrengthsProps {
  lang: Language;
}

export const FourStrengths: React.FC<FourStrengthsProps> = ({ lang }) => {
  const t = translations[lang];

  const strengthsList = [
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: t.strengths.s1.title,
      desc: t.strengths.s1.desc,
      badge: 'B2B & B2C',
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      title: t.strengths.s2.title,
      desc: t.strengths.s2.desc,
      badge: '手数料 0円',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: t.strengths.s3.title,
      desc: t.strengths.s3.desc,
      badge: '創業20年超',
    },
    {
      icon: <Globe2 className="w-8 h-8 text-amber-500" />,
      title: t.strengths.s4.title,
      desc: t.strengths.s4.desc,
      badge: '世界各国へ輸出',
    },
  ];

  return (
    <section id="strengths" className="py-16 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-[#E67E22] tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            {t.strengths.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A365D] mt-3">
            {t.strengths.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthsList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-200 transition duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#1A365D] text-amber-300 text-[10px] font-black px-3 py-1 rounded-bl-xl shadow">
                {item.badge}
              </div>
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center mb-5 transition duration-300 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#1A365D] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E67E22]">
                <span>JM Strengths</span>
                <span>0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
