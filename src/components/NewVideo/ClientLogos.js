import React from "react";
import { motion } from "framer-motion";

const fleetData = [
  { title: "Luxury Sedans", img: "https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif" },
  { title: "SUVs", img:"https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif"},
  { title: "Convertibles", img: "https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif" },
  { title: "Sports Cars", img: "https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif"},
  { title: "Electric Cars", img: "https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif"},
  { title: "Limousines", img: "https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif" },
  { title: "Pickup Trucks", img: "https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif" },
  { title: "Vans", img:"https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif" },
];

const ClientLogos = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold">
          Our Proud {" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl text-center m-auto">
         We are honored to collaborate with trusted partners who share our vision and contribute to our collective success.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-6 animate-marquee"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {[...fleetData, ...fleetData].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-w-[250px] max-w-[250px] bg-[#111] rounded-xl p-6 border border-gray-700 flex flex-col items-center justify-center shadow-md"
            >
              <img src={item.img} alt={item.title} className="w-32 h-20 mb-4" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
