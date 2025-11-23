import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Logo di pojok kiri atas, sejajar dengan navbar */}
      <div 
        className="fixed top-2 left-8 z-50"
        style={{
          transform: 'scale(0.5)',
          transformOrigin: 'top left'
        }}
      >
        <Image
          src="/images/logotype-kuning.png"
          alt="SWARA NAVA Logo"
          width={200}
          height={100}
          className="object-contain"
          priority
        />
      </div>

      <section className="container1100 text-center pt-[110px] pb-[160px]">
        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-tight mx-auto max-w-[1008px]">
          Pelajari Musik Tradisional, di
          <br />
          Mana Saja, Kapan Saja.
        </h1>

        <Link
          href="/login"
          className="mt-10 inline-block bg-black text-white px-16 py-4 rounded text-[24px] font-semibold"
        >
          Mulai
        </Link>
      </section>
    </>
  );
}
