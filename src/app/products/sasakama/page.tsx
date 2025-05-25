// src/app/products/sasakama/page.tsx
import Link from 'next/link';

export const metadata = {
  title: '笹かま | 宮城の美味',
};

export default function SasakamaPage() {
  return (
    <main className="py-8">
      {/* Hero Image */}
      <section className="mb-8">
        <img
          src="/images/sasakama1.jpg"
          alt="笹かま"
          className="w-full rounded-lg"
        />
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">笹かまとは</h2>
        <p className="leading-relaxed">
          笹の葉の形に成型した魚のすり身焼き「笹かま」。ふわふわの食感と
          ほんのり漂う笹の香りが魅力で、軽いおつまみやお土産として人気です。
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        <img src="/images/sasakama2.jpg" alt="笹かま1" className="rounded-lg" />
        <img src="/images/sasakama3.jpg" alt="笹かま2" className="rounded-lg" />
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