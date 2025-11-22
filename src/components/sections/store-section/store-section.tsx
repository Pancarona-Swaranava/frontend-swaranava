"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cards = [
  { id: 1, src: "/placeholder.png" },
  { id: 2, src: "/placeholder.png" },
  { id: 3, src: "/placeholder.png" },
];

export default function StoreSection() {
  const [centerIndex, setCenterIndex] = useState(1); // index 1 = kartu tengah

  // posisi tiap kartu (kiri, tengah, kanan)
  const getPosition = (index: number) => {
    if (index === centerIndex) return "center";
    if (index === (centerIndex + 1) % 3) return "right";
    return "left";
  };

  const handleClick = (index: number) => {
    setCenterIndex(index);
  };

  return (
    <section
      id="store"
      className="section-wrapper text-center mt-32 flex flex-col items-center"
    >
      <h2 className="heading">Lorem Ipsum dolor sit amet</h2>
      <p className="body-text max-w-[600px] mx-auto mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>

      <button className="mt-5 px-6 py-2 border border-black rounded">
        Lihat lebih banyak
      </button>

      {/* ================== SLIDER ================== */}
      <div className="relative w-full flex justify-center mt-16 h-[320px]">
        {cards.map((card, index) => {
          const pos = getPosition(index);

          const variants = {
            center: {
              scale: 1,
              x: 0,
              opacity: 1,
              zIndex: 10,
            },
            left: {
              scale: 0.85,
              x: -220,
              opacity: 0.5,
              zIndex: 5,
            },
            right: {
              scale: 0.85,
              x: 220,
              opacity: 0.5,
              zIndex: 5,
            },
          };

          return (
            <motion.div
              key={card.id}
              className="absolute cursor-pointer"
              onClick={() => handleClick(index)}
              animate={pos}
              variants={variants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-[240px] h-[300px] bg-neutral-300 rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src={card.src}
                  width={200}
                  height={200}
                  alt="gambar"
                  className="opacity-40"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

