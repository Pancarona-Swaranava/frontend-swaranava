"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Done() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/background-landingpage.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="container1100 w-full px-6 md:px-0 py-[80px]">
        <div className="flex justify-center mb-16">
          <div className="h-[14px] w-full max-w-[780px] rounded-full bg-[#2b052b]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-[40px] font-bold mb-6 text-[#f6c15c]">
              Kamu sudah siap!
            </h1>

            <p className="text-[20px] leading-relaxed mb-10 text-[#ffe2a6]">
              Swaraspace adalah ruang digital untuk kamu menjelajahi dan
              memainkan alat musik tradisional secara interaktif. Eksplor
              SwaraSpace sekarang!
            </p>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="relative w-[600px] h-[80px] cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/asset/lanjut.png"
                alt="Lanjut ke Beranda"
                fill
                className="object-contain"
              />
              <span className="sr-only">Lanjut ke Beranda</span>
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/asset/mascot.png"
              alt="Maskot SwaraSpace"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
