import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DirectBanner } from './components/DirectBanner';
import { FourStrengths } from './components/FourStrengths';
import { AssuranceSystem } from './components/AssuranceSystem';
import { PurchaseCategories } from './components/PurchaseCategories';
import { FreeAssessmentGallery } from './components/FreeAssessmentGallery';
import { PurchaseProcess } from './components/PurchaseProcess';
import { CustomerReviews } from './components/CustomerReviews';
import { CompanyOverview } from './components/CompanyOverview';
import { CompanyOverviewPage } from './components/CompanyOverviewPage';
import { SeoArticleSection } from './components/SeoArticleSection';
import { AssessmentForm } from './components/AssessmentForm';
import { VibratingBottomButton } from './components/VibratingBottomButton';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [lang, setLang] = useState<Language>('ja');
  const [currentPage, setCurrentPage] = useState<'home' | 'company'>('home');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ja' ? 'en' : 'ja'));
  };

  const scrollToAssessmentForm = () => {
    const el = document.getElementById('assessment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCompanyPage = () => {
    setCurrentPage('company');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAssessmentFromCompany = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('assessment-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  if (currentPage === 'company') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-900">
        <CompanyOverviewPage
          lang={lang}
          onBackToHome={openHome}
          onGoToAssessment={openAssessmentFromCompany}
        />
        <Footer
          lang={lang}
          onOpenCompanyPage={openCompanyPage}
        />
        <FloatingMobileBar
          lang={lang}
          onScrollToForm={openAssessmentFromCompany}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-900 pb-16 md:pb-0">
      
      {/* 1. ヘッダー */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onScrollToForm={scrollToAssessmentForm}
        onOpenCompanyPage={openCompanyPage}
      />

      {/* 2. メインビジュアル＆スピード連絡ボタンエリア */}
      <HeroSection
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
        onOpenCompanyPage={openCompanyPage}
      />

      {/* 3. 直営・中間マージンなしの強みバナー（他社対抗・言い換え版） */}
      <DirectBanner
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
      />

      {/* 4. 当社の4つの強み */}
      <FourStrengths
        lang={lang}
      />

      {/* 5. 安心の取引システム（3つの約束） */}
      <AssuranceSystem
        lang={lang}
      />

      {/* 6. 買取・輸出対象の一覧 */}
      <PurchaseCategories
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
      />

      {/* 7. 無料出張査定・車両写真ギャラリー */}
      <FreeAssessmentGallery
        lang={lang}
      />

      {/* 9. 出張買取の流れ（黄色背景・他社仕様） */}
      <PurchaseProcess
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
      />

      {/* 10. ご利用いただいたお客様の喜びの声 */}
      <CustomerReviews
        lang={lang}
      />

      {/* 11. 会社概要 */}
      <CompanyOverview
        lang={lang}
        onOpenCompanyPage={openCompanyPage}
      />

      {/* SEO解説・ブログ記事セクション */}
      <SeoArticleSection
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
      />

      {/* 12. 無料ネット査定フォーム */}
      <AssessmentForm
        lang={lang}
      />

      {/* ⑤ 最下部で動くボタン機能 */}
      <VibratingBottomButton
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
      />

      {/* 13. フッター（免責事項お断り文） */}
      <Footer
        lang={lang}
        onOpenCompanyPage={openCompanyPage}
      />

      {/* Fixed Mobile Bottom Action Bar */}
      <FloatingMobileBar
        lang={lang}
        onScrollToForm={scrollToAssessmentForm}
      />

    </div>
  );
}
