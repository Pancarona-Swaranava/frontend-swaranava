"use client";

import Link from "next/link";

export default function CommunityCardPage() {
  return (
    <div className="w-full min-h-screen bg-[#efefef]">

      <div className="w-full h-[280px] bg-neutral-300 flex flex-col items-center justify-center">
        <div className="w-[120px] h-[120px] bg-neutral-200 rounded-full" />
      </div>

      <div className="w-full bg-white rounded-t-[60px] p-12 -mt-20">
      
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[32px] font-bold">Saung Angklung</h1>

            <p className="text-neutral-600 mt-2 flex items-center gap-2">
              🌐 Grup publik • 1000 anggota
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-2 bg-black text-white rounded-full">
              Gabung
            </button>
            <button className="px-8 py-2 bg-neutral-300 rounded-full">
              Bagikan
            </button>
          </div>
        </div>

        <div className="mt-10 flex gap-12 border-b pb-3 text-[18px]">
          <Link href="/community/card/about" className="font-bold border-b-2 border-black pb-2">
            Tentang
          </Link>

          <Link href="/community/card/media" className="text-neutral-500 hover:text-black">
            Media
          </Link>

          <Link href="/community/card/members" className="text-neutral-500 hover:text-black">
            Anggota
          </Link>
        </div>

        <div className="mt-10 text-neutral-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
