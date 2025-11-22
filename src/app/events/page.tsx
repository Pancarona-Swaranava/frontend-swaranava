import Link from "next/link";
import Image from "next/image";

export default function EventsPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/background-landingpage.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover -z-10"
      />

      <main className="container1100 w-full py-[80px]">
        <div className="w-full md:w-[480px]">
          <div className="flex items-center bg-white rounded-md shadow-md px-5 py-3">
            <input
              type="text"
              placeholder="Cari Event"
              className="flex-1 bg-transparent outline-none text-sm text-neutral-700 placeholder:text-neutral-400"
            />
            <button
              type="button"
              className="ml-3 text-lg leading-none text-[#5e1432]"
            >
              🔍
            </button>
          </div>
        </div>

        <Link
          href="/events/detail"
          className="block max-w-5xl mx-auto mt-12"
        >
          <article className="relative cursor-pointer transition-transform duration-200 hover:scale-[1.01]">
            <Image
              src="/asset/events.png"
              alt="Kartu event Bandung Kota Angklung Festival"
              width={1200}
              height={340}
              className="w-full h-auto"
            />

            <div className="absolute inset-0 flex items-center gap-8 px-10 py-8">

              <div className="hidden md:block w-[320px]" />

              <div className="flex-1 text-[#3b1b06]">
                <h2 className="text-[24px] font-semibold mb-2">
                  Bandung Kota Angklung Festival
                </h2>
                <p className="text-[16px] mb-3">
                  Festival ini menampilkan berbagai pertunjukan angklung dari
                  berbagai kelompok dan bertujuan untuk merayakan angklung
                  sebagai warisan budaya tak benda dunia yang diakui oleh
                  UNESCO.
                </p>

                <button className="mt-2 px-4 py-2 border border-[#3b1b06] rounded-full text-[14px]">
                  Read more
                </button>

                <div className="mt-4 flex flex-wrap gap-6 text-[14px]">
                  <span>🗓 Sabtu, 24 Mei 2025</span>
                  <span>📍 Balai Kota Bandung</span>
                  <span>👥 1.500+ Pengunjung</span>
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-3 items-center">
                <div className="w-9 h-9 rounded-full bg-neutral-300" />
                <div className="w-9 h-9 rounded-full bg-neutral-300" />
              </div>
            </div>
          </article>
        </Link>
      </main>
    </section>
  );
}
