// src/app/products/sasakama/page.tsx
'use client';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SasakamaPage() {
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
      

      <main className="max-w-4xl mx-auto space-y-16 py-12 px-4">
        {/* ヘッダー画像 */}
        <motion.div
          className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <Image
            src="/images/sasakama1.jpg"
            alt="笹かまぼこ"
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
              src="/images/sasakama2.jpg"
              alt="笹かまぼこの材料"
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
              Bamboo kamaboko is molded to resemble surimi fish leaves, It is a traditional Miyagi paste that is baked softly.
               It s easy to use for lunch and snacks. Because it uses protein-rich fish surimi, it is also popular as a healthy snack. 
              It is characterized by a slightly fragrant bamboo flavor and a light texture, and can be enjoyed even when cold.
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
              Ordinary kamaboko is fillet and heated, but bamboo kamaboko is characterized by being torn off by hand and eaten as it is. 
              In addition, it is loved as a souvenir that can be enjoyed visually by devising the shape. 
              Since it is finished in a light taste, it is also recommended to enjoy the taste change with lemon or wasabi soy sauce.
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
              src="/images/sasakama3.jpg"
              alt="笹かまぼこ比較"
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
    </>
  );
}
