import React from 'react';
import { UserCheck, Star, MapPin, Quote, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations, customerReviewsData } from '../data/translations';

interface CustomerReviewsProps {
  lang: Language;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="py-16 bg-slate-100 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 flex-wrap mb-2">
            <span className="text-xs font-black text-[#1A365D] tracking-widest uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm">
              VOICE OF CUSTOMERS
            </span>
            <span className="inline-flex items-center gap-1 bg-red-600 text-white font-black text-xs px-3.5 py-1 rounded-full shadow-sm animate-pulse">
              <Sparkles className="w-3 h-3 fill-yellow-300 text-yellow-300" />
              <span>{t.reviews.campaignBadge}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A365D] mt-3">
            {t.reviews.title}
          </h2>
          <p className="text-slate-600 font-bold mt-2 text-sm sm:text-base">
            {t.reviews.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Reviews Grid (2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {customerReviewsData.map((review, idx) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 shadow-lg border relative flex flex-col justify-between hover:shadow-2xl transition duration-300 ${
                review.badge ? 'border-amber-400 ring-2 ring-amber-300/50' : 'border-slate-200'
              }`}
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-amber-200/50 pointer-events-none" />

              <div>
                {/* Optional Campaign Badge */}
                {review.badge && (
                  <div className="mb-3.5 inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-sm animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                    <span>{lang === 'ja' ? review.badge : review.badgeEn}</span>
                  </div>
                )}

                {/* User Avatar Silhouette & Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A365D] text-amber-300 flex items-center justify-center font-bold shadow shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-600 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="font-extrabold text-[#1A365D]">
                        {lang === 'ja' ? review.location : review.locationEn}
                      </span>
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1A365D] mb-3 leading-snug">
                  「{lang === 'ja' ? review.title : review.titleEn}」
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {lang === 'ja' ? review.comment : review.commentEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>
                  {review.tag
                    ? (lang === 'ja' ? review.tag : review.tagEn)
                    : (lang === 'ja' ? '全国・出張査定の感謝の声' : 'Verified Customer Voice')}
                </span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-bold">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
