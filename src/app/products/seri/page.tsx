// src/app/products/seri/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'せり | 宮城の美味',
};

export default function SeriPage() {
  return (
    <main className="py-8">
      {/* Hero Image */}
      <section className="mb-8">
        <img
          src="/images/seri1.jpg"
          alt="せり"
          className="w-full rounded-lg"
        />
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">せりとは</h2>
        <p className="leading-relaxed">
          冬から春にかけて旬を迎える野菜「せり」は、
          シャキシャキとした食感と爽やかな香りが特徴です。おひたしや天ぷら、
          お吸い物など、さまざまな料理に使われます。
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        <img src="/images/seri2.jpg" alt="せり料理1" className="rounded-lg" />
        <img src="/images/seri3.jpg" alt="せり料理2" className="rounded-lg" />
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Link
          href="/contact"
          className="px-8 py-4 border-2 border-[var(--c7)] rounded hover:bg-[var(--c3)]"
        >
          お問い合わせ・ツアー予約はこちら
        </Link>
      </section>
    </main>
  );
}