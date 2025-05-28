// src/app/products/seri/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SeriPage() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      
<div
        className={
          `animate-slide-in
           bg-[url('/images/bg3.png')] bg-cover bg-center
           py-16 px-4` // 上下に十分なスペースを確保
        }
      >
      <main className="max-w-4xl mx-auto space-y-16 py-12 px-4">
        {/* ヘッダー画像 */}
        <motion.div
          className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <Image
            src="/images/seri1.jpg"
            alt="せり"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* 食べ物の説明 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative w-full h-48 bg-gray-200 overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <Image
              src="/images/seri2.jpg"
              alt="せりの食材"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <h2 className="text-2xl font-bold">Food Description</h2>
            <p className="leading-relaxed">
             Seri is a spring wild vegetable that can be eaten whole,from roots to stems and leaves, 
              and is characterized by its crunchy texture and refreshing unique aroma. 
              It is also rich in nutrients such as vitamin A, iron, and calcium, making it popular with health-conscious people.
               In addition to simply tasting it as a hot sauce, tempura, or soup, if you make it into a seri pot, the aroma will transfer to other ingredients.
                You can enjoy the deep umami.
                 As a typical ingredient that heralds spring in Miyagi, please try the authentic seri cuisine at least once.
            </p>
          </motion.div>
        </section>

        {/* 他と比較したときの違い */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <h2 className="text-2xl font-bold">Differences when compared to others</h2>
            <p className="leading-relaxed">
              Compared to common leafy vegetables such as spinach and komatsuna, seri is rich in aroma components and has a unique refreshing taste.
               In addition, the rhizome part has a sweet taste, and you can enjoy the contrast of the texture of the stem and leaves.
                It has been used in a variety of cooking methods. 
              With its balance of aroma and texture, it has an appeal that other vegetables do not have.
            </p>
          </motion.div>
          <motion.div
            className="relative w-full h-48 bg-gray-200 overflow-hidden rounded-lg order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <Image
              src="/images/seri3.jpg"
              alt="せり比較"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link
            href="/contact"
            className="px-8 py-4 border-2 rounded hover:bg-gray-200"
          >
            Click here for inquiries and tour reservations
          </Link>
        </section>
      </main>
      </div>
    </>
  );
}
