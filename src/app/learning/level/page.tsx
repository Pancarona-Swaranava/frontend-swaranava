"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ActiveTarget = "intro" | "unit1" | null;

export default function LevelPage() {
  const router = useRouter();
  const [showMode, setShowMode] = useState(false);
  const [activeTarget, setActiveTarget] = useState<ActiveTarget>(null);

  const openModePopup = (target: ActiveTarget) => {
    setActiveTarget(target);
    setShowMode(true);
  };

  const closeModePopup = () => {
    setShowMode(false);
    setActiveTarget(null);
  };

  const handleRealTime = () => {
    setShowMode(false);
    if (activeTarget === "intro") {
      router.push("/learning/intro");
    } else if (activeTarget === "unit1") {
      router.push("/learning/realtime");
    }
  };

  const handleVirtual = () => {
    setShowMode(false);
    if (activeTarget === "intro") {
      router.push("/learning/intro");
    } else if (activeTarget === "unit1") {
      router.push("/learning/virtual");
    }
  };

  return (
    <section className="flex-1 flex flex-col items-center">

      <div className="mt-6 px-4 w-full flex justify-center">
        <div className="bg-gray-400 rounded-[999px] px-6 md:px-10 py-3 md:py-4 shadow-md">
          <h1 className="text-base sm:text-lg md:text-2xl font-bold text-white text-center">
            Level 1: Pengenalan Dasar-Dasar Angklung
          </h1>
        </div>
      </div>

      <div className="mt-6 mb-10 px-4 w-full flex justify-center">
        <div className="relative w-full max-w-[680px] md:max-w-[760px] aspect-[3/4]">
          <Image
            src="/asset/snake.png"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
            priority
          />

          <button
            type="button"
            onClick={() => openModePopup("intro")}
            className="absolute top-[10%] right-[38%] flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/asset/snake1.png"
                alt="Intro"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-black text-center">
              <p className="font-semibold">Intro:</p>
              <p>Pengetahuan Dasar</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => openModePopup("unit1")}
            className="absolute top-[21%] left-[19%] flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/asset/snake1.png"
                alt="Level 1: Unit 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-black text-center">
              <p className="font-semibold">Level 1: Unit 1</p>
              <p>Pengetahuan Dasar</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
            }}
            className="absolute top-[55%] right-[22%] flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/asset/snake1.png"
                alt="Level 1: Unit 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-black text-center">
              <p className="font-semibold">Level 1: Unit 2</p>
              <p>Pergantian Nada</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
            }}
            className="absolute top-[78%] left-[28%] flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/asset/button1.png"
                alt="Level 1: Unit 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-black text-center">
              <p className="font-semibold">Level 1: Unit 3</p>
              <p>Melodi dan ritme</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
            }}
            className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image
                src="/asset/button1.png" 
                alt="Locked"
                fill
                className="object-contain"
              />
            </div>
          </button>
        </div>
      </div>
      <p className="mb-8 text-xs sm:text-sm md:text-base text-gray-100 text-center">
        Ups! Level ini belum bisa dibuka
      </p>

      {showMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[90%] max-w-4xl bg-[#111111] rounded-3xl px-6 md:px-10 py-8 md:py-10 relative text-white">
            <button
              type="button"
              onClick={closeModePopup}
              className="absolute top-4 right-6 text-3xl leading-none"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 mt-6">
              <button
                type="button"
                onClick={handleRealTime}
                className="flex-1 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
                  <Image
                    src="/placeholder-intro.png"
                    alt="Real Time"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xl md:text-2xl font-semibold">Real Time</p>
              </button>

              <div className="hidden md:block w-px h-40 bg-gray-500" />
              <div className="block md:hidden w-40 h-px bg-gray-500" />

              <button
                type="button"
                onClick={handleVirtual}
                className="flex-1 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
                  <Image
                    src="/placeholder-intro.png"
                    alt="Virtual Play"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xl md:text-2xl font-semibold">
                  Virtual Play
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

