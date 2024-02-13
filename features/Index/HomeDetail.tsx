import React from 'react';

const HomeDetail = () => {
  return (
    <article className='max-w-4xl mx-auto'>
      <main>
        <section className='py-6'>
          <h1 className='text-3xl font-bold pb-4'>ここカフェん</h1> {/* 見出しの下の余白を広げる */}
          <p>
            『ここカフェん』は、あなたの周りの隠れた名店、個性豊かな個人運営のカフェを見つけるお手伝いをします。
          </p>
        </section>
        <section aria-labelledby='how-to-use-guide' className='py-4'>
          <h2 className='text-2xl font-bold py-2' id='how-to-use-guide'>
            使い方ガイド
          </h2>
          <dl className='space-y-4'>
            <div>
              <dt className='font-semibold'>位置情報の許可</dt>
              <dd>
                アプリがあなたの現在地を把握するため、位置情報の使用を許可してください。(許可しなくても使用可能です！)
              </dd>
            </div>
            <div>
              <dt className='font-semibold'>カフェを探す</dt>
              <dd>画面下部の「カフェを探す」ボタンをタップして、周辺のカフェを探索しましょう。</dd>
            </div>
            <div>
              <dt className='font-semibold'>カフェの詳細をチェック</dt>
              <dd>興味があるカフェを見つけたら、タップして詳細情報をチェック。</dd>
            </div>
            <div>
              <dt className='font-semibold'>カフェへの道のり</dt>
              <dd>「GoogleMapで開く」を選択して、カフェまでの道のりを簡単に調べられます。</dd>
            </div>
          </dl>
        </section>
        <section aria-labelledby='tips'>
          <h2 className='text-2xl font-bold pt-4 pb-2' id='tips'>
            ヒント
          </h2>
          <p>検索バーを使用して、特定のエリアやカフェ名で検索することも可能です。</p>
        </section>
        <section className='py-4' aria-labelledby='feedback'>
          <h2 className='text-2xl font-bold pt-4 pb-2' id='feedback'>
            ご意見・ご要望
          </h2>
          <p>
            『ここカフェん』を使って素敵なカフェタイムをお過ごしください。ご意見やご要望は、アプリ内からお気軽にお寄せください。
          </p>
        </section>
      </main>
    </article>
  );
};

export default HomeDetail;
