"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Apa itu angklung?",
    content: (
      <p className="leading-relaxed">
        Angklung adalah alat musik tradisional Indonesia yang berasal dari Jawa Barat.
        Instrumen ini terbuat dari bambu dan menghasilkan bunyi ketika digetarkan.
        Setiap tabung bambu pada angklung mewakili nada tertentu, sehingga permainan
        angklung biasanya dilakukan dalam kelompok, di mana setiap orang memegang
        nada yang berbeda.
      </p>
    ),
  },
  {
    title: "Sejarah Singkat",
    content: (
      <p className="leading-relaxed">
        Angklung sudah dikenal sejak ratusan tahun lalu dan awalnya digunakan dalam
        ritual pertanian masyarakat Sunda. Bunyi angklung dipercaya membawa semangat,
        menumbuhkan kebersamaan, dan mengundang keberkahan panen. Pada tahun 2010,
        UNESCO menetapkan angklung sebagai Warisan Budaya Takbenda Dunia, menjadikannya
        salah satu simbol penting musik Nusantara di mata dunia.
      </p>
    ),
  },
  {
    title: "Bagian-Bagian Angklung",
    content: (
      <div className="leading-relaxed space-y-2">
        <p>Satu angklung memiliki tiga bagian utama:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Tabung bambu – menghasilkan nada ketika bergetar</li>
          <li>Rangka kayu/bambu – tempat tabung digantung</li>
          <li>Pengait &amp; alas bawah – menjaga stabilitas saat dimainkan</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Cara Kerja Suara Angklung",
    content: (
      <div className="leading-relaxed space-y-2">
        <p>
          Angklung menghasilkan suara bukan dengan ditiup atau dipetik, tetapi dengan
          getaran. Suara muncul saat pemain:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>menggoyangkan rangka angklung, atau</li>
          <li>menggerakkan tangan dengan teknik tertentu</li>
        </ul>
        <p>
          Getaran tersebut lalu menghasilkan resonansi yang menciptakan bunyi khas
          &quot;clung&quot; yang lembut dan harmonis.
        </p>
      </div>
    ),
  },
  {
    title: "Kenapa Belajar Angklung?",
    content: (
      <div className="leading-relaxed space-y-2">
        <p>Belajar angklung tidak hanya melatih musikalitas, tetapi juga:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>koordinasi tangan</li>
          <li>konsentrasi</li>
          <li>kerja sama (karena bermain angklung biasanya berkelompok)</li>
          <li>mengenalkan filosofi harmoni dalam budaya Sunda</li>
        </ul>
        <p>
          Di aplikasi ini, kamu akan belajar mulai dari pengetahuan dasar, lalu naik ke
          latihan teknik, dan akhirnya memainkan melodi tradisional.
        </p>
      </div>
    ),
  },
];

export default function IntroPage() {
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const isFirst = step === 0;
  const isLast = step === slides.length - 1;
  const current = slides[step];

  const handleNext = () => {
    if (isLast) {
      setShowResult(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) setStep((s) => s - 1);
  };


  const Background = () => (
    <>
      <Image
        src="/background-landingpage.png"
        alt="Background"
        fill
        priority
        className="object-cover -z-20"
      />
      <header className="relative z-10 w-full flex justify-center pt-8">
        <div className="px-8 py-2 bg-black/35 rounded-b-2xl">
          <h1 className="text-3xl font-bold text-white drop-shadow">Angklung</h1>
        </div>
      </header>
    </>
  );

  if (showResult) {
    return (
      <div className="relative min-h-screen flex flex-col items-center text-white">
        <Background />

        <main className="relative z-10 flex-1 flex items-center justify-center w-full">
          <div className="w-[260px] sm:w-[300px] bg-[#d4d4d8] text-gray-900 rounded-3xl shadow-xl px-6 py-7 flex flex-col items-center relative">

            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <div className="bg-[#9ca3af] text-white px-6 py-1 rounded-full text-lg font-bold shadow-md">
                Selamat!
              </div>
            </div>

            <div className="h-4" />

            <p className="text-sm text-gray-700 mb-3 mt-2">Intro</p>
            <div className="w-28 h-28 rounded-full bg-[#f97316] flex items-center justify-center shadow-lg mb-4">
              <span className="text-3xl">🎵</span>
            </div>

            <p className="text-lg font-semibold mb-6">
              Skor: <span className="font-bold">10/10</span>
            </p>

            <div className="w-full flex items-center justify-between mt-2">
              <button
                type="button"
                onClick={() => router.push("/learning/level")}
                className="w-10 h-10 rounded-full bg-[#9ca3af] flex items-center justify-center shadow-inner"
              >
                <span className="text-xl">≡</span>
              </button>

              <button
                type="button"
                onClick={() => router.push("/learning/level")}
                className="w-12 h-12 rounded-full bg-[#4b5563] text-white flex items-center justify-center shadow-md"
              >
                <span className="text-2xl">➜</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setShowResult(false);
                }}
                className="w-10 h-10 rounded-full bg-[#9ca3af] flex items-center justify-center shadow-inner"
              >
                <span className="text-xl">↻</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      <Background />

      <main className="relative z-10 flex-1 flex items-center justify-center w-full px-4">
        <div className="w-[90%] max-w-5xl bg-[#33353b] text-white rounded-3xl px-10 py-10 relative overflow-hidden">

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-0" />

          <div className="relative z-10 flex gap-10 items-center">
            <div className="w-[180px] h-[220px] flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder-intro.png"
                  alt="Angklung"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 pr-6">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                {current.title}
              </h2>
              <div className="text-sm md:text-base">{current.content}</div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={isFirst}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-white ${
                isFirst ? "opacity-0 pointer-events-none" : "hover:bg-white/10"
              }`}
            >
              <span className="text-2xl">←</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white ml-auto hover:bg-white/10"
            >
              {isLast ? <span className="text-2xl">✔</span> : <span className="text-2xl">→</span>}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
