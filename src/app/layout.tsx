"use client";

import localFont from "next/font/local";
import "./globals.css";

const flatory = localFont({
  src: "../../public/font/flatory-serif-condensed.ttf",
  variable: "--font-flatory",
  display: "swap",
});

const glacial = localFont({
  src: [
    {
      path: "../../public/font/glacial-indifference.regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/glacial-indifference.bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${flatory.variable} ${glacial.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
