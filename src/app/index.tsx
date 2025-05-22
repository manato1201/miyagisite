// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>宮城の美味 | Home</title>
      </Head>

      {/* Hero Section */}
      <section className="text-center mb-12 relative">
        <h2 className="text-4xl font-bold mb-4">ようこそ、宮城の美味へ</h2>
        <p className="text-lg mb-6">
          はらこ飯・せり・ずんだ餅の魅力を海外からの皆様へ
        </p>
        <Link href="/products/harako">
          <a className="px-6 py-3 border-2 border-[var(--c2)] rounded hover:bg-[var(--c2)]">
            まずは“はらこ飯”を見る
          </a>
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'はらこ飯', href: '/products/harako', desc: '鮭とイクラの絶妙なハーモニー' },
          { name: 'せり',     href: '/products/seri',   desc: '春の香りを感じる爽やかな野菜' },
          { name: 'ずんだ餅', href: '/products/zunda',  desc: '甘さと食感が楽しい伝統のお菓子' },
        ].map((item) => (
          <div key={item.name} className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
            <p>{item.desc}</p>
            <Link href={item.href}>
              <a className="mt-4 inline-block text-[var(--c3)] underline">
                詳細へ
              </a>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}