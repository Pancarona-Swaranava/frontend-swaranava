"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const NOTES = ["C", "D", "E", "F", "G", "A", "B", "C'"];

export default function RealtimePage() {
  const router = useRouter();
  const [showResult, setShowResult] = useState(false);

  const handleBack = () => {
    router.push("/learning/level"); // balik ke map level
  };

  const handleNoteClick = (note: string) => {
    // nanti temenmu isi logic bunyi di sini
    console.log("Clicked note:", note);
  };

  const handleMicClick = () => {
    setShowResult(true); // sementara langsung munculin popup
  };

  const restart = () => setShowResult(false);

  const goToMenu = () => {
    router.push("/learning"); 
  };

  const goNext = () => {
    router.push("/learning/level");
  };

  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="flex items-center justify-center mt-6 relative w-full">
        <h1 className="text-3xl font-bold">Nada Dasar</h1>
        <button
          type="button"
          onClick={handleBack}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded-full border border-gray-400"
        >
          Back
        </button>
      </div>

      <div className="mt-12 w-full max-w-5xl mx-auto">
        <div className="border-t-2 border-black" />

        <div className="flex justify-between items-center mt-10 mb-10 px-6 md:px-10">
          {NOTES.map((note) => (
            <button
              key={note}
              type="button"
              onClick={() => handleNoteClick(note)}
              className="text-4xl md:text-5xl font-bold tracking-wide hover:scale-110 transition-transform"
            >
              {note}
            </button>
          ))}
        </div>

        <div className="border-t-2 border-black" />
      </div>

      <div className="flex-1 flex items-start justify-center mt-20 mb-16">
        <button
          type="button"
          onClick={handleMicClick}
          className="flex flex-col items-center gap-3"
        >
          <div className="relative w-24 h-24">
            <Image
              src="/placeholder-mic.png" 
              alt="Mic"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium">Tekan untuk rekam</span>
        </button>
      </div>

      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-[280px] sm:w-[320px] bg-[#d4d4d4] rounded-3xl px-8 py-8 text-center relative shadow-xl">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <div className="bg-[#9ca3af] text-white px-6 py-1 rounded-full text-lg font-bold shadow-md">
                Selamat!
              </div>
            </div>

            <div className="mt-4 mb-2 text-sm text-gray-700 font-semibold">
              Unit 1
            </div>
            <div className="w-28 h-28 rounded-full mx-auto mb-4 relative overflow-hidden">
              <Image
                src="/mascot.png" 
                alt="Maskot Unit 1"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-lg mb-6">
              <span className="font-bold">Skor:</span>{" "}
              <span className="font-extrabold">10/10</span>
            </p>

            <div className="flex items-center justify-between mt-2">
              <button
                type="button"
                onClick={goToMenu}
                className="w-10 h-10 rounded-full bg-[#9ca3af] flex items-center justify-center"
              >
                <span className="text-xl">≡</span>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="w-12 h-12 rounded-full bg-[#4b5563] text-white flex items-center justify-center"
              >
                <span className="text-2xl">➜</span>
              </button>

              <button
                type="button"
                onClick={restart}
                className="w-10 h-10 rounded-full bg-[#9ca3af] flex items-center justify-center"
              >
                <span className="text-xl">↻</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
