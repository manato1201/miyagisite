'use client';

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
            src="/images/bg_M.jpg"
            alt="bg1"
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
              src="/images/bg2_M.jpg"
              alt="bg2"
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
            <h2 className="text-2xl font-bold">白石川堤一目千本桜（大河原町～柴田町）</h2>
            <p className="leading-relaxed">
              Against the backdrop of the Zao mountain range with lingering snow, more than 1,200 cherry trees bloom on the Shiraishi River bank (Shiraishigawazutsumi Hitome Senbonzakura).
              The cherry trees were planted in 1923 and 1927 as a gift from a local businessman, Mr. Takayama.
              In addition to enjoying cherry blossom viewing while walking along the promenade, the Ogawara Cherry Blossom Festival is held every year, with hanami yakatabune (houseboats for cherry blossom viewing) and illumination of the cherry blossoms at night.
              It is a 30-minute train ride from Sendai Station, and the venue can be reached in a few minutes on foot.
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
            <h2 className="text-2xl font-bold">榴岡公園（宮城野区）</h2>
            <p className="leading-relaxed">
               Along with Nishi Park, Tsutsujigaoka Park is a popular hanami spot.
               Lord Tsunamura Date, the fourth lord of the Sendai domain, built “Shakado” to pray for the repose of his mother s soul, and 1,000 weeping cherry trees were planted in the precincts of the temple to provide a place for people to relax.
               Later, due to postwar devastation and old age of the trees, the number of cherry trees decreased, but tree-planting activities have been carried out, and today nearly 360 cherry trees can be seen in the area.
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
              src="/images/bg3_M.jpg"
              alt="bg3"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative w-full h-48 bg-gray-200 overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <Image
              src="/images/bg4_M.jpg"
              alt="bg4"
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
            <h2 className="text-2xl font-bold">仙台城跡・青葉城址（青葉区）</h2>
            <p className="leading-relaxed">
              This is the site of Sendai Castle (Aoba Castle) built by Date Masamune, the founder of the Sendai Domain. The statue of Lord Date Masamune mounted on a horse standing on the ruins of the castle s main citadel and the cherry blossoms are popular, but the author recommends the view around the Sendai City Museum, which stands on the ruins of the castle s third citadel.
              The author recommends the view around the Sendai City Museum, which stands on the ruins of San-no-maru, where you can see the moat “Naganuma” and cherry blossoms, the “cherry blossom path” near the Sendai International Center, and the “Waki Yagura” and cherry blossoms, all of which you will want to capture with your camera.
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
            <h2 className="text-2xl font-bold">三神峯公園（太白区）</h2>
            <p className="leading-relaxed">
               Mikamine Park is known as the park with the most cherry trees in the city, with 750 cherry trees in 48 varieties. The time of full bloom differs depending on the variety, so the park can be enjoyed over a long period of time.
              The park is laid out on grass, so on weekends you can see many locals spreading out leisure sheets and enjoying a picnic while viewing the cherry blossoms.
              A cherry blossom festival is held every year, and stores in the park are open for business, selling original sake and other products only available at the Cherry Blossom Festival.
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
              src="/images/bg5_M.jpg"
              alt="bg5"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative w-full h-48 bg-gray-200 overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <Image
              src="/images/bg6_M.jpg"
              alt="bg6"
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
            <h2 className="text-2xl font-bold">天守閣自然公園（太白区）</h2>
            <p className="leading-relaxed">
              This complex is located in Akiu, Taihaku-ku, known for the Akiu Onsen (Akiu Hot Springs), about 30 minutes by car from the city center.
              It includes a hut-house site garden, a day spa facility, an auto-camping site, and an Italian café.
              The Koyakan Ato Garden, where cherry blossoms can be seen, is a pond garden with a stone garden made of Akiu stones produced in the area, a pond with Nishikigoi carp, a cool bamboo grove, and more than 100 plum trees. Visitors can enjoy cherry blossom viewing while strolling along the promenade.
              Also worth seeing is the giant Edohigan-zakura cherry tree located in the parking lot by the north gate. You will be surprised at the size of the cherry blossoms.
            </p>
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