// app/ingredients/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const INGREDIENTS = [
  {
    name: 'ずんだ餅',
    img: '/images/zunda1.jpg',
    desc: '枝豆をすりつぶした甘さ控えめのペーストを絡めたお餅',
  },
  {
    name: '笹かま',
    img: '/images/sasakama1.jpg',
    desc: '笹の葉の形に成型したすり身焼き。ふわふわ食感が特徴',
  },
  {
    name: 'はらこ飯',
    img: '/images/harako1.jpg',
    desc: '鮭とイクラの絶妙なハーモニーを楽しむ郷土料理',
  },
  {
    name: 'せり',
    img: '/images/seri1.jpg',
    desc: '春の香りを感じる爽やかな野菜',
  },
];

export default function IngredientsPage() {
  return (
    <>
      <Head>
        <title><h2 className="text-4xl font-bold mb-4">ようこそ、宮城の美味へ</h2></title>
      </Head>

      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">ようこそ、宮城の美味へ</h2>
        <p className="text-lg mb-6">
          はらこ飯・せり・ずんだ餅の魅力を海外からの皆様へ
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INGREDIENTS.map((item) => (
          <div key={item.name} className="border rounded-lg overflow-hidden hover:shadow-lg">
            <div className="relative h-40">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
              <Link
                href={`/products/${item.name === 'はらこ飯' ? 'harako' : item.name === 'せりを使った料理' ? 'seri' : item.name === 'ずんだ餅' ? 'zunda' : '#'}`}
                className="mt-3 inline-block text-[var(--c2)] underline"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}