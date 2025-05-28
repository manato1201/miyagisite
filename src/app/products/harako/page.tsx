'use client';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HarakoPage() {
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
      

      <main className="max-w-4xl mx-auto space-y-16 py-12 px-4">
        {/* ヘッダー画像 */}
        <motion.div
          className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <Image
            src="/images/harako1.jpg"
            alt="はらこ飯"
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
              src="/images/harako2.jpg"
              alt="はらこ飯の材料"
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
              Harako-meshi is a typical local dish of Miyagi Prefecture, consisting of fresh salmon fillets and ikura (salmon roe) simmered in broth and served over rice.
              Harako-meshi is a typical local dish of Miyagi Prefecture. Seasoned with soy sauce and sake, the rice is filled with the aroma of salmon,
              The salmon roe is also seasoned with soy sauce and sake, which enhances the salmon roe. This dish can only be enjoyed in autumn,
              This dish, which can only be enjoyed in autumn, is an essential part of local festivals and events.
               In addition to fresh salmon, mitsuba and chopped nori are often added for color,
              The dish is visually pleasing as well as aromatically accented. At home, it is easily prepared as takikomi-gohan.
              It is also easily prepared at home as takikomi-gohan (rice cooked with rice), and restaurants offer a variety of variations such as using salmon marinated in miso or adding cream cheese,
              In addition, restaurants offer a variety of variations, such as using miso-marinated salmon or adding cream cheese to the rice.
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
               Compared to kaisen-don (seafood bowl) and ikura-don (salmon roe bowl) in other prefectures, harako-meshi is characterized by soy sauce-based cooked rice.
              Since the rice itself is well seasoned, you can enjoy the deep richness of the ingredients and rice as one.
              In addition, the luxury of being able to taste salmon and salmon roe at the same time is appealing, making this dish richly layered despite its simple preparation.
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
              src="/images/harako3.jpg"
              alt="はらこ飯比較"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Call to Action */}
      <section className="text-center">
        <Link
          href="/contact"
          className="px-8 py-4 border-2 border-[var(--c7)] rounded hover:bg-[var(--c3)]"
        >
          Click here for inquiries and tour reservations
        </Link>
      </section>
      </main>
    </>
  );
}