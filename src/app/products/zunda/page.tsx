// src/app/products/zunda/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ZundaPage() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      
<div
        className={
          `animate-slide-in
           bg-[url('/images/bg4.png')] bg-cover bg-center
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
            src="/images/zunda1.jpg"
            alt="ずんだ餅"
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
              src="/images/zunda2.jpg"
              alt="ずんだ餅の材料"
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
              Zunda mochi is made by boiling and grinding selected edamame beans, and adding sugar and salt to the sloppy bean paste. 
              It is a traditional Japanese confectionery from Miyagi entwined with glutinous rice cakes. 
              The original bright green color and gentle sweetness of the beans It is a feature, and you can enjoy the texture smoothly and the graininess is moderate. 
              It is also rich in vitamin E and dietary fiber, It is a healthy yet satisfying dish. 
              It has also gained popularity in cafes and souvenir shops.
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
             While many general mochi sweets use red bean paste, zuda mochi is based on edamame. 
             The flavor of the beans stands out. 
             Compared to cream and bean paste, it has a lighter texture and a refreshing aftertaste. 
             It is not too sweet and is loved by a wide range of ages. 
             In addition, seasonal pistachio flavors and matcha flavors There are also many variations.
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
              src="/images/zunda3.jpg"
              alt="ずんだ餅比較"
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
