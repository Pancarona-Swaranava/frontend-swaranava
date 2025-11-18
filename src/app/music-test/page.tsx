"use client";

import React, { useRef, useEffect, useState } from "react";
import * as Tone from "tone";

const page = () => {
  const samplerRef = useRef<Tone.Sampler | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const ALL_NOTES = [
    "G3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "D4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "D5",
  ];

  useEffect(() => {
    // Definisi mapping file audio ke not musik (MIDI Note)
    const angklungSamples = {
      // Oktaf 3 (Terendah)
      G3: "sounds/angklung/G3.mp3",
      A3: "sounds/angklung/A3.mp3",
      "A#3": "sounds/angklung/As3.mp3", // A sharp 3
      B3: "sounds/angklung/B3.mp3",

      // Oktaf 4 (Tengah)
      C4: "sounds/angklung/C4.mp3",
      D4: "sounds/angklung/D4.mp3",
      E4: "sounds/angklung/E4.mp3",
      F4: "sounds/angklung/F4.mp3",
      "F#4": "sounds/angklung/Fs4.mp3", // F sharp 4
      G4: "sounds/angklung/G4.mp3",
      A4: "sounds/angklung/A4.mp3",
      "A#4": "sounds/angklung/As4.mp3", // A sharp 4
      B4: "sounds/angklung/B4.mp3",

      // Oktaf 5 (Tertinggi)
      C5: "sounds/angklung/C5.mp3",
      D5: "sounds/angklung/D5.mp3",
    };

    // Buat Sampler Tone.js
    const sampler = new Tone.Sampler({
      urls: angklungSamples,
      baseUrl: "/", // Arahkan ke folder public
      onload: () => {
        setIsLoaded(true);
        console.log("Angklung Sampler berhasil dimuat!");
      },
      onerror: (error) => {
        console.error("Gagal memuat sampler:", error);
      },
    }).toDestination(); // Sambungkan output ke speaker

    samplerRef.current = sampler;

    // Cleanup: Matikan sampler saat komponen dicopot
    return () => {
      sampler.dispose();
    };
  }, []);

  const playNote = async (note: string) => {
    if (!isLoaded) {
      console.log("Sampel belum dimuat!");
      return;
    }

    // PENTING: Pastikan AudioContext diaktifkan (memerlukan interaksi pengguna)
    await Tone.start();

    // 'triggerAttackRelease' memainkan not (note) selama durasi (duration)
    // dan pada waktu mulai (time)
    if (samplerRef.current) {
      samplerRef.current.triggerAttackRelease(note, "8n"); // '8n' berarti not seperdelapan
      console.log(`Memainkan ${note}`);
    } else {
      console.warn("Sampler belum tersedia!");
    }
  };

  function trigger() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    // trigger the attack immediately
    synth.triggerAttackRelease("C6", "8n", now);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <p>{isLoaded ? "Sampel siap dimainkan!" : "Memuat suara..."}</p>

      {ALL_NOTES.map((note) => (
        <button
          key={note}
          onClick={() => playNote(note)}
          disabled={!isLoaded}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: isLoaded ? "teal" : "gray",
            color: "white",
            cursor: isLoaded ? "pointer" : "default",
          }}
        >
          {note}
        </button>
      ))}
    </div>
  );
};

export default page;
