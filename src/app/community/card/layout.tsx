"use client";

import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { label: "Tentang", href: "/community/card/about" },
    { label: "Media", href: "/community/card/media" },
    { label: "Anggota", href: "/community/card/members" },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="w-full h-[260px] bg-[#b5b7bc] relative flex justify-center items-center">

        <button className="absolute left-6 top-6 bg-white/70 backdrop-blur p-2 rounded-full text-xl">
          ←
        </button>

        <div className="absolute top-[68%] -translate-y-1/2 w-32 h-32 bg-[#d4d6da] rounded-full border-4 border-white" />
      </div>

      <div className="w-full bg-white rounded-t-[180px] min-h-screen pt-32 pb-20 shadow-sm">

        <div className="max-w-5xl mx-auto px-10">

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Saung Angklung</h1>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                🌐 <span>Grup publik • 1000 anggota</span>
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2 bg-black text-white rounded-full font-medium">
                Gabung
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium">
                Bagikan
              </button>
            </div>
          </div>

          <div className="w-full border-b mt-6 mb-2"></div>

          <div className="flex gap-10 pb-2 text-sm">
            {tabs.map((tab) => {
              const isActive = pathname.startsWith(tab.href);

              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  className={`
                    pb-2
                    ${
                      isActive
                        ? "font-bold border-b-2 border-black text-black"
                        : "text-gray-600"
                    }
                  `}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>

          <div className="mt-10 pb-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
