"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function CommunityPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const communities = [
    { name: "Saung Angklung" },
    { name: "Saung Angklung" },
  ];


  const CARD_WIDTH = 320;
  const GAP = 56; 
  const TOTAL = CARD_WIDTH + GAP; 

  const detectCenter = () => {
    const el = scrollRef.current;
    if (!el) return;

    const index = Math.round(el.scrollLeft / TOTAL);
    setCenterIndex(index);
  };

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({
      left: index * TOTAL,
      behavior: "smooth",
    });
  };

  // AUTO SNAP ketika berhenti scroll
  useEffect(() => {
    let timeout: any;

    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        scrollToCard(centerIndex);
      }, 120);
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handler);

    return () => el?.removeEventListener("scroll", handler);
  }, [centerIndex]);

  return (
    <div className="min-h-screen px-10 py-16 overflow-hidden">
      <h1 className="text-[42px] font-bold mb-14 tracking-wide">KOMUNITAS</h1>

      <div
        ref={scrollRef}
        onScroll={detectCenter}
        className="
          flex gap-14 overflow-x-scroll scrollbar-none
          snap-x snap-mandatory pb-12
        "
      >
        {communities.map((item, index) => {
          const active = index === centerIndex;

          return (
            <div
              key={index}
              onClick={() => !active && scrollToCard(index)}
              className={`
                min-w-[320px] h-[480px] rounded-[30px] p-8 flex flex-col items-center snap-center
                transition-all duration-300 cursor-pointer

                ${
                  active
                    ? "bg-[#4a4a4a] scale-100 opacity-100 blur-0"
                    : "bg-[#d5d5d5] scale-90 opacity-40 blur-[2px]"
                }
              `}
            >
              <div
                className={`
                  w-[150px] h-[150px] rounded-full mb-6
                  ${active ? "bg-white" : "bg-gray-300"}
                `}
              />

              <h2
                className={`
                  text-[26px] font-bold text-center mt-2
                  ${active ? "text-white" : "text-gray-500"}
                `}
              >
                {item.name}
              </h2>

              <p
                className={`
                  text-center text-[14px] mt-3 leading-relaxed
                  ${
                    active
                      ? "text-white/90"
                      : "text-transparent select-none"
                  }
                `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>

              <div className="mt-auto">
                {active ? (
                  <Link href="/community/card">
                    <button className="px-8 py-3 rounded-full bg-white text-black text-[16px] font-semibold">
                      Gabung
                    </button>
                  </Link>
                ) : (
                  <button className="px-8 py-3 rounded-full bg-gray-300 text-gray-400 text-[16px] font-semibold cursor-default">
                    Gabung
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-center mt-4">
        <div className="w-[80%] h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-500 rounded-full transition-all"
            style={{
              width: `${100 / communities.length}%`,
              marginLeft: `${centerIndex * (100 / communities.length)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
