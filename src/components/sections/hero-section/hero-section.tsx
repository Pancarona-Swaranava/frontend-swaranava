import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container1100 text-center py-[160px]">
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
  );
}
