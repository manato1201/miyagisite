// app/ingredients/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import { AnimatedLink } from '../components/AnimatedLink';

const INGREDIENTS = [
  { name: 'ずんだ餅',   key: 'zunda',    img: '/images/zunda1.jpg',   desc: '枝豆をすりつぶした甘さ控えめのペーストを絡めたお餅' },
  { name: '笹かまぼこ', key: 'sasakama', img: '/images/sasakama1.jpg', desc: '笹の葉の形に成型したすり身焼き。ふわふわ食感が特徴' },
  { name: 'はらこ飯',   key: 'harako',   img: '/images/harako1.jpg',   desc: '鮭とイクラの絶妙なハーモニーを楽しむ郷土料理' },
  { name: 'せり',       key: 'seri',     img: '/images/seri1.jpg',     desc: '春の香りを感じる爽やかな野菜' },
];

export default function IngredientsPage() {
  return (
    <>
      <Head>
        <title>ようこそ、宮城の美味</title>
      </Head>

      {/* ラッパーに上下パディングを追加し、背景高さは自動に */}
      <div
        className={
          `animate-slide-in
           bg-[url('/images/loading1.png')] bg-cover bg-center
           py-16 px-4` // 上下に十分なスペースを確保
        }
      >
        <section className="text-center mb-12 bg-[var(--c5)] text-block py-8 px-4 rounded-lg max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-4">宮城の魅力を海外からの皆様へ</h2>
          <p className="text-lg mb-6">
            花見にぴったりの食材をチェック！
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <AnimatedLink
            href="/products/miyagi"
            className="px-8 py-4 bg-[var(--c4)] text-black rounded hover:bg-[var(--c2)]"
          >
            宮城県の名所・花見スポットはこちら
          </AnimatedLink>
        </section>

        <section className="flex justify-center">
          <div className="grid grid-cols-2 gap-20 max-w-screen-md w-full">
            {INGREDIENTS.map((item) => (
              <AnimatedLink
                key={item.key}
                href={`/products/${item.key}`}
                className="block border rounded-lg overflow-hidden hover:shadow-lg"
              >
                <div className="relative h-52 bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                  <span className="text-[var(--c7)] underline">詳細へ ▶</span>
                </div>
              </AnimatedLink>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
