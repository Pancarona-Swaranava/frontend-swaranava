"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LearningMenuPage() {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-6xl rounded-[32px] px-16 py-12">
    
        <Image
          src="/asset/card1.png"
          alt=""
          aria-hidden="true"
          fill
          className="absolute inset-0 -z-10 object-cover rounded-[32px]"
          priority
        />

        <div className="flex flex-wrap justify-center gap-12 mt-4">
       
          <button
            type="button"
            onClick={() => router.push("/learning/freeplay")}
            className="w-[300px] h-[380px] bg-[#e5e7eb] rounded-[28px] border border-black 
                       flex flex-col items-center justify-start pt-10 
                       hover:scale-105 transition-transform cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-6">Free Play</h2>
            <div className="relative w-44 h-44">
              <Image
                src="/placeholder-freeplay.png"
                alt="Free Play"
                fill
                className="object-contain"
              />
            </div>
          </button>
          <button
            type="button"
            onClick={() => router.push("/learning/level")}
            className="w-[300px] h-[380px] bg-[#e5e7eb] rounded-[28px] border border-black 
                       flex flex-col items-center justify-start pt-10 
                       hover:scale-105 transition-transform cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-6">Learning Mode</h2>
            <div className="relative w-44 h-44">
              <Image
                src="/placeholder-learning.png"
                alt="Learning Mode"
                fill
                className="object-contain"
              />
            </div>
          </button>
          <div
            className="w-[300px] h-[380px] bg-[#e5e7eb] rounded-[28px] border border-black 
                       flex flex-col items-center justify-start pt-10"
          >
            <h2 className="text-2xl font-bold mb-6">Play Song</h2>
            <div className="relative w-44 h-44">
              <Image
                src="/placeholder-playsong.png"
                alt="Play Song"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
