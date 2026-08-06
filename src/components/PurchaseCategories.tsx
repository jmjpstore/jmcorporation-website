import React from 'react';
import { Car, Truck, HardHat, Bus, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import excavatorShovelImg from '../assets/images/excavator_shovel_heavy_1785343653605.jpg';

interface PurchaseCategoriesProps {
  lang: Language;
  onScrollToForm?: () => void;
}

export const PurchaseCategories: React.FC<PurchaseCategoriesProps> = ({ lang, onScrollToForm }) => {
  const t = translations[lang];

  const categories = [
    {
      icon: <Car className="w-10 h-10 text-amber-500" />,
      title: t.category.c1.title,
      desc: t.category.c1.desc,
      img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
      badge: '個人・法人問わず',
    },
    {
      icon: <Truck className="w-10 h-10 text-amber-500" />,
      title: t.category.c2.title,
      desc: t.category.c2.desc,
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      badge: '大型トラック大歓迎',
    },
    {
      icon: <HardHat className="w-10 h-10 text-amber-500" />,
      title: t.category.c3.title,
      desc: t.category.c3.desc,
      img: excavatorShovelImg,
      badge: '不動重機も査定OK',
    },
    {
      icon: <Bus className="w-10 h-10 text-amber-500" />,
      title: t.category.c4.title,
      desc: t.category.c4.desc,
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      badge: '海外輸出で高額指定',
    },
  ];

  return (
    <section id="category" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-amber-400 tracking-widest uppercase bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700">
            {t.category.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            {t.category.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl hover:border-amber-400 transition duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute top-3 right-3 bg-[#E67E22] text-white text-[11px] font-black px-2.5 py-1 rounded shadow">
                    {cat.badge}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-slate-900 rounded-xl border border-slate-700 shadow-inner">
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="bg-slate-900/80 rounded-xl p-2.5 text-center text-xs sm:text-sm font-black text-amber-300 border border-slate-700 text-impact-ja">
                  即出張査定・高額買取対応
                </div>
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
