"use client";

import { useState } from "react";

type EventItem = {
  id: number;
  name: string;
  description: string;
};

const EVENTS: EventItem[] = [
  {
    id: 1,
    name: "Nama Event 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Nama Event 2",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Nama Event 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function EventSection() {
  const [activeId, setActiveId] = useState<number>(3);

  return (
    <section
      id="event"
      className="container1100 py-[120px] flex flex-col md:flex-row gap-[60px]"
    >
      <div className="md:w-1/2">
        <h2 className="text-[40px] font-bold leading-tight">
          Lorem Ipsum dolor
          <br />
          sit amet
        </h2>

        <p className="mt-8 text-[24px] text-neutral-600 leading-relaxed max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <button className="mt-10 bg-black text-white px-10 py-4 rounded text-[20px]">
          Lihat lebih banyak
        </button>
      </div>

      <div className="md:w-1/2 flex items-stretch justify-end gap-6">
        {EVENTS.map((event) => {
          const isActive = event.id === activeId;

          if (isActive) {
            return (
              <div
                key={event.id}
                className="bg-neutral-200 rounded-[50px] border w-[360px] h-[480px] px-10 py-10 flex flex-col justify-between cursor-pointer transition-all duration-300"
              >
                <div>
                  <p className="text-[18px] text-neutral-500 mb-2">Nama Event</p>
                  <h3 className="text-[24px] font-bold mb-4">{event.name}</h3>
                  <p className="text-[18px] text-neutral-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <button className="self-start mt-8 px-6 py-2 rounded-full bg-black text-white text-[14px]">
                  Lihat
                </button>
              </div>
            );
          }

          return (
            <button
              key={event.id}
              type="button"
              onClick={() => setActiveId(event.id)}
              className="bg-neutral-200 rounded-[60px] border w-[120px] h-[480px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-neutral-300"
            >
              <span
                className="text-[18px] text-neutral-700"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {event.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
