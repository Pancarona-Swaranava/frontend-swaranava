"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ANGKLUNG_NOTES = [
  "G1",
  "G#1",
  "A1",
  "A#1",
  "B1",
  "C2",
  "C#2",
  "D2",
  "D#2",
  "E2",
  "F2",
  "F#2",
  "G2",
  "G#2",
  "A2",
  "A#2",
  "B2",
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
];

export default function FreeplayPage() {
  const [showNotes, setShowNotes] = useState(true);
  const router = useRouter();

  const handleAngklungClick = (index: number) => {
    console.log("Clicked angklung:", ANGKLUNG_NOTES[index]);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-4 py-10 flex flex-col gap-10">

        <div className="w-full flex justify-center">
          <Image
            src="/asset/logo.png" 
            alt="Logo"
            width={190}          
            height={70}
            className="object-contain"
          />
        </div>
        <div className="relative w-full">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-10">
            {ANGKLUNG_NOTES.map((note, i) => (
              <button
                key={note}
                type="button"
                onClick={() => handleAngklungClick(i)}
                className="relative w-24 h-32 sm:w-28 sm:h-36 lg:w-32 lg:h-40
                           hover:scale-105 transition-transform
                           overflow-hidden "
              >
                <Image
                  src="/musik/angklung.png"
                  alt={note}
                  fill
                  className="object-contain"
                />

                <span
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center
                              text-sm sm:text-base md:text-lg font-semibold text-white
                              drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]
                              transition-opacity ${
                                showNotes ? "opacity-100" : "opacity-0"
                              }`}
                >
                  {note}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => router.back()}
            className="absolute -bottom-6 -left-40 w-16 h-16 rounded-full border-4
                       flex items-center justify-center text-2xl font-semibold
                       text-white bg-black/60 border-white/70"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => setShowNotes((prev) => !prev)}
            className={`absolute -bottom-6 -right-45 w-16 h-16 rounded-full border-4
                        flex items-center justify-center text-lg font-semibold
                        transition-colors ${
                          showNotes
                            ? "bg-white/90 text-gray-900 border-white" 
                            : "bg-white/20 text-white border-white/40" 
                        }`}
          >
            not
          </button>
        </div>
      </div>
    </section>
  );
}
