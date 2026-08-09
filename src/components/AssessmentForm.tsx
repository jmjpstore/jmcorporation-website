import React, { useState } from 'react';
import { Send, PhoneCall, ChevronDown, ChevronUp, CheckCircle, Clock, ShieldCheck, Sparkles, X, Mail, Loader2 } from 'lucide-react';
import { Language, AssessmentFormData } from '../types';
import { translations } from '../data/translations';

interface AssessmentFormProps {
  lang: Language;
}

const PREFECTURES = [
  '富山県', '石川県', '福井県', '新潟県', '長野県', '岐阜県', '愛知県', 
  '東京都', '神奈川県', '埼玉県', '千葉県', '大阪府', '兵庫県', '京都府', 
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '山梨県', '静岡県', '三重県', '滋賀県',
  '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
  '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

export const AssessmentForm: React.FC<AssessmentFormProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<AssessmentFormData>({
    vehicleType: '',
    prefecture: '富山県',
    phone: '',
    name: '',
    desiredTime: '',
    preferredHours: '',
    visitDateTime: '',
    notes: '',
  });

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<AssessmentFormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.vehicleType || !formData.phone || !formData.name) {
      alert(lang === 'ja' ? '必須項目をご入力ください。' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    const currentSummary = { ...formData };
    setSubmittedSummary(currentSummary);

    try {
      const payload = {
        _subject: `【WEB出張査定お申し込み】${currentSummary.name} 様 (${currentSummary.vehicleType})`,
        _captcha: 'false',
        _template: 'table',
        'お名前': currentSummary.name,
        '電話番号': currentSummary.phone,
        '都道府県': currentSummary.prefecture,
        '車種・建機名': currentSummary.vehicleType,
        '売却希望時期': currentSummary.desiredTime || '指定なし',
        '連絡可能時間帯': currentSummary.preferredHours || '指定なし',
        '出張訪問希望日時': currentSummary.visitDateTime || '指定なし',
        'ご要望・備考': currentSummary.notes || '指定なし',
      };

      // FormSubmit AJAX API で一発送信 (直接 jmcoporation55@gmail.com に届く)
      await fetch('https://formsubmit.co/ajax/jmcoporation55@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Submission request handled:', error);
    } finally {
      setIsSubmitting(false);
      setShowModal(true); // 送信完了画面を表示
      // フォームの入力項目をクリア
      setFormData({
        vehicleType: '',
        prefecture: '富山県',
        phone: '',
        name: '',
        desiredTime: '',
        preferredHours: '',
        visitDateTime: '',
        notes: '',
      });
    }
  };

  return (
    <section id="assessment-form" className="py-16 bg-[#1A365D] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Banner 1: 最短20秒で完了！ */}
        <div className="bg-yellow-400 text-slate-950 rounded-2xl p-4 sm:p-6 text-center shadow-2xl mb-8 border-4 border-yellow-200">
          <div className="flex items-center justify-center gap-2 text-xl sm:text-3xl font-black">
            <Sparkles className="w-7 h-7 text-red-600 fill-red-600" />
            <span>
              // 最短<span className="text-red-600 text-3xl sm:text-5xl font-black mx-1 underline decoration-red-600">20秒</span>で完了！ //
            </span>
            <Sparkles className="w-7 h-7 text-red-600 fill-red-600" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
            {lang === 'ja' ? '年中無休・即日全国無料出張査定！個人情報管理徹底' : '24/7 All Year Round - Free On-Site Appraisal Nationwide'}
          </p>
        </div>

        {/* Banner 2: Direct Phone Callout */}
        <div className="bg-slate-900/90 border-2 border-amber-400 rounded-2xl p-5 sm:p-6 shadow-xl mb-10 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-300 font-black text-base sm:text-xl mb-2">
            <PhoneCall className="w-6 h-6 text-red-500 animate-pulse" />
            <span>{t.assessment.directPhoneTitle}</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-2">
            <a
              href="tel:09062771999"
              className="bg-red-600 hover:bg-red-700 text-white font-black text-lg sm:text-2xl px-5 py-2.5 rounded-xl shadow border-2 border-red-300 flex items-center gap-2 transition"
            >
              <PhoneCall className="w-5 h-5 fill-white" />
              <span>{t.assessment.phoneMobile}</span>
            </a>
            <a
              href="tel:0766860049"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-lg px-4 py-2 rounded-xl border border-slate-600 transition"
            >
              <span>{t.assessment.phoneFixed}</span>
            </a>
            <div className="bg-slate-800 text-slate-200 font-bold text-sm sm:text-lg px-4 py-2 rounded-xl border border-slate-600">
              <span>{t.assessment.fax || 'FAX：076-675-8204'}</span>
            </div>
            <a
              href="mailto:jmcoporation55@gmail.com"
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs sm:text-base px-4 py-2 rounded-xl border border-slate-600 transition flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>jmcoporation55@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A365D]">
              {t.assessment.formTitle}
            </h2>
            <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1">
              {lang === 'ja' ? '簡単入力ですぐに高額概算査定金額をご案内いたします。' : 'Fill in simple vehicle details for immediate estimate.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Required Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 車種 (Vehicle Type) */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {t.assessment.requiredLabel}
                  </span>
                  <span>{t.assessment.labels.vehicleType}</span>
                </label>
                <input
                  type="text"
                  name="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleChange}
                  placeholder={t.assessment.placeholders.vehicleType}
                  className="w-full bg-slate-50 border-2 border-slate-300 focus:border-[#1A365D] rounded-xl px-4 py-3 text-slate-900 font-bold text-sm outline-none transition shadow-sm"
                />
              </div>

              {/* 都道府県 (Prefecture) */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {t.assessment.requiredLabel}
                  </span>
                  <span>{t.assessment.labels.prefecture}</span>
                </label>
                <select
                  name="prefecture"
                  required
                  value={formData.prefecture}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-2 border-slate-300 focus:border-[#1A365D] rounded-xl px-4 py-3 text-slate-900 font-bold text-sm outline-none transition shadow-sm cursor-pointer"
                >
                  {PREFECTURES.map((pref) => (
                    <option key={pref} value={pref}>
                      {pref}
                    </option>
                  ))}
                </select>
              </div>

              {/* 電話番号 (Phone) */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {t.assessment.requiredLabel}
                  </span>
                  <span>{t.assessment.labels.phone}</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.assessment.placeholders.phone}
                  className="w-full bg-slate-50 border-2 border-slate-300 focus:border-[#1A365D] rounded-xl px-4 py-3 text-slate-900 font-bold text-sm outline-none transition shadow-sm"
                />
              </div>

              {/* お名前 (Name) */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {t.assessment.requiredLabel}
                  </span>
                  <span>{t.assessment.labels.name}</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.assessment.placeholders.name}
                  className="w-full bg-slate-50 border-2 border-slate-300 focus:border-[#1A365D] rounded-xl px-4 py-3 text-slate-900 font-bold text-sm outline-none transition shadow-sm"
                />
              </div>

            </div>

            {/* Collapsible Accordion (Red Background Bar) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm px-4 py-3 rounded-xl shadow flex items-center justify-between transition cursor-pointer"
              >
                <span>{t.assessment.toggleAccordion}</span>
                {isAccordionOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {isAccordionOpen && (
                <div className="mt-4 p-5 bg-slate-50 rounded-2xl border-2 border-red-200 space-y-4">
                  
                  {/* 売却希望時期 */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 font-black text-slate-800 text-xs sm:text-sm">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {t.assessment.optionalLabel}
                      </span>
                      <span>{t.assessment.labels.desiredTime}</span>
                    </label>
                    <select
                      name="desiredTime"
                      value={formData.desiredTime}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm font-semibold"
                    >
                      <option value="">選択してください</option>
                      <option value="すぐに売りたい（即日）">すぐに売りたい（即日現金化希望）</option>
                      <option value="1週間以内">1週間以内</option>
                      <option value="1ヶ月以内">1ヶ月以内</option>
                      <option value="良い価格が出れば">良い価格が出れば検討したい</option>
                    </select>
                  </div>

                  {/* 連絡可能時間 */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 font-black text-slate-800 text-xs sm:text-sm">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {t.assessment.optionalLabel}
                      </span>
                      <span>{t.assessment.labels.preferredHours}</span>
                    </label>
                    <input
                      type="text"
                      name="preferredHours"
                      value={formData.preferredHours}
                      onChange={handleChange}
                      placeholder="例：午前中、18時以降など"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm font-semibold"
                    />
                  </div>

                  {/* 訪問希望日時 */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 font-black text-slate-800 text-xs sm:text-sm">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {t.assessment.optionalLabel}
                      </span>
                      <span>{t.assessment.labels.visitDateTime}</span>
                    </label>
                    <input
                      type="text"
                      name="visitDateTime"
                      value={formData.visitDateTime}
                      onChange={handleChange}
                      placeholder="例：土日希望、今週末希望など"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm font-semibold"
                    />
                  </div>

                  {/* 備考・ご要望 */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 font-black text-slate-800 text-xs sm:text-sm">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {t.assessment.optionalLabel}
                      </span>
                      <span>{t.assessment.labels.notes}</span>
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder={t.assessment.placeholders.notes}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm font-semibold"
                    />
                  </div>

                </div>
              )}
            </div>

            {/* Hours Note & Email Destination Note */}
            <div className="space-y-1.5 pt-1">
              <div className="text-center text-red-600 font-black text-xs sm:text-sm">
                {t.assessment.hoursNote}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-slate-800 bg-amber-50 border border-amber-300 rounded-lg py-2 px-3 text-xs sm:text-sm font-bold">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{lang === 'ja' ? '※送信先・お問合せメールアドレス：' : '※ Inquiry & Destination Email: '}</span>
                <a href="mailto:jmcoporation55@gmail.com" className="text-red-700 font-black hover:underline">jmcoporation55@gmail.com</a>
              </div>
            </div>

            {/* Submit Button: Blue rounded button with yellow bold text (One-click direct submit) */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-yellow-300 font-black text-xl sm:text-2xl py-4 sm:py-5 px-6 rounded-2xl shadow-xl border-2 border-yellow-300 transition duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin text-yellow-300" />
                    <span>{t.assessment.isSubmittingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 shrink-0" />
                    <span>{t.assessment.submitBtn}</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* 完了確認画面 (送信完了メッセージモーダル) */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-4 border-emerald-500 relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto text-center space-y-5">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Checkmark Icon */}
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border-2 border-emerald-300">
              <CheckCircle className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A365D]">
                {t.assessment.modal.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                {t.assessment.modal.desc}
              </p>
            </div>

            {/* 送信した内容のサマリー */}
            {submittedSummary && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm font-semibold space-y-2">
                <div className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ご送信内容のおさらい</span>
                </div>
                <div><span className="font-bold text-slate-500">お名前:</span> {submittedSummary.name} 様</div>
                <div><span className="font-bold text-slate-500">電話番号:</span> {submittedSummary.phone}</div>
                <div><span className="font-bold text-slate-500">車種・建機名:</span> {submittedSummary.vehicleType}</div>
                <div><span className="font-bold text-slate-500">エリア:</span> {submittedSummary.prefecture}</div>
                {submittedSummary.desiredTime && <div><span className="font-bold text-slate-500">売却希望時期:</span> {submittedSummary.desiredTime}</div>}
              </div>
            )}

            {/* お急ぎ電話ダイレクト案内 */}
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 text-xs sm:text-sm font-bold text-amber-950 space-y-2">
              <div>{t.assessment.modal.fastCall}</div>
              <a
                href="tel:09062771999"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-lg px-6 py-3 rounded-xl shadow-md border-2 border-red-300 transition w-full"
              >
                <PhoneCall className="w-5 h-5 fill-white" />
                <span>090-6277-1999 直通ダイヤル</span>
              </a>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition text-sm cursor-pointer"
            >
              {t.assessment.modal.close}
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
