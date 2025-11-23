"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ModePage() {
  const router = useRouter();

  const goIntro = () => {
    router.push("/learning/intro");
  };

  return (
    <div className="flex-1 flex flex-col items-center bg-[#3b3d43] text-white">
      <h1 className="mt-10 text-3xl font-bold">Angklung</h1>

      <div className="mt-10 w-[90%] max-w-4xl bg-[#e5e7eb] rounded-3xl px-10 py-12 text-gray-800 shadow-xl flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <button
            type="button"
            onClick={goIntro}
            className="flex-1 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
          >
            <div className="w-40 h-40 relative">
              <Image
                src="/mascot-realtime.png"
                alt="Real Time"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl font-semibold">Real Time</p>
          </button>

          <div className="hidden md:block w-px h-40 bg-gray-400" />
          <div className="block md:hidden w-40 h-px bg-gray-400" />

          <button
            type="button"
            onClick={goIntro}
            className="flex-1 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
          >
            <div className="w-40 h-40 relative">
              <Image
                src="/musik/angklung.png"
                alt="Virtual Play"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl font-semibold">Virtual Play</p>
          </button>
        </div>
      </div>
    </div>
  );
}
