"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/questions/step");
  };

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

      <div className="w-full max-w-xl px-6">
        <h1 className="text-center text-[48px] font-bold text-[#f6c15c] mb-10">
          Log In
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
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
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ketik Password"
                className="w-full bg-white text-black px-4 py-3 pr-12 rounded-none border-none outline-none text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute inset-y-0 right-4 my-auto w-6 h-6 rounded-full border border-[#b45b6b] flex items-center justify-center text-[10px] text-[#b45b6b] bg-white"
              >
                ●
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#f6c15c] mt-2">
            <input
              id="remember"
              type="checkbox"
              className="w-3 h-3 border border-[#f6c15c] bg-transparent"
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="relative w-[600px] h-[70px] cursor-pointer transform transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/asset/signin.png"
                alt="Sign up"
                fill
                className="object-contain"
              />
            </button>

            <button
              type="submit"
              className="relative w-[600px] h-[70px] cursor-pointer transform transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/asset/login.png"
                alt="Log in"
                fill
                className="object-contain"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
