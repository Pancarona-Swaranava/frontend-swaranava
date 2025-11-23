"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const instruments = [
  { id: 1, title: "Angklung", imageSrc: "/musik/a1.png", locked: false },
  { id: 2, title: "Kolintang", imageSrc: "/musik/a2.png", locked: true },
  { id: 3, title: "Saron", imageSrc: "/musik/a3.png", locked: true },
  { id: 4, title: "Segera Hadir 1", imageSrc: "/musik/a4.png", locked: true },
  { id: 5, title: "Segera Hadir 2", imageSrc: "/musik/a4.png", locked: true },
];

export default function InstrumentMenuPage() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const rowRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goToIndex = (index: number) => {
    if (index < 0 || index >= instruments.length) return;
    setActiveIndex(index);

    const container = rowRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const targetScroll =
      cardLeft - container.clientWidth / 2 + cardWidth / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const handleCardClick = (locked: boolean) => {
    if (locked) {
      setShowPopup(true);
    } else {
      router.push("/learning/menu");
    }
  };

  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden">
      <Image
        src="/musik/background-landingpage.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-10 py-8 min-h-screen flex flex-col">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="relative w-12 h-12"
          >
            <Image
              src="/asset/kiri.png"
              alt="Back"
              fill
              className="object-contain"
            />
          </button>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-lg shadow-black/40">
              <span className="text-xl font-semibold"></span>
            </div>
            <div className="leading-tight text-center">
              <p className="font-semibold text-lg">Renuno Yuqa Frinardi</p>
              <p className="text-sm opacity-80">Course 1</p>
            </div>
          </div>

          <button
            type="button"
            className="relative w-12 h-12"
          >
            <Image
              src="/asset/chat.png"
              alt="Chat"
              fill
              className="object-contain"
            />
          </button>
        </div>

        <div className="flex-1 flex items-start justify-center pt-10">
          <div
            ref={rowRef}
            className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {instruments.map((item, index) => (
              <button
                key={item.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                type="button"
                onClick={() => handleCardClick(item.locked)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className="flex-shrink-0 hover:-translate-y-2 transition-transform"
              >
                <div className="relative w-[260px] h-[420px]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pb-10 flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={() => goToIndex(activeIndex - 1)}
            className="text-2xl text-amber-300"
          >
            ‹
          </button>

          <div className="flex items-center gap-4">
            {[0, 1, 2, 3].map((i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToIndex(i)}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={isActive ? "/asset/scroll1.png" : "/asset/scroll2.png"}
                    alt=""
                    width={isActive ? 32 : 20}
                    height={isActive ? 32 : 20}
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goToIndex(activeIndex + 1)}
            className="text-2xl text-amber-300"
          >
            ›
          </button>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/60"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative w-[320px] sm:w-[400px] md:w-[460px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/musik/hadiir.png"
              alt="Segera Hadir"
              width={460}
              height={320}
              className="w-full h-auto object-contain"
            />

            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
              className="
                absolute
                top-8
                right-10
                w-8 h-8
                flex items-center justify-center
                cursor-pointer
              "
            >
              <span className="text-2xl font-bold text-[#4b1035] leading-none">
                ×
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
