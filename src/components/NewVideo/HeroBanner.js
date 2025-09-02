"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.ctfassets.net/pj0maraabon4/3iuPcGx4zASpWsWetnbdGy/14bcaa319e336ae6d759bd866742703f/02_8.png",
  "https://images.ctfassets.net/pj0maraabon4/U6g7TwkJH7UI8k0dwoO1C/dc7687fe056ef8f07af423eb274bb0b9/Unlock_Salesforce_Flow_Builder-_Your_Key_to_Effortless_Automation_.png",
  "https://images.ctfassets.net/pj0maraabon4/7EfPXl9ZZaHz8NjhtQOi8r/5314dd928d7d5e153796d344e7c7509e/Mastering_Multilingual_Site_Management_with_Adobe_Experience_Manager_MSM.png",
  "https://images.ctfassets.net/pj0maraabon4/g1TWso5qhkM031pfTbtNK/1ecdd71b56804e705124d3212cf059b8/Unlock_Seamless_Security_with_Our_Authentication_Governance_Superbadge_.png",
  "https://images.ctfassets.net/pj0maraabon4/20nzbTepnkkIoYLIdiAw2T/20c680751d0c163c38530666a36779d5/Transform_Your_Media_Booking_Process_with_DLUX.png",
  "https://images.ctfassets.net/pj0maraabon4/7EfPXl9ZZaHz8NjhtQOi8r/5314dd928d7d5e153796d344e7c7509e/Mastering_Multilingual_Site_Management_with_Adobe_Experience_Manager_MSM.png",
  "https://images.ctfassets.net/pj0maraabon4/3iuPcGx4zASpWsWetnbdGy/14bcaa319e336ae6d759bd866742703f/02_8.png",
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // every 3s
    return () => clearInterval(interval);
  }, []);

  // Pick next 7 images for layout
  const currentSet = Array.from({ length: 7 }, (_, i) => {
    return images[(index + i) % images.length];
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-black/90 to-black text-white overflow-hidden">
      {/* Heading + Button */}
       {/* Left side pink glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,112,49,0.24),transparent_70%)]" />

      {/* Right side purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(52, 58, 237, 0.6),transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight">
         DLUX CoE Video Vault
        </h1>
        <p className="max-w-xl text-center mt-6 mb-6">Watch real solutions unfold - with video walkthroughs across Adobe Workfront, Fusion, DAM, Salesforce, and more.</p>
         
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black rounded-full font-medium flex items-center gap-2 hover:bg-yellow-500 transition">
          View Portfolio <ArrowRight size={18} />
        </button>
      </div>

      {/* Static Grid of 7 Divs */}
      <div className="w-full flex justify-between items-end gap-4">
        {/* Left side */}
        <ImageBox src={currentSet[2]} id="2" />
        <div className="flex flex-col gap-6">
          <ImageBox src={currentSet[0]} id="0" height="230px" />
          <ImageBox src={currentSet[1]} id="1" height="160px" />
        </div>

        {/* Big Center */}
        <ImageBox src={currentSet[3]} id="3" big />

        {/* Right side */}
        <div className="flex flex-col gap-6">
          <ImageBox src={currentSet[5]} id="5" height="160px" />
          <ImageBox src={currentSet[6]} id="6" height="230px" />
        </div>
        <ImageBox src={currentSet[4]} id="4" />
      </div>
    </section>
  );
}

function ImageBox({
  src,
  id,
  big = false,
  height,
}: {
  src: string;
  id: string;
  big?: boolean;
  height?: string;
}) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[30px] shadow-md bg-white/30 backdrop-blur-md border border-white/20"
      style={{
        width: big ? "430px" : "300px",
        height: height ? height : big ? "460px" : "230px",
        
      }}
      layout
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={src}
          alt=""
          layoutId={src}
          className="w-full h-full object-cover" // 🔥 removed absolute inset-0
          initial={{ opacity: 0.6, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </motion.div>
  );
}
