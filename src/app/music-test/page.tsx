"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import * as Tone from "tone";

interface NoteEvent {
  note: string;
  time: number; // Waktu dalam detik (dari Tone.now())
}

const page = () => {
  const samplerRef = useRef<Tone.Sampler | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recordedNotes, setRecordedNotes] = useState<NoteEvent[]>([]);
  const [analysisResult, setAnalysisResult] = useState<string>("");

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
      "A#3": "sounds/angklung/As3.mp3",
      B3: "sounds/angklung/B3.mp3",

      // Oktaf 4 (Tengah)
      C4: "sounds/angklung/C4.mp3",
      D4: "sounds/angklung/D4.mp3",
      E4: "sounds/angklung/E4.mp3",
      F4: "sounds/angklung/F4.mp3",
      "F#4": "sounds/angklung/Fs4.mp3",
      G4: "sounds/angklung/G4.mp3",
      A4: "sounds/angklung/A4.mp3",
      "A#4": "sounds/angklung/As4.mp3",
      B4: "sounds/angklung/B4.mp3",

      C5: "sounds/angklung/C5.mp3",
      D5: "sounds/angklung/D5.mp3",
    };

    const sampler = new Tone.Sampler({
      urls: angklungSamples,
      baseUrl: "/",
      onload: () => {
        setIsLoaded(true);
        console.log("udh di load cuy");
      },
      onerror: (error) => {
        console.error("gagal ngeload", error);
      },
    }).toDestination();

    samplerRef.current = sampler;

    // Cleanup: Matikan sampler saat komponen dicopot
    return () => {
      sampler.dispose();
    };
  }, []);

  // --- 2. Fungsi Memainkan dan Merekam Nada ---
  const playNote = async (note: string) => {
    if (!isLoaded || !samplerRef.current) {
      console.warn("Sampler belum siap.");
      return;
    }

    // Aktifkan AudioContext pada interaksi pengguna pertama
    await Tone.start();

    // Dapatkan waktu saat ini
    const currentTime = Tone.now();

    // Memainkan not: durasi 8n (not seperdelapan)
    samplerRef.current.triggerAttackRelease(note, "8n", currentTime);

    // Merekam data untuk analisis ML
    const newNoteEvent: NoteEvent = {
      note: note,
      time: currentTime,
    };

    setRecordedNotes((prevNotes) => [...prevNotes, newNoteEvent]);
  };

  // --- 3. Fungsi Ekstraksi Fitur Interval Waktu (Pre-ML) ---
  const extractTimeIntervals = useCallback((notes: NoteEvent[]): number[] => {
    if (notes.length <= 1) {
      return [];
    }
    const intervals: number[] = [];
    for (let i = 1; i < notes.length; i++) {
      // Hitung selisih waktu antara not saat ini dan not sebelumnya
      const delta = notes[i].time - notes[i - 1].time;
      intervals.push(delta);
    }
    return intervals;
  }, []);

  // --- 4. Fungsi Analisis Permainan (Placeholder ML) ---
  const analyzePerformance = () => {
    // TODO: ubah format notes ke midi, cari tf model, integrasi ke tf

    if (recordedNotes.length < 2) {
      setAnalysisResult(
        "Permainan terlalu pendek untuk dianalisis (min. 2 not)."
      );
      return;
    }

    // --- Langkah ML Sederhana: Analisis Ritme ---
    const intervals = extractTimeIntervals(recordedNotes);

    // Contoh Sederhana: Bandingkan dengan target tempo 120 BPM (0.5 sekon per ketukan)
    const targetInterval = 0.5;

    // Hitung rata-rata penyimpangan (error)
    const totalError = intervals.reduce(
      (sum: number, current: number) =>
        sum + Math.abs(current - targetInterval),
      0
    );
    const avgError = totalError / intervals.length;

    // Logika Skor (Skor turun seiring naiknya error rata-rata)
    const score = Math.max(0, 100 - avgError * 200); // Pengali 200 agar skor sensitif

    const analysisText = `✅ Analisis Sederhana Selesai!
    Jumlah Not: ${recordedNotes.length}
    Interval Rata-rata: ${avgError.toFixed(3)} sekon.
    Target Interval: ${targetInterval} sekon.
    Skor Akurasi Ritme: ${score.toFixed(2)}%`;

    setAnalysisResult(analysisText);

    // --- TODO: Di sini adalah tempat Anda akan memanggil model TensorFlow.js ---
    // Contoh: tf.loadLayersModel(...).predict(tensorInput)
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-teal-700">
        🎶 Angklung Virtual & AI Analyzer
      </h1>
      <p className="text-lg mb-6 text-gray-600">
        Status: {isLoaded ? "✅ Siap Dimainkan!" : "⏳ Memuat suara..."}
      </p>

      {/* Kontrol Angklung */}
      <div className="flex flex-wrap justify-center max-w-4xl p-4 rounded-lg bg-white">
        {ALL_NOTES.map((note) => (
          <button
            key={note}
            onClick={() => playNote(note)}
            disabled={!isLoaded}
            // Penentuan warna tombol
            className={`m-2 p-3 w-16 text-center rounded-lg shadow-md transition-transform active:scale-95 ${
              note.includes("#")
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-teal-600 hover:bg-teal-500"
            } text-white font-bold text-sm`}
            style={{
              cursor: isLoaded ? "pointer" : "default",
            }}
          >
            {note}
          </button>
        ))}
      </div>

      {/* Tombol Kontrol Analisis */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={analyzePerformance}
          disabled={recordedNotes.length < 2}
          className="p-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          Analisis ({recordedNotes.length} Not)
        </button>
        <button
          onClick={() => {
            setRecordedNotes([]);
            setAnalysisResult("");
          }}
          className="p-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Ulangg
        </button>
      </div>

      {/* Hasil Analisis dan Data Debug */}
      {/* <div className="mt-8 p-6 w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-indigo-700">
          🔬 Hasil Analisis & Data Mentah
        </h3>

        {analysisResult && (
          <pre className="p-4 bg-yellow-100 text-yellow-800 rounded-md overflow-x-auto text-sm mb-4">
            {analysisResult}
          </pre>
        )}

        <h4 className="font-medium mt-4 text-gray-700">
          Data `recordedNotes` ({recordedNotes.length} Not)
        </h4>
        <pre className="mt-2 p-3 bg-gray-800 text-green-400 rounded-md overflow-x-auto text-xs">
          {JSON.stringify(recordedNotes, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default page;
