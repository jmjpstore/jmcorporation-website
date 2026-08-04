import React from 'react';
import { Truck, MapPin, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import toyotaDynaImg from '../assets/images/toyota_dyna_truck_1785341576502.jpg';
import isuzuElfCraneImg from '../assets/images/isuzu_elf_crane_1785341608907.jpg';
import excavatorShovelImg from '../assets/images/excavator_shovel_heavy_1785343653605.jpg';

interface FreeAssessmentGalleryProps {
  lang: Language;
}

export const FreeAssessmentGallery: React.FC<FreeAssessmentGalleryProps> = ({ lang }) => {
  const t = translations[lang];

  const galleryList = [
    {
      name: t.gallery.items[0].name,
      desc: t.gallery.items[0].desc,
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      badge: '大型ダンプ',
    },
    {
      name: t.gallery.items[1].name,
      desc: t.gallery.items[1].desc,
      img: excavatorShovelImg,
      badge: '油圧ショベル',
    },
    {
      name: t.gallery.items[2].name,
      desc: t.gallery.items[2].desc,
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      badge: 'ウィングトラック',
    },
    {
      name: t.gallery.items[3].name,
      desc: t.gallery.items[3].desc,
      img: toyotaDynaImg,
      badge: '平ボディ',
    },
    {
      name: t.gallery.items[4].name,
      desc: t.gallery.items[4].desc,
      img: isuzuElfCraneImg,
      badge: 'クレーン付き',
    },
    {
      name: t.gallery.items[5].name,
      desc: t.gallery.items[5].desc,
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      badge: 'マイクロバス',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Catchphrase Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#E67E22] font-black text-sm sm:text-lg mb-2">
            <Sparkles className="w-5 h-5" />
            <span>{t.gallery.titleBanner}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            全国どこでも<span className="text-red-600 font-black px-2 py-1 bg-red-50 rounded-lg border-2 border-red-300 inline-block mx-1 shadow-sm">{t.gallery.titleRed}</span>に伺います！
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto flex items-center justify-center gap-1.5">
            <MapPin className="w-5 h-5 text-red-600 shrink-0" />
            <span>{t.gallery.desc}</span>
          </p>
        </div>

        {/* 6 Vehicle Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-800">
                <img
                  src={item.img}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1A365D] text-amber-300 font-black text-xs px-3 py-1 rounded shadow">
                  {item.badge}
                </div>
              </div>

              <div className="p-4 bg-white text-slate-800">
                <h3 className="font-black text-base text-[#1A365D] mb-1">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
