"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

type StepKey = "q1" | "q2" | "q3" | "q4" | "q6" | "q7";

type Option = {
  label: string;
  next?: StepKey | "done";
};

type QuestionConfig = {
  progress: string;
  title: React.ReactNode;
  options: Option[];
};

const QUESTIONS: Record<StepKey, QuestionConfig> = {
  q1: {
    progress: "20%",
    title: (
      <>
        Apakah kamu pernah belajar <br /> alat musik tradisional?
      </>
    ),
    options: [
      { label: "Sudah", next: "q2" },
      { label: "Belum", next: "q6" },
    ],
  },
  q2: {
    progress: "40%",
    title: <>Sudah berapa lama kamu belajar?</>,
    options: [
      { label: "< 1 tahun", next: "q3" },
      { label: "< 3 tahun", next: "q3" },
      { label: "> 3 tahun", next: "q3" },
    ],
  },
  q3: {
    progress: "60%",
    title: <>Apakah kamu punya alat musik tradisional sendiri?</>,
    options: [
      { label: "Ya", next: "q4" },
      { label: "Coba Swaraspace", next: "q4" },
    ],
  },
  q4: {
    progress: "80%",
    title: <>Instrumen mana yang kamu ingin pelajari?</>,
    options: [
      { label: "Saron", next: "done" },
      { label: "Angklung", next: "done" },
      { label: "Kendang", next: "done" },
    ],
  },
  q6: {
    progress: "45%",
    title: <>Apakah kamu punya alat musik tradisional sendiri?</>,
    options: [
      { label: "Ya", next: "q7" },
      { label: "Coba Swaraspace", next: "q7" },
    ],
  },
  q7: {
    progress: "75%",
    title: <>Instrumen mana yang kamu ingin pelajari?</>,
    options: [
      { label: "Saron", next: "done" },
      { label: "Angklung", next: "done" },
      { label: "Kendang", next: "done" },
    ],
  },
};

export default function StepQuestionPage() {
  const router = useRouter();
  const [step, setStep] = useState<StepKey>("q1");

  const config = QUESTIONS[step];

  const handleClick = (next?: StepKey | "done") => {
    if (!next) return;
    if (next === "done") {
      router.push("/questions/done");
    } else {
      setStep(next);
    }
  };

  if (!config) return null;

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background-landingpage.png')" }}
    >
      <div className="container1100 py-[120px] text-center">
        {/* PROGRESS BAR */}
        <div className="w-full h-3 bg-neutral-300 rounded-full mb-16">
          <div
            className="h-full bg-black rounded-full"
            style={{ width: config.progress }}
          />
        </div>

        {/* TITLE */}
        <h1 className="text-[40px] font-bold leading-tight mb-16 text-white">
          {config.title}
        </h1>

        {/* OPTIONS */}
        <div className="flex justify-center gap-20 flex-wrap">
          {config.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleClick(opt.next)}
              className="relative w-[300px] h-[150px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/asset/ques.png"
                alt={opt.label}
                fill
                className="object-cover"
              />
              <span className="relative z-10 text-[28px] font-semibold text-white">
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
