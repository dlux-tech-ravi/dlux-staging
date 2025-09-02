import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Mark Motion", height: "h-[437px]", width: "w-[525px]" },
  { id: 2, title: "Digital Grain", height: "h-[214px]", width: "w-[305px]" },
  { id: 3, title: "Mark Motion", height: "h-[380px]", width: "w-[305px]" },
  { id: 4, title: "Creative Flow", height: "h-[214px]", width: "w-[305px]" },
  { id: 5, title: "Design Pulse", height: "h-[437px]", width: "w-[525px]" },
  { id: 6, title: "Next Vision", height: "h-[214px]", width: "w-[305px]" },
  { id: 7, title: "UX Mastery", height: "h-[380px]", width: "w-[305px]" },
  { id: 8, title: "Future Lab", height: "h-[214px]", width: "w-[305px]" },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-black text-white px-8 py-12">
      {/* Top row */}
      <div className="flex justify-between items-center mb-10">
        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[20px] font-medium"><span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
       Built for Every Platform
          </span></p>
          <h3 className="text-[24px] font-semibold max-w-3xl">
           Whether you're a project manager, system admin, Fusion builder, or enterprise leader -our library supports every role and every level of experience
          </h3>
        </motion.div>

        {/* Arrows animation */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handlePrev}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentIndex > 0
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black"
                : "border border-purple-400 text-purple-400"
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentIndex < cards.length - 1
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black"
                : "border border-purple-400 text-purple-400"
            }`}
          >
            <ChevronRight />
          </button>
        </motion.div>
      </div>

      {/* Cards row */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 280}px)`,
          }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className={`bg-gray-400 ${card.width} ${card.height} rounded-2xl flex items-end p-4 flex-shrink-0`}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.10 }}
              viewport={{ once: true }}
            >
              <p className="text-white">{card.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
