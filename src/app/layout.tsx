import type { Metadata } from "next";
import { Changa, Changa_One, Amiko } from "next/font/google";
import "./globals.css";

const changa = Changa({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-changa",
  display: "swap",
});

const changaOne = Changa_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-changa-one",
  display: "swap",
});

const amiko = Amiko({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amiko",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balletvita - Academia de Artes",
  description: "Ensino de dança para todas as idades. A celebrar 19 anos em 2026!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${changa.variable} ${changaOne.variable} ${amiko.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
