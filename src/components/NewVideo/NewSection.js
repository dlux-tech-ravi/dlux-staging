import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, image: "https://images.ctfassets.net/pj0maraabon4/7tOyIigqOru1Hl4ipGXjJy/093155d44b0c83f2a9b2a3c634012722/021.png" },
  { id: 2, image: "https://images.ctfassets.net/pj0maraabon4/7tOyIigqOru1Hl4ipGXjJy/093155d44b0c83f2a9b2a3c634012722/021.png" },
  { id: 3, image: "https://images.ctfassets.net/pj0maraabon4/7tOyIigqOru1Hl4ipGXjJy/093155d44b0c83f2a9b2a3c634012722/021.png" },
  { id: 4, image: "https://images.ctfassets.net/pj0maraabon4/7tOyIigqOru1Hl4ipGXjJy/093155d44b0c83f2a9b2a3c634012722/021.png" },
  { id: 5, image: "https://images.ctfassets.net/pj0maraabon4/7tOyIigqOru1Hl4ipGXjJy/093155d44b0c83f2a9b2a3c634012722/021.png" },
];

export default function NewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cards[(activeIndex + i) % cards.length]);
    }
    return visible;
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center pl-[80px] pr-[120px]">
      <div className="flex items-start justify-between w-full">
        {/* Left column - Big Card */}
        <div className="flex items-end overflow-hidden w-full">
          <AnimatePresence mode="wait" custom={direction}>
            {getVisibleCards().map(
              (card, i) =>
                i === 0 && (
                  <motion.div
                    key={card.id}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="rounded-2xl flex-shrink-0 w-[629px] h-[558px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Right Side Content + Small Cards */}
        <div className="flex flex-col gap-6 ml-6 w-full">
          <h2 className="text-[46px] font-semibold">Where Brands Became Icons</h2>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-4 h-4 border rounded-full flex items-center justify-center">⏺</span>
            Proven Impact
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black px-6 py-2 rounded-full font-medium">
              Creative Showcase
            </button>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black flex items-center justify-center"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex gap-4 mt-6 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {getVisibleCards()
                .slice(1)
                .map((card) => (
                  <motion.div
                    key={card.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ x: direction === "next" ? -100 : 100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="rounded-2xl flex-shrink-0 w-[305px] h-[298px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-8">
        <div className="w-full h-1 bg-gray-700 rounded">
          <div
            className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 rounded"
            style={{ width: `${((activeIndex + 1) / cards.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
