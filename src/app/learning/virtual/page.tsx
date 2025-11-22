"use client";

import Image from "next/image";
import { useState } from "react";

const TOP_NOTES = ["C", "D", "E", "F", "G", "A", "B", "Cʼ"];

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

export default function VirtualPage() {
  const [showNotes, setShowNotes] = useState(true);

  const handleAngklungClick = (index: number) => {
    console.log("Clicked angklung:", ANGKLUNG_NOTES[index]);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Nada Dasar</h1>

      <div className="w-[90%] max-w-5xl mb-4">
        <div className="border-t-2 border-white mb-6" />
        <div className="flex justify-between text-3xl font-semibold tracking-[0.3em]">
          {TOP_NOTES.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="border-b-2 border-white mt-6" />
      </div>

      <div className="mt-10 w-full flex justify-center mb-16 px-4">
        <div className="relative w-full max-w-5xl">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-10">
            {ANGKLUNG_NOTES.map((note, i) => (
              <button
                key={note}
                type="button"
                onClick={() => handleAngklungClick(i)}
                className="relative w-24 h-32 sm:w-28 sm:h-36 lg:w-32 lg:h-40
                           hover:scale-105 transition-transform overflow-hidden"
              >
                <Image
                  src="/musik/angklung.png"
                  alt={`Angklung nada ${note}`}
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
            onClick={() => setShowNotes((prev) => !prev)}
            className={`absolute -bottom-6 right-0 w-16 h-16 rounded-full border-4
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
