import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title:"Clean Codebase",
    text: "Loved how modular and clean the architecture is tested with all the benefits.",
    name: "Carlos Rivera",
    location: "USA",
    image:"/static/media/client3.ecfbbbc870c2bcf74e5e.png"
  },
  {
    id: 2,
    title:"Great Execution!",    
    text: "The team delivered the project on time and exceeded expectations.",
    name: "Jane Smith",
    location: "USA",
    image:"/static/media/client2.c49a6a673df0d7c79153.png"
  },
  {
    id: 3,
     title:"Tremendous Job Team",
    text: "Really impressed with the UI responsiveness and code clarity application are.",
    name: "John Doe",
    location: "UK",

    image:"/static/media/client1.2c40b1f66e85d4c99d1f.png"
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlides = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 h-[100vh]">
      <div className="flex gap-10 items-start relative">
        {/* Left Column - Dummy Image */}
        <motion.div
          className="relative pb-[250px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src="https://images.ctfassets.net/pj0maraabon4/41J54pCB5auSK01fbl2S1w/fbae03cb12070c737b18d86b09b2cf0b/90.png"
            alt="Dummy"
            className="w-[526px] h-[413px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm text-yellow-400 mb-2"><span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
          Testimonials
          </span> </p>
          <h2 className="text-[55px] font-bold leading-snug mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent mr-1">
          Behind 
          </span>
           Every Workflow,<br />  There's a Story!
          </h2>

          <div className="relative -left-[20%]">
            {/* Testimonial Carousel */}
            <div className="flex gap-6 overflow-hidden h-[280px]">
              <AnimatePresence mode="popLayout">
                {currentSlides.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: i === 0 ? 200 : 400, opacity: 0 }}
                    animate={{ x: i * 500, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 bg-neutral-900 rounded-xl p-6 w-[453px] h-[296px] shadow-lg"
                  >
                    {i === 0 && (
                      <div className="text-6xl text-white absolute top-4 left-4">
                        &quot;
                      </div>
                    )}
                    <div className="pt-8 flex flex-col justify-between h-full">
                      <h4 className="font-bold text-[24px] mb-4">
                        {item.title}
                      </h4>
                      <p className="text-base mb-4 leading-relaxed flex-grow">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16"><img src={item.image} alt={item.name}/> </div>
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          {/* <p className="text-xs text-gray-400">{item.location}</p> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-2 mt-14 pl-[20%] ">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
