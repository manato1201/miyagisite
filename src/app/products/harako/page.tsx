// app/products/harako/page.tsx
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'はらこ飯 | 宮城の美味',
};

export default function HarakoPage() {
  return (
    <main className="py-8">
      {/* Hero Image */}
      <section className="mb-8">
        <img
          src="/images/harako-hero.jpg"
          alt="はらこ飯"
          className="w-full rounded-lg"
        />
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">はらこ飯とは</h2>
        <p className="leading-relaxed">
          秋に収穫される鮭の身とイクラをあたたかいご飯の上にのせた郷土料理です。
          新鮮な鮭のうまみとプチプチ食感のイクラが絶妙にマッチし、
          一度食べたら忘れられない味わいを楽しめます。
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        <img src="/images/harako1.jpg" alt="はらこ飯1" className="rounded-lg" />
        <img src="/images/harako2.jpg" alt="はらこ飯2" className="rounded-lg" />
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Link
          href="/contact"
          className="px-8 py-4 border-2 border-[var(--c2)] rounded hover:bg-[var(--c2)]"
        >
          お問い合わせ・ツアー予約はこちら
        </Link>
      </section>
    </main>
  );
}