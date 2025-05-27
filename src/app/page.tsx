// app/ingredients/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedLink } from '../components/AnimatedLink';
const INGREDIENTS = [
  {
    name: 'ずんだ餅',
    key: 'zunda',
    img: '/images/zunda1.jpg',
    desc: '枝豆をすりつぶした甘さ控えめのペーストを絡めたお餅',
  },
  {
    name: '笹かまぼこ',
    key: 'sasakama',
    img: '/images/sasakama1.jpg',
    desc: '笹の葉の形に成型したすり身焼き。ふわふわ食感が特徴',
  },
  {
    name: 'はらこ飯',
    key: 'harako',
    img: '/images/harako1.jpg',
    desc: '鮭とイクラの絶妙なハーモニーを楽しむ郷土料理',
  },
  {
    name: 'せり',
    key: 'seri',
    img: '/images/seri1.jpg',
    desc: '春の香りを感じる爽やかな野菜',
  },
];

export default function IngredientsPage() {
  return (
    <>
      <Head>
        <title>ようこそ、宮城の美味</title>
      </Head>
 <div className="animate-slide-in">
      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">宮城の魅力を海外からの皆様へ</h2>
        <p className="text-lg mb-6">
          花見にぴったりの食材をチェック！
        </p>
      </section>

       <section className="flex justify-center">
        <div className="grid grid-cols-2 gap-20 max-w-screen-md w-full">
          {INGREDIENTS.map((item) => (
            <AnimatedLink
              key={item.key}
              href={`/products/${item.key}`}
              className="block border rounded-lg overflow-hidden hover:shadow-lg"
            >
              <div className="relative h-45 bg-gray-120">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{item.desc}</p>
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