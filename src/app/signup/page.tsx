"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [success, router]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white">
      <Image
        src="/background-landingpage.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="w-full max-w-2xl px-6">
        <h1 className="text-center text-[48px] font-bold text-[#f6c15c] mb-10">
          Sign Up
        </h1>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#f6c15c]">
              Nama Panjang
            </label>
            <input
              type="text"
              placeholder="Ketik Nama panjang"
              className="w-full bg-white text-black px-4 py-3 rounded-none border-none outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-[#f6c15c]">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Ketik E-mail"
              className="w-full bg-white text-black px-4 py-3 rounded-none border-none outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-[#f6c15c]">
              Nomor Telfon
            </label>
            <input
              type="text"
              placeholder="Ketik Nomor Telpon"
              className="w-full bg-white text-black px-4 py-3 rounded-none border-none outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-[#f6c15c]">
              Password
            </label>
            <input
              type="password"
              placeholder="Ketik Password"
              className="w-full bg-white text-black px-4 py-3 rounded-none border-none outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-[#f6c15c]">
              Konfirmasi Password
            </label>
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full bg-white text-black px-4 py-3 rounded-none border-none outline-none text-sm"
              required
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="relative w-[600px] h-[70px] cursor-pointer transform transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/asset/signin.png"
                alt="Sign up"
                fill
                className="object-contain"
              />
            </button>
          </div>
        </form>
      </div>

      {success && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSuccess(false)}
        >
          <div
            className="relative w-[320px] sm:w-[420px] md:w-[480px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/asset/regis.png"
              alt="Registrasi berhasil"
              width={480}
              height={320}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
