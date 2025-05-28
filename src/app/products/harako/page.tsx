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
      <Head>
        <title>はらこ飯 | 宮城の美味</title>
      </Head>

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
            <h2 className="text-2xl font-bold">食べ物の説明</h2>
            <p className="leading-relaxed">
              はらこ飯は新鮮な鮭とイクラをあたたかいご飯の上にのせた宮城の郷土料理です。
              秋にしか味わえない、プチプチとした食感と旨味のハーモニーをお楽しみください。
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
            <h2 className="text-2xl font-bold">他と比較したときの違い</h2>
            <p className="leading-relaxed">
              はらこ飯は鮭の旨味がしっかりご飯に染み込んでいる点が特徴。
              ほかの郷土料理と比べても、魚と魚卵を同時に楽しめる贅沢さがあります。
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
          お問い合わせ・ツアー予約はこちら
        </Link>
      </section>
      </main>
    </>
  );
}