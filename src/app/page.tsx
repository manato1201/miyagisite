// app/ingredients/page.tsx

import Image from 'next/image';
import { AnimatedLink } from '../components/AnimatedLink';

const INGREDIENTS = [
  { name: 'Zunda mochi',   key: 'zunda',    img: '/images/zunda1.jpg',   desc: 'Mochi rice cake with a sweetened paste of mashed edamame beans' },
  { name: 'Bamboo kamaboko', key: 'sasakama', img: '/images/sasakama1.jpg', desc: 'Surimi baked in the shape of a bamboo grass leaf. Characterized by its fluffy texture.' },
  { name: 'Harako meshi',   key: 'harako',   img: '/images/harako1.jpg',   desc: 'A local delicacy with the perfect harmony of salmon and salmon roe' },
  { name: 'Seri',       key: 'seri',     img: '/images/seri1.jpg',     desc: 'Refreshing vegetable with a good balance of textures and spring aroma' },
];

export default function IngredientsPage() {
  return (
    <>
      

      {/* ラッパーに上下パディングを追加し、背景高さは自動に */}
      <div
        className={
          `animate-slide-in
           bg-[url('/images/loading1.png')] bg-cover bg-center
           py-16 px-4` // 上下に十分なスペースを確保
        }
      >
        <section className="text-center mb-12 bg-[var(--c5)] text-block py-8 px-4 rounded-lg max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-4">Bringing the charm of Miyagi to people from overseas</h2>
          <p className="text-lg mb-6">
            Check out the best foods for Hanami!
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <AnimatedLink
            href="/products/miyagi"
            className="px-8 py-4 bg-[var(--c4)] text-black rounded hover:bg-[var(--c2)]"
          >
            Click here for Miyagi Prefecture's famous places and flower-viewing spots.
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
                  <p className="text-sm text-gray-800 mb-4">{item.desc}</p>
                  <span className="text-[var(--c7)] underline">Go to details ▶</span>
                </div>
              </AnimatedLink>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
