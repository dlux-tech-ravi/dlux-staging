"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Rebel Roots — Cultural Disruption Campaign",
    cta: "View Portfolio",
    image:
      "https://images.ctfassets.net/pj0maraabon4/7tOyIigqOru1Hl4ipGXjJy/093155d44b0c83f2a9b2a3c634012722/021.png",
  },
  {
    id: 2,
    title: "Urban Vision — Creative Branding Project",
    cta: "Explore Work",
    image:
      "https://images.ctfassets.net/pj0maraabon4/3Q0eCGn44WyQ7H8Qak8gOu/904deb80160f3365f6556904d1a14458/thumbnail_01.png",
  },
  {
    id: 3,
    title: "Digital Dreams — Futuristic UI/UX Concept",
    cta: "See Details",
    image:
      "https://images.ctfassets.net/pj0maraabon4/3H6gS0GTd3qBH63xDWdXBI/35eb26c47b64661d3c8e65d9d4019fbf/0321.png",
  },
];

export default function LeftCarousel() {
  const [index, setIndex] = useState(0);
  const len = SLIDES.length;
  const nextIndex = (index + 1) % len;

  const goNext = () => {
    setIndex((i) => (i + 1) % len);
  };

  const activeCard = {
    initial: { opacity: 0, scale: 0.9, x: 60 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 1.05, x: -60 },
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  };

  const nextCard = {
    initial: { opacity: 0, scale: 0.8, x: -220 },
    animate: { opacity: 0.7, scale: 0.9, x: -120 },
    exit: { opacity: 0, scale: 0.85, x: -220 },
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  };

  return (
    <section className="bg-black text-white mt-[70px] mb-[70px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(128,0,255,0.25),transparent_70%)]" />
      <div className="mx-auto w-full px-6 py-16">
        <div className="flex items-center gap-12 md:grid-cols-2">
          {/* LEFT COLUMN (Content) */}
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[50%] px-[50px]"
          >
            <h2 className="text-[70px] font-semibold leading-tight md:text-5xl">
              {SLIDES[index].title}
            </h2>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 px-6 py-2.5 font-semibold text-black hover:bg-yellow-300"
              >
                {SLIDES[index].cta}
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Cards) */}
          <motion.div
            className="relative w-[50%] flex h-[28rem] items-center justify-start"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
          >
            <div className="relative h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {/* Active Card */}
                <motion.div
                  key={`active-${SLIDES[index].id}`}
                  variants={activeCard}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={activeCard.transition}
                  className="relative z-20 h-[550px] w-[520px] rounded-3xl shadow-2xl overflow-hidden"
                >
                  <motion.img
                    src={SLIDES[index].image}
                    alt={SLIDES[index].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Next Preview Card (on LEFT side of active card) */}
                <motion.div
                  key={`next-${SLIDES[nextIndex].id}`}
                  variants={nextCard}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={nextCard.transition}
                  className="absolute z-10 h-[415px] w-[372px] rounded-3xl shadow-xl overflow-hidden -right-[95%]"
                >
                  <motion.img
                    src={SLIDES[nextIndex].image}
                    alt={SLIDES[nextIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Button */}
              <button
                onClick={goNext}
                className="absolute z-[9999] left-[97%] top-1/2 -translate-y-1/2 rounded-full bg-white p-6 text-black shadow-lg hover:scale-105 transition"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
