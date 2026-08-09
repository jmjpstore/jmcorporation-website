import React from 'react';
import { Language } from '../types';
import { Truck, Wrench, FileCheck, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface SeoArticleSectionProps {
  lang: Language;
  onScrollToForm: () => void;
}

export const SeoArticleSection: React.FC<SeoArticleSectionProps> = ({ lang, onScrollToForm }) => {
  if (lang !== 'ja') return null; // 日本語環境向けのSEO対策記事

  return (
    <section className="py-12 bg-white border-t border-slate-200" id="seo-guide">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* バナー風見出しタグ */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Truck className="w-4 h-4 text-amber-700" />
            プロが解説する買取＆処分ガイド
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight text-impact-ja">
            【2026年最新】重機・トラック・農機を高く売るなら？高額査定の秘密と事故車・動かない機械も高価買取される理由を徹底解説！
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            「重機 買取」「トラック 高額査定」「農機 処分」「富山 車 買取」でお探しの方必見！専門バイヤーが教える高額売却ノウハウ。
          </p>
        </div>

        {/* 記事本文コンテンツ */}
        <article className="prose prose-slate max-w-none bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          
          {/* 序文 */}
          <div className="bg-white p-5 rounded-xl border-l-4 border-amber-500 shadow-sm text-sm sm:text-base text-slate-700 leading-relaxed">
            建機・重機やトラック、農機具、お車をご売却・処分される際、「古くて動かないから値がつかないのでは…」「事故車や過走行車だから処分費用がかかるのでは…」とお悩みではありませんか？
            実は、専門の海外輸出ネットワークや直営ルートを持つ買取専門店を利用することで、動かない機械でも想像以上の<b>「高額査定」</b>がつくケースが数多くあります。
            本記事では、プロの視点から重機・トラック・農機が高く売れる理由と、少しでも買取額をアップさせる実践的なコツをわかりやすく解説します。
          </div>

          {/* H2 - 高く売れる理由 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b-2 border-amber-500 pb-2 flex items-center gap-2">
              <Truck className="w-6 h-6 text-amber-600 shrink-0" />
              1. なぜ重機やトラック、農機具は年式が古くても高く売れるのか？
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              乗用車であれば「10年10万キロ」が一つの廃車目安とされることが多いですが、<strong>重機（油圧ショベル・フォークリフト・ブルドーザー等）やトラック、農機（トラクター・コンバイン）</strong>においてはその常識が当てはまりません。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-base text-slate-900 mb-2 text-amber-700 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> 海外での「Made in Japan」信頼度
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  東南アジア・中東・アフリカなど世界中の建設・農業現場において、日本の重機・トラック・農機具は「エンジンが頑丈で壊れにくい」と圧倒的な人気を誇ります。
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-base text-slate-900 mb-2 text-amber-700 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> 部品・パーツとしての希少価値
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  たとえエンジンが動かない不動機や事故車であっても、油圧ポンプ、キャタピラ、シリンダーなどの部品価値や金属リサイクル価値が高いため、高値で取引されます。
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-base text-slate-900 mb-2 text-amber-700 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> 直営自社ルートによる中間マージンカット
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  オークションや他社仲介を挟まない完全直営の自社買取・自社輸出業者であれば、不要な手数料が発生せず、その分をお客様への査定額にそのまま還元できます。
                </p>
              </div>
            </div>
          </section>

          {/* H2 - 高く売るための3つのコツ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b-2 border-amber-500 pb-2 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-amber-600 shrink-0" />
              2. 重機・トラック・農機を少しでも高く売るための3つのコツ
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              査定を受ける前に少しの工夫をするだけで、買取金額が数万円〜数十万円アップすることもあります。プロが現場でチェックしているポイントを押さえておきましょう。
            </p>

            <div className="space-y-4 mt-2">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                <div className="bg-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-lg text-sm shrink-0">
                  Point 01
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                    査定前の「泥汚れの洗浄・清掃」で第一印象を整える
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    農機具や建設機械は現場での泥汚れがつきものですが、事前に高圧洗浄機などでキャビン内や外観の汚れを落としておくことで、「丁寧に使用されていた車両」と判断され、査定員の評価が高くなります。
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                <div className="bg-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-lg text-sm shrink-0">
                  Point 02
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                    車検証・取扱説明書・点検整備記録簿（メンテナンスノート）を揃える
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    過去のオイル交換履歴や部品交換歴がわかる点検整備記録簿（取扱説明書・メンテナンスノート）が揃っていると、機械の状態を客観的に証明でき、高額査定に直結します。
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                <div className="bg-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-lg text-sm shrink-0">
                  Point 03
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                    使わなくなったら「放置せず早めの査定時期」に売却する
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    長期間屋根のない屋外に放置すると、バッテリー上がりや油圧ホースの劣化、金属の錆びが進行して査定額が低下します。「売ろうかな」と思ったタイミングが最大の売り時です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* H2 - FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b-2 border-amber-500 pb-2 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-600 shrink-0" />
              3. よくある質問（FAQ：重機・農機処分・車買取）
            </h2>

            <div className="space-y-3 mt-3">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2 mb-2">
                  <span className="text-red-600 font-black text-lg">Q.</span>
                  動かない故障した重機や、納屋に長年放置された農機の処分・買取も可能ですか？
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed border-l-2 border-amber-400">
                  <strong>はい、喜んで承ります！</strong> 当社は動かない不動機やエンジン不調のトラック、事故車・過走行車でも積極的に買い取っております。自社セルフローダーや積載車を完備しているため、現地へのレッカー引取対応も可能です。
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2 mb-2">
                  <span className="text-red-600 font-black text-lg">Q.</span>
                  富山県内や北陸・全国出張査定に費用や出張料はかかりますか？
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed border-l-2 border-amber-400">
                  <strong>査定費用・出張料・名義変更代行費用はすべて完全無料です。</strong> 「富山 車 買取」「北陸 重機 査定」はもちろん、全国どこへでも無料出張査定にお伺いいたします。提示金額にご納得いただけない場合でもキャンセル料等は一切発生致しません。
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2 mb-2">
                  <span className="text-red-600 font-black text-lg">Q.</span>
                  法人名義の大型トラックやダンプ、複数台まとめての査定も可能ですか？
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed border-l-2 border-amber-400">
                  <strong>法人の事業整理・フリート一括売却にも対応しています。</strong> 大型トラック・バス・油圧ショベル等、複数台のまとめての査定・即金買取りも得意としております。書類手続き（抹消登録等）もすべて当社で代行いたしますので安心してご相談ください。
                </p>
              </div>
            </div>
          </section>

          {/* H2 - まとめ */}
          <section className="bg-amber-500/10 p-6 rounded-xl border border-amber-400/40 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-700" />
              まとめ：重機・トラック・農機の高額査定・安心処分なら株式会社JMコーポレーションへ
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              重機買取・農機処分・トラック高額査定・富山車買取において、一番重要なのは<strong>「自社直接買取・輸出体制を持つ信頼できる専門店を選ぶこと」</strong>です。
              写真をお送りいただく直通LINEや、お電話（090-6277-1999）、Webフォームにて最短即日で概算査定額をお答えいたします。まずはお気軽にご相談ください！
            </p>

            <div className="pt-2 text-center">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg transition active:scale-95 cursor-pointer"
              >
                無料オンライン＆LINE査定はこちら
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

        </article>

      </div>
    </section>
  );
};
