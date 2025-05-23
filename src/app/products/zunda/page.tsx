// src/app/products/zunda/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'ずんだ餅 | 宮城の美味',
};

export default function ZundaPage() {
  return (
    <main className="py-8">
      {/* Hero Image */}
      <section className="mb-8">
        <img
          src="/images/zunda-hero.jpg"
          alt="ずんだ餅"
          className="w-full rounded-lg"
        />
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">ずんだ餅とは</h2>
        <p className="leading-relaxed">
          枝豆をすりつぶし、砂糖を加えて作る「ずんだ餡」を
          もっちりとしたお餅に絡めた宮城の伝統的な和菓子です。
          甘さと豆の風味が絶妙なバランスで楽しめます。
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        <img src="/images/zunda1.jpg" alt="ずんだ餅1" className="rounded-lg" />
        <img src="/images/zunda2.jpg" alt="ずんだ餅2" className="rounded-lg" />
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