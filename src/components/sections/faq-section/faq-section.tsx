"use client";

import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="container1100 py-[150px]">
      <h2 className="text-[40px] font-bold mb-10">FAQ</h2>

      <div className="flex gap-20">
        <div className="w-[250px] mt-4">
          <p className="text-[40px] font-bold mb-4">
            Masih punya pertanyaan?
          </p>
          <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded text-[24px]">
            Tanya di sini! →
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <div
                className="flex justify-between items-center bg-neutral-300 px-6 py-4 rounded-[40px] cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <p className="text-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <span className="text-[32px]">{open === i ? "×" : "+"}</span>
              </div>

              {open === i && (
                <div className="bg-neutral-300 mt-2 p-6 rounded-[40px] text-[24px] text-neutral-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua...
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
